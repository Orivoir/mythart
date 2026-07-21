import { NextResponse, type NextRequest } from "next/server"

import { AUTH_USER_ID_HEADER, getAuthenticatedUserId } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { HTTP_ERRORS } from "./lib/constants/http-code"
import { ApiException, apiErrorResponse } from "./lib/errors"

const METHODS_WITH_JSON_BODY = new Set(["PUT", "PATCH", "DELETE", "POST"])
const PSQL_INT_MAX = 2147483647

type ResourceId = {
    resource: "ebooks" | "chapters"
    id: string
}

function getResourceIdFromRoute(pathname: string): ResourceId | null {
    const ebookMatch = pathname.match(/^\/api\/ebooks\/([^/]+)(?:\/.*)?$/)

    if (ebookMatch?.[1]) {
        return {
            resource: "ebooks",
            id: ebookMatch[1],
        }
    }

    const chapterMatch = pathname.match(/^\/api\/chapters\/([^/]+)(?:\/.*)?$/)

    if (chapterMatch?.[1]) {
        return {
            resource: "chapters",
            id: chapterMatch[1],
        }
    }

    return null
}

function isValidPsqlIntId(id: string): boolean {
    if (!/^\d+$/.test(id)) {
        return false
    }

    const numericId = Number(id)

    if (!Number.isSafeInteger(numericId)) {
        return false
    }

    return numericId > 0 && numericId <= PSQL_INT_MAX
}

async function ensureOwnedResource(resourceId: ResourceId, userId: string): Promise<boolean> {
    if (resourceId.resource === "ebooks") {
        const ebook = await prisma.ebook.findFirst({
            where: {
                id: resourceId.id,
                ownerId: userId,
            },
            select: {
                id: true,
            },
        })

        return Boolean(ebook)
    }

    const chapter = await prisma.chapter.findFirst({
        where: {
            id: resourceId.id,
            ebook: {
                ownerId: userId,
            },
        },
        select: {
            id: true,
        },
    })

    return Boolean(chapter)
}

export async function proxy(request: NextRequest): Promise<NextResponse> {
    const userId = await getAuthenticatedUserId(request)

    if (!userId) {
        return apiErrorResponse(new ApiException(HTTP_ERRORS.UNAUTHORIZED))
    }

    const resourceId = getResourceIdFromRoute(request.nextUrl.pathname)

    if (resourceId && METHODS_WITH_JSON_BODY.has(request.method)) {
        if (resourceId.id.trim().length === 0 || !isValidPsqlIntId(resourceId.id)) {
            return apiErrorResponse(new ApiException(HTTP_ERRORS.BAD_REQUEST))
        }

        const hasAccessToResource = await ensureOwnedResource(resourceId, userId)

        if (!hasAccessToResource) {
            return apiErrorResponse(new ApiException(HTTP_ERRORS.NOT_FOUND))
        }
    }

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set(AUTH_USER_ID_HEADER, userId)

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
}

export const config = {
    matcher: ["/api/ebooks/:path*", "/api/chapters/:path*"],
}
