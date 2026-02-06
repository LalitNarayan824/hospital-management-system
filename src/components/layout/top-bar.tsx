import Link from "next/link";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopBar() {
    return (
        <div className="bg-navy text-navy-foreground">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-10 text-sm">
                    {/* Left side - Utility Links */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="/online-services"
                            className="hover:text-corporate-blue transition-colors"
                        >
                            Online Services
                        </Link>
                        <Link
                            href="/pay-bills"
                            className="hover:text-corporate-blue transition-colors"
                        >
                            Pay Bills
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-corporate-blue transition-colors"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Right side - Appointment CTA */}
                    <div className="flex items-center gap-4 ml-auto">
                        <Button
                            asChild
                            size="sm"
                            className="bg-corporate-blue hover:bg-corporate-blue/90 text-white rounded-full px-4 h-7 text-xs font-medium"
                        >
                            <Link href="/appointments">
                                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                Request An Appointment
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
