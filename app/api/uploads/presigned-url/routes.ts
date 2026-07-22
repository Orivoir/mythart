import { generatePresignedUrl } from "@/lib/s3";
import { NextResponse } from "next/server";
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth";
import { ApiException } from "@/lib/errors/api-exception";
import { HTTP_ERRORS } from "@/lib/constants/http-code";

export async function POST(request: Request) {
  const userId = getAuthenticatedUserIdFromHeaders(request.headers);

  if (!userId) {
    throw new ApiException(HTTP_ERRORS.UNAUTHORIZED);
  }

  const { fileName, mimeType, context, size } = await request.json();

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

  // Keep payload contract unchanged for now while endpoint migration is in progress.
  void size;

  const results = await generatePresignedUrl({
    fileName,
    mimeType,
    context,
  });

  return NextResponse.json(results);
}
