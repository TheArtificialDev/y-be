import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://y-be.tech'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/_next/', '/static/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/demo/', '/demos/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
