import type { ResponseErrorAPI } from "@/app/types/api/ebook";
import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth";
import { DeleteChapterResponseAPI, UpdateChapterRequestAPI, UpdateChapterResponseAPI } from "@/app/types/api/chapter";
import { prisma } from "@/lib/prisma";
import { mapDateFieldsToTimestamps } from "@/lib/map-date-fields-to-timestamps";

/**
 * @description Deletes a chapter by its ID for the authenticated user.
 * @usage DELETE /api/chapters/:id
 * 
 * @param {string} id - The ID of the chapter to be deleted.
 * @param request 
 * @param param1 
 * @returns {Promise<NextResponse<DeleteChapterResponseAPI | ResponseErrorAPI>>} - A promise that resolves to a NextResponse containing either a success message or an error message.
 * 
 * @throws {ResponseErrorAPI} - Throws an error if the user is not authenticated or if the chapter is not found.
 */
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse<DeleteChapterResponseAPI | ResponseErrorAPI>> {
    const userId = getAuthenticatedUserIdFromHeaders(request.headers);

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;

    const chapter = await prisma.chapter.findFirst({
        where: {
            id,
            ebook: {
                ownerId: userId,
            },
        },
    });

    if (!chapter) {
        return NextResponse.json({ message: "Chapter not found" }, { status: 404 });
    }

    // Snapshot should stock all content of version and chapter, without "soft" deleted for chapter is apply.
    await prisma.chapter.delete({
        where: {
            id,
        },
    });

    return NextResponse.json({ message: "Chapter deleted successfully" }, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse<UpdateChapterResponseAPI | ResponseErrorAPI>> {
    const userId = getAuthenticatedUserIdFromHeaders(request.headers);
    
    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;

    const chapter = await prisma.chapter.findFirst({
        where: {
            id,
            ebook: {
                ownerId: userId,
            },
        },
    });

    if (!chapter) {
        return NextResponse.json({ message: "Chapter not found" }, { status: 404 });
    }

    const requestBody = await request.json() as UpdateChapterRequestAPI;

    // @TODO: `content` property will should be not overwrite, should use a merge or/and diff strategy for lightweight content update, to avoid overwrite all content and lose previous content.
    const chapterUpdated = await prisma.chapter.update({
        where: {
            id,
        },
        data: {
            title: requestBody.title ?? chapter.title,
            content: requestBody.content || chapter.content || {}, // @TODO: this is for dev only, should be removed before production.
        },
    });

    return NextResponse.json<UpdateChapterResponseAPI>({
        ...chapterUpdated,
        createdAt: chapterUpdated.createdAt.getTime(),
        updatedAt: chapterUpdated.updatedAt.getTime(),
    }, { status: 200 });
}