# Y-Be Homepage Documentation

## Project Overview
This is the official homepage for Y-Be, a data-driven web development agency that engineers competitive advantages through strategic web solutions.

## Architecture
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom Y-Be design system
- **Performance**: Optimized for Core Web Vitals
- **SEO**: Comprehensive SEO optimization with structured data

## Design System
### Colors
- Primary Navy: `#0F1419` (yb-navy-dark)
- Navy: `#1A2332` (yb-navy)
- Light Navy: `#2D3A4E` (yb-navy-light)
- Beige: `#D9BBA4` (yb-beige)
- Beige Light: `#E8D5C4` (yb-beige-light)
- Beige Dark: `#C4A485` (yb-beige-dark)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Fallbacks**: Geist Sans, Geist Mono

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Multiple variants with hover effects
- **Navigation**: Responsive with mobile menu
- **Sections**: Consistent spacing and backgrounds

## Pages Structure
- **Home** (`/`): Main landing page with hero, features, and CTA
- **Our Process** (`/our-process`): Detailed process explanation
- **Case Studies** (`/case-studies`): Client success stories
- **Getting Started** (`/getting-started`): Lead generation form

## Performance Features
- Image optimization with Next.js Image component
- Bundle analysis with @next/bundle-analyzer
- Performance monitoring component
- Lazy loading for optimal loading times

## SEO Features
- Dynamic metadata generation
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card optimization

## Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Analyze bundle
npm run analyze
```

## Deployment
The site is optimized for Vercel deployment with automatic builds and performance monitoring.

## Key Features Implemented
✅ Responsive design with mobile-first approach
✅ Square box styling for non-home pages
✅ Deep blue navbar with no transparency
✅ Logo integration with optimized Image component
✅ Favicon and app icons
✅ Performance optimization
✅ SEO optimization
✅ Analytics integration
✅ Accessibility compliance
│   ├── page.tsx            # Home page
│   ├── our-process/
│   │   └── page.tsx        # Our Process page
│   ├── case-studies/
│   │   └── page.tsx        # Case Studies page
│   └── getting-started/
│       └── page.tsx        # Getting Started page
└── components/
    └── Navigation.tsx      # Navigation component
```

## Development

The project is set up with:
- ESLint for code linting
- TypeScript for type checking
- Tailwind CSS for utility-first styling
- Responsive design patterns

## Deployment

This project is ready to be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

```bash
npm run build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
