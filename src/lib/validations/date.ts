import { z } from "zod";

export const dateStringSchema = z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .refine(val => !isNaN(Date.parse(val)), "Invalid date");

export const dateTimeStringSchema = z.iso.datetime("Invalid datetime format");

export const futureDateSchema = dateStringSchema.refine(
    val => new Date(val) > new Date(),
    "Date must be in the future"
);

export type DateString = z.infer<typeof dateStringSchema>;
export type DateTimeString = z.infer<typeof dateTimeStringSchema>;
export type FutureDate = z.infer<typeof futureDateSchema>;
