import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font with Latin subset
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// SEO Metadata for the conference website
export const metadata: Metadata = {
  title: "4th Annual Future Banks Summit & Awards 2023 | Riyadh",
  description:
    "Join the 4th Annual Future Banks Summit & Awards on September 11-12, 2023 at Riyadh Marriott Hotel. Explore digital innovations transforming the Kingdom's banking landscape.",
  keywords: [
    "Future Banks Summit",
    "Banking Conference",
    "Saudi Arabia",
    "Riyadh",
    "Digital Banking",
    "FinTech",
    "Vision 2030",
    "Financial Innovation",
    "Banking Awards",
  ],
  authors: [{ name: "Future Banks Summit" }],
  openGraph: {
    title: "4th Annual Future Banks Summit & Awards 2023",
    description:
      "Digital Innovations Transforming the Kingdom's Banking Landscape",
    type: "website",
    locale: "en_US",
    url: "https://ksa.futurebanksummit.com",
    siteName: "Future Banks Summit KSA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Future Banks Summit 2023",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4th Annual Future Banks Summit & Awards 2023",
    description:
      "Digital Innovations Transforming the Kingdom's Banking Landscape",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
