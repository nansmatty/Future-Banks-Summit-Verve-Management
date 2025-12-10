/**
 * Speakers Section
 * Minimal placeholder grid with 4 speaker cards
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

                {/* Speakers Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="group">
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
        </section>
    );
}
