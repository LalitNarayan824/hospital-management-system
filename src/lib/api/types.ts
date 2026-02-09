export const LogLevel = {
    Debug: "debug",
    Info: "info",
    Warn: "warn",
    Error: "error",
} as const;

// HTTP Status Codes
export const HttpStatus = {
    // Success
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NoContent: 204,

    // Client Errors
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    Conflict: 409,
    UnprocessableEntity: 422,
    TooManyRequests: 429,

    // Server Errors
    InternalServerError: 500,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
} as const;

// API Response
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message: string;
    status: HttpStatusCode;
    timestamp: string;
    meta?: ResponseMeta;
}

export interface ApiSuccessResponse<T> extends ApiResponse<T> {
    success: true;
}

export interface ApiErrorResponse extends ApiResponse<null> {
    success: false;
    data: null;
}

// Pagination
export interface PaginationParams {
    page: number;
    limit: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}

export interface PaginationMeta {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export interface ResponseMeta {
    pagination?: PaginationMeta;
    [key: string]: unknown;
}

export interface PaginatedData<T> {
    items: T[];
    pagination: PaginationMeta;
}

// Request context
export interface RequestContext {
    requestId: string;
    clientIp: string | null;
    userAgent: string | null;
    timestamp: string;
    path: string;
    method: string;
}

// Validation error details
export interface ValidationErrorDetail {
    field: string;
    message: string;
}

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];
export type HttpStatusCode = (typeof HttpStatus)[keyof typeof HttpStatus];
