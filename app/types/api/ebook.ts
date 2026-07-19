import type { ApiErrorResponse } from "@/lib/errors"

export interface EbookResponseAPI {
    id: string;
    title: string;
    subtitle?: string;
    shortDescription?: string;
    createdAt: number;
    updatedAt: number;
}

export interface PaginatedEbooksAPI {
    items: EbookResponseAPI[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
}

export interface CreateEbookRequestAPI {
    title: string;
    subtitle?: string;
    shortDescription?: string;
}

export interface CreateEbookResponseAPI extends EbookResponseAPI {
    createdAt: number;
    updatedAt: number;
}

export interface UpdateEbookRequestAPI extends CreateEbookRequestAPI {
    id: string;
}

export interface UpdateEbookResponseAPI extends EbookResponseAPI {}

export interface DeleteEbookRequestAPI {
    id: string;
}

export interface DeleteEbookResponseAPI {
    success: boolean;
}

export type ResponseErrorAPI = ApiErrorResponse
