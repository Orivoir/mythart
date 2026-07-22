import { moveObjectToPermanentLocation, validateObjectUpload } from "@/lib/s3"
import { NextResponse } from "next/server"
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { ApiException } from "@/lib/errors/api-exception"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { AssetReferenceType } from "@/app/generated/prisma"
import { S3ValidateObjectUploadRequest } from "@/app/types/api/upload"
import { apiUploadException } from "@/lib/errors/api-upload-exception"

export async function POST(request: Request) {
  const userId = getAuthenticatedUserIdFromHeaders(request.headers)
  if (!userId) {
    throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
  }

  const { fileName, mimeType, size, key, context } =
    (await request.json()) as S3ValidateObjectUploadRequest & {
      context: AssetReferenceType;
      fileName: string;
    }

  if (context in AssetReferenceType) {
    const { success, error } = await validateObjectUpload({
      key,
      mimeType,
      size,
    })

    if (!success) {
      throw apiUploadException(error || "Unknown error during upload validation")
    }

    const permanentKey = await moveObjectToPermanentLocation({
      key,
      context,
      fileName,
      userId,
    })

    return NextResponse.json({ success: true, permanentKey })
  }

  throw new ApiException(HTTP_ERRORS.BAD_REQUEST)
}
