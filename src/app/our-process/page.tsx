import { Metadata } from 'next'
import { generateSEOMetadata, createBreadcrumbSchema, createServiceSchema } from '@/lib/seo'
import OurProcessPage from './OurProcessPage'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ybeagency.com'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Our Process - Data-Driven Web Development Methodology | Y-Be Agency',
  description: 'Discover our comprehensive 6-step process for creating competitive web solutions: Research, Analysis, Planning, Creative Design, Technical Development, and Optimization.',
  keywords: [
    'web development process',
    'competitive analysis methodology',
    'strategic web design',
    'performance optimization',
    'user experience design',
    'technical SEO',
    'conversion optimization',
    'data-driven development'
  ],
  ogTitle: 'Our Data-Driven Web Development Process - Y-Be Agency',
  ogDescription: 'See how our 6-step methodology transforms competitive insights into high-performing websites that drive business growth.',
  canonicalUrl: `${baseUrl}/our-process`,
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      createBreadcrumbSchema([
        { name: 'Home', url: baseUrl },
        { name: 'Our Process', url: `${baseUrl}/our-process` },
      ]),
      createServiceSchema(baseUrl),
    ],
  },
})

export default function Page() {
  return <OurProcessPage />
}
