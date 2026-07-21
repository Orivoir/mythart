// lib/s3.ts

import { S3Client } from "@aws-sdk/client-s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import path from "path"
import { randomUUID } from "crypto"
import { AssetReferenceType } from "@/app/generated/prisma";

export const s3 = new S3Client({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION!,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_KEY!,
  },
  // Custom endpoints (for example MinIO on localhost) need path-style URLs
  // in all environments, including tests.
  // forcePathStyle: Boolean(process.env.S3_ENDPOINT) || process.env.NODE_ENV === "development",
  forcePathStyle: true
});


export interface S3PresignedUrlOptions {
  fileName: string;
  mimeType: string;
  expiresIn?: number;
  userId: string;
  type: AssetReferenceType
}

export interface S3PresignedUrlResponse {
  presignedUrl: string;
  key: string;
  extension: string;
  type: AssetReferenceType;
  fileName: string;
  mimeType: string;
  expiresIn: number;
}

export async function generatePresignedUrl({ type, userId,  fileName, mimeType, expiresIn = 3600 }: S3PresignedUrlOptions): Promise<S3PresignedUrlResponse> {

  const extension = path.extname(fileName);

  const key = `users/${userId}/${type}/${randomUUID()}${extension}`

  const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      ContentType: mimeType,
  });

  const presignedUrl = await getSignedUrl(s3, command, { expiresIn });

  return {
    presignedUrl,
    key,
    extension,
    type,
    fileName,
    mimeType,
    expiresIn
  }
}