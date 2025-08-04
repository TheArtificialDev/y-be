import { notFound } from 'next/navigation'
import { promises as fs } from 'fs'
import path from 'path'

interface DemoPageProps {
  params: {
    slug: string
  }
}

// List of valid demo sites
const validDemoSites = [
  'landscaping_demo_site_1',
  'landscaping_demo_site_2', 
  'landscaping_demo_site_3',
  'landscaping_demo_site_4',
  'car_demo_site_1',
  'car_demo_site_2',
  'car_demo_site_3', 
  'car_demo_site_4',
  'interior_design_demo_site_1',
  'interior_design_demo_site_2',
  'interior_design_demo_site_3',
  'interior_design_demo_site_4',
  'incorp_demo_site_1',
  'incorp_demo_site_2',
  'incorp_demo_site_3',
  'travels_demo_site_1'
]

export async function generateStaticParams() {
  return validDemoSites.map((slug) => ({
    slug: slug,
  }))
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = params
  
  // Check if the demo site is valid
  if (!validDemoSites.includes(slug)) {
    notFound()
  }

  try {
    // Read the HTML file from the public/demos directory
    const filePath = path.join(process.cwd(), 'public', 'demos', slug, 'index.html')
    const htmlContent = await fs.readFile(filePath, 'utf8')
    
    // Return the HTML content directly
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
  } catch (error) {
    console.error(`Error loading demo site ${slug}:`, error)
    notFound()
  }
}

// Generate metadata for each demo site
export async function generateMetadata({ params }: DemoPageProps) {
  const { slug } = params
  
  if (!validDemoSites.includes(slug)) {
    return {
      title: 'Demo Not Found',
    }
  }

  // Create friendly names for each demo
  const demoNames: Record<string, string> = {
    'landscaping_demo_site_1': 'Landscape Portfolio 1 - Y-Be Demo',
    'landscaping_demo_site_2': 'Landscape Portfolio 2 - Y-Be Demo',
    'landscaping_demo_site_3': 'Landscape Portfolio 3 - Y-Be Demo', 
    'landscaping_demo_site_4': 'Landscape Portfolio 4 - Y-Be Demo',
    'car_demo_site_1': 'Car Showcase 1 - Y-Be Demo',
    'car_demo_site_2': 'Car Showcase 2 - Y-Be Demo',
    'car_demo_site_3': 'Car Showcase 3 - Y-Be Demo',
    'car_demo_site_4': 'Car Showcase 4 - Y-Be Demo',
    'interior_design_demo_site_1': 'Interior Design Portfolio 1 - Y-Be Demo',
    'interior_design_demo_site_2': 'Interior Design Portfolio 2 - Y-Be Demo',
    'interior_design_demo_site_3': 'Interior Design Portfolio 3 - Y-Be Demo',
    'interior_design_demo_site_4': 'Interior Design Portfolio 4 - Y-Be Demo',
    'incorp_demo_site_1': 'Corporate Website 1 - Y-Be Demo',
    'incorp_demo_site_2': 'Corporate Website 2 - Y-Be Demo',
    'incorp_demo_site_3': 'Corporate Website 3 - Y-Be Demo',
    'travels_demo_site_1': 'Travel Portfolio - Y-Be Demo'
  }

  return {
    title: demoNames[slug] || `${slug} - Y-Be Demo`,
    description: 'Live demo showcasing Y-Be\'s web development capabilities and design expertise.',
    robots: {
      index: false, // Don't index demo sites in search engines
      follow: false,
    },
  }
}
