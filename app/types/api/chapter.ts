import { JsonValue } from "@/prisma/app/generated/prisma/runtime/client";

export interface PaginatedChaptersAPI {
    items: ChapterResponseAPI[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
}

export interface ChapterResponseAPI {
    id: string;
    ebookId: string;
    title: string;
    createdAt:number;
    updatedAt: number;
}

export interface ChapterContentResponseAPI extends ChapterResponseAPI {
    content: JsonValue;
}

export interface CreateChapterRequestAPI {
    title: string;
    content?: JsonValue;
}

export interface CreateChapterResponseAPI {
    id: string;
    ebookId: string;
    title: string;
    content: JsonValue;
    createdAt: number;
    updatedAt: number;
}

export interface DeleteChapterResponseAPI {
    success: boolean;
}

export interface UpdateChapterRequestAPI extends Partial<CreateChapterRequestAPI> {}

export interface UpdateChapterResponseAPI extends ChapterContentResponseAPI {}