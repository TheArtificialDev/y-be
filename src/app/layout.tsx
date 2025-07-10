import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { RandomDecorativeShapes } from "@/components/DecorativeShapes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Premium serif font for headings (similar to Truetypewriter/Metamorphous)
const playfairDisplay = Playfair_Display({
  variable: "--font-heading-custom",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Modern sans-serif for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Y-Be | Engineering Competitive Advantages",
  description: "We don&apos;t just build websites, we engineer competitive advantages through data-driven web solutions.",
  keywords: ["web development", "competitive analysis", "SEO", "data-driven design", "website optimization"],
  authors: [{ name: "Y-Be Team" }],
  creator: "Y-Be",
  publisher: "Y-Be",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ybe.studio'),
  openGraph: {
    title: "Y-Be | Engineering Competitive Advantages",
    description: "We don&apos;t just build websites, we engineer competitive advantages through data-driven web solutions.",
    url: "/",
    siteName: "Y-Be",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Y-Be | Engineering Competitive Advantages",
    description: "We don&apos;t just build websites, we engineer competitive advantages through data-driven web solutions.",
    creator: "@ybestudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${inter.variable} antialiased dark-theme bg-yb-navy text-yb-beige`}
      >
        <RandomDecorativeShapes />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <PerformanceMonitor />
      </body>
    </html>
  );
}
