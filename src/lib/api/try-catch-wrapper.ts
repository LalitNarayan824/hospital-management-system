import { NextRequest, NextResponse } from "next/server";
import { errorResponse } from "./api-response";
import { handleError } from "./error-handler";
import { logger } from "./logger";
import { generateRequestId } from "./request-context";

type RouteHandler = (
    request: NextRequest,
    context?: { params?: Promise<{ [key: string]: string }> }
) => Promise<NextResponse> | NextResponse;

export function tryCatchWrapper(handler: RouteHandler): RouteHandler {
    return async (
        request: NextRequest,
        context?: { params?: Promise<{ [key: string]: string }> }
    ) => {
        const component = "API";
        const requestId = generateRequestId();
        const path = request.nextUrl.pathname;
        const method = request.method;
        const startTime = Date.now();
        logger.info({ component, path, method, requestId }, "Incoming request");

        try {
            const response = await handler(request, context);
            logger.info(
                {
                    component,
                    path,
                    method,
                    requestId,
                    status: response.status,
                    duration: Date.now() - startTime,
                },
                "Request completed"
            );

            // Add request ID to response headers
            response.headers.set("X-Request-ID", requestId);
            return response;
        } catch (err) {
            logger.error(
                { err, component, path, method, requestId },
                "Request failed"
            );
            const { message, statusCode } = handleError(err);
            const response = errorResponse(message, statusCode);

            response.headers.set("X-Request-ID", requestId);
            return response;
        }
    };
}
