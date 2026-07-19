import { NextRequest, NextResponse } from "next/server"
import type { DeleteEbookResponseAPI, ResponseErrorAPI, UpdateEbookRequestAPI, UpdateEbookResponseAPI } from "@/app/types/api/ebook"
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { normalizeStringValue } from "@/lib/normalize-string-value"
import { mapEbookToResponse } from "../utils"
import { ApiException, apiErrorResponse, apiValidationException, parseApiJsonObject } from "@/lib/errors"
import { EbookSchema } from "@/lib/schemas/ebook.schema"
import { HTTP_ERRORS } from "@/lib/constants/http-code"

/**
 * @description Update an existing ebook.
 * @usage PUT /api/ebooks/:id
 * 
 * @param {string} id - The ID of the ebook to update.
 * 
 * @body {Partial<UpdateEbookRequestAPI>} body - The request body containing the fields to update.
 * @body {string} [body.title] - The new title of the ebook (optional).
 * @body {string} [body.subtitle] - The new subtitle of the ebook (optional).
 * @body {string} [body.shortDescription] - The new short description of the ebook (optional).
 * 
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<UpdateEbookResponseAPI>}
 */
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<UpdateEbookResponseAPI | ResponseErrorAPI>> {
    try {

        const userId = getAuthenticatedUserIdFromHeaders(request.headers)

        if (!userId) {
            throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
        }

        const { id } = await params
        const body = await parseApiJsonObject(request) as Partial<UpdateEbookRequestAPI>
        const parsed = EbookSchema.safeParse({
            title: normalizeStringValue(body.title) ?? undefined,
            subtitle: body.subtitle === undefined ? undefined : normalizeStringValue(body.subtitle) ?? "",
            shortDescription: body.shortDescription === undefined ? undefined : normalizeStringValue(body.shortDescription) ?? "",
        })

        if (!parsed.success) {
            throw apiValidationException(parsed.error)
        }

        const updateResult = await prisma.ebook.updateMany({
            where: {
                id,
                ownerId: userId,
            },
            data: parsed.data,
        })

        if (updateResult.count === 0) {
            throw new ApiException(HTTP_ERRORS.NOT_FOUND)
        }

        const ebook = await prisma.ebook.findFirst({
            where: {
                id,
                ownerId: userId,
            },
        })

        if (!ebook) {
            throw new ApiException(HTTP_ERRORS.NOT_FOUND)
        }

        return NextResponse.json<UpdateEbookResponseAPI>(mapEbookToResponse(ebook))
    } catch (error) {
        return apiErrorResponse(error)
    }
}

/**
 * @description Delete an existing ebook and chapter relations models.
 * @usage DELETE /api/ebooks/:id
 * 
 * @param {string} id - The ID of the ebook to delete.
 * 
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<DeleteEbookResponseAPI>}
 */
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<DeleteEbookResponseAPI | ResponseErrorAPI>> {
    try {
        const userId = getAuthenticatedUserIdFromHeaders(request.headers)

        if (!userId) {
            throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
        }

        const { id } = await params

    // Snapshots is not delete here, a "restore" feature will be implemented in the future, so we will keep the snapshots for now.
    // @TODO: Here should delete snapshots without LAST snapshots, or create once if not exists. 
        const deletedEbook = await prisma.$transaction(async (transaction) => {
        const ebook = await transaction.ebook.findFirst({
            where: {
                id,
                ownerId: userId,
            },
            select: {
                id: true,
            },
        })

        if (!ebook) {
            return null
        }

        await transaction.chapter.deleteMany({
            where: {
                ebookId: id,
            },
        })

        await transaction.ebook.delete({
            where: {
                id,
            },
        })

        return ebook
        })

        if (!deletedEbook) {
            throw new ApiException(HTTP_ERRORS.NOT_FOUND)
        }

        return NextResponse.json<DeleteEbookResponseAPI>({ success: true })
    } catch (error) {
        return apiErrorResponse(error)
    }
}
