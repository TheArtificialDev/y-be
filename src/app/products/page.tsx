'use client'

import { useState, useEffect, useRef } from 'react'
import { Section, Container, Card, Button } from '@/components'

// Animation hooks from the main site
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

export default function Products() {
  const [heroAnimationState, setHeroAnimationState] = useState({
    title: false,
    subtitle: false,
    expertise: false,
    content: false
  })
  const [mounted, setMounted] = useState(false)

  const heroAnimation = useIntersectionObserver()
  const servicesAnimation = useIntersectionObserver()
  const specializationAnimation = useIntersectionObserver()
  const advantageAnimation = useIntersectionObserver()
  const ctaAnimation = useIntersectionObserver()

  // Hero animation sequence - only after component mounts
  useEffect(() => {
    setMounted(true)
    const sequence = async () => {
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, title: true }))
      }, 300)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, subtitle: true }))
      }, 800)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, expertise: true }))
      }, 1300)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, content: true }))
      }, 1800)
    }
    
    sequence()
  }, [])

  const services = [
    {
      title: 'Data-Driven Web Development',
      price: 'Packages Available',
      description: 'Custom websites and web applications with integrated analytics, user behavior tracking, and performance optimization. Every line of code is informed by industry data and user research.',
      features: [
        'Industry-specific UX/UI design based on sector analysis',
        'Built-in analytics and conversion tracking',
        'Competitor analysis integration',
        'Real-time performance monitoring',
        'SEO optimization with keyword research'
      ],
      icon: '🎯',
      popular: true
    },
    {
      title: 'Market Intelligence Platforms',
      price: '$5,000 for 6 months',
      description: 'Comprehensive platforms that collect, analyze, and visualize market data. Turn industry insights into competitive advantages with our custom-built intelligence systems.',
      features: [
        'Automated data collection from multiple sources',
        'Competitor tracking and analysis tools',
        'Market trend prediction algorithms',
        'Custom dashboard with actionable insights',
        'API integrations with industry databases',
        'Automated reporting and alerts'
      ],
      icon: '📊',
      popular: false
    },
    {
      title: 'Industry Research & Analysis Reporting',
      price: '$2,000',
      description: 'Purpose-built tools for deep industry analysis. We create systems that help you understand your market, competitors, and opportunities better than anyone else.',
      features: [
        'Custom research methodologies for your industry',
        'Automated data mining and processing',
        'Sentiment analysis and social listening',
        'Industry benchmarking tools',
        'Predictive analytics models',
        'Executive summary generation'
      ],
      icon: '🔍',
      popular: false
    },
    {
      title: 'Business Intelligence Solutions',
      price: '$10,000',
      description: 'Complete BI ecosystems that transform raw business data into strategic insights. Make data-driven decisions with confidence using our custom analytics platforms.',
      features: [
        'Multi-source data integration',
        'Real-time dashboard creation',
        'Custom KPI tracking systems',
        'Predictive analytics and forecasting',
        'Automated report generation',
        'Role-based access and permissions'
      ],
      icon: '💡',
      popular: false
    },
    {
      title: 'Digital Transformation Consulting',
      price: '$1,500',
      description: 'Strategic consulting backed by deep industry research. We don&apos;t just implement technology—we analyze your industry landscape and create transformation roadmaps.',
      features: [
        'Comprehensive industry analysis',
        'Technology stack recommendations',
        'Implementation roadmap creation',
        'ROI projections and business case development',
        'Change management strategies',
        'Post-implementation optimization'
      ],
      icon: '🚀',
      popular: false
    },
    {
      title: 'SaaS Platform Development',
      price: 'Contact for pricing',
      description: 'Full-scale SaaS platforms with built-in industry intelligence. We create software that not only serves your users but also learns from industry patterns and trends.',
      features: [
        'Scalable multi-tenant architecture',
        'Industry-specific feature sets',
        'Built-in analytics and user insights',
        'Subscription and billing management',
        'API-first development approach',
        'Enterprise-grade security and compliance'
      ],
      icon: '⚡',
      popular: false
    }
  ]

  const specializations = [
    {
      title: 'Education Technology',
      description: 'Learning management systems, student tracking, and educational analytics platforms that understand the unique needs of modern education.',
      expertise: '95%'
    },
    {
      title: 'Arts & Culture Platforms',
      description: 'Digital galleries, cultural preservation tools, and artist management systems that respect tradition while embracing innovation.',
      expertise: '90%'
    },
    {
      title: 'SaaS & Technology',
      description: 'Scalable software solutions, API development, and tech platform optimization for the fast-moving technology sector.',
      expertise: '98%'
    },
    {
      title: 'Social Analytics',
      description: 'Social media monitoring, sentiment analysis, and trend prediction platforms for brands that need to stay ahead.',
      expertise: '92%'
    },
    {
      title: 'Research & Development',
      description: 'Data management systems, collaboration tools, and research analytics platforms for innovation-driven organizations.',
      expertise: '88%'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Large-scale business applications, workflow automation, and enterprise integration solutions.',
      expertise: '94%'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Section background="navy" padding="sm" className="min-h-screen flex items-center justify-center py-0">
        <Container>
          <div 
            ref={heroAnimation.ref}
            className="text-center py-16 min-h-screen flex flex-col justify-center"
          >
            <h1 className={`font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-yb-white mb-8 transition-all duration-1200 ease-out ${
              mounted && heroAnimationState.title 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}>
              <span className="text-yb-beige">Data-Driven</span>{' '}
              <span className="text-yb-white">Development</span>
            </h1>

            <p className={`text-xl md:text-2xl text-yb-beige-light max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1200 ease-out ${
              mounted && heroAnimationState.subtitle 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}>
              We don&apos;t just build websites and tools—we create competitive advantages. Every solution is backed by deep industry research, market analysis, and data-driven insights.
            </p>

            <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-1000 ease-out ${
              mounted && heroAnimationState.expertise 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">15+</div>
                <div className="text-sm text-yb-beige-light">Industries Analyzed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">500+</div>
                <div className="text-sm text-yb-beige-light">Competitor Studies</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">1M+</div>
                <div className="text-sm text-yb-beige-light">Data Points Analyzed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">100%</div>
                <div className="text-sm text-yb-beige-light">Research-Backed</div>
              </div>
            </div>

            <div className={`transition-all duration-1000 ease-out ${
              mounted && heroAnimationState.content 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-yb-beige-light mb-8 max-w-2xl mx-auto">
                Where others guess, we know. Where others follow trends, we set them.
              </p>
              <Button 
                href="/getting-started"
                variant="primary"
                size="lg"
                className="mr-4"
              >
                Start Your Project
              </Button>
              <Button 
                href="/case-studies"
                variant="outline"
                size="lg"
              >
                See Our Impact
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section background="white" padding="lg">
        <Container>
          <div 
            ref={servicesAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              mounted && servicesAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-6">
                Our Service Portfolio
              </h2>
              <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
                Each service is crafted to give you an unfair advantage in your industry. We combine cutting-edge technology with deep market intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const routes = [
                  '/products/web-development',
                  '/products/market-intelligence', 
                  '/products/industry-research',
                  '/products/business-intelligence',
                  '/products/digital-transformation',
                  '/products/saas-development'
                ]
                
                return (
                  <Card 
                    key={index} 
                    className={`p-8 border-2 hover:shadow-xl transition-all duration-300 relative cursor-pointer group ${
                      service.popular 
                        ? 'border-yb-beige !bg-gradient-to-br !from-yb-beige/5 !to-yb-beige/10' 
                        : 'border-yb-navy border-opacity-10 hover:border-yb-beige hover:border-opacity-50 !bg-yb-beige/3 hover:!bg-yb-beige/8'
                    }`}
                    onClick={() => window.location.href = routes[index]}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yb-beige text-yb-navy px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="font-heading text-xl font-bold text-yb-navy mb-2 group-hover:text-yb-beige transition-colors">
                        {service.title}
                      </h3>
                      <div className="text-2xl font-bold text-yb-beige mb-4">
                        {service.price}
                      </div>
                    </div>

                    <p className="text-yb-navy-light mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-yb-beige rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-yb-navy-light">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      href={routes[index]}
                      variant={service.popular ? "primary" : "outline"}
                      size="md"
                      className="w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn More
                    </Button>
                  </Card>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Specialization Section */}
      <Section background="beige" padding="lg">
        <Container>
          <div 
            ref={specializationAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              mounted && specializationAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-6">
                Industry Specializations
              </h2>
              <p className="text-xl text-yb-navy-light max-w-3xl mx-auto">
                We don&apos;t just understand technology—we understand your industry. Our expertise spans multiple sectors, each with tailored solutions and deep market knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializations.map((spec, index) => (
                <Card key={index} className="p-6 !bg-yb-beige/20 border border-yb-beige border-opacity-30 hover:shadow-lg hover:!bg-yb-beige/30 transition-all duration-300">
                  <h3 className="font-heading text-lg font-bold text-yb-navy mb-3">
                    {spec.title}
                  </h3>
                  <p className="text-yb-navy-light text-sm mb-4 leading-relaxed">
                    {spec.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-yb-navy-light">Expertise Level</span>
                    <span className="text-yb-beige font-semibold">{spec.expertise}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-yb-beige h-2 rounded-full transition-all duration-1000"
                      style={{ width: spec.expertise }}
                    ></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Competitive Advantage Section */}
      <Section background="navy" padding="lg">
        <Container>
          <div 
            ref={advantageAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              mounted && advantageAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-white mb-6">
                Why Choose Data-Driven Development?
              </h2>
              <p className="text-xl text-yb-beige-light max-w-3xl mx-auto">
                In a world where everyone builds, we build with purpose. Every decision is backed by research, every feature informed by industry insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <h3 className="font-semibold text-yb-beige mb-2">Market Intelligence</h3>
                <p className="text-yb-beige-light text-sm">
                  Every project starts with comprehensive market analysis and competitor research.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="font-semibold text-yb-beige mb-2">Precision Engineering</h3>
                <p className="text-yb-beige-light text-sm">
                  Solutions tailored to your industry&apos;s specific challenges and opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="font-semibold text-yb-beige mb-2">Performance Focus</h3>
                <p className="text-yb-beige-light text-sm">
                  Optimized for real business outcomes, not just technical metrics.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="font-semibold text-yb-beige mb-2">Future-Proofing</h3>
                <p className="text-yb-beige-light text-sm">
                  Built to adapt and evolve with your industry&apos;s changing landscape.
                </p>
              </div>
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
              Ready to Dominate Your Industry?
            </h2>
            <p className="text-xl text-yb-navy-light max-w-3xl mx-auto mb-12">
              Stop competing on equal terms. Let us build you a solution that gives you the intelligence and tools to stay ahead of the competition.
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
                href="/case-studies"
                variant="outline"
                size="lg"
              >
                See Our Work
              </Button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-yb-navy-light mb-4">
                Join the industry leaders who trust us with their competitive advantage
              </p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <span className="text-yb-navy font-medium">Education</span>
                <span className="text-yb-navy font-medium">•</span>
                <span className="text-yb-navy font-medium">SaaS</span>
                <span className="text-yb-navy font-medium">•</span>
                <span className="text-yb-navy font-medium">Research</span>
                <span className="text-yb-navy font-medium">•</span>
                <span className="text-yb-navy font-medium">Analytics</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
