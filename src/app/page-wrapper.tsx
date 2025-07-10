import type { Metadata } from "next";
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: "Y-Be | Engineering Competitive Advantages Through Data-Driven Web Solutions",
  description: "We don't just build websites, we engineer competitive advantages. Get competitive analysis, strategic web design, and data-driven optimization that puts you ahead.",
  keywords: ["competitive analysis", "web development", "SEO optimization", "data-driven design", "website strategy"],
  openGraph: {
    title: "Y-Be | Engineering Competitive Advantages Through Data-Driven Web Solutions",
    description: "We don't just build websites, we engineer competitive advantages. Get competitive analysis, strategic web design, and data-driven optimization that puts you ahead.",
    url: "https://ybe.studio",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />
}
