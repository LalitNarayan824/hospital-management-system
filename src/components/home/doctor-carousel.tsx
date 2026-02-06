"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        experience: "15+ years",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400",
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Neurologist",
        experience: "12+ years",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400",
    },
    {
        id: 3,
        name: "Dr. Priya Patel",
        specialty: "Pediatrician",
        experience: "10+ years",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400",
    },
    {
        id: 4,
        name: "Dr. James Williams",
        specialty: "Orthopedic Surgeon",
        experience: "18+ years",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400",
    },
    {
        id: 5,
        name: "Dr. Maria Garcia",
        specialty: "General Physician",
        experience: "8+ years",
        image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=400",
    },
    {
        id: 6,
        name: "Dr. David Kim",
        specialty: "Ophthalmologist",
        experience: "14+ years",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400",
    },
];

export function DoctorCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 320;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <section className="py-16 lg:py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div>
                        <span className="text-corporate-blue font-medium text-sm uppercase tracking-wider">
                            Meet Our Team
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-2">
                            Our Expert Doctors
                        </h2>
                        <p className="text-muted-foreground max-w-lg">
                            Highly qualified medical professionals dedicated to
                            providing the best care for you and your family
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className="rounded-full w-12 h-12"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className="rounded-full w-12 h-12"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {doctors.map((doctor) => (
                        <Card
                            key={doctor.id}
                            className="flex-shrink-0 w-[280px] overflow-hidden border-0 shadow-lg group snap-start"
                        >
                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay Button */}
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button
                                        asChild
                                        size="sm"
                                        className="w-full bg-corporate-blue hover:bg-corporate-blue/90 text-white rounded-full"
                                    >
                                        <Link href={`/doctors/${doctor.id}`}>
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Book Appointment
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <CardContent className="p-5 text-center">
                                <h3 className="text-lg font-semibold text-foreground mb-1">
                                    {doctor.name}
                                </h3>
                                <p className="text-corporate-blue font-medium text-sm mb-1">
                                    {doctor.specialty}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {doctor.experience} Experience
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View All */}
                <div className="text-center mt-10">
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="rounded-full px-8"
                    >
                        <Link href="/doctors">View All Doctors</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
