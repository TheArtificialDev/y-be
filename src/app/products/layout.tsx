import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Products & Services | Y-Be',
  description: 'Discover our comprehensive suite of digital services: Web Development, Market Intelligence, Business Intelligence, SaaS Development, Digital Transformation, and Industry Research.',
  keywords: [
    'web development services',
    'market intelligence',
    'business intelligence',
    'SaaS development',
    'digital transformation',
    'industry research',
    'data-driven solutions',
    'competitive advantages'
  ],
  openGraph: {
    title: 'Products & Services | Y-Be',
    description: 'Engineering competitive advantages through our comprehensive digital services and solutions.',
    url: '/products',
  },
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
