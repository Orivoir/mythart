import { NextRequest, NextResponse } from "next/server";

import { getAuthenticatedUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface FixturesSeedResponse {
  message: string;
  createdCount: number;
}

interface FixturesClearResponse {
  message: string;
  deletedEbooks: number;
  deletedChapters: number;
}

interface ErrorResponse {
  message: string;
}

const FIXTURE_PREFIX = "[fixture]";

export async function POST(
  request: NextRequest,
): Promise<NextResponse<FixturesSeedResponse | ErrorResponse>> {
  const userId = await getAuthenticatedUserId(request);

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const createdEbooks = await prisma.$transaction(async (transaction) => {
    const entries = Array.from({ length: 3 }).map((_, index) => ({
      title: `${FIXTURE_PREFIX} Ebook ${index + 1}`,
      subtitle: `Demo subtitle ${index + 1}`,
      shortDescription: `Fixture ebook ${index + 1} for dashboard testing.`,
      ownerId: userId,
    }));

    const books = [] as Array<{ id: string }>;

    for (const entry of entries) {
      const created = await transaction.ebook.create({ data: entry, select: { id: true } });
      books.push(created);
    }

    return books;
  });

  return NextResponse.json({
    message: "Fixture ebooks created",
    createdCount: createdEbooks.length,
  });
}

export async function DELETE(
  request: NextRequest,
): Promise<NextResponse<FixturesClearResponse | ErrorResponse>> {
  const userId = await getAuthenticatedUserId(request);

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const fixtureEbooks = await prisma.ebook.findMany({
    where: {
      ownerId: userId,
      title: {
        startsWith: FIXTURE_PREFIX,
      },
    },
    select: {
      id: true,
    },
  });

  if (fixtureEbooks.length === 0) {
    return NextResponse.json({
      message: "No fixtures to clear",
      deletedEbooks: 0,
      deletedChapters: 0,
    });
  }

  const fixtureEbookIds = fixtureEbooks.map((ebook) => ebook.id);

  const deletionResult = await prisma.$transaction(async (transaction) => {
    const deletedChapters = await transaction.chapter.deleteMany({
      where: {
        ebookId: {
          in: fixtureEbookIds,
        },
      },
    });

    const deletedEbooks = await transaction.ebook.deleteMany({
      where: {
        id: {
          in: fixtureEbookIds,
        },
        ownerId: userId,
      },
    });

    return {
      deletedChapters: deletedChapters.count,
      deletedEbooks: deletedEbooks.count,
    };
  });

  return NextResponse.json({
    message: "Fixture ebooks cleared",
    deletedEbooks: deletionResult.deletedEbooks,
    deletedChapters: deletionResult.deletedChapters,
  });
}
