import type {
    CreateChapterRequestAPI,
    CreateChapterResponseAPI,
} from "@/app/types/api/chapter"
import type { ResponseErrorAPI } from "@/app/types/api/ebook"
import { NextRequest, NextResponse } from "next/server"

import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { ApiException, parseApiJsonObject, withApiHandler } from "@/lib/errors"
import { mapModelTimestamps } from "@/lib/map-date-fields-to-timestamps"
import { prisma } from "@/lib/prisma"
import { ChapterSchema } from "@/lib/schemas/chapter.schema"

export const POST = withApiHandler(async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<CreateChapterResponseAPI | ResponseErrorAPI>> => {
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
    const parsed = ChapterSchema.parse({
        title: typeof requestBody.title === "string" ? requestBody.title.trim() : requestBody.title,
    })

    const newChapter = await prisma.$transaction(async (tx) => {
        const count = await tx.chapter.count({
            where: {
                ebookId: id,
            },
        })

        return tx.chapter.create({
            data: {
                title: parsed.title,
                content: requestBody.content as CreateChapterRequestAPI["content"] || {},
                ebookId: id,
                position: count,
            },
        })
    })

    return NextResponse.json<CreateChapterResponseAPI>(mapModelTimestamps(newChapter), { status: 201 })
})