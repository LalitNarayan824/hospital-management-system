import { NextRequest } from "next/server";
import { ZodType } from "zod";
import { ApiError, ValidationError } from "./api-error";

function validateWithSchema<T>(data: unknown, schema: ZodType<T>): T {
    const result = schema.safeParse(data);

    if (!result.success)
        throw new ValidationError(
            result.error.issues.map(issue => ({
                field: issue.path.join(".") || "request",
                message: issue.message,
            }))
        );

    return result.data;
}

// Validate request body
export async function validateBody<T>(
    request: NextRequest,
    schema: ZodType<T>
): Promise<T> {
    let body: unknown;

    try {
        body = await request.json();
    } catch {
        throw ApiError.badRequest("Invalid or missing JSON body");
    }

    return validateWithSchema(body, schema);
}

// Validate query parameters
export function validateQuery<T>(request: NextRequest, schema: ZodType<T>): T {
    const searchParams = request.nextUrl.searchParams;
    const queryObject: { [key: string]: string | string[] } = {};

    searchParams.forEach((v, k) => {
        const existing = queryObject[k];
        if (existing)
            if (Array.isArray(existing)) existing.push(v);
            else queryObject[k] = [existing, v];
        else queryObject[k] = v;
    });

    return validateWithSchema(queryObject, schema);
}

// Validate route params
export async function validateParams<T>(
    params: Promise<{ [key: string]: string }> | { [key: string]: string },
    schema: ZodType<T>
): Promise<T> {
    const resolvedParams = params instanceof Promise ? await params : params;
    return validateWithSchema(resolvedParams, schema);
}
