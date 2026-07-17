import type { CreateChapterRequestAPI, PaginatedChaptersAPI, CreateChapterResponseAPI } from "@/app/types/api/chapter";
import type { ResponseErrorAPI } from "@/app/types/api/ebook";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth";
import { parsePaginationParams, withPagination } from "@/lib/pagination";
import { mapModelTimestamps } from "@/lib/map-date-fields-to-timestamps";

/**
 * @description Get a paginated list of chapters metadata (without content) for a specific ebook.
 * @usage GET /api/ebooks/:id/chapters?page=:page&pageSize=:pageSize
 * 
 * @param {string} id - The ID of the ebook for which to retrieve chapters.
 * 
 * @query {number} page - The page number for pagination (default: 1).
 * @query {number} pageSize - The number of items per page for pagination (default: 10).
 * 
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<PaginatedChaptersAPI | ResponseErrorAPI>}
 */
export async function GET(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse<PaginatedChaptersAPI | ResponseErrorAPI>> {
    const userId = getAuthenticatedUserIdFromHeaders(request.headers);

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;

    const ebook = await prisma.ebook.findFirst({
        where: {
            id,
            // @TODO: Consider adding collaborator access check here if needed in the future
            ownerId: userId,
        },
    });

    if (!ebook) {
        return NextResponse.json({ message: "Ebook not found" }, { status: 404 });
    }

    const { page, pageSize } = parsePaginationParams(request.nextUrl.searchParams);

    const chapters = await prisma.chapter.findMany({
        where: {
            ebookId: id,
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            ebookId: true,
            title: true,
            content: false,
            createdAt: true,
            updatedAt: true,
        },
    });

    const itemsParsed = chapters.map(mapModelTimestamps);

    return NextResponse.json<PaginatedChaptersAPI>(
        withPagination(itemsParsed, page, pageSize, chapters.length),
    );
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse<CreateChapterResponseAPI | ResponseErrorAPI>> {

    const userId = getAuthenticatedUserIdFromHeaders(request.headers);

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;

    const ebook = await prisma.ebook.findFirst({
        where: {
            id,
            ownerId: userId,
        },
    });

    if (!ebook) {
        return NextResponse.json({ message: "Ebook not found" }, { status: 404 });
    }

    const requestBody = await request.json() as CreateChapterRequestAPI;

    const newChapter = await prisma.chapter.create({
        data: {
            title: requestBody.title,
            content: requestBody.content || {},
            ebookId: id,
        },
    });

    return NextResponse.json<CreateChapterResponseAPI>(mapModelTimestamps(newChapter), { status: 201 });
}