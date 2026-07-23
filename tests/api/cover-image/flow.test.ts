import "dotenv/config"
import { afterAll, afterEach, beforeEach, describe, expect, test } from "vitest"
import { HeadObjectCommand } from "@aws-sdk/client-s3"

import { POST as createPresignedUploadUrl } from "@/app/api/uploads/presigned-url/routes"
import { POST as completeUpload } from "@/app/api/uploads/complete/routes"
import { PUT as createCoverImageReference } from "@/app/api/uploads/reference/cover-image/routes"
import prisma from "../../helpers/prisma"
import { s3 } from "@/lib/s3"

import {
    cleanupUploadedKeys,
    createCompleteUploadRequest,
    createCoverReferenceRequest,
    createPresignedUrlRequest,
    runIfS3Configured,
    setupUploadFixture,
    teardownUploadFixture,
    type CompleteUploadResponse,
    type CoverImageReferenceResponse,
    type PresignedUploadResponse,
} from "./shared"

const runDescribe = runIfS3Configured ? describe : describe.skip

runDescribe("cover image upload flow", () => {
    let userId = ""
    let ebookId = ""
    let bucket = ""
    const uploadedKeys: string[] = []

    beforeEach(async () => {
        const fixture = await setupUploadFixture()
        userId = fixture.userId
        ebookId = fixture.ebookId
        bucket = fixture.bucket
    })

    afterEach(async () => {
        await cleanupUploadedKeys(bucket, uploadedKeys)
    })

    afterAll(async () => {
        await teardownUploadFixture()
    })

    test("generates URL, completes upload move, and creates cover image reference", async () => {
        const response = await createPresignedUploadUrl(createPresignedUrlRequest(userId, {
            fileName: "cover.png",
            mimeType: "image/png",
            context: "COVER",
            size: 1024,
        }))
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

        const headObject = await s3.send(new HeadObjectCommand({
            Bucket: bucket,
            Key: body.key,
        }))

        uploadedKeys.push(body.key)

        expect(headObject.ContentLength).toBe(uploadPayload.length)
        expect(headObject.ContentType).toBe("image/png")

        const completeResponse = await completeUpload(createCompleteUploadRequest(userId, {
            fileName: "cover.png",
            mimeType: "image/png",
            size: uploadPayload.length,
            key: body.key,
            context: "COVER",
        }))
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

        const referenceResponse = await createCoverImageReference(createCoverReferenceRequest(
            userId,
            completeBody.permanentKey,
            "cover.png",
        ), {
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
})
