'use client'

import { useState, useEffect, useRef } from 'react'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'

// Custom hook for bi-directional intersection observer
const useBidirectionalIntersectionObserver = (threshold = 0.1, rootMargin = '0px') => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          setHasAnimated(true)
        } else if (hasAnimated) {
          // Only fade out if it has been animated in before
          setIsIntersecting(false)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, hasAnimated])

  return [ref, isIntersecting] as const
}

export default function OurProcess() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  
  // Hero animation state (one-time animation)
  const [heroAnimationState, setHeroAnimationState] = useState({
    title: false,
    subtitle: false,
    button: false
  })

  // Section observers
  const [overviewTitleRef, isOverviewTitleVisible] = useBidirectionalIntersectionObserver(0.8, '-20px')
  const [processTimelineRef, isProcessTimelineVisible] = useBidirectionalIntersectionObserver(0.3, '-20px')
  const [strategicPlanningRef, isStrategicPlanningVisible] = useBidirectionalIntersectionObserver(0.3, '-20px')
  const [creativeDevelopmentRef, isCreativeDevelopmentVisible] = useBidirectionalIntersectionObserver(0.3, '-20px')
  const [technicalExcellenceRef, isTechnicalExcellenceVisible] = useBidirectionalIntersectionObserver(0.3, '-20px')
  const [continuousOptimizationRef, isContinuousOptimizationVisible] = useBidirectionalIntersectionObserver(0.3, '-20px')
  const [finalCtaRef, isFinalCtaVisible] = useBidirectionalIntersectionObserver(0.3, '-20px')

  // Hero animation sequence (one-time)
  useEffect(() => {
    const sequence = async () => {
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, title: true }))
      }, 300)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, subtitle: true }))
      }, 800)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, button: true }))
      }, 1200)
    }
    
    sequence()
  }, [])

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index)
  }

  const processSteps = [
    {
      phase: "Research & Analysis",
      duration: "1 Week",
      description: "Deep dive into your top 10 competitors&apos; strategies",
      details: [
        "Competitor website analysis",
        "SEO audit and gap analysis", 
        "User experience evaluation",
        "Content strategy review",
        "Technical performance assessment"
      ]
    },
    {
      phase: "Strategic Planning", 
      duration: "1-2 Weeks",
      description: "Transform insights into actionable competitive strategy",
      details: [
        "Market positioning strategy",
        "Competitive advantage identification",
        "User journey optimization",
        "Content strategy development",
        "Technical roadmap planning"
      ]
    },
    {
      phase: "Creative Development",
      duration: "2-3 Weeks", 
      description: "Design and content that outperforms your competition",
      details: [
        "Brand-aligned visual design",
        "Conversion-optimized layouts",
        "Strategic content creation",
        "Interactive element design",
        "Mobile-first responsive design"
      ]
    },
    {
      phase: "Technical Excellence",
      duration: "2-4 Weeks",
      description: "Build for performance, security, and scalability",
      details: [
        "High-performance development",
        "SEO optimization implementation", 
        "Security best practices",
        "Analytics and tracking setup",
        "Launch and optimization"
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Section background="navy" padding="xl">
        <Container>
          <div className="text-center">
            <h1 className={`font-heading text-4xl md:text-6xl font-bold text-yb-white mb-6 transition-all duration-1000 ease-out ${
              heroAnimationState.title 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-12'
            }`}
            style={{
              transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
              Our Proven Process = Your{' '}
              <span className="text-yb-beige">Competitive Edge</span>
            </h1>
            <p className={`text-xl text-yb-beige-light max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ease-out ${
              heroAnimationState.subtitle 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
            style={{
              transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
              Every competitive advantage starts with understanding exactly where you stand. 
              Our proven 4-phase process transforms research into results.
            </p>
            <div className={`transition-all duration-1000 ease-out ${
              heroAnimationState.button 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
              <Button href="/getting-started" variant="primary" size="lg">
                Start Your Analysis
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Overview */}
      <Section background="white" padding="xl">
        <Container>
          <div ref={overviewTitleRef} className={`text-center mb-16 square-box-beige p-8 transition-all duration-1500 ease-out ${
            isOverviewTitleVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
          style={{
            transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: isOverviewTitleVisible ? 'blur(0px)' : 'blur(1px)'
          }}>
            <h2 className={`font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4 transition-all duration-1000 ease-out ${
              isOverviewTitleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-12'
            }`}
            style={{
              transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transitionDelay: '0.3s'
            }}>
              Research & Analysis Deep Dive
            </h2>
            <p className={`text-lg text-yb-navy-light max-w-2xl mx-auto transition-all duration-1000 ease-out ${
              isOverviewTitleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
            style={{
              transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transitionDelay: '0.6s'
            }}>
              We don&apos;t guess - we analyze. Our research phase uncovers exactly what your competitors are doing right and where you can gain the advantage.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="mb-16" ref={processTimelineRef}>
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transform transition-all duration-1000 ease-out ${
              isProcessTimelineVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}>
              {processSteps.map((step, index) => (
                <Card key={index} className={`p-6 text-center cursor-pointer hover:shadow-lg transition-all duration-300 square-box transform ${
                  isProcessTimelineVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`} style={{ transitionDelay: `${index * 200}ms` }} onClick={() => toggleStep(index)}>
                  <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yb-navy font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-yb-navy mb-2">
                    {step.phase}
                  </h3>
                  <p className="text-yb-navy-light text-sm mb-2">{step.duration}</p>
                  <p className="text-yb-navy-light text-xs mb-4">{step.description}</p>
                  
                  <div className="flex justify-center">
                    <button className="w-8 h-8 bg-yb-navy text-yb-beige rounded-full flex items-center justify-center">
                      {expandedStep === index ? '−' : '+'}
                    </button>
                  </div>
                  
                  {expandedStep === index && (
                    <div className="mt-4 pt-4 border-t border-yb-beige">
                      <ul className="text-left space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-yb-navy-light text-sm flex items-start">
                            <span className="text-yb-beige mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Detailed Sections for Each Phase */}
      <Section background="beige" padding="xl">
        <Container>
          <div 
            ref={strategicPlanningRef}
            className={`text-center mb-16 square-box-beige p-8 transform transition-all duration-1000 ease-out ${
              isStrategicPlanningVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
              Strategic Planning Phase
            </h2>
            <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
              Raw data becomes strategic advantage through our proven planning methodology.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transform transition-all duration-1000 ease-out delay-300 ${
            isStrategicPlanningVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            <Card className={`p-8 square-box transform transition-all duration-1000 ease-out ${
              isStrategicPlanningVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '500ms' }}>
              <h3 className="font-heading text-xl font-semibold text-yb-navy mb-6">
                Competitive Strategy Map
              </h3>
              <p className="text-yb-navy-light mb-6">
                We map your competitive landscape and identify the specific opportunities where you can win.
              </p>
              <div className="bg-yb-navy bg-opacity-10 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-yb-navy font-medium">Market Position</span>
                    <span className="text-yb-beige font-bold">Opportunity Score</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yb-navy-light">SEO Performance</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-16 h-2 bg-yb-beige rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yb-navy-light">User Experience</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-12 h-2 bg-yb-beige rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yb-navy-light">Content Strategy</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-8 h-2 bg-yb-beige rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className={`p-8 square-box transform transition-all duration-1000 ease-out ${
              isStrategicPlanningVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '700ms' }}>
              <h3 className="font-heading text-xl font-semibold text-yb-navy mb-6">
                Priority Framework
              </h3>
              <p className="text-yb-navy-light mb-6">
                Not all opportunities are equal. We use data-driven prioritization to focus on high-impact wins.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-yb-beige pl-4">
                  <div className="text-yb-navy font-medium">High Impact, Low Effort</div>
                  <div className="text-yb-navy-light text-sm">Quick wins for immediate advantage</div>
                </div>
                <div className="border-l-4 border-yb-navy pl-4">
                  <div className="text-yb-navy font-medium">High Impact, High Effort</div>
                  <div className="text-yb-navy-light text-sm">Strategic initiatives for long-term dominance</div>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="text-yb-navy font-medium">Low Impact</div>
                  <div className="text-yb-navy-light text-sm">Deprioritized for resource efficiency</div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Creative Development Section */}
      <Section background="white" padding="xl">
        <Container>
          <div 
            ref={creativeDevelopmentRef}
            className={`text-center mb-16 square-box-beige p-8 transform transition-all duration-1000 ease-out ${
              isCreativeDevelopmentVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
              Creative Development
            </h2>
            <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
              Every creative decision is backed by strategic logic. We don&apos;t just make things look good - we make them work better than your competitors.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transform transition-all duration-1000 ease-out delay-300 ${
            isCreativeDevelopmentVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            <Card className={`p-6 text-center square-box transform transition-all duration-1000 ease-out ${
              isCreativeDevelopmentVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '500ms' }}>
              <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yb-navy font-bold">🎨</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-yb-navy mb-4">
                Strategic Design
              </h3>
              <p className="text-yb-navy-light text-sm">
                Visual design that communicates your competitive advantages at first glance.
              </p>
            </Card>

            <Card className={`p-6 text-center square-box transform transition-all duration-1000 ease-out ${
              isCreativeDevelopmentVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '700ms' }}>
              <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yb-navy font-bold">📝</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-yb-navy mb-4">
                Compelling Content
              </h3>
              <p className="text-yb-navy-light text-sm">
                Copy and content that converts better than your competition by speaking directly to your audience.
              </p>
            </Card>

            <Card className={`p-6 text-center square-box transform transition-all duration-1000 ease-out ${
              isCreativeDevelopmentVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '900ms' }}>
              <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yb-navy font-bold">⚡</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-yb-navy mb-4">
                Optimized Experience
              </h3>
              <p className="text-yb-navy-light text-sm">
                User experience designed for conversion, engagement, and competitive superiority.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Technical Excellence Section */}
      <Section background="navy" padding="xl">
        <Container>
          <div 
            ref={technicalExcellenceRef}
            className={`text-center mb-16 square-box-navy p-8 transform transition-all duration-1000 ease-out ${
              isTechnicalExcellenceVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-white mb-4">
              Technical Excellence
            </h2>
            <p className="text-lg text-yb-beige-light max-w-2xl mx-auto">
              Superior technical performance isn&apos;t just about speed - it&apos;s about competitive advantage in search rankings, user experience, and conversions.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ease-out delay-300 ${
            isTechnicalExcellenceVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            <Card className={`p-6 bg-yb-beige bg-opacity-10 text-center square-box transform transition-all duration-1000 ease-out ${
              isTechnicalExcellenceVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '500ms' }}>
              <div className="text-3xl font-bold text-yb-beige mb-2">&lt;3s</div>
              <p className="text-yb-beige-light text-sm">Page Load Time</p>
            </Card>
            <Card className={`p-6 bg-yb-beige bg-opacity-10 text-center square-box transform transition-all duration-1000 ease-out ${
              isTechnicalExcellenceVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '700ms' }}>
              <div className="text-3xl font-bold text-yb-beige mb-2">100</div>
              <p className="text-yb-beige-light text-sm">Lighthouse Score</p>
            </Card>
            <Card className={`p-6 bg-yb-beige bg-opacity-10 text-center square-box transform transition-all duration-1000 ease-out ${
              isTechnicalExcellenceVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '900ms' }}>
              <div className="text-3xl font-bold text-yb-beige mb-2">A+</div>
              <p className="text-yb-beige-light text-sm">Security Grade</p>
            </Card>
            <Card className={`p-6 bg-yb-beige bg-opacity-10 text-center square-box transform transition-all duration-1000 ease-out ${
              isTechnicalExcellenceVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '1100ms' }}>
              <div className="text-3xl font-bold text-yb-beige mb-2">99.9%</div>
              <p className="text-yb-beige-light text-sm">Uptime</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Continuous Optimization */}
      <Section background="beige" padding="xl">
        <Container>
          <div 
            ref={continuousOptimizationRef}
            className={`text-center mb-16 square-box-beige p-8 transform transition-all duration-1000 ease-out ${
              isContinuousOptimizationVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
              Continuous Optimization
            </h2>
            <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
              Your competitive advantage isn&apos;t static. We continuously monitor, test, and optimize to ensure you stay ahead of the competition.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transform transition-all duration-1000 ease-out delay-300 ${
            isContinuousOptimizationVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            {/* Analytics Dashboard Preview */}
            <Card className={`p-8 square-box transform transition-all duration-1000 ease-out ${
              isContinuousOptimizationVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '500ms' }}>
              <h3 className="font-heading text-xl font-semibold text-yb-navy mb-6">
                Performance Monitoring
              </h3>
              <div className="bg-yb-navy bg-opacity-5 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-yb-navy">Traffic Growth</span>
                    <span className="text-green-600 font-bold">+24%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yb-navy">Conversion Rate</span>
                    <span className="text-green-600 font-bold">+18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yb-navy">Search Rankings</span>
                    <span className="text-green-600 font-bold">+12 positions</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yb-navy">Page Speed</span>
                    <span className="text-green-600 font-bold">2.1s average</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className={`p-8 square-box transform transition-all duration-1000 ease-out ${
              isContinuousOptimizationVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`} style={{ transitionDelay: '700ms' }}>
              <h3 className="font-heading text-xl font-semibold text-yb-navy mb-6">
                Competitive Monitoring
              </h3>
              <p className="text-yb-navy-light mb-6">
                We continuously track your competitors so you can stay ahead of their moves.
              </p>
              <div className="space-y-4">
                <div className="border border-yb-beige rounded-lg p-4">
                  <div className="text-yb-navy font-medium">Monthly Competitor Analysis</div>
                  <div className="text-yb-navy-light text-sm">Track competitor changes and new opportunities</div>
                </div>
                <div className="border border-yb-beige rounded-lg p-4">
                  <div className="text-yb-navy font-medium">Performance Benchmarking</div>
                  <div className="text-yb-navy-light text-sm">See exactly how you compare across all metrics</div>
                </div>
                <div className="border border-yb-beige rounded-lg p-4">
                  <div className="text-yb-navy font-medium">Strategic Recommendations</div>
                  <div className="text-yb-navy-light text-sm">Monthly optimization suggestions based on data</div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section background="navy" padding="xl">
        <Container>
          <div 
            ref={finalCtaRef}
            className={`text-center transform transition-all duration-1000 ease-out ${
              isFinalCtaVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-yb-white mb-6">
              Ready to Start Your Competitive Analysis?
            </h2>
            <p className="text-xl text-yb-beige-light mb-8 max-w-3xl mx-auto leading-relaxed">
              See exactly where you stand against your competition and get a strategic roadmap for dominating your market.
            </p>
            <div className={`transform transition-all duration-1000 ease-out delay-300 ${
              isFinalCtaVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}>
              <Button href="/getting-started" variant="primary" size="lg">
                Start Your Competitive Analysis
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
