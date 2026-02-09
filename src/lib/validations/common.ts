import { z } from "zod";

// ID
export const uuidSchema = z.uuid("Invalid UUID format");
export const idParamSchema = z.object({ id: uuidSchema });
export const numericIdSchema = z
    .string()
    .transform(val => parseInt(val, 10))
    .refine(val => !isNaN(val) && val > 0, "Must be a positive integer");

// Name
export const nameSchema = z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters")
    .trim();

export type IdParam = z.infer<typeof idParamSchema>;
export type Name = z.infer<typeof nameSchema>;
