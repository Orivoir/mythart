import { NextResponse, type NextRequest } from "next/server"

import { AUTH_USER_ID_HEADER, getAuthenticatedUserId } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

const METHODS_WITH_JSON_BODY = new Set(["PUT", "PATCH", "DELETE", "POST"])

function getEbookIdFromRoute(pathname: string): string | null {
    const match = pathname.match(/^\/api\/ebooks\/([^/]+)$/)

    if (!match) {
        return null
    }

    return match[1] ?? null
}

async function getJsonBodyId(request: NextRequest): Promise<string | null> {
    const contentType = request.headers.get("content-type")?.toLowerCase() ?? ""

    if (!contentType.includes("application/json")) {
        return null
    }

    try {
        const body = await request.clone().json() as { id?: unknown }

        return typeof body.id === "string" && body.id.length > 0
            ? body.id
            : null
    } catch {
        return null
    }
}

export async function proxy(request: NextRequest): Promise<NextResponse> {
    const userId = await getAuthenticatedUserId(request)

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const ebookIdFromRoute = getEbookIdFromRoute(request.nextUrl.pathname)

    if (ebookIdFromRoute && METHODS_WITH_JSON_BODY.has(request.method)) {
        const ebookIdFromBody = await getJsonBodyId(request)

        if (ebookIdFromBody) {
            if (ebookIdFromBody !== ebookIdFromRoute) {
                return NextResponse.json({ message: "Invalid ebook id" }, { status: 400 })
            }

            const ebook = await prisma.ebook.findFirst({
                where: {
                    id: ebookIdFromBody,
                    ownerId: userId,
                },
                select: {
                    id: true,
                },
            })

            if (!ebook) {
                return NextResponse.json({ message: "Ebook not found" }, { status: 404 })
            }
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
