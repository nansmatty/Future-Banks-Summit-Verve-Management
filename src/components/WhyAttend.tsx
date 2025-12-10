"use client";

/**
 * Why Attend Section
 * 3-column layout with icons
 * Light section highlighting key benefits
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
            title: "Industry Insights",
            description:
                "Gain knowledge and insights from top industry leaders and experts from across the globe.",
            points: [
                "Latest trends in digital banking",
                "Practical case studies",
                "Future-ready strategies",
                "Vision 2030 alignment",
            ],
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
            title: "Networking Opportunities",
            description:
                "Network with industry peers in a solution-oriented environment designed for meaningful connections.",
            points: [
                "500+ industry professionals",
                "Dedicated networking sessions",
                "One-on-one meeting opportunities",
                "Evening reception events",
            ],
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
            title: "Partnership Building",
            description:
                "Discuss significant partnerships and collaborations with industry leaders to drive innovation.",
            points: [
                "Meet solution providers",
                "Explore technology partnerships",
                "Connect with FinTech innovators",
                "Build lasting relationships",
            ],
        },
    ];

    return (
        <section className="section-dark section-padding overflow-hidden">
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
                        The 4th Annual Future Banks Summit KSA 2023 will highlight the
                        enabling role of digitalization in reshaping the future of banking.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="card-glass group hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-[var(--primary-gold)]/20 flex items-center justify-center text-[var(--primary-gold)] mb-6 group-hover:bg-[var(--primary-gold)] group-hover:text-white transition-all duration-300">
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {benefit.description}
                            </p>

                            {/* Points */}
                            <ul className="space-y-3">
                                {benefit.points.map((point, pointIndex) => (
                                    <li
                                        key={pointIndex}
                                        className="flex items-center gap-3 text-sm text-slate-300"
                                    >
                                        <svg
                                            className="w-4 h-4 text-[var(--primary-gold)] shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-slate-400 mb-6">
                        Ready to innovate and join the ranks of the brightest minds in the
                        industry?
                    </p>
                    <a href="#register" className="btn-primary">
                        Register Today
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
                    </a>
                </div>
            </div>
        </section>
    );
}
