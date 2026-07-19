import type { PaginatedEbooksAPI, CreateEbookResponseAPI, CreateEbookRequestAPI, ResponseErrorAPI } from "@/app/types/api/ebook"
import { NextRequest, NextResponse } from "next/server"
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth"
import { parsePaginationParams, withPagination } from "@/lib/pagination"
import { mapEbookToResponse } from "./utils"
import { normalizeStringValue } from "@/lib/normalize-string-value"
import { prisma } from "@/lib/prisma"
import { ApiException, apiErrorResponse, apiValidationException, parseApiJsonObject } from "@/lib/errors"
import { EbookSchema } from "@/lib/schemas/ebook.schema"
import { HTTP_ERRORS } from "@/lib/constants/http-code"


/**
 * @description Get a paginated list of ebooks.
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<PaginatedEbooksAPI>}
 */
export async function GET(request: NextRequest): Promise<NextResponse<PaginatedEbooksAPI | ResponseErrorAPI>> {
    try {
        const userId = getAuthenticatedUserIdFromHeaders(request.headers)

        if (!userId) {
            throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
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
                totalItems,
            ),
        )
    } catch (error) {
        return apiErrorResponse(error)
    }
}

/**
 * @description Create a new ebook.
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<CreateEbookResponseAPI>}
 */
export async function POST(request: NextRequest): Promise<NextResponse<CreateEbookResponseAPI | ResponseErrorAPI>> {
    try {
        const userId = getAuthenticatedUserIdFromHeaders(request.headers)

        if (!userId) {
            throw new ApiException(HTTP_ERRORS.UNAUTHORIZED)
        }

        const body = await parseApiJsonObject(request) as Partial<CreateEbookRequestAPI>
        const parsed = EbookSchema.safeParse({
            title: normalizeStringValue(body.title) ?? undefined,
            subtitle: body.subtitle === undefined ? undefined : normalizeStringValue(body.subtitle) ?? "",
            shortDescription: body.shortDescription === undefined ? undefined : normalizeStringValue(body.shortDescription) ?? "",
        })

        if (!parsed.success) {
            throw apiValidationException(parsed.error)
        }

        const ebook = await prisma.ebook.create({
            data: {
                ...parsed.data,
                ownerId: userId,
            },
        })

        return NextResponse.json<CreateEbookResponseAPI>(mapEbookToResponse(ebook), { status: 201 })
    } catch (error) {
        return apiErrorResponse(error)
    }
}
