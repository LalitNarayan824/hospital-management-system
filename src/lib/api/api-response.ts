import { NextResponse } from "next/server";
import {
    type ApiErrorResponse,
    type ApiSuccessResponse,
    HttpStatus,
    type HttpStatusCode,
    PaginationMeta,
    type ResponseMeta,
} from "./types";

export function successResponse<T>(
    data: T,
    message: string,
    status: HttpStatusCode,
    meta?: ResponseMeta
): NextResponse<ApiSuccessResponse<T>> {
    const response: ApiSuccessResponse<T> = {
        success: true,
        data,
        message,
        status,
        timestamp: new Date().toISOString(),
    };

    if (meta) response.meta = meta;
    return NextResponse.json(response, { status });
}

export function errorResponse(
    message: string,
    status: HttpStatusCode = HttpStatus.InternalServerError
): NextResponse<ApiErrorResponse> {
    const response: ApiErrorResponse = {
        success: false,
        data: null,
        message,
        status,
        timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status });
}

export function calculatePagination(
    totalItems: number,
    page: number,
    limit: number
): PaginationMeta {
    const totalPages = Math.ceil(totalItems / limit);
    return {
        currentPage: page,
        totalPages,
        totalItems,
        itemsPerPage: limit,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
    };
}
