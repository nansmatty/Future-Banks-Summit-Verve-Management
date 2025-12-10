"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Statistics Section
 * Animated counters showing key metrics
 * Based on reference design with pie chart visual
 */
export default function Statistics() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Intersection observer for triggering animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Statistics data
    const stats = [
        {
            value: 83,
            suffix: "%",
            label: "of attendees",
            description: "influenced purchasing decisions",
            color: "var(--primary-gold)",
        },
        {
            value: 55,
            suffix: "%",
            label: "Final Decision Makers",
            description: "C-level executives and VPs",
            color: "#22C55E",
        },
        {
            value: 28,
            suffix: "%",
            label: "Influencers",
            description: "Directors and senior managers",
            color: "#3B82F6",
        },
        {
            value: 17,
            suffix: "%",
            label: "Evaluators",
            description: "Technical leads and specialists",
            color: "#8B5CF6",
        },
    ];

    return (
        <section ref={sectionRef} className="section-cream section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-gold)]/10 rounded-full mb-6">
                        <span className="text-sm font-medium text-[var(--primary-gold)]">
                            Key Statistics
                        </span>
                    </div>
                    <h2 className="heading-section mb-4">
                        Attendee <span className="text-gradient">Impact</span>
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        Our attendees are key decision-makers driving transformation in
                        their organizations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Pie Chart Visual */}
                    <div className="flex justify-center">
                        <div className="relative w-72 h-72 md:w-80 md:h-80">
                            {/* SVG Pie Chart */}
                            <svg
                                viewBox="0 0 100 100"
                                className="w-full h-full -rotate-90 transform"
                            >
                                {/* Background circle */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#E2E8F0"
                                    strokeWidth="20"
                                />

                                {/* Final Decision Makers - 55% */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#22C55E"
                                    strokeWidth="20"
                                    strokeDasharray={`${isVisible ? 55 * 2.51 : 0} 251.2`}
                                    strokeDashoffset="0"
                                    className="transition-all duration-1000 ease-out"
                                />

                                {/* Influencers - 28% */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#3B82F6"
                                    strokeWidth="20"
                                    strokeDasharray={`${isVisible ? 28 * 2.51 : 0} 251.2`}
                                    strokeDashoffset={`-${55 * 2.51}`}
                                    className="transition-all duration-1000 ease-out delay-200"
                                />

                                {/* Evaluators - 17% */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#8B5CF6"
                                    strokeWidth="20"
                                    strokeDasharray={`${isVisible ? 17 * 2.51 : 0} 251.2`}
                                    strokeDashoffset={`-${(55 + 28) * 2.51}`}
                                    className="transition-all duration-1000 ease-out delay-400"
                                />
                            </svg>

                            {/* Center Text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <AnimatedCounter
                                    value={83}
                                    suffix="%"
                                    isVisible={isVisible}
                                    className="text-4xl md:text-5xl font-bold text-slate-900"
                                />
                                <span className="text-sm text-slate-500 mt-1">
                                    Decision Power
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: stat.color }}
                                    />
                                    <span className="text-sm font-medium text-slate-500">
                                        {stat.label}
                                    </span>
                                </div>
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    isVisible={isVisible}
                                    className="text-3xl md:text-4xl font-bold text-slate-900"
                                />
                                <p className="text-sm text-slate-500 mt-2">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 bg-white rounded-2xl shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                A Highly Focused Initiative
                            </h3>
                            <p className="text-slate-600 max-w-2xl">
                                The Future Banks Summit carefully cherry-picks key
                                decision-making profiles from Saudi&apos;s leading public & private
                                organizations that are actively seeking cutting-edge solutions.
                            </p>
                        </div>
                        <a href="#register" className="btn-primary shrink-0">
                            Join Them
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
            </div>
        </section>
    );
}

/**
 * Animated Counter Component
 * Smoothly counts up to target value
 */
function AnimatedCounter({
    value,
    suffix = "",
    isVisible,
    className,
}: {
    value: number;
    suffix?: string;
    isVisible: boolean;
    className?: string;
}) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 1500; // Animation duration in ms
        const steps = 60;
        const stepDuration = duration / steps;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setDisplayValue(value);
                clearInterval(timer);
            } else {
                setDisplayValue(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <span className={className}>
            {displayValue}
            {suffix}
        </span>
    );
}
