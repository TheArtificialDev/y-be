import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Case Studies & Demo Sites | Y-Be',
  description: 'Explore our portfolio of successful projects and interactive demo sites showcasing our web development expertise and design capabilities.',
  keywords: [
    'case studies',
    'portfolio',
    'demo sites',
    'web development examples',
    'client projects',
    'design showcase',
    'y-be portfolio'
  ],
  openGraph: {
    title: 'Case Studies & Demo Sites | Y-Be',
    description: 'Discover how we engineer competitive advantages for our clients through real project examples and interactive demos.',
    url: '/case-studies',
  },
  alternates: {
    canonical: '/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
