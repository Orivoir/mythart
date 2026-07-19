import type { ResponseErrorAPI } from "@/app/types/api/ebook"
import { NextRequest, NextResponse } from "next/server"
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { DeleteChapterResponseAPI, UpdateChapterRequestAPI, UpdateChapterResponseAPI } from "@/app/types/api/chapter"
import { prisma } from "@/lib/prisma"
import { ApiException, apiErrorResponse, apiValidationException, parseApiJsonObject } from "@/lib/errors"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { UpdateChapterSchema } from "@/lib/schemas/chapter.schema"

/**
 * @description Deletes a chapter by its ID for the authenticated user.
 * @usage DELETE /api/chapters/:id
 * 
 * @param {string} id - The ID of the chapter to be deleted.
 * @param request 
 * @param param1 
 * @returns {Promise<NextResponse<DeleteChapterResponseAPI | ResponseErrorAPI>>} - A promise that resolves to a NextResponse containing either a success message or an error message.
 * 
 * @throws {ResponseErrorAPI} - Throws an error if the user is not authenticated or if the chapter is not found.
 */
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse<DeleteChapterResponseAPI | ResponseErrorAPI>> {
    try {
        const userId = getAuthenticatedUserIdFromHeaders(request.headers)

        if (!userId) {
            throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
        }

        const { id } = await params

        await prisma.$transaction(async (tx) => {
            const chapter = await tx.chapter.findFirst({
                where: {
                    id,
                    ebook: {
                        ownerId: userId,
                    },
                },
            })

            if (!chapter) {
                throw new ApiException(HTTP_ERRORS.NOT_FOUND)
            }

            // Snapshot should stock all content of version and chapter, without "soft" deleted for chapter is apply.
            await tx.chapter.delete({
                where: {
                    id,
                },
            })

            // offset the position of all chapters that come after the deleted chapter
            await tx.chapter.updateMany({
                where: {
                    ebookId: chapter.ebookId,
                    position: {
                        gt: chapter.position,
                    },
                },
                data: {
                    position: {
                        decrement: 1,
                    },
                },
            })
        })

        return NextResponse.json<DeleteChapterResponseAPI>({ success: true }, { status: 200 })

    } catch (error) {
        return apiErrorResponse(error)
    }
}

/**
 * @description Updates a chapter by its ID for the authenticated user.
 * @usage PUT /api/chapters/:id
 * 
 * @param {string} id - The ID of the chapter to be updated.
 * @param {UpdateChapterRequestAPI} requestBody - The request body containing the updated chapter data.
 * @returns {Promise<NextResponse<UpdateChapterResponseAPI | ResponseErrorAPI>>} - A promise that resolves to a NextResponse containing either the updated chapter data or an error message.
 * 
 * @throws {ResponseErrorAPI} - Throws an error if the user is not authenticated or if the chapter is not found.
 */
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse<UpdateChapterResponseAPI | ResponseErrorAPI>> {
    try {
        const userId = getAuthenticatedUserIdFromHeaders(request.headers)

        if (!userId) {
            throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
        }

        const { id } = await params

        const chapter = await prisma.chapter.findFirst({
            where: {
                id,
                ebook: {
                    ownerId: userId,
                },
            },
        })

        if (!chapter) {
            throw new ApiException(HTTP_ERRORS.NOT_FOUND)
        }

        const requestBody = await parseApiJsonObject(request)
        const parsed = UpdateChapterSchema.safeParse({
            title: typeof requestBody.title === "string" ? requestBody.title.trim() : requestBody.title,
            content: requestBody.content,
        })

        if (!parsed.success) {
            throw apiValidationException(parsed.error)
        }

        // @TODO: `content` property will should be not overwrite, should use a merge or/and diff strategy for lightweight content update, to avoid overwrite all content and lose previous content.
        const chapterUpdated = await prisma.chapter.update({
            where: {
                id,
            },
            data: {
                title: parsed.data.title ?? chapter.title,
                content: requestBody.content as UpdateChapterRequestAPI["content"] || chapter.content || {}, // @TODO: this is for dev only, should be removed before production.
            },
        })

        return NextResponse.json<UpdateChapterResponseAPI>({
            ...chapterUpdated,
            createdAt: chapterUpdated.createdAt.getTime(),
            updatedAt: chapterUpdated.updatedAt.getTime(),
        }, { status: 200 })
    } catch (error) {
        return apiErrorResponse(error)
    }
}
