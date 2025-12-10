"use client";

/**
 * Topic Highlights Section
 * Bento grid layout with themed cards
 * Dark section with glowing effects
 */
export default function TopicHighlights() {
    // Topic cards configuration with varied sizes for bento layout
    const topics = [
        {
            title: "Vision 2030",
            subtitle: "Emergence of the Kingdom as a Global Financial Leader",
            icon: "🎯",
            size: "large",
        },
        {
            title: "Digital Transformation",
            subtitle: "The Foundational Platform for Achieving Business Agility",
            icon: "⚡",
            size: "medium",
        },
        {
            title: "Payments Today & Tomorrow",
            subtitle: "The Future of Digital Payments",
            icon: "💳",
            size: "medium",
        },
        {
            title: "Next-Gen Customer Experience",
            subtitle: "Providing a Seamless Banking Customer Experience",
            icon: "✨",
            size: "small",
        },
        {
            title: "Data & Analytics 360°",
            subtitle: "Complete Overview for Banks & Customers",
            icon: "📊",
            size: "small",
        },
        {
            title: "Open Banking",
            subtitle: "Bringing Legacy Banks and FinTechs Together",
            icon: "🤝",
            size: "small",
        },
        {
            title: "Cloud-Powered Agility",
            subtitle: "Key Enabler for Digital Transformation",
            icon: "☁️",
            size: "medium",
        },
        {
            title: "NBFI Evolution",
            subtitle: "Revolutionizing the Money Market in KSA",
            icon: "📈",
            size: "small",
        },
        {
            title: "Digital-Only Banks",
            subtitle: "The Rise of 'Invisible Banks' for Gen-Z",
            icon: "📱",
            size: "small",
        },
        {
            title: "Banking in the Metaverse",
            subtitle: "Experiential Banking - The Third World Banking",
            icon: "🌐",
            size: "medium",
        },
    ];

    return (
        <section id="topics" className="section-dark section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-gold)]/20 border border-[var(--primary-gold)]/30 rounded-full mb-6">
                        <span className="text-sm font-medium text-[var(--primary-gold)]">
                            Conference Topics
                        </span>
                    </div>
                    <h2 className="heading-section text-white mb-4">
                        Topic <span className="text-gradient">Highlights</span>
                    </h2>
                    <p className="text-slate-400">
                        Explore cutting-edge discussions on the technologies and strategies
                        shaping the future of banking in the Kingdom.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className={`card-dark group cursor-pointer relative overflow-hidden ${topic.size === "large"
                                    ? "lg:col-span-2 lg:row-span-2"
                                    : topic.size === "medium"
                                        ? "lg:col-span-2"
                                        : ""
                                }`}
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-gold)]/0 to-[var(--primary-gold)]/0 group-hover:from-[var(--primary-gold)]/5 group-hover:to-[var(--primary-gold)]/10 transition-all duration-500" />

                            <div className="relative z-10 h-full flex flex-col">
                                {/* Icon */}
                                <div
                                    className={`text-3xl mb-4 ${topic.size === "large" ? "text-5xl" : ""
                                        }`}
                                >
                                    {topic.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-end">
                                    <h3
                                        className={`font-bold text-white mb-2 group-hover:text-[var(--primary-gold)] transition-colors ${topic.size === "large"
                                                ? "text-2xl"
                                                : topic.size === "medium"
                                                    ? "text-xl"
                                                    : "text-lg"
                                            }`}
                                    >
                                        {topic.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {topic.subtitle}
                                    </p>
                                </div>

                                {/* Arrow indicator */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
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
                                            d="M7 17L17 7M17 7H7M17 7v10"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
