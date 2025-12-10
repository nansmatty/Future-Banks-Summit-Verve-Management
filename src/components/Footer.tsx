import Link from "next/link";

/**
 * Footer Component
 * Clean footer with brand, links, and contact info
 */
export default function Footer() {
    // Quick links
    const quickLinks = [
        { label: "Overview", href: "#overview" },
        { label: "Topics", href: "#topics" },
        { label: "Speakers", href: "#speakers" },
        { label: "Why Attend", href: "#why-attend" },
    ];

    // Social links
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://linkedin.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
        },
        {
            name: "Twitter",
            href: "https://twitter.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="bg-slate-900 text-white">
            {/* Main Footer Content */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white leading-tight">
                                    Future Banks
                                </span>
                                <span className="text-sm text-[var(--primary-gold)] font-medium tracking-wider uppercase">
                                    Summit & Awards
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
                            The 4th Annual Future Banks Summit KSA 2023 brings together
                            banking leaders to explore digital innovations transforming the
                            Kingdom&apos;s banking landscape.
                        </p>

                        {/* Event Date Badge */}
                        <div className="inline-flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-lg">
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
                            <span className="text-white font-medium">
                                September 11–12, 2023
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-[var(--primary-gold)] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Contact</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:info@futurebanksummit.com"
                                className="flex items-center gap-2 text-slate-400 hover:text-[var(--primary-gold)] transition-colors text-sm"
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
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                info@futurebanksummit.com
                            </a>
                            <a
                                href="tel:+966112345678"
                                className="flex items-center gap-2 text-slate-400 hover:text-[var(--primary-gold)] transition-colors text-sm"
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
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                +966 11 234 5678
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-slate-500 text-sm text-center md:text-left">
                            © 2023 Future Banks Summit. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[var(--primary-gold)] hover:text-white transition-all"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
