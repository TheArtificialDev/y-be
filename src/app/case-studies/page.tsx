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
  const [activeTab, setActiveTab] = useState('case-studies')
  
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
  const demoSites = [
    {
      category: "Landscape & Nature",
      sites: [
        { name: "Landscape Portfolio 1", url: "https://landscape-1.y-be.tech", description: "Professional landscape photography showcase" },
        { name: "Landscape Portfolio 2", url: "https://landscape-2.y-be.tech", description: "Nature and outdoor photography gallery" },
        { name: "Landscape Portfolio 3", url: "https://landscape-3.y-be.tech", description: "Scenic landscape photography collection" },
        { name: "Landscape Portfolio 4", url: "https://landscape-4.y-be.tech", description: "Premium landscape photography site" }
      ]
    },
    {
      category: "Automotive",
      sites: [
        { name: "Car Showcase 1", url: "https://car-1.y-be.tech", description: "Luxury automotive photography portfolio" },
        { name: "Car Showcase 2", url: "https://car-2.y-be.tech", description: "Professional car photography gallery" },
        { name: "Car Showcase 3", url: "https://car-3.y-be.tech", description: "Automotive photography collection" },
        { name: "Car Showcase 4", url: "https://car-4.y-be.tech", description: "Premium car photography showcase" }
      ]
    },
    {
      category: "Interior Design",
      sites: [
        { name: "Interior Design 1", url: "https://interior-design-1.y-be.tech", description: "Modern interior design portfolio" },
        { name: "Interior Design 2", url: "https://interior-design-2.y-be.tech", description: "Contemporary interior showcase" },
        { name: "Interior Design 3", url: "https://interior-design-3.y-be.tech", description: "Luxury interior design gallery" },
        { name: "Interior Design 4", url: "https://interior-design-4.y-be.tech", description: "Premium interior design collection" }
      ]
    },
    {
      category: "Corporate",
      sites: [
        { name: "Corporate 1", url: "https://incorp-1.y-be.tech", description: "Modern corporate website template" },
        { name: "Corporate 2", url: "https://incorp-2.y-be.tech", description: "Professional business showcase" },
        { name: "Corporate 3", url: "https://incorp-3.y-be.tech", description: "Enterprise-level corporate site" }
      ]
    },
    {
      category: "Travel & Lifestyle",
      sites: [
        { name: "Travel Portfolio", url: "https://travels-1.y-be.tech", description: "Travel photography and lifestyle blog" }
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
              <p className="text-xl md:text-2xl text-yb-beige-light max-w-4xl mx-auto mb-12 leading-relaxed">
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
                  <div className="text-3xl font-bold text-yb-beige mb-2">+187%</div>
                  <div className="text-sm text-yb-beige-light">Avg. Traffic Growth</div>
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
                  <div className="text-3xl font-bold text-yb-beige mb-2">+219%</div>
                  <div className="text-sm text-yb-beige-light">Avg. Conversion Growth</div>
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
                  <div className="text-3xl font-bold text-yb-beige mb-2">4.2x</div>
                  <div className="text-sm text-yb-beige-light">ROI Improvement</div>
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
                  <div className="text-3xl font-bold text-yb-beige mb-2">15+</div>
                  <div className="text-sm text-yb-beige-light">Industries Served</div>
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
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'case-studies'
                    ? 'bg-yb-navy text-yb-white shadow-md'
                    : 'text-yb-navy hover:text-yb-beige'
                }`}
              >
                Case Studies
              </button>
              <button
                onClick={() => setActiveTab('demos')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
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
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-6">
                    Industry Deep Dives
                  </h2>
                  <p className="text-lg text-yb-navy-light max-w-2xl mx-auto mb-8 leading-relaxed">
                    We&apos;re crafting detailed industry-specific case studies that showcase our strategic approach across different markets. Each deep dive will reveal the unique competitive advantages we&apos;ve engineered for businesses in various sectors.
                  </p>
                </div>
                
                <div className={`inline-flex items-center gap-3 bg-yb-navy bg-opacity-5 px-6 py-3 rounded-full transform transition-all duration-1000 ease-out ${
                  industryAnimation.isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}>
                  <div className="w-2 h-2 bg-yb-beige rounded-full animate-pulse"></div>
                  <span className="text-yb-navy font-medium">Coming Soon</span>
                  <div className="w-2 h-2 bg-yb-beige rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                <div className={`mt-8 text-sm text-yb-navy-light transform transition-all duration-1000 ease-out ${
                  industryAnimation.isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}>
                  In the meantime, discover how our proven process creates competitive advantages in our <a href="/our-process" className="text-yb-beige underline hover:text-yb-beige-light transition-colors">detailed methodology</a>.
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
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
                  Before/After Transformations
                </h2>
                <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
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
                  <h3 className="font-heading text-lg font-semibold text-yb-beige mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-sm">Page Load Speed</span>
                      <div className="text-right">
                        <div className="text-red-400 text-sm line-through">4.2s</div>
                        <div className="text-green-400 text-sm font-medium">1.8s</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-sm">Bounce Rate</span>
                      <div className="text-right">
                        <div className="text-red-400 text-sm line-through">67%</div>
                        <div className="text-green-400 text-sm font-medium">23%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yb-beige-light text-sm">Conversion Rate</span>
                      <div className="text-right">
                        <div className="text-red-400 text-sm line-through">1.2%</div>
                        <div className="text-green-400 text-sm font-medium">3.8%</div>
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
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
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
                  <p className="text-yb-navy mb-6 italic">
                    &ldquo;The competitive analysis was eye-opening. We had no idea how much we were falling behind until Y-Be showed us exactly where our competitors were winning. The strategic roadmap they provided became our blueprint for dominating our market.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yb-navy rounded-full flex items-center justify-center mr-4">
                      <span className="text-yb-beige font-bold">SM</span>
                    </div>
                    <div>
                      <div className="text-yb-navy font-semibold">Sarah Mitchell</div>
                      <div className="text-yb-navy-light text-sm">CEO, TechFlow Solutions</div>
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
                  <p className="text-yb-navy mb-6 italic">
                    &ldquo;Y-Be didn&apos;t just build us a website - they engineered our competitive advantage. Our ROI from their work exceeded our expectations by 340%. We&apos;re now the go-to choice in our industry.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yb-navy rounded-full flex items-center justify-center mr-4">
                      <span className="text-yb-beige font-bold">MT</span>
                    </div>
                    <div>
                      <div className="text-yb-navy font-semibold">Marcus Thompson</div>
                      <div className="text-yb-navy-light text-sm">Managing Partner, Legal Partners Group</div>
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
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
                  Results Gallery
                </h2>
                <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
                  A quick overview of the competitive advantages we&apos;ve engineered for our clients.
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
                  { metric: "+289%", detail: "Conversion Rate", industry: "E-Commerce" },
                  { metric: "+213%", detail: "Organic Traffic", industry: "SaaS" },
                  { metric: "+178%", detail: "Lead Generation", industry: "Legal" },
                  { metric: "+234%", detail: "ROI Improvement", industry: "Coaching" },
                  { metric: "4.2x", detail: "Market Share", industry: "Professional Services" },
                  { metric: "+156%", detail: "Brand Authority", industry: "Healthcare" }
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
                                {site.url.replace('https://', '')}
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
