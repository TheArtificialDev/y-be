'use client'

import { useState, useEffect, useRef } from 'react'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'

// Custom hook for bidirectional intersection observer
function useBidirectionalIntersectionObserver() {
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
          // Only trigger fade out if element has been visible before
          // This prevents issues when scrolling from bottom up
          if (hasBeenVisible) {
            setIsVisible(false)
            setHasLeft(true)
          }
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasBeenVisible])

  return { ref, isVisible, hasLeft }
}

// Custom hook for case studies grid that doesn't fade out on filter change
function useCaseStudiesIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
        // Note: We don't set isVisible to false when leaving viewport
        // This prevents cards from disappearing when filters change
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Custom hook for one-way intersection observer (for hero sections)
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

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<'case-studies' | 'demos'>('case-studies')
  
  // Hero animation state (sequential animation)
  const [heroAnimationState, setHeroAnimationState] = useState({
    realClients: false,
    realWins: false,
    realAdvantage: false,
    content: false
  })

  // Animation hooks
  const heroAnimation = useIntersectionObserver()
  const industryAnimation = useCaseStudiesIntersectionObserver() // Use special hook for case studies
  const transformationAnimation = useBidirectionalIntersectionObserver()
  const testimonialsAnimation = useBidirectionalIntersectionObserver()
  const resultsAnimation = useBidirectionalIntersectionObserver()
  const ctaAnimation = useBidirectionalIntersectionObserver()

  // Hero animation sequence
  useEffect(() => {
    const sequence = async () => {
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, realClients: true }))
      }, 500)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, realWins: true }))
      }, 1200)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, realAdvantage: true }))
      }, 1900)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, content: true }))
      }, 2600)
    }
    
    sequence()
  }, [])

  // Demo sites data organized by category
  // Get base URL for demo sites (environment-aware)
  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}`
    : (process.env.NEXT_PUBLIC_SITE_URL || 'https://y-be.tech')

  const demoSites = [
    {
      category: "Landscape & Nature",
      sites: [
        { name: "Landscape Portfolio 1", url: `${baseUrl}/demo/landscaping_demo_site_1`, description: "Professional landscape photography showcase" },
        { name: "Landscape Portfolio 2", url: `${baseUrl}/demo/landscaping_demo_site_2`, description: "Nature and outdoor photography gallery" },
        { name: "Landscape Portfolio 3", url: `${baseUrl}/demo/landscaping_demo_site_3`, description: "Scenic landscape photography collection" },
        { name: "Landscape Portfolio 4", url: `${baseUrl}/demo/landscaping_demo_site_4`, description: "Premium landscape photography site" }
      ]
    },
    {
      category: "Automotive",
      sites: [
        { name: "Car Showcase 1", url: `${baseUrl}/demo/car_demo_site_1`, description: "Luxury automotive photography portfolio" },
        { name: "Car Showcase 2", url: `${baseUrl}/demo/car_demo_site_2`, description: "Professional car photography gallery" },
        { name: "Car Showcase 3", url: `${baseUrl}/demo/car_demo_site_3`, description: "Automotive photography collection" },
        { name: "Car Showcase 4", url: `${baseUrl}/demo/car_demo_site_4`, description: "Premium car photography showcase" }
      ]
    },
    {
      category: "Interior Design",
      sites: [
        { name: "Interior Design 1", url: `${baseUrl}/demo/interior_design_demo_site_1`, description: "Modern interior design portfolio" },
        { name: "Interior Design 2", url: `${baseUrl}/demo/interior_design_demo_site_2`, description: "Contemporary interior showcase" },
        { name: "Interior Design 3", url: `${baseUrl}/demo/interior_design_demo_site_3`, description: "Luxury interior design gallery" },
        { name: "Interior Design 4", url: `${baseUrl}/demo/interior_design_demo_site_4`, description: "Premium interior design collection" }
      ]
    },
    {
      category: "Corporate",
      sites: [
        { name: "Corporate 1", url: `${baseUrl}/demo/incorp_demo_site_1`, description: "Modern corporate website template" },
        { name: "Corporate 2", url: `${baseUrl}/demo/incorp_demo_site_2`, description: "Professional business showcase" },
        { name: "Corporate 3", url: `${baseUrl}/demo/incorp_demo_site_3`, description: "Enterprise-level corporate site" }
      ]
    },
    {
      category: "Travel & Lifestyle",
      sites: [
        { name: "Travel Portfolio", url: `${baseUrl}/demo/travels_demo_site_1`, description: "Travel photography and lifestyle blog" }
      ]
    }
  ]

  return (
    <div>
      {/* Case Studies Hero Section */}
      <Section background="navy" padding="sm" className="min-h-screen flex items-center justify-center py-0">
        <Container>
          <div 
            ref={heroAnimation.ref}
            className="text-center py-16 min-h-screen flex flex-col justify-center"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-yb-white mb-8">
              <span className={`inline-block transition-all duration-1500 ease-out ${
                heroAnimationState.realClients 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: heroAnimationState.realClients ? 'blur(0px)' : 'blur(2px)'
              }}>
                Real Clients.
              </span>{' '}
              <span className={`inline-block transition-all duration-1500 ease-out ${
                heroAnimationState.realWins 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: heroAnimationState.realWins ? 'blur(0px)' : 'blur(2px)'
              }}>
                Real Wins.
              </span>{' '}
              <span className={`text-yb-beige inline-block transition-all duration-1500 ease-out ${
                heroAnimationState.realAdvantage 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: heroAnimationState.realAdvantage ? 'blur(0px)' : 'blur(2px)'
              }}>
                Real Advantage.
              </span>
            </h1>
            <div className={`transition-all duration-1500 ease-out ${
              heroAnimationState.content 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
            style={{
              transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              filter: heroAnimationState.content ? 'blur(0px)' : 'blur(1px)'
            }}>
              <p className="text-2xl md:text-3xl text-yb-beige-light max-w-4xl mx-auto mb-12 leading-relaxed">
                See how businesses just like yours have gained sustainable competitive advantages through our strategic approach.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className={`text-center square-box p-4 transform transition-all duration-1000 ease-out ${
                  heroAnimationState.content 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transitionDelay: '400ms',
                  filter: heroAnimationState.content ? 'blur(0px)' : 'blur(1px)'
                }}>
                  <div className="text-4xl font-bold text-yb-beige mb-2">+187%</div>
                  <div className="text-base text-yb-beige-light">Avg. Traffic Growth</div>
                </div>
                <div className={`text-center square-box p-4 transform transition-all duration-1000 ease-out ${
                  heroAnimationState.content 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transitionDelay: '600ms',
                  filter: heroAnimationState.content ? 'blur(0px)' : 'blur(1px)'
                }}>
                  <div className="text-4xl font-bold text-yb-beige mb-2">+219%</div>
                  <div className="text-base text-yb-beige-light">Avg. Conversion Growth</div>
                </div>
                <div className={`text-center square-box p-4 transform transition-all duration-1000 ease-out ${
                  heroAnimationState.content 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transitionDelay: '800ms',
                  filter: heroAnimationState.content ? 'blur(0px)' : 'blur(1px)'
                }}>
                  <div className="text-4xl font-bold text-yb-beige mb-2">4.2x</div>
                  <div className="text-base text-yb-beige-light">ROI Improvement</div>
                </div>
                <div className={`text-center square-box p-4 transform transition-all duration-1000 ease-out ${
                  heroAnimationState.content 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transitionDelay: '1000ms',
                  filter: heroAnimationState.content ? 'blur(0px)' : 'blur(1px)'
                }}>
                  <div className="text-4xl font-bold text-yb-beige mb-2">15+</div>
                  <div className="text-base text-yb-beige-light">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tab Navigation */}
      <Section background="white" padding="md">
        <Container>
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-yb-navy bg-opacity-5 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('case-studies')}
                className={`px-8 py-4 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'case-studies'
                    ? 'bg-yb-navy text-yb-white shadow-md'
                    : 'text-yb-navy hover:text-yb-beige'
                }`}
              >
                Case Studies
              </button>
              <button
                onClick={() => setActiveTab('demos')}
                className={`px-8 py-4 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'demos'
                    ? 'bg-yb-navy text-yb-white shadow-md'
                    : 'text-yb-navy hover:text-yb-beige'
                }`}
              >
                Demo Sites
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tab Content */}
      {activeTab === 'case-studies' && (
        <>
          {/* Industry Expertise Showcase */}
          <Section background="white" padding="xl">
            <Container>
              <div 
                ref={industryAnimation.ref}
                className={`text-center square-box-beige p-12 transform transition-all duration-1000 ease-out ${
                  industryAnimation.isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
              >
                <div className={`mb-8 transform transition-all duration-1000 ease-out ${
                  industryAnimation.isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}>
                  <div className="w-20 h-20 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✨</span>
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-6">
                    Our Success Stories
                  </h2>
                  <p className="text-xl text-yb-navy-light max-w-2xl mx-auto mb-8 leading-relaxed">
                    Real projects, real results. See how we&apos;ve helped businesses across different industries achieve their digital transformation goals and gain competitive advantages.
                  </p>
                </div>

                {/* Case Studies Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 transform transition-all duration-1000 ease-out ${
                  industryAnimation.isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}>
                  
                  {/* Completed Projects */}
                  <Card 
                    className="p-6 bg-yb-beige bg-opacity-10 border border-yb-beige border-opacity-30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <a href="/case-studies/kidzee-kasavanahalli" className="block">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-base font-medium text-green-700 uppercase tracking-wider">Completed</span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-yb-navy mb-3 group-hover:text-yb-beige transition-colors">
                        Kidzee Kasavanahalli
                      </h3>
                      <p className="text-yb-navy-light text-base mb-4 leading-relaxed">
                        Complete digital transformation for a premier preschool in Bangalore. Built a modern, parent-friendly website with enrollment management.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-base">
                          <span className="text-yb-navy-light">Industry:</span>
                          <span className="text-yb-navy font-medium">Education</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span className="text-yb-navy-light">Impact:</span>
                          <span className="text-green-600 font-medium">+183% inquiries</span>
                        </div>
                      </div>
                      <div className="flex items-center text-yb-beige hover:text-yb-navy transition-colors text-base font-medium">
                        <span>View Details</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </a>
                  </Card>

                  <Card 
                    className="p-6 bg-yb-beige bg-opacity-10 border border-yb-beige border-opacity-30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <a href="/case-studies/shilps-art" className="block">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-green-700 uppercase tracking-wider">Completed</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-yb-navy mb-3 group-hover:text-yb-beige transition-colors">
                        Shilps Art
                      </h3>
                      <p className="text-yb-navy-light text-sm mb-4 leading-relaxed">
                        Brand identity and digital presence for an authentic Indian arts school. Created a culturally rich website showcasing traditional art forms.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-yb-navy-light">Industry:</span>
                          <span className="text-yb-navy font-medium">Arts & Culture</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-yb-navy-light">Impact:</span>
                          <span className="text-green-600 font-medium">+175% students</span>
                        </div>
                      </div>
                      <div className="flex items-center text-yb-beige hover:text-yb-navy transition-colors text-sm font-medium">
                        <span>View Details</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </a>
                  </Card>

                  <Card 
                    className="p-6 bg-yb-beige bg-opacity-10 border border-yb-beige border-opacity-30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <a href="/case-studies/thekp" className="block">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">In Progress</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-yb-navy mb-3 group-hover:text-yb-beige transition-colors">
                        TheKP.in
                      </h3>
                      <p className="text-yb-navy-light text-sm mb-4 leading-relaxed">
                        Comprehensive digital ecosystem for a SaaS startup. Developing commercial website, micro-SaaS solutions, and custom digital tools.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-yb-navy-light">Industry:</span>
                          <span className="text-yb-navy font-medium">SaaS Technology</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-yb-navy-light">Progress:</span>
                          <span className="text-blue-600 font-medium">68% complete</span>
                        </div>
                      </div>
                      <div className="flex items-center text-yb-beige hover:text-yb-navy transition-colors text-sm font-medium">
                        <span>View Details</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </a>
                  </Card>

                  {/* Current Projects */}
                  <Card 
                    className="p-6 bg-yb-beige bg-opacity-10 border border-yb-beige border-opacity-30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <a href="/case-studies/vibe-company" className="block">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-sm font-medium text-yellow-700 uppercase tracking-wider">Development</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-yb-navy mb-3 group-hover:text-yb-beige transition-colors">
                        The VIBE Company
                      </h3>
                      <p className="text-yb-navy-light text-sm mb-4 leading-relaxed">
                        Next-generation platform for social media content recommendation and consumer trend analysis. Building advanced analytics dashboard.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-yb-navy-light">Industry:</span>
                          <span className="text-yb-navy font-medium">Social Analytics</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-yb-navy-light">Target:</span>
                          <span className="text-yellow-600 font-medium">1M+ posts/day</span>
                        </div>
                      </div>
                      <div className="flex items-center text-yb-beige hover:text-yb-navy transition-colors text-sm font-medium">
                        <span>View Details</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </a>
                  </Card>

                  <Card 
                    className="p-6 bg-yb-beige bg-opacity-10 border border-yb-beige border-opacity-30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <a href="/case-studies/prism-company" className="block">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-sm font-medium text-yellow-700 uppercase tracking-wider">Development</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-yb-navy mb-3 group-hover:text-yb-beige transition-colors">
                        The PRISM Company
                      </h3>
                      <p className="text-yb-navy-light text-sm mb-4 leading-relaxed">
                        Complete digital infrastructure for a research & development startup. Building data management and collaboration platform.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-yb-navy-light">Industry:</span>
                          <span className="text-yb-navy font-medium">R&D Technology</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-yb-navy-light">Target:</span>
                          <span className="text-yellow-600 font-medium">50% faster R&D</span>
                        </div>
                      </div>
                      <div className="flex items-center text-yb-beige hover:text-yb-navy transition-colors text-sm font-medium">
                        <span>View Details</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </a>
                  </Card>

                  {/* Stats Card */}
                  <Card className="p-6 bg-gradient-to-br from-yb-navy to-yb-beige text-white hover:shadow-lg transition-all duration-300">
                    <div className="text-center">
                      <h3 className="font-heading text-lg font-bold mb-4">Our Impact</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-3xl font-bold">5+</div>
                          <div className="text-sm opacity-90">Active Projects</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">4</div>
                          <div className="text-sm opacity-90">Industries Served</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">100%</div>
                          <div className="text-sm opacity-90">Client Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className={`mt-12 text-center transform transition-all duration-1000 ease-out ${
                  industryAnimation.isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}>
                  <p className="text-sm text-yb-navy-light mb-4">
                    Ready to become our next success story?
                  </p>
                  <a href="/getting-started" className="inline-flex items-center text-yb-beige hover:text-yb-navy transition-colors font-medium">
                    Start Your Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </Container>
          </Section>

          {/* Before/After Transformations */}
          <Section background="beige" padding="xl">
            <Container>
              <div 
                ref={transformationAnimation.ref}
                className={`text-center mb-16 square-box-beige p-8 transform transition-all duration-1000 ease-out ${
                  transformationAnimation.isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : transformationAnimation.hasLeft 
                    ? 'translate-y-8 opacity-0 scale-95' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
              >
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-4">
                  Before/After Transformations
                </h2>
                <p className="text-xl text-yb-navy-light max-w-2xl mx-auto">
                  See the dramatic improvements our strategic approach delivers across key performance metrics.
                </p>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 ease-out delay-300 ${
                transformationAnimation.isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : transformationAnimation.hasLeft 
                  ? 'translate-y-8 opacity-0' 
                  : 'translate-y-12 opacity-0'
              }`}>
                <Card className={`p-6 square-box-beige transform transition-all duration-1000 ease-out ${
                  transformationAnimation.isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : transformationAnimation.hasLeft 
                    ? 'translate-y-8 opacity-0 scale-95' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`} style={{ transitionDelay: '500ms' }}>
                  <h3 className="font-heading text-xl font-semibold text-yb-beige mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-base">Page Load Speed</span>
                      <div className="text-right">
                        <div className="text-red-400 text-base line-through">4.2s</div>
                        <div className="text-green-400 text-base font-medium">1.8s</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-base">Bounce Rate</span>
                      <div className="text-right">
                        <div className="text-red-400 text-base line-through">67%</div>
                        <div className="text-green-400 text-base font-medium">23%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-base">Conversion Rate</span>
                      <div className="text-right">
                        <div className="text-red-400 text-base line-through">1.2%</div>
                        <div className="text-green-400 text-base font-medium">3.8%</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className={`p-6 square-box-beige transform transition-all duration-1000 ease-out ${
                  transformationAnimation.isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : transformationAnimation.hasLeft 
                    ? 'translate-y-8 opacity-0 scale-95' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`} style={{ transitionDelay: '700ms' }}>
                  <h3 className="font-heading text-lg font-semibold text-yb-beige mb-4">Search Rankings</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-sm">Primary Keywords</span>
                      <div className="text-right">
                        <div className="text-red-400 text-sm line-through">Page 3</div>
                        <div className="text-green-400 text-sm font-medium">Position 1-3</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-sm">Organic Traffic</span>
                      <div className="text-right">
                        <div className="text-red-400 text-sm line-through">2,100/mo</div>
                        <div className="text-green-400 text-sm font-medium">8,400/mo</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-sm">Domain Authority</span>
                      <div className="text-right">
                        <div className="text-red-400 text-sm line-through">DA 23</div>
                        <div className="text-green-400 text-sm font-medium">DA 47</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className={`p-6 square-box-beige transform transition-all duration-1000 ease-out ${
                  transformationAnimation.isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : transformationAnimation.hasLeft 
                    ? 'translate-y-8 opacity-0 scale-95' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`} style={{ transitionDelay: '900ms' }}>
                  <h3 className="font-heading text-lg font-semibold text-yb-beige mb-4">Business Impact</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-sm">Monthly Leads</span>
                      <div className="text-right">
                        <div className="text-red-400 text-sm line-through">47</div>
                        <div className="text-green-400 text-sm font-medium">178</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-sm">Avg. Deal Size</span>
                      <div className="text-right">
                        <div className="text-red-400 text-sm line-through">$3,200</div>
                        <div className="text-green-400 text-sm font-medium">$5,800</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-sm">Market Position</span>
                      <div className="text-right">
                        <div className="text-red-400 text-sm line-through">#8</div>
                        <div className="text-green-400 text-sm font-medium">#2</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Container>
          </Section>

          {/* Client Testimonials */}
          <Section background="white" padding="xl">
            <Container>
              <div 
                ref={testimonialsAnimation.ref}
                className={`text-center mb-16 square-box-beige p-8 transform transition-all duration-1000 ease-out ${
                  testimonialsAnimation.isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : testimonialsAnimation.hasLeft 
                    ? 'translate-y-8 opacity-0 scale-95' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
              >
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-yb-navy-light max-w-2xl mx-auto">
                  Real feedback from businesses that chose strategic advantage over generic solutions.
                </p>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-1000 ease-out delay-300 ${
                testimonialsAnimation.isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : testimonialsAnimation.hasLeft 
                  ? 'translate-y-8 opacity-0' 
                  : 'translate-y-12 opacity-0'
              }`}>
                <Card className={`p-8 bg-yb-beige bg-opacity-20 square-box-beige transform transition-all duration-1000 ease-out ${
                  testimonialsAnimation.isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : testimonialsAnimation.hasLeft 
                    ? 'translate-y-8 opacity-0 scale-95' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`} style={{ transitionDelay: '500ms' }}>
                  <div className="text-4xl text-yb-beige mb-4">&ldquo;</div>
                  <p className="text-yb-navy mb-6 italic text-lg">
                    &ldquo;Y-Be transformed our digital presence completely. The new website not only looks professional but has significantly improved our parent engagement and enrollment inquiries. Their understanding of the education sector is remarkable.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yb-navy rounded-full flex items-center justify-center mr-4">
                      <span className="text-yb-beige font-bold">KK</span>
                    </div>
                    <div>
                      <div className="text-yb-navy font-semibold text-base">Kidzee Kasavanahalli</div>
                      <div className="text-yb-navy-light text-base">Preschool Administration</div>
                    </div>
                  </div>
                </Card>

                <Card className={`p-8 bg-yb-beige bg-opacity-20 square-box-beige transform transition-all duration-1000 ease-out ${
                  testimonialsAnimation.isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : testimonialsAnimation.hasLeft 
                    ? 'translate-y-8 opacity-0 scale-95' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`} style={{ transitionDelay: '700ms' }}>
                  <div className="text-4xl text-yb-beige mb-4">&ldquo;</div>
                  <p className="text-yb-navy mb-6 italic text-lg">
                    &ldquo;Working with Y-Be has been exceptional. They don&apos;t just build websites—they engineer digital solutions that accelerate business growth. Their technical expertise and strategic thinking have been invaluable for our SaaS development.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yb-navy rounded-full flex items-center justify-center mr-4">
                      <span className="text-yb-beige font-bold">TK</span>
                    </div>
                    <div>
                      <div className="text-yb-navy font-semibold text-base">TheKP Team</div>
                      <div className="text-yb-navy-light text-base">SaaS Startup</div>
                    </div>
                  </div>
                </Card>
              </div>
            </Container>
          </Section>

          {/* Results Gallery */}
          <Section background="beige" padding="xl">
            <Container>
              <div 
                ref={resultsAnimation.ref}
                className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
                  resultsAnimation.isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : resultsAnimation.hasLeft 
                    ? 'translate-y-8 opacity-0 scale-95' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
              >
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-4">
                  Our Project Portfolio
                </h2>
                <p className="text-xl text-yb-navy-light max-w-2xl mx-auto">
                  A snapshot of our diverse expertise across education, arts, SaaS, and emerging technologies.
                </p>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transform transition-all duration-1000 ease-out delay-300 ${
                resultsAnimation.isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : resultsAnimation.hasLeft 
                  ? 'translate-y-8 opacity-0' 
                  : 'translate-y-12 opacity-0'
              }`}>
                {[
                  { metric: "100%", detail: "Mobile Responsive", industry: "Education" },
                  { metric: "3+", detail: "Industries Served", industry: "Cross-Sector" },
                  { metric: "5+", detail: "Active Projects", industry: "Technology" },
                  { metric: "Custom", detail: "SaaS Solutions", industry: "Startups" },
                  { metric: "Full-Stack", detail: "Development", industry: "Digital Solutions" },
                  { metric: "2025", detail: "Launch Ready", industry: "Innovation" }
                ].map((result, index) => (
                  <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-300 group square-box transform ${
                    resultsAnimation.isVisible 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : resultsAnimation.hasLeft 
                      ? 'translate-y-8 opacity-0 scale-95' 
                      : 'translate-y-12 opacity-0 scale-95'
                  }`} style={{ transitionDelay: `${500 + index * 100}ms` }}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yb-beige mb-2 group-hover:text-yb-beige-light transition-colors">
                        {result.metric}
                      </div>
                      <div className="text-yb-beige-light text-sm mb-2">{result.detail}</div>
                      <div className="text-xs text-yb-navy bg-yb-beige bg-opacity-80 px-2 py-1 rounded-full">
                        {result.industry}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>
        </>
      )}

      {/* Demo Sites Tab Content */}
      {activeTab === 'demos' && (
        <Section background="white" padding="xl">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-6">
                Live Demo Sites
              </h2>
              <p className="text-lg text-yb-navy-light max-w-3xl mx-auto leading-relaxed">
                Explore our collection of live demonstration websites showcasing various industries and design approaches. 
                Each site demonstrates our commitment to high-quality, responsive design and user experience.
              </p>
            </div>

            <div className="space-y-12">
              {demoSites.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <h3 className="font-heading text-2xl font-bold text-yb-navy border-b border-yb-beige pb-2">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.sites.map((site, siteIndex) => (
                      <a
                        key={siteIndex}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 square-box cursor-pointer">
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-heading text-lg font-semibold text-yb-navy group-hover:text-yb-beige transition-colors">
                                {site.name}
                              </h4>
                              <div className="text-yb-beige group-hover:text-yb-navy transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-yb-navy-light text-sm mb-4 leading-relaxed">
                              {site.description}
                            </p>
                            <div className="space-y-3">
                              <div className="w-full text-center bg-yb-navy text-yb-white py-2 px-4 rounded-md group-hover:bg-yb-beige group-hover:text-yb-navy transition-all duration-300 font-medium">
                                Visit Live Site
                              </div>
                              <div className="text-xs text-yb-navy-light bg-yb-beige bg-opacity-20 px-3 py-1 rounded-full text-center">
                                {site.name}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-yb-beige bg-opacity-10 rounded-lg p-8">
              <h3 className="font-heading text-xl font-bold text-yb-navy mb-4">
                Ready to Build Your Own?
              </h3>
              <p className="text-yb-navy-light mb-6 max-w-2xl mx-auto">
                These demo sites showcase our capabilities across different industries. 
                Ready to create something amazing for your business?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/getting-started" variant="primary" size="lg">
                  Start Your Project
                </Button>
                <Button href="/our-process" variant="outline" size="lg" className="border-yb-navy text-yb-navy hover:bg-yb-navy hover:text-yb-white">
                  Learn Our Process
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Success Story CTA */}
      <Section background="navy" padding="xl">
        <Container>
          <div 
            ref={ctaAnimation.ref}
            className={`text-center transform transition-all duration-1000 ease-out ${
              ctaAnimation.isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : ctaAnimation.hasLeft 
                ? 'translate-y-8 opacity-0 scale-95' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-yb-white mb-6">
              Let&apos;s Create Your Success Story
            </h2>
            <p className="text-xl text-yb-beige-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the businesses that chose competitive advantage over generic solutions. 
              Your strategic transformation starts with understanding where you stand against your competition.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ease-out delay-300 ${
              ctaAnimation.isVisible 
                ? 'translate-y-0 opacity-100' 
                : ctaAnimation.hasLeft 
                ? 'translate-y-8 opacity-0' 
                : 'translate-y-12 opacity-0'
            }`}>
              <Button href="/getting-started" variant="primary" size="lg">
                Get Your Free Competitive Analysis
              </Button>
              <Button href="/our-process" variant="outline" size="lg" className="border-yb-beige text-yb-beige hover:bg-yb-beige hover:text-yb-navy">
                See Our Process →
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
