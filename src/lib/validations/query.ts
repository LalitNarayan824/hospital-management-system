import { z } from "zod";

export const paginationQuerySchema = z.object({
    page: z
        .string()
        .optional()
        .default("1")
        .transform(val => parseInt(val, 10))
        .refine(val => val >= 1, "Page must be at least 1"),
    limit: z
        .string()
        .optional()
        .default("10")
        .transform(val => parseInt(val, 10))
        .refine(
            val => val >= 1 && val <= 100,
            "Limit must be between 1 and 100"
        ),
    sortBy: z.string().optional(),
    sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});

export const searchQuerySchema = z.object({
    q: z.string().min(1, "Search query is required").max(100).trim().optional(),
    ...paginationQuerySchema.shape,
});

export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
export type SearchQuery = z.infer<typeof searchQuerySchema>;
