import type { CollaboratorResponseAPI, ResponseErrorAPI } from "@/app/types/api/collaboration"
import { CollaborationPermission } from "@/app/generated/prisma/client"
import { NextRequest, NextResponse } from "next/server"

import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { ApiException, parseApiJsonObject, withApiHandler } from "@/lib/errors"
import { prisma } from "@/lib/prisma"
import { CollaboratorUpdateSchema } from "@/lib/schemas/collaboration.schema"

import { assertCustomRolesEnabled, ensureEbookPermission, mapCollaboratorResponse, parseChapterIdsForEbook } from "../../utils"

export const PUT = withApiHandler(async (
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
        permission: CollaborationPermission.ROLE_ASSIGN,
    })

    const requestBody = await parseApiJsonObject(request)
    const parsed = CollaboratorUpdateSchema.parse(requestBody)

    if (parsed.collaboratorUserId === ebook.ownerId) {
        throw new ApiException({
            ...HTTP_ERRORS.VALIDATION_ERROR,
            fields: {
                collaboratorUserId: ["COLLABORATOR_CANNOT_BE_OWNER"],
            },
        })
    }

    const collaborator = await prisma.ebookCollaborator.findUnique({
        where: {
            ebookId_userId: {
                ebookId,
                userId: parsed.collaboratorUserId,
            },
        },
        select: {
            id: true,
            role: true,
            customRoleId: true,
            allChaptersAccess: true,
        },
    })

    if (!collaborator) {
        throw new ApiException(HTTP_ERRORS.NOT_FOUND)
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

    const chapterIds = await parseChapterIdsForEbook({
        ebookId,
        chapterIds: parsed.chapterIds,
    })

    const nextAllChaptersAccess = parsed.allChaptersAccess ?? collaborator.allChaptersAccess

    await prisma.$transaction(async (tx) => {
        await tx.ebookCollaborator.update({
            where: {
                ebookId_userId: {
                    ebookId,
                    userId: parsed.collaboratorUserId,
                },
            },
            data: {
                ...(parsed.role
                    ? {
                        role: parsed.role,
                        customRoleId: null,
                    }
                    : {}),
                ...(parsed.customRoleId
                    ? {
                        role: null,
                        customRoleId: parsed.customRoleId,
                    }
                    : {}),
                ...(parsed.allChaptersAccess === undefined
                    ? {}
                    : {
                        allChaptersAccess: parsed.allChaptersAccess,
                    }),
            },
        })

        if (nextAllChaptersAccess) {
            await tx.ebookCollaboratorChapterAccess.deleteMany({
                where: {
                    collaboratorId: collaborator.id,
                },
            })
            return
        }

        if (parsed.chapterIds) {
            await tx.ebookCollaboratorChapterAccess.deleteMany({
                where: {
                    collaboratorId: collaborator.id,
                },
            })

            if (chapterIds.length > 0) {
                await tx.ebookCollaboratorChapterAccess.createMany({
                    data: chapterIds.map((chapterId) => ({
                        collaboratorId: collaborator.id,
                        chapterId,
                    })),
                })
            }
        }
    })

    const updatedCollaborator = await prisma.ebookCollaborator.findUnique({
        where: {
            ebookId_userId: {
                ebookId,
                userId: parsed.collaboratorUserId,
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

    if (!updatedCollaborator) {
        throw new ApiException(HTTP_ERRORS.NOT_FOUND)
    }

    return NextResponse.json<CollaboratorResponseAPI>(mapCollaboratorResponse(updatedCollaborator), { status: 200 })
})
