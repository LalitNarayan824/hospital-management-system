import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { QuickActionGrid } from "@/components/home/quick-action-grid";
import { DepartmentsGrid } from "@/components/home/departments-grid";
import { SpecialtyServices } from "@/components/home/specialty-services";
import { AppointmentBooking } from "@/components/home/appointment-booking";
import { DoctorCarousel } from "@/components/home/doctor-carousel";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />

            <main className="flex-1">
                <HeroSection />
                <QuickActionGrid />
                <DepartmentsGrid />
                <SpecialtyServices />
                <AppointmentBooking />
                <DoctorCarousel />
            </main>

            <SiteFooter />
        </div>
    );
}
