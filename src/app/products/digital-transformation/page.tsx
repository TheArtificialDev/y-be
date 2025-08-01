'use client'

import { Section, Container, Card, Button } from '@/components'

export default function DigitalTransformationProduct() {
  return (
    <div>
      {/* Hero Section */}
      <Section background="navy" padding="xl">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🚀</div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-yb-white mb-6">
              Digital Transformation{' '}
              <span className="text-yb-beige">Consulting</span>
            </h1>
            <p className="text-2xl text-yb-beige-light max-w-3xl mx-auto mb-8 leading-relaxed">
              Strategic consulting backed by deep industry research. We don&apos;t just implement technology—we analyze your industry landscape and create transformation roadmaps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/getting-started"
                variant="primary"
                size="lg"
              >
                Get Started Today
              </Button>
              <Button 
                href="/case-studies"
                variant="outline"
                size="lg"
                className="border-yb-beige text-yb-beige hover:bg-yb-beige hover:text-yb-navy"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-6">
              Transformation Services
            </h2>
            <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
              Comprehensive consulting services that guide your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Industry Analysis
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Comprehensive analysis of your industry landscape and competitive positioning.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Technology Recommendations
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Strategic technology stack recommendations based on industry best practices.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Implementation Roadmap
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Detailed roadmap for implementing your digital transformation strategy.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                ROI Projections
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Detailed business case development with ROI projections and success metrics.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Change Management
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Strategic change management to ensure smooth adoption and transformation.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Post-Implementation Support
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Ongoing optimization and support to maximize your transformation results.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Pricing Section */}
      <Section background="beige" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-6">
              Investment
            </h2>
            <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
              Strategic consulting that transforms your business for the digital age.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 !bg-yb-beige/10 border-4 border-yb-beige text-center hover:shadow-xl hover:!bg-yb-beige/15 transition-all duration-300">
              <h3 className="font-heading text-3xl font-bold text-yb-navy mb-4">
                Digital Transformation Package
              </h3>
              <div className="text-5xl font-bold text-yb-beige mb-6">$1,500</div>
              <p className="text-yb-navy-light mb-8">
                Comprehensive transformation strategy with implementation roadmap
              </p>
              <Button href="/getting-started" variant="primary" size="lg" className="w-full">
                Get Started
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="navy" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-yb-beige-light max-w-3xl mx-auto mb-12">
              Get the strategic guidance you need to successfully navigate your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/getting-started"
                variant="primary"
                size="lg"
              >
                Start Your Transformation
              </Button>
              <Button 
                href="/products"
                variant="outline"
                size="lg"
                className="border-yb-beige text-yb-beige hover:bg-yb-beige hover:text-yb-navy"
              >
                ← Back to Products
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
