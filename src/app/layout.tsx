import type { Metadata } from "next";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
    title: "MedCare Hospital - Excellence in Healthcare",
    description:
        "Experience world-class healthcare with compassion and cutting-edge technology. MedCare Hospital provides comprehensive medical services with expert physicians.",
    keywords: [
        "hospital",
        "healthcare",
        "medical",
        "doctors",
        "cardiology",
        "orthopedics",
        "neurology",
    ],
};

interface Props {
    children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
