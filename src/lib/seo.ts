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
  ogImage = '/logo.png',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
  structuredData,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://y-be.tech'
  
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
      siteName: 'Y-Be',
      locale: 'en_US',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || title,
      description: ogDescription || description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
      creator: '@ybestudio',
      site: '@ybestudio',
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
  name: 'Y-Be',
  alternateName: 'Your Business Engine',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: 'Engineering competitive advantages through data-driven web solutions, market intelligence, and digital transformation services',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@y-be.tech',
  },
  sameAs: [
    'https://linkedin.com/company/y-be',
    'https://twitter.com/ybestudio',
    'https://github.com/TheArtificialDev',
  ],
})

export const createWebsiteSchema = (baseUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Y-Be',
  alternateName: 'Your Business Engine',
  url: baseUrl,
  description: 'Engineering competitive advantages through data-driven web solutions, market intelligence, and digital transformation services',
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
  name: 'Web Development & Digital Transformation',
  provider: {
    '@type': 'Organization',
    name: 'Y-Be',
    url: baseUrl,
  },
  description: 'Comprehensive digital services including web development, market intelligence, business intelligence, SaaS development, and digital transformation',
  serviceType: 'Digital Services',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Custom web development solutions with modern technologies and performance optimization',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Market Intelligence',
          description: 'Strategic market analysis and competitive intelligence for data-driven decision making',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Transformation',
          description: 'End-to-end digital transformation services to modernize business operations',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SaaS Development',
          description: 'Custom Software as a Service development and implementation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Intelligence',
          description: 'Data analytics and business intelligence solutions for informed decision making',
        },
      },
    ],
  },
})
