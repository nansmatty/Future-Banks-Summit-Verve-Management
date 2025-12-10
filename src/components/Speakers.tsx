"use client";

/**
 * Speakers Section
 * Horizontal scrolling carousel with speaker cards
 * Placeholder images with gradient overlays (inspired by Concept B)
 */
export default function Speakers() {
    // Placeholder speaker data
    const speakers = [
        {
            name: "Ahmed Al-Rashid",
            title: "Chief Digital Officer",
            company: "Saudi National Bank",
            gradient: "from-amber-400 to-orange-500",
        },
        {
            name: "Sarah Al-Mahmoud",
            title: "Head of Innovation",
            company: "Al Rajhi Bank",
            gradient: "from-emerald-400 to-teal-500",
        },
        {
            name: "Mohammed Hassan",
            title: "CTO",
            company: "Riyad Bank",
            gradient: "from-blue-400 to-indigo-500",
        },
        {
            name: "Fatima Al-Zahrani",
            title: "VP Digital Banking",
            company: "Banque Saudi Fransi",
            gradient: "from-purple-400 to-pink-500",
        },
        {
            name: "Khalid Ibrahim",
            title: "Head of FinTech",
            company: "SAMA",
            gradient: "from-rose-400 to-red-500",
        },
        {
            name: "Nora Al-Otaibi",
            title: "Director of Strategy",
            company: "Bank AlBilad",
            gradient: "from-cyan-400 to-blue-500",
        },
    ];

    return (
        <section id="speakers" className="section-cream section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-gold)]/10 rounded-full mb-6">
                        <span className="text-sm font-medium text-[var(--primary-gold)]">
                            Expert Insights
                        </span>
                    </div>
                    <h2 className="heading-section mb-4">
                        Featured <span className="text-gradient">Speakers</span>
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        Learn from industry leaders and visionaries who are shaping the
                        future of banking in Saudi Arabia.
                    </p>
                </div>

                {/* Speakers Carousel */}
                <div className="relative">
                    {/* Horizontal Scroll Container */}
                    <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 xl:grid-cols-6 lg:overflow-visible">
                        {speakers.map((speaker, index) => (
                            <div
                                key={index}
                                className="snap-start shrink-0 w-64 lg:w-auto group"
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                                    {/* Image Placeholder with Gradient */}
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${speaker.gradient}`}
                                        />

                                        {/* Placeholder Avatar Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg
                                                className="w-24 h-24 text-white/30"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>

                                        {/* Overlay on Hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>

                                    {/* Speaker Info */}
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg text-slate-900 leading-tight">
                                            {speaker.name}
                                        </h3>
                                        <p className="text-sm text-[var(--primary-gold)] font-medium mt-1">
                                            {speaker.title}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            {speaker.company}
                                        </p>
                                    </div>

                                    {/* Decorative Line */}
                                    <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className="text-center mt-10">
                    <button className="btn-secondary">
                        View All Speakers
                        <svg
                            className="w-4 h-4"
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
                    </button>
                </div>
            </div>
        </section>
    );
}
