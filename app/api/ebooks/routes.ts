import type { PaginatedEbooksAPI, CreateEbookResponseAPI, CreateEbookRequestAPI, ResponseErrorAPI } from "@/app/types/api/ebook"
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { parsePaginationParams, withPagination } from "@/lib/pagination"
import { mapEbookToResponse } from "./utils"
import { normalizeStringValue } from "@/lib/normalize-string-value"


/**
 * @description Get a paginated list of ebooks.
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<PaginatedEbooksAPI>}
 */
export async function GET(request: NextRequest): Promise<NextResponse<PaginatedEbooksAPI | ResponseErrorAPI>> {
    const userId = getAuthenticatedUserIdFromHeaders(request.headers)

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { page, pageSize } = parsePaginationParams(request.nextUrl.searchParams)

    const where = {
        ownerId: userId,
    }

    const items = await prisma.ebook.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
            createdAt: "desc",
        },
    })

    const totalItems = await prisma.ebook.count({ where })

    return NextResponse.json<PaginatedEbooksAPI>(
        withPagination(
            items.map(mapEbookToResponse),
            page,
            pageSize,
            totalItems
        ),
    )
}

/**
 * @description Create a new ebook.
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<CreateEbookResponseAPI>}
 */
export async function POST(request: NextRequest): Promise<NextResponse<CreateEbookResponseAPI | ResponseErrorAPI>> {
    const userId = getAuthenticatedUserIdFromHeaders(request.headers)

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json() as Partial<CreateEbookRequestAPI>
    const title = normalizeStringValue(body.title)
    const subtitle = normalizeStringValue(body.subtitle)
    const shortDescription = normalizeStringValue(body.shortDescription)

    if (!title) {
        return NextResponse.json({ message: "Title is required" }, { status: 400 })
    }

    const ebook = await prisma.ebook.create({
        data: {
            title,
            subtitle,
            shortDescription,
            ownerId: userId,
        },
    })

    return NextResponse.json<CreateEbookResponseAPI>(mapEbookToResponse(ebook))
}
