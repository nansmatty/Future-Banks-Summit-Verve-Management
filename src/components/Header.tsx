"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Header Component
 * Transparent navbar that becomes solid on scroll
 * Features logo, navigation links, and CTAs
 */
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Navigation links configuration
    const navLinks = [
        { href: "#overview", label: "Overview" },
        { href: "#topics", label: "Topics" },
        { href: "#speakers", label: "Speakers" },
        { href: "#agenda", label: "Agenda" },
        { href: "#register", label: "Register" },
        { href: "#faq", label: "FAQ" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="container-custom">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/fbs-logo.png"
                            alt="Future Banks Summit & Awards"
                            width={180}
                            height={60}
                            className="h-12 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-[var(--primary-gold)] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="#register"
                            className="btn-secondary text-sm py-2.5 px-5"
                        >
                            Become a Sponsor
                        </Link>
                        <Link href="#register" className="btn-primary text-sm py-2.5 px-5">
                            Register Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800 py-4">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base font-medium text-slate-300 hover:text-[var(--primary-gold)] transition-colors px-4 py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 px-4 pt-4 border-t border-slate-800">
                                <Link
                                    href="#register"
                                    className="btn-secondary text-center text-sm py-2.5"
                                >
                                    Become a Sponsor
                                </Link>
                                <Link
                                    href="#register"
                                    className="btn-primary text-center text-sm py-2.5"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
