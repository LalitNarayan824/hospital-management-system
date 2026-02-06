import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070')`,
                }}
            >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-2xl">
                    {/* Glassmorphism Card */}
                    <div className="bg-white/70 dark:bg-navy/70 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-blue/10 text-corporate-blue text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-corporate-blue animate-pulse" />
                            Excellence in Healthcare
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                            Safeguarding
                            <span className="block text-corporate-blue">
                                Tomorrow
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Experience world-class healthcare with compassion
                            and cutting-edge technology. Our dedicated team of
                            experts is committed to your well-being.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-corporate-blue hover:bg-corporate-blue/90 text-white rounded-full px-8"
                            >
                                <Link href="/about">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="rounded-full px-8 border-2"
                            >
                                <Link href="/appointments">
                                    Book Appointment
                                </Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border/50">
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-corporate-blue">
                                    25+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Years Experience
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-corporate-blue">
                                    200+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Expert Doctors
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-corporate-blue">
                                    50K+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Happy Patients
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-full hidden xl:block">
                <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-corporate-blue/10 blur-3xl" />
                <div className="absolute bottom-40 right-40 w-48 h-48 rounded-full bg-pastel-blue/30 blur-2xl" />
            </div>
        </section>
    );
}
