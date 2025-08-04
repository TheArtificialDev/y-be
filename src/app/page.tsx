import type { Metadata } from "next";
import { generateSEOMetadata, createOrganizationSchema, createWebsiteSchema, createServiceSchema } from '@/lib/seo'
import HomePage from './HomePage';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://y-be.tech'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Y-Be | Engineering Competitive Advantages',
  description: 'We don\'t just build websites, we engineer competitive advantages through data-driven web solutions, market intelligence, and digital transformation services.',
  keywords: [
    'web development',
    'competitive advantages',
    'market intelligence',
    'business intelligence',
    'digital transformation',
    'SaaS development',
    'industry research',
    'data-driven solutions',
    'performance optimization',
    'y-be.tech',
    'engineering competitive advantages'
  ],
  ogTitle: 'Y-Be | Engineering Competitive Advantages',
  ogDescription: 'Engineering competitive advantages through data-driven web solutions, market intelligence, and digital transformation services.',
  canonicalUrl: baseUrl,
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      createOrganizationSchema(baseUrl),
      createWebsiteSchema(baseUrl),
      createServiceSchema(baseUrl),
    ],
  },
})

export default function Page() {
  return <HomePage />
}
