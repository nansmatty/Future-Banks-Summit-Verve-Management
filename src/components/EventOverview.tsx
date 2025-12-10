"use client";

import Image from "next/image";

/**
 * Event Overview Section
 * Split layout with text content on left and image on right
 * Cream background section following the hybrid design
 */
export default function EventOverview() {
    return (
        <section id="overview" className="section-cream section-padding">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        {/* Section Label */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-gold)]/10 rounded-full mb-6">
                            <span className="text-sm font-medium text-[var(--primary-gold)]">
                                About The Summit
                            </span>
                        </div>

                        <h2 className="heading-section mb-6">
                            Reshaping the Future of{" "}
                            <span className="text-gradient">Banking in KSA</span>
                        </h2>

                        <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                The banking industry worldwide is undergoing phenomenal change,
                                giving the banks an opportunity to relook into their existing
                                business models and take a huge leap towards the future. The
                                shift in consumers&apos; digital experience, adoption of next-gen
                                technologies, transformation of customer service to customer
                                engagement, mobile workforce with a need to &apos;right-size&apos; the
                                branch network are all opportunities for regional banks to seize
                                and accelerate the shift to digital.
                            </p>

                            <p>
                                The 4th Annual Future Banks Summit KSA 2023 will showcase the
                                latest innovations and practical case studies, along with
                                interactive panel discussions designed to guide the banking
                                sector in KSA in identifying the right strategies to overcome
                                long-standing resistance and be future-ready!
                            </p>

                            <p>
                                An exciting and timely conference is on its way, discussing the
                                future of the financial industry in KSA driven by innovation and
                                digital advancements, with the adoption of technologies such as
                                AI, digital transformation, digital banking, banking in the
                                metaverse, intelligent automation, regtech, data analytics,
                                cloud migration, cyber security, digital payments models, along
                                with tech-driven redefined business continuity planning
                                strategies.
                            </p>
                        </div>

                        {/* Key Points */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-8">
                            {[
                                { number: "50+", label: "Industry Speakers" },
                                { number: "500+", label: "Attendees Expected" },
                                { number: "2", label: "Days of Insights" },
                                { number: "20+", label: "Panel Sessions" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                                >
                                    <div className="text-2xl font-bold text-[var(--primary-gold)]">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-[var(--text-secondary)]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder gradient for image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
                                {/* Decorative elements to represent city/banking imagery */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <svg
                                            className="w-24 h-24 text-[var(--primary-gold)]/30 mx-auto mb-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                        </svg>
                                        <p className="text-slate-500 text-sm">
                                            Riyadh Marriott Hotel
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[var(--primary-gold)] rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">
                                        Vision 2030
                                    </div>
                                    <div className="text-xs text-slate-500">Aligned Event</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
