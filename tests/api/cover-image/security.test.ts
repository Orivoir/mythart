import "dotenv/config"
import { afterAll, afterEach, beforeEach, describe, expect, test } from "vitest"

import { POST as createPresignedUploadUrl } from "@/app/api/uploads/presigned-url/routes"
import { POST as completeUpload } from "@/app/api/uploads/complete/routes"
import { ApiException } from "@/lib/errors/api-exception"
import { HTTP_ERRORS } from "@/lib/constants/http-code"

import {
    cleanupUploadedKeys,
    createCompleteUploadRequest,
    createPresignedUrlRequest,
    runIfS3Configured,
    setupUploadFixture,
    teardownUploadFixture,
    type PresignedUploadResponse,
} from "./shared"

const runDescribe = runIfS3Configured ? describe : describe.skip

runDescribe("cover image upload security", () => {
    let userId = ""
    let bucket = ""
    const uploadedKeys: string[] = []

    beforeEach(async () => {
        const fixture = await setupUploadFixture()
        userId = fixture.userId
        bucket = fixture.bucket
    })

    afterEach(async () => {
        await cleanupUploadedKeys(bucket, uploadedKeys)
    })

    afterAll(async () => {
        await teardownUploadFixture()
    })

    test("should reject upload completion with a MIME type different than requested", async () => {
        const response = await createPresignedUploadUrl(createPresignedUrlRequest(userId, {
            fileName: "cover.png",
            mimeType: "image/png",
            context: "COVER",
            size: 1024,
        }))
        const body = await response.json() as PresignedUploadResponse

        expect(response.status).toBe(200)

        const uploadPayload = new TextEncoder().encode("not-a-png")
        const uploadResponse = await fetch(body.presignedUrl, {
            method: "PUT",
            headers: {
                "content-type": "text/plain",
            },
            body: uploadPayload,
        })

        uploadedKeys.push(body.key)

        expect(uploadResponse.status).toBeGreaterThanOrEqual(200)
        expect(uploadResponse.status).toBeLessThan(300)

        const completePromise = completeUpload(createCompleteUploadRequest(userId, {
            fileName: "cover.png",
            mimeType: "image/png",
            size: uploadPayload.length,
            key: body.key,
            context: "COVER",
        }))

        await expect(completePromise).rejects.toBeInstanceOf(ApiException)
        await expect(completePromise).rejects.toMatchObject({
            status: HTTP_ERRORS.VALIDATION_ERROR.status,
            code: HTTP_ERRORS.VALIDATION_ERROR.code,
            fields: {
                error: ["MIME type does not match"],
            },
        })
    })

    test("should reject oversized file uploads", async () => {
        const response = await createPresignedUploadUrl(createPresignedUrlRequest(userId, {
            fileName: "cover.png",
            mimeType: "image/png",
            context: "COVER",
            size: 8,
        }))
        const body = await response.json() as PresignedUploadResponse

        expect(response.status).toBe(200)

        const uploadPayload = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10, 0, 1, 2, 3])
        const uploadResponse = await fetch(body.presignedUrl, {
            method: "PUT",
            headers: {
                "content-type": "image/png",
            },
            body: uploadPayload,
        })

        uploadedKeys.push(body.key)

        expect(uploadResponse.status).toBeGreaterThanOrEqual(200)
        expect(uploadResponse.status).toBeLessThan(300)

        const completePromise = completeUpload(createCompleteUploadRequest(userId, {
            fileName: "cover.png",
            mimeType: "image/png",
            size: 8,
            key: body.key,
            context: "COVER",
        }))

        await expect(completePromise).rejects.toBeInstanceOf(ApiException)
        await expect(completePromise).rejects.toMatchObject({
            status: HTTP_ERRORS.VALIDATION_ERROR.status,
            code: HTTP_ERRORS.VALIDATION_ERROR.code,
            fields: {
                error: ["File size does not match"],
            },
        })
    })
})
