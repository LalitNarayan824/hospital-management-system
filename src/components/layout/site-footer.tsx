import Link from "next/link";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    MapPin,
    Phone,
    Mail,
    Stethoscope,
} from "lucide-react";

const footerLinks = {
    community: {
        title: "Community",
        links: [
            { label: "Health Blog", href: "/blog" },
            { label: "Events", href: "/events" },
            { label: "Wellness Programs", href: "/wellness" },
            { label: "Support Groups", href: "/support" },
        ],
    },
    about: {
        title: "About",
        links: [
            { label: "Our Story", href: "/about" },
            { label: "Leadership Team", href: "/about/leadership" },
            { label: "Careers", href: "/careers" },
            { label: "Newsroom", href: "/news" },
        ],
    },
    support: {
        title: "Support",
        links: [
            { label: "Contact Us", href: "/contact" },
            { label: "FAQ", href: "/faq" },
            { label: "Patient Portal Help", href: "/help/portal" },
            { label: "Billing Questions", href: "/billing" },
        ],
    },
    legal: {
        title: "Trust & Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "HIPAA Notice", href: "/hipaa" },
            { label: "Accessibility", href: "/accessibility" },
        ],
    },
};

const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function SiteFooter() {
    return (
        <footer className="bg-navy text-navy-foreground">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-corporate-blue flex items-center justify-center">
                                <Stethoscope className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="font-bold text-lg text-white">
                                    MedCare
                                </span>
                                <span className="text-xs text-white/60 block -mt-1">
                                    Hospital
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-white/70 mb-6 leading-relaxed">
                            Providing compassionate healthcare and cutting-edge
                            medical services to our community since 1985.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 text-corporate-blue" />
                                <span className="text-white/70">
                                    123 Healthcare Avenue,
                                    <br />
                                    Medical District, MD 12345
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-corporate-blue" />
                                <span className="text-white/70">
                                    +1 (555) 123-4567
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-corporate-blue" />
                                <span className="text-white/70">
                                    info@medcare.hospital
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-white mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-corporate-blue transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-white/60">
                            © {new Date().getFullYear()} MedCare Hospital. All
                            rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-corporate-blue transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
