'use client'

import { useState, useEffect, useRef } from 'react'
import { Section, Container, Card, Button } from '@/components'

// Animation hooks
function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLeft, setHasLeft] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setHasLeft(false)
          setHasBeenVisible(true)
        } else {
          if (hasBeenVisible) {
            setHasLeft(true)
            setIsVisible(false)
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
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
  }, [hasBeenVisible])

  return { ref, isVisible, hasLeft, hasBeenVisible }
}

export default function WebDevelopmentProduct() {
  const [mounted, setMounted] = useState(false)
  const heroAnimation = useIntersectionObserver()
  const featuresAnimation = useIntersectionObserver()
  const processAnimation = useIntersectionObserver()
  const pricingAnimation = useIntersectionObserver()
  const ctaAnimation = useIntersectionObserver()

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      title: 'Industry-Specific UX/UI Design',
      description: 'Design systems created based on comprehensive analysis of your industry standards and user expectations.',
      icon: '🎨'
    },
    {
      title: 'Built-in Analytics & Conversion Tracking',
      description: 'Integrated tracking systems that monitor user behavior and conversion patterns from day one.',
      icon: '📊'
    },
    {
      title: 'Competitor Analysis Integration',
      description: 'Your website is designed to outperform competitors based on detailed competitive analysis.',
      icon: '🔍'
    },
    {
      title: 'Real-time Performance Monitoring',
      description: 'Continuous monitoring and optimization systems that ensure peak performance.',
      icon: '⚡'
    },
    {
      title: 'SEO Optimization with Keyword Research',
      description: 'Search engine optimization built on industry-specific keyword research and competitor gaps.',
      icon: '🎯'
    },
    {
      title: 'Mobile-First Responsive Design',
      description: 'Optimized for all devices with industry-specific mobile user behavior patterns.',
      icon: '📱'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Industry Research',
      description: 'Deep dive into your industry landscape, competitors, and target audience behavior patterns.'
    },
    {
      step: '02',
      title: 'Strategic Planning',
      description: 'Create a comprehensive strategy based on research insights and competitive analysis.'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Build your website using industry best practices and performance optimization techniques.'
    },
    {
      step: '04',
      title: 'Launch & Optimize',
      description: 'Deploy with comprehensive testing and begin continuous optimization cycles.'
    }
  ]

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
              <div className="text-6xl mb-6">🎯</div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-yb-white mb-6">
                Data-Driven{' '}
                <span className="text-yb-beige">Web Development</span>
              </h1>
              <p className="text-2xl text-yb-beige-light max-w-3xl mx-auto mb-8 leading-relaxed">
                Custom websites and web applications with integrated analytics, user behavior tracking, and performance optimization. Every line of code is informed by industry data and user research.
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
                What&apos;s Included
              </h2>
              <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
                Our data-driven approach ensures every feature serves a strategic purpose in your competitive landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300 !bg-yb-beige/5 hover:!bg-yb-beige/10">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-yb-navy-light leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="beige" padding="xl">
        <Container>
          <div 
            ref={processAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              mounted && processAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
                A proven methodology that combines research, strategy, and technical excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-6 text-center !bg-yb-beige/5 hover:!bg-yb-beige/10 border border-yb-navy border-opacity-20 hover:shadow-lg transition-all duration-300 hover:border-yb-navy hover:border-opacity-50">
                  <div className="text-4xl font-bold text-yb-beige mb-4">{step.step}</div>
                  <h3 className="font-heading text-lg font-bold text-yb-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-yb-navy-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Section */}
      <Section background="navy" padding="xl">
        <Container>
          <div 
            ref={pricingAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              mounted && pricingAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-white mb-6">
                Investment Options
              </h2>
              <p className="text-xl text-yb-beige-light max-w-3xl mx-auto">
                Transparent pricing designed to deliver measurable ROI and competitive advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 !bg-yb-beige/10 border-2 border-yb-beige hover:shadow-xl hover:!bg-yb-beige/15 transition-all duration-300">
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-bold text-yb-navy mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-yb-beige mb-4">$3,500</div>
                  <p className="text-yb-navy-light mb-6">Perfect for small businesses</p>
                  <ul className="text-left space-y-3 text-sm text-yb-navy-light mb-8">
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      5-page responsive website
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      Basic analytics setup
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      SEO optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      3 months support
                    </li>
                  </ul>
                  <Button href="/getting-started" variant="outline" size="md" className="w-full border-yb-navy text-yb-navy hover:bg-yb-navy hover:text-white transition-all duration-300">
                    Get Started
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-yb-beige border-4 border-yb-navy transform scale-105 relative hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yb-navy text-yb-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-bold text-yb-navy mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-yb-navy mb-4">$7,500</div>
                  <p className="text-yb-navy mb-6">For growing businesses</p>
                  <ul className="text-left space-y-3 text-sm text-yb-navy mb-8">
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      10-page custom website
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      Advanced analytics & tracking
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      Competitor analysis integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      6 months support
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      Performance optimization
                    </li>
                  </ul>
                  <Button href="/getting-started" variant="primary" size="md" className="w-full">
                    Get Started
                  </Button>
                </div>
              </Card>

              <Card className="p-8 !bg-yb-beige/10 border-2 border-yb-beige hover:shadow-xl hover:!bg-yb-beige/15 transition-all duration-300">
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-bold text-yb-navy mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-yb-beige mb-4">Custom</div>
                  <p className="text-yb-navy-light mb-6">For large organizations</p>
                  <ul className="text-left space-y-3 text-sm text-yb-navy-light mb-8">
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      Unlimited pages
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      Full market intelligence
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      Custom integrations
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      12 months support
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      Dedicated team
                    </li>
                  </ul>
                  <Button href="/getting-started" variant="outline" size="md" className="w-full border-yb-navy text-yb-navy hover:bg-yb-navy hover:text-white transition-all duration-300">
                    Contact Us
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="lg">
        <Container>
          <div 
            ref={ctaAnimation.ref}
            className={`text-center transition-all duration-1000 ease-out ${
              mounted && ctaAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-6">
              Ready to Build Your Competitive Advantage?
            </h2>
            <p className="text-xl text-yb-navy-light max-w-3xl mx-auto mb-12">
              Stop settling for generic websites. Get a data-driven solution that positions you ahead of your competition.
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
