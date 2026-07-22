import { isValidPermanentObject } from "@/lib/s3"
import { NextResponse } from "next/server"
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { ApiException } from "@/lib/errors/api-exception"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { apiUploadException } from "@/lib/errors/api-upload-exception"
import { prisma } from "@/lib/prisma"

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const userId = getAuthenticatedUserIdFromHeaders(request.headers)

  if (!userId) {
    throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
  }

  const { key, fileName } = (await request.json()) as {
    key: string;
    fileName: string;
  }

  const { isValid, mimeType, sizeBytes } = await isValidPermanentObject({ key })

  if (!isValid || !mimeType || !sizeBytes) {
    throw apiUploadException(
      "The provided key does not correspond to a valid permanent object.",
    )
  }

  const addReferenceUpload = await prisma.$transaction(async (tx) => {
    const assetCoverImage = await tx.asset.create({
      data: {
        key,
        bucket: process.env.S3_BUCKET!,
        mimeType,
        sizeBytes,
        fileName,
        ownerId: userId,
      },
    })

    const ebookUpdated = await tx.ebook.update({
      where: { id: params.id, ownerId: userId },
      data: { coverAssetId: assetCoverImage.id },
    })

    return { assetCoverImage, ebookUpdated }
  })

  if (!addReferenceUpload) {
    // @TODO here should choice strategy fallback:
    // ---
    // 1. delete the uploaded file from S3 (cancel strategy)
    //  - easy implementation:
    //     - should just call helper s3 to delete file
    // ---
    // 2. move permanent object to temp location (rollback strategy)
    //  - medium implementation:
    //    - should reverse operation move file location at s3 and
    //      keep new temporary key for client response
    // ---
    // 3. keep the permanent object in S3 without reference SQL (retry strategy)
    //   - hardy implementation:
    //      - should have "global state" for count retry request, add times expires retry
    //        and fallback delete file from S3 if retry request not success after X times
    throw apiUploadException("Failed to add reference upload.")
  }

  const { assetCoverImage } = addReferenceUpload

  return NextResponse.json({
    success: true,
    asset: {
      id: assetCoverImage.id,
      key: assetCoverImage.key,
      bucket: assetCoverImage.bucket,
      mimeType: assetCoverImage.mimeType,
      sizeBytes: assetCoverImage.sizeBytes,
      fileName: assetCoverImage.fileName,
      createdAt: assetCoverImage.createdAt.toISOString(),
      updatedAt: assetCoverImage.updatedAt.toISOString(),
    },
  })
}
