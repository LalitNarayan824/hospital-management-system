import Link from "next/link";
import { Video, Pill, TestTube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Instant Video Consultation",
        description:
            "Connect with our doctors from anywhere, anytime. Get expert medical advice through secure video calls.",
        icon: Video,
        href: "/video-consultation",
        gradient: "from-blue-500 to-cyan-500",
        bgPattern: "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
    },
    {
        title: "24/7 Medicines",
        description:
            "Round-the-clock pharmacy services. Order prescriptions online with delivery to your doorstep.",
        icon: Pill,
        href: "/pharmacy",
        gradient: "from-emerald-500 to-teal-500",
        bgPattern: "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
    },
    {
        title: "Accurate Lab Tests",
        description:
            "State-of-the-art laboratory with fast, accurate results. Book tests online and track reports digitally.",
        icon: TestTube,
        href: "/lab-tests",
        gradient: "from-violet-500 to-purple-500",
        bgPattern: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
    },
];

export function SpecialtyServices() {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-corporate-blue font-medium text-sm uppercase tracking-wider">
                        Special Services
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
                        Healthcare At Your Fingertips
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Access premium healthcare services from the comfort of
                        your home
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} p-8 lg:p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                            style={{ backgroundImage: service.bgPattern }}
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                                <service.icon className="w-8 h-8" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold mb-4">
                                {service.title}
                            </h3>
                            <p className="text-white/80 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* CTA */}
                            <Button
                                asChild
                                variant="secondary"
                                className="rounded-full bg-white text-gray-900 hover:bg-white/90"
                            >
                                <Link href={service.href}>
                                    Get Started
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>

                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
