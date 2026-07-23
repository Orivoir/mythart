import { generatePresignedUrl, S3PresignedUrlOptions } from "@/lib/s3"
import { NextResponse } from "next/server"
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { ApiException } from "@/lib/errors/api-exception"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { canUploadFile } from "@/lib/authorization"

export async function POST(request: Request) {
  const userId = getAuthenticatedUserIdFromHeaders(request.headers)

  if (!userId) {
    throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
  }

  const { fileName, mimeType, context, size } = await request.json() as S3PresignedUrlOptions

  const canUpload = await canUploadFile({
    size,
    userId,
    context,
    fileName,
    mimeType
  })
  
  if(!canUpload) {
    throw new ApiException(HTTP_ERRORS.PAYMENT_REQUIRED)
  } else {
    const results = await generatePresignedUrl({
      fileName,
      mimeType,
      context,
      size
    })
  
    return NextResponse.json(results)
  }

}
