import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { FloatingBackground } from "@/components/DecorativeShapes";

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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        url: '/logo.png',
        color: '#D9BBA4',
      },
    ],
  },
  openGraph: {
    title: "Y-Be | Engineering Competitive Advantages",
    description: "We don&apos;t just build websites, we engineer competitive advantages through data-driven web solutions.",
    url: "/",
    siteName: "Y-Be",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Y-Be Logo',
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Y-Be | Engineering Competitive Advantages",
    description: "We don&apos;t just build websites, we engineer competitive advantages through data-driven web solutions.",
    creator: "@ybestudio",
    images: ['/logo.png'],
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
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D9BBA4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Y-Be" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0F1419" />
        <meta name="msapplication-TileImage" content="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${inter.variable} antialiased dark-theme text-yb-beige`}
      >
        <FloatingBackground />
        <div className="relative z-10">
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <PerformanceMonitor />
      </body>
    </html>
  );
}
