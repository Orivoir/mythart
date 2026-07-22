// lib/s3.ts

import { S3Client } from "@aws-sdk/client-s3"
import { PutObjectCommand, HeadObjectCommand, CopyObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import path from "path"
import { randomUUID } from "crypto"
import { AssetReferenceType } from "@/app/generated/prisma"

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
})


export interface S3PresignedUrlOptions {
  fileName: string;
  mimeType: string;
  context: AssetReferenceType;
  expiresIn?: number;
}

export interface S3PresignedUrlResponse {
  presignedUrl: string;
  key: string;
  extension: string;
  fileName: string;
  mimeType: string;
  expiresIn: number;
}

export interface S3ValidateObjectUploadOptions {
  key: string;
  mimeType: string;
  size: number;
}

export interface S3ValidateObjectUploadResponse {
  success: boolean;
  error?: string
}

export async function generatePresignedUrl({ context, fileName, mimeType, expiresIn = 3600 }: S3PresignedUrlOptions): Promise<S3PresignedUrlResponse> {

  const extension = path.extname(fileName)

  const key = `${process.env.S3_TEMP_UPLOAD_PREFIX!}/${context}/${randomUUID()}${extension}`

  const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      ContentType: mimeType,
  })

  const presignedUrl = await getSignedUrl(s3, command, { expiresIn })

  return {
    presignedUrl,
    key,
    extension,
    fileName,
    mimeType,
    expiresIn
  }
}

export async function validateObjectUpload({ key, mimeType, size }: S3ValidateObjectUploadOptions) {

  const tempFileMetadata = await s3.send(new HeadObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key
  }))

  /**
   * Should verify the following:
   * 1. The object exists in S3 (HeadObjectCommand will throw an error if it doesn't).
   * 2. The MIME type matches the expected MIME type.
   * 3. The size matches the expected size.
   * 
   * If any of these checks fail, throw an ApiException with the appropriate HTTP error code.
   */
  
  if (!key.startsWith(process.env.S3_TEMP_UPLOAD_PREFIX!)) {
    return {
      success: false,
      error: "Invalid upload key."
    }
  }

  if(tempFileMetadata.ContentType !== mimeType) {
    return {
      success: false,
      error: "MIME type does not match" // or file not exists
    }
  }

  // ContentLength and browser file size exposed value as brute octets
  // but if browser a zipped the file before upload or Worker process the file (like compact image, resize, etc...)
  // the size will be different, in the future this endpoint should be deleted instead of
  // S3 Event notification system (webhooks listeners), which will be more reliable and secure.
  if(tempFileMetadata.ContentLength !== size) {
    return {
      success: false,
      error: "File size does not match"
    }
  }

  // Additional checks for context and fileName can be added here

  return {
    success: true
  }
}

export async function moveObjectToPermanentLocation({ key, context, fileName, userId }: { key: string, context: AssetReferenceType, fileName: string, userId: string }) {

  const extension = path.extname(fileName)

  const keyPermanent = `users/${userId}/${context}/${randomUUID()}${extension}`

  await s3.send(new CopyObjectCommand({
    Bucket: process.env.S3_BUCKET!,
    CopySource: `${process.env.S3_BUCKET}/${key}`,
    Key: keyPermanent
  }))

  await s3.send(new DeleteObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key
  }))

  return keyPermanent
}

export async function isValidPermanentObject({ key }: { key: string}): Promise<{isValid:boolean, mimeType?: string, sizeBytes?: number}> {

  const tempFileMetadata = await s3.send(new HeadObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key
  }))

  if (key.startsWith(process.env.S3_TEMP_UPLOAD_PREFIX!)) {
    return {isValid: false}
  }
  if(!tempFileMetadata.ContentType || !tempFileMetadata.ContentLength) {
    return {isValid: false}
  }

  return {
    isValid: true,
    mimeType: tempFileMetadata.ContentType,
    sizeBytes: tempFileMetadata.ContentLength
  }
}