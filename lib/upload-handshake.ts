import { AssetReferenceType, UploadHandshakeStatus } from "@/app/generated/prisma"
import { prisma } from "@/lib/prisma"
import { ApiException } from "@/lib/errors/api-exception"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { generatePresignedUrl, generateTempUploadKey, moveObjectToPermanentLocation, validateObjectUpload } from "@/lib/s3"

const DEFAULT_UPLOAD_HANDSHAKE_EXPIRES_IN_SECONDS = 3600

export interface CreateUploadHandshakeOptions {
  userId: string
  fileName: string
  mimeType: string
  context: AssetReferenceType
  size: number
  expiresIn?: number
}

export interface CreateUploadHandshakeResponse {
  uploadHandshakeId: string
  uploadUrl: string
  expiresIn: number
}

export interface CompleteUploadHandshakeOptions {
  uploadHandshakeId: string
  userId: string
}

export interface CompleteUploadHandshakeResponse {
  permanentKey: string
}

export async function createUploadHandshake({
  userId,
  fileName,
  mimeType,
  context,
  size,
  expiresIn = DEFAULT_UPLOAD_HANDSHAKE_EXPIRES_IN_SECONDS,
}: CreateUploadHandshakeOptions): Promise<CreateUploadHandshakeResponse> {
  const key = generateTempUploadKey({ context, fileName })
  const expiresAt = new Date(Date.now() + expiresIn * 1000)

  const handshake = await prisma.uploadHandshake.create({
    data: {
      ownerId: userId,
      context,
      key,
      expectedMimeType: mimeType,
      expectedSizeBytes: size,
      status: UploadHandshakeStatus.PENDING,
      expiresAt,
    },
  })

  const { uploadUrl } = await generatePresignedUrl({
    key,
    mimeType,
    expiresIn,
  })

  return {
    uploadHandshakeId: handshake.id,
    uploadUrl,
    expiresIn,
  }
}

export async function completeUploadHandshake({
  uploadHandshakeId,
  userId,
}: CompleteUploadHandshakeOptions): Promise<CompleteUploadHandshakeResponse> {
  const handshake = await prisma.uploadHandshake.findUnique({
    where: { id: uploadHandshakeId },
  })

  if (!handshake || handshake.ownerId !== userId) {
    throw new ApiException(HTTP_ERRORS.NOT_FOUND)
  }

  if (handshake.status !== UploadHandshakeStatus.PENDING) {
    throw new ApiException(HTTP_ERRORS.BAD_REQUEST)
  }

  if (handshake.expiresAt.getTime() <= Date.now()) {
    await prisma.uploadHandshake.update({
      where: { id: handshake.id },
      data: { status: UploadHandshakeStatus.EXPIRED },
    })

    throw new ApiException(HTTP_ERRORS.BAD_REQUEST)
  }

  const validation = await validateObjectUpload({
    key: handshake.key,
    expectedMimeType: handshake.expectedMimeType,
    expectedSizeBytes: handshake.expectedSizeBytes,
  })

  if (!validation.success) {
    await prisma.uploadHandshake.update({
      where: { id: handshake.id },
      data: { status: UploadHandshakeStatus.FAILED },
    })

    throw new Error(validation.error || "Unknown error during upload validation")
  }

  try {
    const permanentKey = await moveObjectToPermanentLocation({
      key: handshake.key,
      context: handshake.context,
      fileName: handshake.key,
      userId,
    })

    await prisma.uploadHandshake.update({
      where: { id: handshake.id },
      data: { status: UploadHandshakeStatus.COMPLETED },
    })

    return { permanentKey }
  } catch (error) {
    await prisma.uploadHandshake.update({
      where: { id: handshake.id },
      data: { status: UploadHandshakeStatus.FAILED },
    })

    throw error
  }
}