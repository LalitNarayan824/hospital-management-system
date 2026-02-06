import Link from "next/link";
import {
    Heart,
    Bone,
    Brain,
    Baby,
    Eye,
    Pill,
    Activity,
    Stethoscope,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const departments = [
    {
        name: "Cardiology",
        description:
            "Comprehensive heart care with advanced diagnostic and treatment options",
        icon: Heart,
        image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=400",
        color: "text-red-500",
    },
    {
        name: "Orthopedics",
        description:
            "Expert care for bones, joints, and musculoskeletal conditions",
        icon: Bone,
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=400",
        color: "text-amber-500",
    },
    {
        name: "Neurology",
        description: "Specialized treatment for brain and nervous system disorders",
        icon: Brain,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400",
        color: "text-purple-500",
    },
    {
        name: "Pediatrics",
        description: "Gentle, comprehensive healthcare for infants, children, and teens",
        icon: Baby,
        image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=400",
        color: "text-pink-500",
    },
    {
        name: "Ophthalmology",
        description: "Complete eye care from routine exams to complex surgeries",
        icon: Eye,
        image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=400",
        color: "text-cyan-500",
    },
    {
        name: "Pharmacy",
        description: "On-site pharmacy with expert medication management services",
        icon: Pill,
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400",
        color: "text-green-500",
    },
    {
        name: "Diagnostics",
        description: "State-of-the-art imaging and laboratory services",
        icon: Activity,
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400",
        color: "text-blue-500",
    },
    {
        name: "General Medicine",
        description: "Primary care and preventive health services for all ages",
        icon: Stethoscope,
        image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=400",
        color: "text-indigo-500",
    },
];

export function DepartmentsGrid() {
    return (
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-corporate-blue font-medium text-sm uppercase tracking-wider">
                        Our Departments
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
                        Medical Departments
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore our comprehensive range of medical specialties,
                        each staffed with expert physicians and cutting-edge
                        technology
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {departments.map((dept) => (
                        <Card
                            key={dept.name}
                            className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={dept.image}
                                    alt={dept.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div
                                    className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center ${dept.color}`}
                                >
                                    <dept.icon className="w-5 h-5" />
                                </div>
                            </div>

                            <CardContent className="p-5">
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {dept.name}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                    {dept.description}
                                </p>
                                <Button
                                    asChild
                                    variant="link"
                                    className="p-0 h-auto text-corporate-blue"
                                >
                                    <Link href={`/departments/${dept.name.toLowerCase()}`}>
                                        Learn More →
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10">
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="rounded-full px-8"
                    >
                        <Link href="/departments">View All Departments</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
