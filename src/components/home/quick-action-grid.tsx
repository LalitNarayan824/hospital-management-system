import Link from "next/link";
import {
    Users,
    Stethoscope,
    MapPin,
    MessageCircle,
    ArrowRight,
} from "lucide-react";

const quickActions = [
    {
        title: "Visitor Information",
        description:
            "Everything you need to know about visiting hours and policies",
        icon: Users,
        href: "/visitors",
        bgClass: "bg-pastel-blue",
        borderClass: "border-blue-200 dark:border-blue-800",
        iconClass: "text-blue-600 dark:text-blue-400",
    },
    {
        title: "Find a Doctor",
        description: "Search our network of expert physicians and specialists",
        icon: Stethoscope,
        href: "/doctors",
        bgClass: "bg-pastel-green",
        borderClass: "border-green-200 dark:border-green-800",
        iconClass: "text-green-600 dark:text-green-400",
    },
    {
        title: "Our Locations",
        description: "Find a hospital or clinic near you with ease",
        icon: MapPin,
        href: "/locations",
        bgClass: "bg-pastel-lavender",
        borderClass: "border-purple-200 dark:border-purple-800",
        iconClass: "text-purple-600 dark:text-purple-400",
    },
    {
        title: "Connect With Us",
        description: "Get in touch for inquiries or patient support",
        icon: MessageCircle,
        href: "/contact",
        bgClass: "bg-pastel-peach",
        borderClass: "border-orange-200 dark:border-orange-800",
        iconClass: "text-orange-600 dark:text-orange-400",
    },
];

export function QuickActionGrid() {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        How Can We Help You?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Quick access to the services and information you need
                        most
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {quickActions.map((action) => (
                        <Link
                            key={action.title}
                            href={action.href}
                            className={`group block p-6 rounded-2xl border-2 ${action.bgClass} ${action.borderClass} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-xl bg-white dark:bg-navy/50 flex items-center justify-center mb-4 ${action.iconClass} shadow-sm`}
                            >
                                <action.icon className="w-7 h-7" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {action.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                {action.description}
                            </p>

                            {/* Link */}
                            <span className="inline-flex items-center text-sm font-medium text-corporate-blue group-hover:underline">
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
