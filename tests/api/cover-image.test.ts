import "dotenv/config"
import { afterAll, afterEach, beforeEach, describe, expect, test } from "vitest"
import { NextRequest } from "next/server"
import {
    CreateBucketCommand,
    DeleteObjectCommand,
    HeadBucketCommand,
    HeadObjectCommand,
} from "@aws-sdk/client-s3"

import { POST } from "@/app/api/ebooks/[id]/cover-image/routes"
import { createUserFixture } from "../helpers/factories"
import prisma from "../helpers/prisma"
import resetDb from "../helpers/reset-db"
import { s3 } from "@/lib/s3"

interface PresignedUploadResponse {
    presignedUrl: string
    key: string
    extension: string
    type: string
    fileName: string
    mimeType: string
    expiresIn: number
}

const hasS3Config = Boolean(
    process.env.S3_ENDPOINT
    && process.env.S3_REGION
    && process.env.S3_ACCESS_KEY
    && process.env.S3_SECRET_KEY
    && process.env.S3_BUCKET,
)

const runIfS3Configured = hasS3Config ? describe : describe.skip

async function ensureBucketExists(bucket: string): Promise<void> {
    try {
        await s3.send(new HeadBucketCommand({ Bucket: bucket }))
        return
    } catch {
        await s3.send(new CreateBucketCommand({ Bucket: bucket }))
    }

    await s3.send(new HeadBucketCommand({ Bucket: bucket }))
}

runIfS3Configured("POST /api/ebooks/:id/cover-image", () => {
    let userId = ""
    let ebookId = ""
    const uploadedKeys: string[] = []

    beforeEach(async () => {
        await resetDb()

        const bucket = process.env.S3_BUCKET

        if (!bucket) {
            throw new Error("S3_BUCKET is required for this integration test")
        }

        await ensureBucketExists(bucket)

        const user = await createUserFixture()
        userId = user.id

        const ebook = await prisma.ebook.create({
            data: {
                title: "Ebook cover upload",
                ownerId: userId,
            },
        })

        ebookId = ebook.id
    })

    afterEach(async () => {
        const bucket = process.env.S3_BUCKET

        if (!bucket) {
            return
        }

        while (uploadedKeys.length > 0) {
            const key = uploadedKeys.pop()

            if (!key) {
                continue
            }

            try {
                await s3.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }))
            } catch {
                // Best-effort cleanup for integration artifacts.
            }
        }
    })

    afterAll(async () => {
        await resetDb()
    })

    test("generates a valid presigned URL and uploads a file to MinIO", async () => {
        const request = new NextRequest(`http://localhost:3000/api/ebooks/${ebookId}/cover-image`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-auth-user-id": userId,
            },
            body: JSON.stringify({
                fileName: "cover.png",
                mimeType: "image/png",
                size: 1024,
            }),
        })

        const response = await POST(request, { params: { id: ebookId } })
        const body = await response.json() as PresignedUploadResponse

        expect(response.status).toBe(200)
        expect(body.presignedUrl).toMatch(/^https?:\/\//)
        expect(body.key).toContain(`users/${userId}/COVER/`)
        expect(body.extension).toBe(".png")
        expect(body.mimeType).toBe("image/png")
        expect(body.fileName).toBe("cover.png")
        expect(body.expiresIn).toBeGreaterThan(0)

        const uploadPayload = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10])

        const uploadResponse = await fetch(body.presignedUrl, {
            method: "PUT",
            headers: {
                "content-type": "image/png",
            },
            body: uploadPayload,
        })

        const uploadErrorBody = uploadResponse.ok ? null : await uploadResponse.text()

        expect(uploadResponse.status).toBeGreaterThanOrEqual(200)
        expect(uploadResponse.status, uploadErrorBody ?? undefined).toBeLessThan(300)

        const bucket = process.env.S3_BUCKET

        if (!bucket) {
            throw new Error("S3_BUCKET is required for this integration test")
        }

        const headObject = await s3.send(new HeadObjectCommand({
            Bucket: bucket,
            Key: body.key,
        }))

        uploadedKeys.push(body.key)

        expect(headObject.ContentLength).toBe(uploadPayload.length)
        expect(headObject.ContentType).toBe("image/png")
    })

    test.skip("security: should reject multiple uploads with the same URL", async () => {
        // TODO: enable when bucket policy enforces single-use signed URLs.
    })

    test.skip("security: should reject upload with a MIME type different than requested", async () => {
        // TODO: enable when bucket policy enforces strict content-type validation.
    })

    test.skip("security: should reject oversized file uploads", async () => {
        // TODO: enable when size limits are implemented at app or bucket policy level.
    })
})
