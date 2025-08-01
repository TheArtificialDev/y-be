'use client'

import { Section, Container, Card, Button } from '@/components'

export default function SaaSDevelopmentProduct() {
  return (
    <div>
      {/* Hero Section */}
      <Section background="navy" padding="xl">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl mb-6">⚡</div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-yb-white mb-6">
              SaaS Platform{' '}
              <span className="text-yb-beige">Development</span>
            </h1>
            <p className="text-2xl text-yb-beige-light max-w-3xl mx-auto mb-8 leading-relaxed">
              Full-scale SaaS platforms with built-in industry intelligence. We create software that not only serves your users but also learns from industry patterns and trends.
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

      {/* Features Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-6">
              SaaS Platform Features
            </h2>
            <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
              Enterprise-grade SaaS solutions built with scalability and intelligence at their core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Scalable Multi-tenant Architecture
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Built to scale from hundreds to millions of users with enterprise-grade architecture.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Industry-specific Features
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Customized feature sets designed specifically for your industry&apos;s unique requirements.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Built-in Analytics
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Comprehensive analytics and user insights built into every aspect of your platform.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Subscription Management
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Complete billing, subscription, and payment processing systems integrated seamlessly.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                API-first Development
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Built with APIs at the core for easy integrations and third-party connections.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Enterprise Security
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Enterprise-grade security and compliance features built from the ground up.
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
              Custom SaaS development pricing based on your specific requirements and scale.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 !bg-yb-beige/10 border-4 border-yb-beige text-center hover:shadow-xl hover:!bg-yb-beige/15 transition-all duration-300">
              <h3 className="font-heading text-3xl font-bold text-yb-navy mb-4">
                Custom SaaS Platform
              </h3>
              <div className="text-5xl font-bold text-yb-beige mb-6">Contact for Pricing</div>
              <p className="text-yb-navy-light mb-8">
                Pricing varies based on complexity, features, and scale requirements
              </p>
              <ul className="text-left space-y-3 text-yb-navy-light mb-8 max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  Custom feature development
                </li>
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  Scalable infrastructure setup
                </li>
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  Ongoing development support
                </li>
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  Performance optimization
                </li>
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  Security and compliance
                </li>
              </ul>
              <Button href="/getting-started" variant="primary" size="lg" className="w-full">
                Contact for Pricing
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
              Ready to Build Your SaaS Platform?
            </h2>
            <p className="text-xl text-yb-beige-light max-w-3xl mx-auto mb-12">
              Let us help you create a scalable SaaS platform that serves your users and captures market intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/getting-started"
                variant="primary"
                size="lg"
              >
                Start Your Project
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
