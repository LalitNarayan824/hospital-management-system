"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CalendarCheck, Clock, Phone, Mail, User } from "lucide-react";

const physicians = [
    { id: "dr-johnson", name: "Dr. Sarah Johnson", specialty: "Cardiology" },
    { id: "dr-chen", name: "Dr. Michael Chen", specialty: "Neurology" },
    { id: "dr-patel", name: "Dr. Priya Patel", specialty: "Pediatrics" },
    { id: "dr-williams", name: "Dr. James Williams", specialty: "Orthopedics" },
    { id: "dr-garcia", name: "Dr. Maria Garcia", specialty: "General Medicine" },
];

const reasons = [
    { id: "checkup", name: "General Checkup" },
    { id: "followup", name: "Follow-up Visit" },
    { id: "consultation", name: "Consultation" },
    { id: "emergency", name: "Urgent Care" },
    { id: "other", name: "Other" },
];

export function AppointmentBooking() {
    return (
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=800"
                                alt="Modern clinic interior"
                                className="w-full h-[400px] lg:h-[550px] object-cover"
                            />
                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-navy/90 backdrop-blur-md rounded-2xl p-5 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-corporate-blue flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">
                                            Working Hours
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Mon - Fri: 8:00 AM - 8:00 PM
                                            <br />
                                            Sat - Sun: 9:00 AM - 5:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-corporate-blue/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pastel-green/30 rounded-full blur-2xl" />
                    </div>

                    {/* Form Side */}
                    <div className="order-1 lg:order-2">
                        <div className="mb-8">
                            <span className="text-corporate-blue font-medium text-sm uppercase tracking-wider">
                                Book An Appointment
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
                                Schedule Your Visit
                            </h2>
                            <p className="text-muted-foreground">
                                Fill out the form below and our team will get
                                back to you within 24 hours
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-5">
                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium">
                                        Full Name
                                    </Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            className="pl-10 h-12 rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">
                                        Email Address
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="pl-10 h-12 rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-sm font-medium">
                                    Phone Number
                                </Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+1 (555) 123-4567"
                                        className="pl-10 h-12 rounded-xl"
                                    />
                                </div>
                            </div>

                            {/* Reason & Physician Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">
                                        Reason for Visit
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="h-12 rounded-xl">
                                            <SelectValue placeholder="Select reason" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {reasons.map((reason) => (
                                                <SelectItem
                                                    key={reason.id}
                                                    value={reason.id}
                                                >
                                                    {reason.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">
                                        Select Physician
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="h-12 rounded-xl">
                                            <SelectValue placeholder="Choose doctor" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {physicians.map((doc) => (
                                                <SelectItem
                                                    key={doc.id}
                                                    value={doc.id}
                                                >
                                                    {doc.name} - {doc.specialty}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-corporate-blue hover:bg-corporate-blue/90 text-white rounded-xl h-12 mt-2"
                            >
                                <CalendarCheck className="w-5 h-5 mr-2" />
                                Request Appointment
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
