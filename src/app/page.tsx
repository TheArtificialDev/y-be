import type { Metadata } from "next";
import { generateSEOMetadata, createOrganizationSchema, createWebsiteSchema } from '@/lib/seo'
import HomePage from './HomePage';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ybeagency.com'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Y-Be Agency - Data-Driven Web Development & Competitive Analysis',
  description: 'We don\'t just build websites, we engineer competitive advantages. Get data-driven web solutions that position you ahead of the competition.',
  keywords: [
    'web development',
    'competitive analysis',
    'performance optimization',
    'digital strategy',
    'SEO',
    'web design',
    'business intelligence',
    'data-driven development',
    'conversion optimization',
    'user experience'
  ],
  ogTitle: 'Y-Be Agency - Engineer Your Competitive Advantage',
  ogDescription: 'Data-driven web development that powers innovation and growth. Discover how we analyze your competition and build solutions that win.',
  canonicalUrl: baseUrl,
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      createOrganizationSchema(baseUrl),
      createWebsiteSchema(baseUrl),
    ],
  },
})

export default function Page() {
  return <HomePage />
}
