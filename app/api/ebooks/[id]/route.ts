import { NextRequest, NextResponse } from "next/server";
import type { DeleteEbookRequestAPI, DeleteEbookResponseAPI, ResponseErrorAPI, UpdateEbookRequestAPI, UpdateEbookResponseAPI } from "@/app/types/api/ebook";
import { getAuthenticatedUserIdFromHeaders } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { normalizeStringValue } from "@/lib/normalize-string-value";
import { mapEbookToResponse } from "../utils";

/**
 * @description Update an existing ebook.
 * @usage PUT /api/ebooks/:id
 * 
 * @param {string} id - The ID of the ebook to update.
 * 
 * @body {Partial<UpdateEbookRequestAPI>} body - The request body containing the fields to update.
 * @body {string} [body.title] - The new title of the ebook (optional).
 * @body {string} [body.subtitle] - The new subtitle of the ebook (optional).
 * @body {string} [body.shortDescription] - The new short description of the ebook (optional).
 * 
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<UpdateEbookResponseAPI>}
 */
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<UpdateEbookResponseAPI | ResponseErrorAPI>> {

    const userId = getAuthenticatedUserIdFromHeaders(request.headers);

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json() as Partial<UpdateEbookRequestAPI>;

    const title = normalizeStringValue(body.title);
    const subtitle = normalizeStringValue(body.subtitle);
    const shortDescription = normalizeStringValue(body.shortDescription);

    if (!title) {
        return NextResponse.json({ message: "Title is required" }, { status: 400 });
    }

    const updateResult = await prisma.ebook.updateMany({
        where: {
            id,
            ownerId: userId,
        },
        data: {
            title,
            subtitle,
            shortDescription,
        },
    });

    if (updateResult.count === 0) {
        return NextResponse.json({ message: "Ebook not found" }, { status: 404 });
    }

    const ebook = await prisma.ebook.findFirst({
        where: {
            id,
            ownerId: userId,
        },
    });

    if (!ebook) {
        return NextResponse.json({ message: "Ebook not found" }, { status: 404 });
    }

    return NextResponse.json<UpdateEbookResponseAPI>(mapEbookToResponse(ebook));
}

/**
 * @description Delete an existing ebook and chapter relations models.
 * @usage DELETE /api/ebooks/:id
 * 
 * @param {string} id - The ID of the ebook to delete.
 * 
 * @body {DeleteEbookRequestAPI} body - The request body containing the ID of the ebook to delete.
 * @body {string} body.id - The ID of the ebook to delete.
 * 
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<DeleteEbookResponseAPI>}
 */
export async function DELETE(request: NextRequest): Promise<NextResponse<DeleteEbookResponseAPI | ResponseErrorAPI>> {
    const userId = getAuthenticatedUserIdFromHeaders(request.headers);

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await request.json() as DeleteEbookRequestAPI;

    // Snapshots is not delete here, a "restore" feature will be implemented in the future, so we will keep the snapshots for now.
    // @TODO: Here should delete snapshots without LAST snapshots, or create once if not exists. 
    const deletedEbook = await prisma.$transaction(async (transaction) => {
        const ebook = await transaction.ebook.findFirst({
            where: {
                id,
                ownerId: userId,
            },
            select: {
                id: true,
            },
        });

        if (!ebook) {
            return null;
        }

        await transaction.chapter.deleteMany({
            where: {
                ebookId: id,
            },
        });

        await transaction.ebook.delete({
            where: {
                id,
            },
        });

        return ebook;
    });

    if (!deletedEbook) {
        return NextResponse.json({ message: "Ebook not found" }, { status: 404 });
    }

    return NextResponse.json<DeleteEbookResponseAPI>({ success: true });
}