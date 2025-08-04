import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from '@/components';

export const metadata: Metadata = {
  title: 'Page Not Found | Y-Be',
  description: 'The page you are looking for could not be found. Return to Y-Be homepage to explore our digital services and solutions.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <Section className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-yb-cream mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-yb-beige mb-6">Page Not Found</h2>
          <p className="text-lg text-yb-beige/80 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-yb-cream text-yb-dark font-semibold rounded-lg hover:bg-yb-cream/90 transition-colors"
            >
              Return Home
            </Link>
            <Link 
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 border border-yb-beige text-yb-beige font-semibold rounded-lg hover:bg-yb-beige/10 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
