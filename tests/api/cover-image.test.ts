import "dotenv/config"
import { afterAll, afterEach, beforeEach, describe, expect, test } from "vitest"
import { NextRequest } from "next/server"
import {
    CreateBucketCommand,
    DeleteObjectCommand,
    HeadBucketCommand,
    HeadObjectCommand,
} from "@aws-sdk/client-s3"

import { POST as createPresignedUploadUrl } from "@/app/api/uploads/presigned-url/routes"
import { POST as completeUpload } from "@/app/api/uploads/complete/routes"
import { PUT as createCoverImageReference } from "@/app/api/uploads/reference/cover-image/routes"
import { createUserFixture } from "../helpers/factories"
import resetDb from "../helpers/reset-db"
import prisma from "../helpers/prisma"
import { s3 } from "@/lib/s3"

interface PresignedUploadResponse {
    presignedUrl: string
    key: string
    extension: string
    fileName: string
    mimeType: string
    expiresIn: number
}

interface CompleteUploadResponse {
    success: boolean
    permanentKey: string
}

interface CoverImageReferenceResponse {
    success: boolean
    asset: {
        id: string
        key: string
        bucket: string
        mimeType: string
        sizeBytes: number
        fileName: string
        createdAt: string
        updatedAt: string
    }
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

runIfS3Configured("POST /api/uploads/presigned-url", () => {
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

    test("generates URL, completes upload move, and creates cover image reference", async () => {
        const request = new NextRequest("http://localhost:3000/api/uploads/presigned-url", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-auth-user-id": userId,
            },
            body: JSON.stringify({
                fileName: "cover.png",
                mimeType: "image/png",
                context: "COVER",
                size: 1024,
            }),
        })

        const response = await createPresignedUploadUrl(request)
        const body = await response.json() as PresignedUploadResponse

        expect(response.status).toBe(200)
        expect(body.presignedUrl).toMatch(/^https?:\/\//)
        expect(body.key).toContain(process.env.S3_TEMP_UPLOAD_PREFIX ?? "temp-upload")
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

        const completeRequest = new NextRequest("http://localhost:3000/api/uploads/complete", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-auth-user-id": userId,
            },
            body: JSON.stringify({
                fileName: "cover.png",
                mimeType: "image/png",
                size: uploadPayload.length,
                key: body.key,
                context: "COVER",
            }),
        })

        const completeResponse = await completeUpload(completeRequest)
        const completeBody = await completeResponse.json() as CompleteUploadResponse

        expect(completeResponse.status).toBe(200)
        expect(completeBody.success).toBe(true)
        expect(completeBody.permanentKey).toContain(`users/${userId}/COVER/`)

        uploadedKeys.push(completeBody.permanentKey)

        await expect(s3.send(new HeadObjectCommand({
            Bucket: bucket,
            Key: body.key,
        }))).rejects.toBeDefined()

        const headPermanentObject = await s3.send(new HeadObjectCommand({
            Bucket: bucket,
            Key: completeBody.permanentKey,
        }))

        expect(headPermanentObject.ContentLength).toBe(uploadPayload.length)
        expect(headPermanentObject.ContentType).toBe("image/png")

        const referenceRequest = new NextRequest("http://localhost:3000/api/uploads/reference/cover-image", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "x-auth-user-id": userId,
            },
            body: JSON.stringify({
                key: completeBody.permanentKey,
                fileName: "cover.png",
            }),
        })

        const referenceResponse = await createCoverImageReference(referenceRequest, {
            params: { id: ebookId },
        })
        const referenceBody = await referenceResponse.json() as CoverImageReferenceResponse

        expect(referenceResponse.status).toBe(200)
        expect(referenceBody.success).toBe(true)
        expect(referenceBody.asset.key).toBe(completeBody.permanentKey)
        expect(referenceBody.asset.fileName).toBe("cover.png")
        expect(referenceBody.asset.mimeType).toBe("image/png")

        const ebookWithCover = await prisma.ebook.findUnique({
            where: { id: ebookId },
            include: { coverAsset: true },
        })

        expect(ebookWithCover).not.toBeNull()
        expect(ebookWithCover?.coverAssetId).toBe(referenceBody.asset.id)
        expect(ebookWithCover?.coverAsset?.key).toBe(completeBody.permanentKey)
        expect(ebookWithCover?.coverAsset?.ownerId).toBe(userId)
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
