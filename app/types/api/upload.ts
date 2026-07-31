import { AssetReferenceType } from "@/app/generated/prisma"

export interface CreateUploadRequest {
	fileName: string
	mimeType: string
	context: AssetReferenceType
	size: number
}

export interface CreateUploadResponse {
	uploadHandshakeId: string
	uploadUrl: string
	expiresIn: number
}

export interface CompleteUploadRequest {
	uploadHandshakeId: string
}
