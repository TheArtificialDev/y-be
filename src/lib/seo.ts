import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  canonicalUrl?: string
  noindex?: boolean
  structuredData?: object
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  ogTitle,
  ogDescription,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
  structuredData,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ybeagency.com'
  
  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: ogTitle || title,
        },
      ],
      type: ogType,
      siteName: 'Y-Be Agency',
      locale: 'en_US',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || title,
      description: ogDescription || description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
      creator: '@ybeagency',
      site: '@ybeagency',
    },
    
    alternates: canonicalUrl ? {
      canonical: canonicalUrl,
    } : undefined,
  }

  // Add structured data if provided
  if (structuredData) {
    metadata.other = {
      'application/ld+json': JSON.stringify(structuredData),
    }
  }

  return metadata
}

// Common structured data schemas
export const createOrganizationSchema = (baseUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Y-Be Agency',
  alternateName: 'Your Business Engine',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: 'Data-driven web development agency specializing in competitive analysis and performance optimization',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    email: 'hello@ybeagency.com',
  },
  sameAs: [
    'https://linkedin.com/company/ybeagency',
    'https://twitter.com/ybeagency',
    'https://github.com/ybeagency',
  ],
})

export const createWebsiteSchema = (baseUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Y-Be Agency',
  alternateName: 'Your Business Engine',
  url: baseUrl,
  description: 'Data-driven web development agency specializing in competitive analysis and performance optimization',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${baseUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
})

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const createServiceSchema = (baseUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development & Digital Strategy',
  provider: {
    '@type': 'Organization',
    name: 'Y-Be Agency',
    url: baseUrl,
  },
  description: 'Comprehensive web development services including competitive analysis, performance optimization, and strategic digital solutions',
  serviceType: 'Web Development',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Competitive Analysis',
          description: 'In-depth analysis of competitors to identify opportunities and advantages',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Performance Optimization',
          description: 'Website speed and performance optimization for better user experience',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web Development',
          description: 'Tailored web solutions built with modern technologies and best practices',
        },
      },
    ],
  },
})
