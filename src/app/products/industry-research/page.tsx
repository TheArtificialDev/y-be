'use client'

import { useState, useEffect, useRef } from 'react'
import { Section, Container, Card, Button } from '@/components'

// Animation hooks
function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return { ref, isVisible }
}

export default function IndustryResearchProduct() {
  const [mounted, setMounted] = useState(false)
  const heroAnimation = useIntersectionObserver()
  const featuresAnimation = useIntersectionObserver()
  const ctaAnimation = useIntersectionObserver()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <Section background="navy" padding="xl">
        <Container>
          <div 
            ref={heroAnimation.ref}
            className="text-center max-w-4xl mx-auto"
          >
            <div className={`transition-all duration-1000 ease-out ${
              mounted && heroAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}>
              <div className="text-6xl mb-6">🔍</div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-yb-white mb-6">
                Industry Research &{' '}
                <span className="text-yb-beige">Analysis Reporting</span>
              </h1>
              <p className="text-2xl text-yb-beige-light max-w-3xl mx-auto mb-8 leading-relaxed">
                Purpose-built tools for deep industry analysis. We create systems that help you understand your market, competitors, and opportunities better than anyone else.
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
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section background="white" padding="xl">
        <Container>
          <div 
            ref={featuresAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              mounted && featuresAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-6">
                Research Capabilities
              </h2>
              <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
                Comprehensive analysis tools that reveal hidden opportunities and competitive insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                  Custom Research Methodologies
                </h3>
                <p className="text-yb-navy-light leading-relaxed">
                  Tailored research approaches designed specifically for your industry and business objectives.
                </p>
              </Card>

              <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                  Automated Data Mining
                </h3>
                <p className="text-yb-navy-light leading-relaxed">
                  Advanced algorithms that process vast amounts of industry data to extract actionable insights.
                </p>
              </Card>

              <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                  Sentiment Analysis & Social Listening
                </h3>
                <p className="text-yb-navy-light leading-relaxed">
                  Monitor public sentiment and social conversations to understand market perception.
                </p>
              </Card>

              <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                  Industry Benchmarking
                </h3>
                <p className="text-yb-navy-light leading-relaxed">
                  Compare your performance against industry standards and top competitors.
                </p>
              </Card>

              <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                  Predictive Analytics Models
                </h3>
                <p className="text-yb-navy-light leading-relaxed">
                  Forecast future trends and market movements based on historical data and patterns.
                </p>
              </Card>

              <Card className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                  Executive Summary Generation
                </h3>
                <p className="text-yb-navy-light leading-relaxed">
                  Automated generation of clear, actionable reports for executive decision-making.
                </p>
              </Card>
            </div>
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
              Comprehensive industry research and analysis at a transparent price.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 !bg-yb-beige/10 border-4 border-yb-beige text-center hover:shadow-xl hover:!bg-yb-beige/15 transition-all duration-300">
              <h3 className="font-heading text-3xl font-bold text-yb-navy mb-4">
                Industry Research & Analysis Package
              </h3>
              <div className="text-5xl font-bold text-yb-beige mb-6">$2,000</div>
              <p className="text-yb-navy-light mb-8">
                Complete research package with detailed analysis and actionable recommendations
              </p>
              <ul className="text-left space-y-3 text-yb-navy-light mb-8 max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  Comprehensive industry analysis
                </li>
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  Competitor research and benchmarking
                </li>
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  Market opportunity identification
                </li>
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  Predictive analytics and forecasting
                </li>
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  Executive summary with recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-yb-beige mr-2">✓</span>
                  30-day follow-up consultation
                </li>
              </ul>
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
          <div 
            ref={ctaAnimation.ref}
            className={`text-center transition-all duration-1000 ease-out ${
              mounted && ctaAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-white mb-6">
              Ready to Understand Your Market?
            </h2>
            <p className="text-xl text-yb-beige-light max-w-3xl mx-auto mb-12">
              Get the deep industry insights you need to make informed strategic decisions and outmaneuver your competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/getting-started"
                variant="primary"
                size="lg"
              >
                Start Your Research
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
