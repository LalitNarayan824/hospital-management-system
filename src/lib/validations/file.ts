import { z } from "zod";

export const fileTypeSchema = z.enum([
    "image/jpeg",
    "image/png",
    "application/pdf",
]);

export const fileSizeSchema = (maxSizeMB: number) =>
    z
        .number()
        .max(
            maxSizeMB * 1024 * 1024,
            `File must be smaller than ${maxSizeMB}MB`
        );

export type FileType = z.infer<typeof fileTypeSchema>;
