import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationLd, websiteLd } from "@/components/seo/structuredData";
import { site } from "@/lib/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ITeS & BPO Services in India | Indus Valley Inc.",
    template: "%s | Indus Valley Inc.",
  },
  description:
    "Bangalore ITeS & BPO partner since 2003 — medical transcription, data entry, cleanup, back-office and call centre. SLA-backed accuracy for global clients.",
  alternates: { canonical: "/" },
  keywords: [
    "ITeS services India",
    "BPO company Bangalore",
    "medical transcription services",
    "data entry outsourcing",
    "data cleanup services",
    "back office support",
    "call centre India",
    "outsource data entry India",
    "Indus Valley Inc",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "ITeS & BPO Services in India | Indus Valley Inc.",
    description: site.description,
    images: [{ url: "/logo-full.svg", width: 310, height: 80, alt: "Indus Valley Inc." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indus Valley Inc.",
    description: site.description,
    images: ["/logo-full.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
