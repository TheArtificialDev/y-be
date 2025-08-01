'use client'

import { Section, Container, Card, Button } from '@/components'

export default function BusinessIntelligenceProduct() {
  return (
    <div>
      {/* Hero Section */}
      <Section background="navy" padding="xl">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl mb-6">💡</div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-yb-white mb-6">
              Business Intelligence{' '}
              <span className="text-yb-beige">Solutions</span>
            </h1>
            <p className="text-2xl text-yb-beige-light max-w-3xl mx-auto mb-8 leading-relaxed">
              Complete BI ecosystems that transform raw business data into strategic insights. Make data-driven decisions with confidence using our custom analytics platforms.
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
              BI Platform Features
            </h2>
            <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
              Transform your data into actionable business intelligence with our comprehensive platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Multi-source Data Integration
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Connect and consolidate data from multiple sources into a unified intelligence platform.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Real-time Dashboards
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Interactive dashboards that provide real-time insights into your business performance.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Custom KPI Tracking
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Track the metrics that matter most to your business with customizable KPI systems.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Predictive Analytics
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Forecast future trends and outcomes using advanced predictive modeling.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Automated Reporting
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Generate and distribute comprehensive reports automatically on your schedule.
              </p>
            </Card>

            <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                Role-based Permissions
              </h3>
              <p className="text-yb-navy-light leading-relaxed">
                Secure access control ensuring the right people see the right data.
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
              Complete business intelligence solution designed for enterprise needs.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 !bg-yb-beige/10 border-4 border-yb-beige text-center hover:shadow-xl hover:!bg-yb-beige/15 transition-all duration-300">
              <h3 className="font-heading text-3xl font-bold text-yb-navy mb-4">
                Complete BI Platform
              </h3>
              <div className="text-5xl font-bold text-yb-beige mb-6">$10,000</div>
              <p className="text-yb-navy-light mb-8">
                Full business intelligence ecosystem with ongoing support and optimization
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
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-yb-beige-light max-w-3xl mx-auto mb-12">
              Turn your business data into competitive intelligence with our comprehensive BI solutions.
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
