import type { ResponseErrorAPI } from "@/app/types/api/ebook"
import { NextRequest, NextResponse } from "next/server"

import { UpdateChapterRequestAPI, UpdateChapterResponseAPI } from "@/app/types/api/chapter"
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { canManageChapterByPermission } from "@/lib/authorization"
import { CollaborationPermission } from "@/app/generated/prisma/client"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { ApiException, parseApiJsonObject, withApiHandler } from "@/lib/errors"
import { prisma } from "@/lib/prisma"
import { UpdateChapterSchema } from "@/lib/schemas/chapter.schema"

export const PUT = withApiHandler(async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<UpdateChapterResponseAPI | ResponseErrorAPI>> => {
    const userId = getAuthenticatedUserIdFromHeaders(request.headers)

    if (!userId) {
        throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
    }

    const { id } = await params

    const chapter = await canManageChapterByPermission({
        chapterId: id,
        userId,
        permission: CollaborationPermission.CHAPTER_UPDATE,
    })

    if (!chapter) {
        throw new ApiException(HTTP_ERRORS.NOT_FOUND)
    }

    const requestBody = await parseApiJsonObject(request)
    const parsed = UpdateChapterSchema.parse({
        title: typeof requestBody.title === "string" ? requestBody.title.trim() : requestBody.title,
        content: requestBody.content,
    })

    // @TODO: `content` property will should be not overwrite, should use a merge or/and diff strategy for lightweight content update, to avoid overwrite all content and lose previous content.
    const chapterUpdated = await prisma.chapter.update({
        where: {
            id,
        },
        data: {
            title: parsed.title ?? chapter.title,
            content: requestBody.content as UpdateChapterRequestAPI["content"] || chapter.content || {}, // @TODO: this is for dev only, should be removed before production.
        },
    })

    return NextResponse.json<UpdateChapterResponseAPI>({
        ...chapterUpdated,
        createdAt: chapterUpdated.createdAt.getTime(),
        updatedAt: chapterUpdated.updatedAt.getTime(),
    }, { status: 200 })
})