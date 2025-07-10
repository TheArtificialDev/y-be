import type { Metadata } from "next";
import OurProcessPage from './OurProcessPage';

export const metadata: Metadata = {
  title: "Our Proven Process | Y-Be Engineering Competitive Advantages",
  description: "Our proven 4-phase process: Research & Analysis, Strategic Planning, Creative Development, and Technical Excellence. See how we engineer your competitive advantage.",
  keywords: ["web development process", "competitive analysis process", "strategic planning", "technical excellence"],
  openGraph: {
    title: "Our Proven Process | Y-Be Engineering Competitive Advantages",
    description: "Our proven 4-phase process: Research & Analysis, Strategic Planning, Creative Development, and Technical Excellence. See how we engineer your competitive advantage.",
    url: "https://ybe.studio/our-process",
    type: "website",
  },
};

export default function Page() {
  return <OurProcessPage />
}
