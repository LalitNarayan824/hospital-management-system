import { z } from "zod";

export const emailSchema = z
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters")
    .max(255, "Email must be at most 255 characters")
    .toLowerCase()
    .trim();

export const phoneSchema = z
    .string()
    .regex(/^\+?[1-9]\d{6,14}$/, "Invalid phone number format")
    .min(7, "Phone number must be at least 7 digits")
    .max(15, "Phone number must be at most 15 digits");

export const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be at most 128 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
    );

export type Email = z.infer<typeof emailSchema>;
export type Phone = z.infer<typeof phoneSchema>;
export type Password = z.infer<typeof passwordSchema>;
