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

export default function MarketIntelligenceProduct() {
  const [mounted, setMounted] = useState(false)
  const heroAnimation = useIntersectionObserver()
  const featuresAnimation = useIntersectionObserver()
  const benefitsAnimation = useIntersectionObserver()
  const pricingAnimation = useIntersectionObserver()
  const ctaAnimation = useIntersectionObserver()

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      title: 'Automated Data Collection',
      description: 'Continuously gather market data from multiple sources including social media, industry reports, and competitor websites.',
      icon: '🔄'
    },
    {
      title: 'Competitor Tracking & Analysis',
      description: 'Monitor competitor activities, pricing changes, product launches, and marketing strategies in real-time.',
      icon: '🎯'
    },
    {
      title: 'Market Trend Prediction',
      description: 'Advanced algorithms that identify emerging trends and predict market movements before your competitors.',
      icon: '📈'
    },
    {
      title: 'Custom Analytics Dashboard',
      description: 'Personalized dashboards that present actionable insights tailored to your specific industry and business goals.',
      icon: '📊'
    },
    {
      title: 'API Integrations',
      description: 'Seamless integration with industry databases, CRM systems, and third-party data sources.',
      icon: '🔌'
    },
    {
      title: 'Automated Reporting & Alerts',
      description: 'Receive intelligent alerts and automated reports when significant market changes or opportunities arise.',
      icon: '🚨'
    }
  ]

  const benefits = [
    {
      title: 'Stay Ahead of Competition',
      description: 'Get insights into competitor strategies before they become public knowledge.',
      metric: '3-6 months',
      label: 'Earlier insights'
    },
    {
      title: 'Identify Market Opportunities',
      description: 'Spot emerging trends and market gaps before your competitors do.',
      metric: '40%',
      label: 'Faster opportunity identification'
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Make strategic decisions based on comprehensive market intelligence.',
      metric: '85%',
      label: 'Improvement in decision accuracy'
    },
    {
      title: 'Reduce Market Research Costs',
      description: 'Automate time-consuming research processes and reduce manual effort.',
      metric: '60%',
      label: 'Cost reduction'
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
              <div className="text-6xl mb-6">📊</div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-yb-white mb-6">
                Market Intelligence{' '}
                <span className="text-yb-beige">Platforms</span>
              </h1>
              <p className="text-2xl text-yb-beige-light max-w-3xl mx-auto mb-8 leading-relaxed">
                Comprehensive platforms that collect, analyze, and visualize market data. Turn industry insights into competitive advantages with our custom-built intelligence systems.
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
                Platform Capabilities
              </h2>
              <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
                Our market intelligence platforms provide comprehensive insights that drive strategic decision-making.
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

      {/* Benefits Section */}
      <Section background="beige" padding="xl">
        <Container>
          <div 
            ref={benefitsAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              mounted && benefitsAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-6">
                Business Impact
              </h2>
              <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
                Measurable results that transform how you compete in your market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-8 !bg-yb-beige/5 hover:!bg-yb-beige/10 border border-yb-beige border-opacity-30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="text-4xl font-bold text-yb-beige">{benefit.metric}</div>
                      <div className="text-sm text-yb-navy-light">{benefit.label}</div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading text-xl font-bold text-yb-navy mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-yb-navy-light leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
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
                Flexible pricing designed to provide maximum ROI for your market intelligence needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 !bg-yb-beige/10 border-2 border-yb-beige hover:shadow-xl hover:!bg-yb-beige/15 transition-all duration-300">
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-bold text-yb-navy mb-2">Standard Platform</h3>
                  <div className="text-4xl font-bold text-yb-beige mb-4">$5,000</div>
                  <p className="text-yb-navy-light mb-2">6-month engagement</p>
                  <p className="text-sm text-yb-navy-light mb-6">Includes setup, training, and support</p>
                  <ul className="text-left space-y-3 text-sm text-yb-navy-light mb-8">
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      Automated data collection
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      Competitor tracking (up to 10)
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      Custom dashboard
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      Weekly reports
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-beige mr-2">✓</span>
                      Basic API integrations
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
                  <h3 className="font-heading text-2xl font-bold text-yb-navy mb-2">Enterprise Platform</h3>
                  <div className="text-4xl font-bold text-yb-navy mb-4">$12,000</div>
                  <p className="text-yb-navy mb-2">12-month engagement</p>
                  <p className="text-sm text-yb-navy mb-6">Full-service intelligence solution</p>
                  <ul className="text-left space-y-3 text-sm text-yb-navy mb-8">
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      Advanced data collection
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      Unlimited competitor tracking
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      Predictive analytics
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      Real-time alerts
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      Custom integrations
                    </li>
                    <li className="flex items-start">
                      <span className="text-yb-navy mr-2 font-bold">✓</span>
                      Dedicated analyst support
                    </li>
                  </ul>
                  <Button href="/getting-started" variant="primary" size="md" className="w-full">
                    Get Started
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
              Ready to Gain Market Intelligence?
            </h2>
            <p className="text-xl text-yb-navy-light max-w-3xl mx-auto mb-12">
              Stop guessing about your market. Get the intelligence you need to make informed strategic decisions.
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
