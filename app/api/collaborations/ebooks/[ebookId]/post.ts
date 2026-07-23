import type { CollaboratorResponseAPI, ResponseErrorAPI } from "@/app/types/api/collaboration"
import { CollaborationPermission } from "@/app/generated/prisma/client"
import { NextRequest, NextResponse } from "next/server"

import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { canAddCollaboratorToEbook } from "@/lib/authorization"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { ApiException, parseApiJsonObject, withApiHandler } from "@/lib/errors"
import { prisma } from "@/lib/prisma"
import { CollaboratorCreateSchema } from "@/lib/schemas/collaboration.schema"

import { assertCustomRolesEnabled, ensureEbookPermission, mapCollaboratorResponse, parseChapterIdsForEbook } from "../../utils"

export const POST = withApiHandler(async (
    request: NextRequest,
    { params }: { params: Promise<{ ebookId: string }> },
): Promise<NextResponse<CollaboratorResponseAPI | ResponseErrorAPI>> => {
    const userId = getAuthenticatedUserIdFromHeaders(request.headers)

    if (!userId) {
        throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
    }

    const { ebookId } = await params

    const ebook = await ensureEbookPermission({
        ebookId,
        userId,
        permission: CollaborationPermission.COLLABORATOR_INVITE,
    })

    const requestBody = await parseApiJsonObject(request)
    const parsed = CollaboratorCreateSchema.parse(requestBody)

    if (parsed.collaboratorUserId === ebook.ownerId) {
        throw new ApiException({
            ...HTTP_ERRORS.VALIDATION_ERROR,
            fields: {
                collaboratorUserId: ["COLLABORATOR_CANNOT_BE_OWNER"],
            },
        })
    }

    const targetUser = await prisma.user.findUnique({
        where: {
            id: parsed.collaboratorUserId,
        },
        select: {
            id: true,
        },
    })

    if (!targetUser) {
        throw new ApiException(HTTP_ERRORS.NOT_FOUND)
    }

    const existing = await prisma.ebookCollaborator.findUnique({
        where: {
            ebookId_userId: {
                ebookId,
                userId: parsed.collaboratorUserId,
            },
        },
        select: {
            id: true,
        },
    })

    if (existing) {
        throw new ApiException({
            ...HTTP_ERRORS.VALIDATION_ERROR,
            fields: {
                collaboratorUserId: ["COLLABORATOR_ALREADY_EXISTS"],
            },
        })
    }

    if (parsed.customRoleId) {
        assertCustomRolesEnabled(ebook.owner.plan)

        const customRole = await prisma.ebookCustomRole.findFirst({
            where: {
                id: parsed.customRoleId,
                ebookId,
            },
            select: {
                id: true,
            },
        })

        if (!customRole) {
            throw new ApiException({
                ...HTTP_ERRORS.VALIDATION_ERROR,
                fields: {
                    customRoleId: ["CUSTOM_ROLE_NOT_FOUND"],
                },
            })
        }
    }

    const canAddCollaborator = await canAddCollaboratorToEbook({
        userId: ebook.ownerId,
        ebookId,
        isCustomRole: Boolean(parsed.customRoleId),
    })

    if (!canAddCollaborator) {
        throw new ApiException(HTTP_ERRORS.PAYMENT_REQUIRED)
    }

    const allChaptersAccess = parsed.allChaptersAccess ?? true
    const chapterIds = await parseChapterIdsForEbook({
        ebookId,
        chapterIds: parsed.chapterIds,
    })

    const collaborator = await prisma.ebookCollaborator.create({
        data: {
            ebookId,
            userId: parsed.collaboratorUserId,
            role: parsed.role ?? null,
            customRoleId: parsed.customRoleId ?? null,
            allChaptersAccess,
            chapterAccess: {
                createMany: {
                    data: allChaptersAccess
                        ? []
                        : chapterIds.map((chapterId) => ({
                            chapterId,
                        })),
                },
            },
        },
        include: {
            chapterAccess: {
                select: {
                    chapterId: true,
                },
            },
        },
    })

    return NextResponse.json<CollaboratorResponseAPI>(mapCollaboratorResponse(collaborator), { status: 201 })
})
