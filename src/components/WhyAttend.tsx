/**
 * Why Attend Section
 * Simple 3-column layout with the key benefits from the document
 */
export default function WhyAttend() {
    const benefits = [
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                </svg>
            ),
            title: "Knowledge & Insights",
            description:
                "Gain knowledge and insights from global industry experts.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
            title: "Networking",
            description: "Network with industry peers.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
            title: "Partnerships",
            description:
                "Discuss partnerships and collaboration opportunities.",
        },
    ];

    return (
        <section id="attend" className="section-dark section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-gold)]/20 border border-[var(--primary-gold)]/30 rounded-full mb-6">
                        <span className="text-sm font-medium text-[var(--primary-gold)]">
                            Benefits
                        </span>
                    </div>
                    <h2 className="heading-section text-white mb-4">
                        Why <span className="text-gradient">Attend?</span>
                    </h2>
                    <p className="text-slate-400">
                        Three key reasons to join the 4th Annual Future Banks Summit KSA 2023.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="card-glass group hover:bg-white/10 transition-all duration-300 text-center"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-[var(--primary-gold)]/20 flex items-center justify-center text-[var(--primary-gold)] mb-6 mx-auto group-hover:bg-[var(--primary-gold)] group-hover:text-white transition-all duration-300">
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
