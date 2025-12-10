"use client";

import { useState } from "react";

/**
 * Agenda Section
 * Interactive accordion/timeline view
 * Shows Day 1 and Day 2 with expandable sessions
 */
export default function Agenda() {
    const [activeDay, setActiveDay] = useState<1 | 2>(1);
    const [expandedSession, setExpandedSession] = useState<string | null>(null);

    // Agenda data structure
    const agendaData = {
        day1: {
            date: "September 11, 2023",
            title: "Day 1 - Insights & Innovation",
            sessions: [
                {
                    id: "1-1",
                    time: "08:30 - 09:00",
                    title: "Registration & Networking Breakfast",
                    type: "networking",
                    description:
                        "Welcome delegates with refreshments and early networking opportunities.",
                },
                {
                    id: "1-2",
                    time: "09:00 - 09:30",
                    title: "Opening Keynote: Vision 2030 and the Future of Banking",
                    type: "keynote",
                    speaker: "Guest of Honor",
                    description:
                        "Setting the stage for the Kingdom's journey towards becoming a global financial hub.",
                },
                {
                    id: "1-3",
                    time: "09:30 - 10:30",
                    title: "Panel Discussion: Digital Transformation in Saudi Banks",
                    type: "panel",
                    speakers: "Industry Leaders Panel",
                    description:
                        "Exploring how Saudi banks are reimagining their digital infrastructure and customer experience.",
                },
                {
                    id: "1-4",
                    time: "10:30 - 11:00",
                    title: "Networking Break",
                    type: "break",
                },
                {
                    id: "1-5",
                    time: "11:00 - 11:45",
                    title: "The Rise of Open Banking: Collaboration is Key",
                    type: "presentation",
                    speaker: "Banking Innovation Expert",
                    description:
                        "How open APIs and partnerships are creating new value propositions.",
                },
                {
                    id: "1-6",
                    time: "11:45 - 12:30",
                    title: "Payments Revolution: From Cash to Crypto",
                    type: "presentation",
                    speaker: "Payments Industry Leader",
                    description:
                        "Examining the latest trends in digital payments and their impact on the Saudi economy.",
                },
                {
                    id: "1-7",
                    time: "12:30 - 14:00",
                    title: "Networking Lunch",
                    type: "networking",
                },
                {
                    id: "1-8",
                    time: "14:00 - 15:00",
                    title: "Breakout Session A: AI & Machine Learning in Banking",
                    type: "breakout",
                    description:
                        "Hands-on exploration of AI use cases in fraud detection, customer service, and risk management.",
                },
                {
                    id: "1-9",
                    time: "15:00 - 16:00",
                    title: "Breakout Session B: Cybersecurity Best Practices",
                    type: "breakout",
                    description:
                        "Security frameworks and strategies for protecting digital banking infrastructure.",
                },
                {
                    id: "1-10",
                    time: "16:00 - 17:00",
                    title: "Fireside Chat: The CEO Perspective",
                    type: "keynote",
                    speaker: "Bank CEO",
                    description:
                        "Candid conversation on leadership challenges in the era of digital disruption.",
                },
            ],
        },
        day2: {
            date: "September 12, 2023",
            title: "Day 2 - Strategy & Awards",
            sessions: [
                {
                    id: "2-1",
                    time: "09:00 - 09:30",
                    title: "Day 2 Opening Remarks",
                    type: "keynote",
                    speaker: "Summit Host",
                },
                {
                    id: "2-2",
                    time: "09:30 - 10:30",
                    title: "Workshop: Building Customer-Centric Digital Banks",
                    type: "workshop",
                    description:
                        "Interactive workshop on designing seamless customer journeys.",
                },
                {
                    id: "2-3",
                    time: "10:30 - 11:00",
                    title: "Networking Break",
                    type: "break",
                },
                {
                    id: "2-4",
                    time: "11:00 - 12:00",
                    title: "Panel: The Future of NBFIs in Saudi Arabia",
                    type: "panel",
                    speakers: "NBFI Leaders",
                    description:
                        "Discussing the evolving role of non-bank financial institutions.",
                },
                {
                    id: "2-5",
                    time: "12:00 - 12:45",
                    title: "Banking in the Metaverse: Reality or Hype?",
                    type: "presentation",
                    speaker: "Emerging Tech Specialist",
                    description:
                        "Exploring the potential of virtual and augmented reality in banking.",
                },
                {
                    id: "2-6",
                    time: "12:45 - 14:00",
                    title: "Networking Lunch",
                    type: "networking",
                },
                {
                    id: "2-7",
                    time: "14:00 - 15:00",
                    title: "Data Analytics: 360° Customer Insights",
                    type: "presentation",
                    speaker: "Data Science Lead",
                    description:
                        "Leveraging data to understand and serve customers better.",
                },
                {
                    id: "2-8",
                    time: "15:00 - 16:00",
                    title: "Cloud Migration Strategies for Banks",
                    type: "workshop",
                    speaker: "Cloud Architecture Expert",
                    description:
                        "Best practices for secure and scalable cloud adoption.",
                },
                {
                    id: "2-9",
                    time: "16:00 - 17:30",
                    title: "Future Banks Awards Ceremony",
                    type: "awards",
                    description:
                        "Celebrating excellence and innovation in Saudi banking.",
                },
                {
                    id: "2-10",
                    time: "17:30 - 19:00",
                    title: "Closing Reception & Networking",
                    type: "networking",
                    description: "Farewell cocktails and continued networking.",
                },
            ],
        },
    };

    // Get session type styling
    const getSessionStyle = (type: string) => {
        const styles: Record<string, { bg: string; text: string; label: string }> =
        {
            keynote: {
                bg: "bg-amber-100",
                text: "text-amber-700",
                label: "Keynote",
            },
            panel: {
                bg: "bg-blue-100",
                text: "text-blue-700",
                label: "Panel",
            },
            presentation: {
                bg: "bg-purple-100",
                text: "text-purple-700",
                label: "Presentation",
            },
            workshop: {
                bg: "bg-green-100",
                text: "text-green-700",
                label: "Workshop",
            },
            breakout: {
                bg: "bg-teal-100",
                text: "text-teal-700",
                label: "Breakout",
            },
            networking: {
                bg: "bg-pink-100",
                text: "text-pink-700",
                label: "Networking",
            },
            break: {
                bg: "bg-slate-100",
                text: "text-slate-600",
                label: "Break",
            },
            awards: {
                bg: "bg-[var(--primary-gold)]/20",
                text: "text-[var(--primary-gold-dark)]",
                label: "Awards",
            },
        };
        return styles[type] || styles.presentation;
    };

    const currentDay = activeDay === 1 ? agendaData.day1 : agendaData.day2;

    return (
        <section id="agenda" className="section-light section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-gold)]/10 rounded-full mb-6">
                        <span className="text-sm font-medium text-[var(--primary-gold)]">
                            Schedule
                        </span>
                    </div>
                    <h2 className="heading-section mb-4">
                        Event <span className="text-gradient">Agenda</span>
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        Two days of insights, networking, and awards celebrating innovation
                        in Saudi banking.
                    </p>
                </div>

                {/* Day Tabs */}
                <div className="flex justify-center gap-4 mb-10">
                    {[1, 2].map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day as 1 | 2)}
                            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeDay === day
                                    ? "bg-[var(--primary-gold)] text-slate-900 shadow-lg shadow-[var(--primary-gold)]/30"
                                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                                }`}
                        >
                            <span className="block text-sm opacity-70">
                                {day === 1 ? "September 11" : "September 12"}
                            </span>
                            <span className="block">Day {day}</span>
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

                        {/* Sessions */}
                        <div className="space-y-4">
                            {currentDay.sessions.map((session) => {
                                const style = getSessionStyle(session.type);
                                const isExpanded = expandedSession === session.id;

                                return (
                                    <div key={session.id} className="relative pl-12 md:pl-20">
                                        {/* Timeline Dot */}
                                        <div
                                            className={`absolute left-2 md:left-6 w-4 h-4 rounded-full border-4 border-white shadow-sm ${session.type === "awards"
                                                    ? "bg-[var(--primary-gold)]"
                                                    : "bg-slate-400"
                                                }`}
                                        />

                                        {/* Session Card */}
                                        <div
                                            className={`bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 ${isExpanded ? "shadow-lg" : "hover:shadow-md"
                                                }`}
                                        >
                                            <button
                                                onClick={() =>
                                                    setExpandedSession(isExpanded ? null : session.id)
                                                }
                                                className="w-full p-4 md:p-5 text-left flex items-start gap-4"
                                            >
                                                {/* Time */}
                                                <div className="shrink-0 text-sm font-medium text-slate-500 w-24 md:w-32">
                                                    {session.time}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                                        <span
                                                            className={`text-xs font-medium px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}
                                                        >
                                                            {style.label}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-semibold text-slate-900">
                                                        {session.title}
                                                    </h3>
                                                    {(session as { speaker?: string }).speaker && (
                                                        <p className="text-sm text-[var(--primary-gold)] mt-1">
                                                            {(session as { speaker?: string }).speaker}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Expand Icon */}
                                                {session.description && (
                                                    <svg
                                                        className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""
                                                            }`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                )}
                                            </button>

                                            {/* Expanded Content */}
                                            {isExpanded && session.description && (
                                                <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
                                                    <div className="pl-28 md:pl-36 border-t border-slate-100 pt-4">
                                                        <p className="text-slate-600 text-sm leading-relaxed">
                                                            {session.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
