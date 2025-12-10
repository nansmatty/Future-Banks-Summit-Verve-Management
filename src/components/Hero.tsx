"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Hero Section Component
 * Clean hero with event title, date, tagline, and CTAs
 * Features gradient background with subtle animation
 */
export default function Hero() {
    // Countdown timer state
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Calculate countdown to event date (September 11, 2023)
    useEffect(() => {
        const eventDate = new Date("2023-09-11T09:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance > 0) {
                setCountdown({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor(
                        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    ),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--primary-gold)]/10 rounded-full blur-3xl animate-float" />
                <div
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--primary-gold)]/5 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "-3s" }}
                />

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(rgba(212, 168, 83, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(212, 168, 83, 0.3) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="container-custom relative z-10 pt-24 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Pre-title Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-gold)]/10 border border-[var(--primary-gold)]/20 rounded-full mb-8 animate-fade-in">
                        <span className="w-2 h-2 bg-[var(--primary-gold)] rounded-full animate-pulse" />
                        <span className="text-sm text-[var(--primary-gold)] font-medium">
                            4th Annual Edition • September 2023
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="heading-display text-white mb-6 animate-fade-in animate-delay-1">
                        Future Banks
                        <span className="block text-gradient">Summit & Awards</span>
                    </h1>

                    {/* Date and Location */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-6 animate-fade-in animate-delay-2">
                        <div className="flex items-center gap-2 text-slate-300">
                            <svg
                                className="w-5 h-5 text-[var(--primary-gold)]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="font-medium">September 11–12, 2023</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                            <svg
                                className="w-5 h-5 text-[var(--primary-gold)]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span className="font-medium">Riyadh Marriott Hotel</span>
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in animate-delay-2">
                        Digital Innovations Transforming the Kingdom&apos;s Banking Landscape
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in animate-delay-3">
                        <Link href="#register" className="btn-primary text-base px-8 py-4">
                            Register Now
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                        <Link href="#register" className="btn-secondary text-base px-8 py-4">
                            Become a Sponsor
                        </Link>
                    </div>

                    {/* Countdown Timer */}
                    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto animate-fade-in animate-delay-4">
                        {[
                            { value: countdown.days, label: "Days" },
                            { value: countdown.hours, label: "Hours" },
                            { value: countdown.minutes, label: "Mins" },
                            { value: countdown.seconds, label: "Secs" },
                        ].map((item) => (
                            <div key={item.label} className="card-glass text-center py-4">
                                <div className="text-2xl md:text-3xl font-bold text-white">
                                    {String(item.value).padStart(2, "0")}
                                </div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
