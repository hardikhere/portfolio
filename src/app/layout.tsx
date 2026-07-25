import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EMAIL, GITHUB_URL, MEDIUM_URL, X_URL } from "@/lib/links";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://portfolio-7oqp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Hardik Khanchandani — Senior React Native Engineer",
  description:
    "Portfolio of Hardik Khanchandani: mobile engineering work, writing, and photography.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hardik Khanchandani",
  jobTitle: "Senior React Native Engineer",
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [GITHUB_URL, MEDIUM_URL, X_URL],
  worksFor: {
    "@type": "Organization",
    name: "Vybout",
  },
  alumniOf: [
    { "@type": "Organization", name: "Zepto" },
    { "@type": "Organization", name: "Unacademy" },
    { "@type": "Organization", name: "Mosaic Wellness" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
