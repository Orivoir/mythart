import type { PaginatedChaptersAPI } from "@/app/types/api/chapter"
import type { ResponseErrorAPI } from "@/app/types/api/ebook"
import { NextRequest, NextResponse } from "next/server"

import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
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
        },
    })

    const itemsParsed = chapters.map(mapModelTimestamps)

    return NextResponse.json<PaginatedChaptersAPI>(
        withPagination(itemsParsed, page, pageSize, totalItems),
    )
})