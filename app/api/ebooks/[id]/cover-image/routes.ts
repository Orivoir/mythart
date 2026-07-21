import { generatePresignedUrl } from "@/lib/s3";
import { AssetReferenceType } from "@/app/generated/prisma";
import { NextResponse } from "next/server";
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth";
import { ApiException } from "@/lib/errors/api-exception";
import { HTTP_ERRORS } from "@/lib/constants/http-code";

/**
 * @description This route handles the generation of a presigned URL for uploading a cover image to S3. It expects a POST request with a JSON body containing the fileName, mimeType, and size of the image. The user must be authenticated, and the function will return a presigned URL that can be used to upload the image directly to S3.
 * @param {Request} request - The incoming HTTP request object.
 * @param {Object} params - The route parameters, which include the ebook ID.
 * @returns {Promise<NextResponse>} - A promise that resolves to a NextResponse containing the presigned URL and related information.
 * @throws {ApiException} - Throws an ApiException if the user is not authenticated or if there are issues with the request.
 * @example
 * // Example request body:
 * {
 *   "fileName": "cover.jpg",
 *   "mimeType": "image/jpeg",
 *   "size": 102400
 * }
 */
export async function POST(request: Request, { params }: { params: { id: string } }) {

  const userId = getAuthenticatedUserIdFromHeaders(request.headers)
  
  if (!userId) {
    throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
  }

  const { fileName, mimeType, size } = await request.json();

  // @TODO: here should check the user plan (free plan or premium plan)
  // and check the file size limit for the plan of this user
  // e.g code should be execute:
  /*
  if(is_not_premium(userId) && size > PLAN_FREE.MAX_COVER_IMAGE_SIZE) {
    throw new ApiException(HTTP_ERRORS.PAYMENT_REQUIRED) // 402
  }
  else if(is_premium(userId) && size > PLAN_PREMIUM.MAX_COVER_IMAGE_SIZE) {
    throw new ApiException(HTTP_ERRORS.CONTENT_TO_LARGE) // 413
  }
  */

  const results = await generatePresignedUrl({
    type: AssetReferenceType.COVER,
    userId,
    fileName,
    mimeType
  });

  return NextResponse.json(results);
}