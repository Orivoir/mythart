import type { CreateChapterRequestAPI, PaginatedChaptersAPI, CreateChapterResponseAPI } from "@/app/types/api/chapter"
import type { ResponseErrorAPI } from "@/app/types/api/ebook"
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { parsePaginationParams, withPagination } from "@/lib/pagination"
import { mapModelTimestamps } from "@/lib/map-date-fields-to-timestamps"
import { ApiException, apiErrorResponse, apiValidationException, parseApiJsonObject } from "@/lib/errors"
import { ChapterSchema } from "@/lib/schemas/chapter.schema"
import { HTTP_ERRORS } from "@/lib/constants/http-code"

/**
 * @description Get a paginated list of chapters metadata (without content) for a specific ebook.
 * @usage GET /api/ebooks/:id/chapters?page=:page&pageSize=:pageSize
 * 
 * @param {string} id - The ID of the ebook for which to retrieve chapters.
 * 
 * @query {number} page - The page number for pagination (default: 1).
 * @query {number} pageSize - The number of items per page for pagination (default: 10).
 * 
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<PaginatedChaptersAPI | ResponseErrorAPI>}
 */
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse<PaginatedChaptersAPI | ResponseErrorAPI>> {
    try {
        const userId = getAuthenticatedUserIdFromHeaders(request.headers)

        if (!userId) {
            throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
        }

        const { id } = await params

        const ebook = await prisma.ebook.findFirst({
        where: {
            id,
            // @TODO: Consider adding collaborator access check here if needed in the future
            ownerId: userId,
        },
        })

        if (!ebook) {
            throw new ApiException(HTTP_ERRORS.NOT_FOUND)
        }

        const { page, pageSize } = parsePaginationParams(request.nextUrl.searchParams)

        const chapters = await prisma.chapter.findMany({
        where: {
            ebookId: id,
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
            position: "asc"
        },
        select: {
            id: true,
            ebookId: true,
            title: true,
            position: true,
            content: false,
            createdAt: true,
            updatedAt: true,
        },
        })

        const totalItems = await prisma.chapter.count({
            where: {
                ebookId: id,
            },
        })

        const itemsParsed = chapters.map(mapModelTimestamps)

        return NextResponse.json<PaginatedChaptersAPI>(
            withPagination(itemsParsed, page, pageSize, totalItems),
        )
    } catch (error) {
        return apiErrorResponse(error)
    }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse<CreateChapterResponseAPI | ResponseErrorAPI>> {
    try {
        const userId = getAuthenticatedUserIdFromHeaders(request.headers)

        if (!userId) {
            throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
        }

        const { id } = await params

        const ebook = await prisma.ebook.findFirst({
            where: {
                id,
                ownerId: userId,
            },
        })

        if (!ebook) {
            throw new ApiException(HTTP_ERRORS.NOT_FOUND)
        }

        const requestBody = await parseApiJsonObject(request)
        const parsed = ChapterSchema.safeParse({
            title: typeof requestBody.title === "string" ? requestBody.title.trim() : requestBody.title,
        })

        if (!parsed.success) {
            throw apiValidationException(parsed.error)
        }
        const newChapter = await prisma.$transaction(async (tx) => {
            const count = await tx.chapter.count({
                where: {
                    ebookId: id,
                },
            });

            return tx.chapter.create({
                data: {
                    title: parsed.data.title,
                    content: requestBody.content as CreateChapterRequestAPI["content"] || {},
                    ebookId: id,
                    position: count,
                },
            });
        });

        return NextResponse.json<CreateChapterResponseAPI>(mapModelTimestamps(newChapter), { status: 201 })
    } catch (error) {
        return apiErrorResponse(error)
    }
}
