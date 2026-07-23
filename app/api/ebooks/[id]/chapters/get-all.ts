import type { PaginatedChaptersAPI } from "@/app/types/api/chapter"
import type { ResponseErrorAPI } from "@/app/types/api/ebook"
import { NextRequest, NextResponse } from "next/server"

import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { getEbookCollaboratorForUser } from "@/lib/authorization"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { ApiException, withApiHandler } from "@/lib/errors"
import { mapModelTimestamps } from "@/lib/map-date-fields-to-timestamps"
import { parsePaginationParams, withPagination } from "@/lib/pagination"
import { prisma } from "@/lib/prisma"

export const GET = withApiHandler(async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<PaginatedChaptersAPI | ResponseErrorAPI>> => {
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

    let allowedChapterIds: string[] | null = null

    if (!ebook) {
        const collaborator = await getEbookCollaboratorForUser(id, userId)

        if (!collaborator) {
            throw new ApiException(HTTP_ERRORS.NOT_FOUND)
        }

        if (!collaborator.allChaptersAccess) {
            allowedChapterIds = collaborator.chapterAccess.map((entry) => entry.chapterId)
        }
    }

    const { page, pageSize } = parsePaginationParams(request.nextUrl.searchParams)

    const chapters = await prisma.chapter.findMany({
        where: {
            ebookId: id,
            ...(allowedChapterIds
                ? {
                    id: {
                        in: allowedChapterIds,
                    },
                }
                : {}),
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
            position: "asc",
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
            ...(allowedChapterIds
                ? {
                    id: {
                        in: allowedChapterIds,
                    },
                }
                : {}),
        },
    })

    const itemsParsed = chapters.map(mapModelTimestamps)

    return NextResponse.json<PaginatedChaptersAPI>(
        withPagination(itemsParsed, page, pageSize, totalItems),
    )
})