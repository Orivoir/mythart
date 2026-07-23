import type { CollaboratorDeleteResponseAPI, ResponseErrorAPI } from "@/app/types/api/collaboration"
import { CollaborationPermission } from "@/app/generated/prisma/client"
import { NextRequest, NextResponse } from "next/server"

import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { ApiException, parseApiJsonObject, withApiHandler } from "@/lib/errors"
import { prisma } from "@/lib/prisma"
import { CollaboratorDeleteSchema } from "@/lib/schemas/collaboration.schema"

import { ensureEbookPermission } from "../../utils"

export const DELETE = withApiHandler(async (
    request: NextRequest,
    { params }: { params: Promise<{ ebookId: string }> },
): Promise<NextResponse<CollaboratorDeleteResponseAPI | ResponseErrorAPI>> => {
    const userId = getAuthenticatedUserIdFromHeaders(request.headers)

    if (!userId) {
        throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
    }

    const { ebookId } = await params

    const ebook = await ensureEbookPermission({
        ebookId,
        userId,
        permission: CollaborationPermission.COLLABORATOR_REMOVE,
    })

    const requestBody = await parseApiJsonObject(request)
    const parsed = CollaboratorDeleteSchema.parse(requestBody)

    if (parsed.collaboratorUserId === ebook.ownerId) {
        throw new ApiException({
            ...HTTP_ERRORS.VALIDATION_ERROR,
            fields: {
                collaboratorUserId: ["COLLABORATOR_CANNOT_BE_OWNER"],
            },
        })
    }

    const deleteResult = await prisma.ebookCollaborator.deleteMany({
        where: {
            ebookId,
            userId: parsed.collaboratorUserId,
        },
    })

    if (deleteResult.count === 0) {
        throw new ApiException(HTTP_ERRORS.NOT_FOUND)
    }

    return NextResponse.json<CollaboratorDeleteResponseAPI>({ success: true })
})
