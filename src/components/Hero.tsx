import Link from "next/link";

/**
 * Hero Section Component
 * Clean hero with event title, date, tagline, and CTA
 * Features gradient background with subtle animation
 */
export default function Hero() {
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
                    <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in animate-delay-3">
                        <Link href="#overview" className="btn-primary text-base px-8 py-4">
                            Learn More
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
                        <Link href="#speakers" className="btn-secondary text-base px-8 py-4">
                            View Speakers
                        </Link>
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
