"use client";

import { useState } from "react";

/**
 * FAQ Section
 * Accordion layout with expandable questions
 * Light section with clean design
 */
export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // FAQ items
    const faqs = [
        {
            question: "Who should attend the Future Banks Summit?",
            answer:
                "The summit is designed for senior banking professionals including CIOs, CTOs, Chief Digital Officers, Heads of Technology, Marketing, Retail Banking, Corporate Banking, Customer Experience, Cards & Payments, Data & Analytics, and Governance & Compliance. It's ideal for decision-makers driving digital transformation in their organizations.",
        },
        {
            question: "Are group registrations available?",
            answer:
                "Yes! We offer special group registration packages for organizations sending multiple delegates. Contact our team at registrations@futurebanksummit.com for group pricing and packages. Groups of 5+ receive a 15% discount, and groups of 10+ receive a 25% discount.",
        },
        {
            question: "What is included with the delegate ticket?",
            answer:
                "Your delegate ticket includes full access to both days of the summit, all keynote sessions, panel discussions, workshops, and breakout sessions. It also includes networking lunches, refreshment breaks, the evening reception on Day 1, access to the Future Banks Awards ceremony, event materials, and a certificate of attendance.",
        },
        {
            question: "How do I become a sponsor?",
            answer:
                "We offer various sponsorship packages including Platinum, Gold, Silver, and Bronze tiers, each with different benefits and visibility options. To explore sponsorship opportunities, please contact our partnerships team at sponsors@futurebanksummit.com or fill out the registration form selecting 'Sponsor' as your attendance type.",
        },
        {
            question: "Is accommodation included with the ticket?",
            answer:
                "Accommodation is not included in the standard delegate ticket. However, we have negotiated special rates with the Riyadh Marriott Hotel for summit attendees. Details and booking codes will be shared upon registration confirmation.",
        },
        {
            question: "What are the COVID-19 safety measures in place?",
            answer:
                "The health and safety of our attendees is our top priority. We follow all local health guidelines and regulations. The venue is fully sanitized, and we encourage attendees to follow recommended health practices. Updated safety protocols will be shared closer to the event date.",
        },
        {
            question: "Can I get a refund if I cannot attend?",
            answer:
                "Cancellations made 30 days before the event are eligible for a full refund minus a processing fee. Cancellations made 15-30 days before receive a 50% refund. No refunds are available for cancellations made less than 15 days before the event. However, you may transfer your registration to a colleague at no additional cost.",
        },
        {
            question: "Will presentations be available after the event?",
            answer:
                "Yes, registered delegates will receive access to presentation materials and key takeaways after the event. Selected sessions may also be available as on-demand recordings for registered attendees.",
        },
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-light section-padding">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-gold)]/10 rounded-full mb-6">
                            <span className="text-sm font-medium text-[var(--primary-gold)]">
                                Questions?
                            </span>
                        </div>
                        <h2 className="heading-section mb-4">
                            Frequently Asked <span className="text-gradient">Questions</span>
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            Find answers to common questions about the Future Banks Summit.
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <h3 className="font-semibold text-slate-900 pr-4">
                                        {faq.question}
                                    </h3>
                                    <div
                                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                                ? "bg-[var(--primary-gold)] text-white rotate-180"
                                                : "bg-slate-100 text-slate-600"
                                            }`}
                                    >
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
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Help */}
                    <div className="mt-10 text-center p-6 bg-slate-50 rounded-2xl">
                        <h3 className="font-semibold text-slate-900 mb-2">
                            Still have questions?
                        </h3>
                        <p className="text-slate-600 mb-4">
                            Our team is here to help you with any inquiries.
                        </p>
                        <a
                            href="mailto:info@futurebanksummit.com"
                            className="btn-secondary inline-flex"
                        >
                            Contact Us
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
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
