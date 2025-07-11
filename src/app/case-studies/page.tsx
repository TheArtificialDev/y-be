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
  const [activeIndustry, setActiveIndustry] = useState('all')
  
  // Animation hooks
  const heroAnimation = useIntersectionObserver()
  const industryAnimation = useCaseStudiesIntersectionObserver() // Use special hook for case studies
  const transformationAnimation = useBidirectionalIntersectionObserver()
  const testimonialsAnimation = useBidirectionalIntersectionObserver()
  const resultsAnimation = useBidirectionalIntersectionObserver()
  const ctaAnimation = useBidirectionalIntersectionObserver()

  const caseStudies = [
    {
      id: 1,
      client: "TechFlow Solutions",
      industry: "saas",
      challenge: "Falling behind top 3 competitors in organic search and conversions",
      solution: "Complete competitive analysis and strategic repositioning",
      results: {
        traffic: "+213%",
        conversions: "+156%",
        leads: "+89%",
        timeframe: "6 months"
      },
      quote: "Y-Be didn't just build us a website - they engineered our competitive advantage. Within 6 months we were outperforming our top 3 competitors in every metric that matters.",
      author: "Sarah Mitchell, CEO"
    },
    {
      id: 2,
      client: "Legal Partners Group",
      industry: "legal",
      challenge: "Generic website that looked like every other law firm",
      solution: "Data-driven differentiation and premium positioning",
      results: {
        traffic: "+178%",
        conversions: "+234%",
        leads: "+145%",
        timeframe: "4 months"
      },
      quote: "Our new website positions us as the premium choice in our market. We're now getting higher-quality leads and can charge premium rates.",
      author: "Marcus Thompson, Managing Partner"
    },
    {
      id: 3,
      client: "E-Commerce Plus",
      industry: "ecommerce",
      challenge: "Poor conversion rates and high cart abandonment",
      solution: "UX optimization based on competitor analysis",
      results: {
        traffic: "+134%",
        conversions: "+289%",
        leads: "+201%",
        timeframe: "5 months"
      },
      quote: "The competitive analysis revealed exactly what we were missing. Our conversion rate nearly tripled after implementing Y-Be's recommendations.",
      author: "Lisa Chen, Founder"
    },
    {
      id: 4,
      client: "Executive Coaching Pro",
      industry: "coaching",
      challenge: "Invisible online presence in a crowded market",
      solution: "Strategic content and SEO competitive advantage",
      results: {
        traffic: "+267%",
        conversions: "+198%",
        leads: "+156%",
        timeframe: "3 months"
      },
      quote: "Y-Be helped us dominate our niche. We went from page 3 to position 1 for our most valuable keywords.",
      author: "David Rodriguez, Executive Coach"
    }
  ]

  const industries = [
    { id: 'all', name: 'All Industries', icon: '🏢' },
    { id: 'saas', name: 'SaaS', icon: '💻' },
    { id: 'legal', name: 'Legal', icon: '⚖️' },
    { id: 'ecommerce', name: 'E-Commerce', icon: '🛒' },
    { id: 'coaching', name: 'Coaching', icon: '🎯' }
  ]

  const filteredCaseStudies = activeIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeIndustry)

  return (
    <div>
      {/* Case Studies Hero Section */}
      <Section background="navy" padding="xl">
        <Container>
          <div 
            ref={heroAnimation.ref}
            className={`text-center transform transition-all duration-1000 ease-out ${
              heroAnimation.isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-yb-white mb-6">
              Real Clients. Real Wins.{' '}
              <span className="text-yb-beige">Real Advantage.</span>
            </h1>
            <p className="text-xl text-yb-beige-light max-w-3xl mx-auto mb-8 leading-relaxed">
              See how businesses just like yours have gained sustainable competitive advantages through our strategic approach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center square-box p-4 transform transition-all duration-1000 ease-out delay-200">
                <div className="text-3xl font-bold text-yb-beige mb-2">+187%</div>
                <div className="text-sm text-yb-beige-light">Avg. Traffic Growth</div>
              </div>
              <div className="text-center square-box p-4 transform transition-all duration-1000 ease-out delay-300">
                <div className="text-3xl font-bold text-yb-beige mb-2">+219%</div>
                <div className="text-sm text-yb-beige-light">Avg. Conversion Growth</div>
              </div>
              <div className="text-center square-box p-4 transform transition-all duration-1000 ease-out delay-500">
                <div className="text-3xl font-bold text-yb-beige mb-2">4.2x</div>
                <div className="text-sm text-yb-beige-light">ROI Improvement</div>
              </div>
              <div className="text-center square-box p-4 transform transition-all duration-1000 ease-out delay-700">
                <div className="text-3xl font-bold text-yb-beige mb-2">15+</div>
                <div className="text-sm text-yb-beige-light">Industries Served</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industry Expertise Showcase */}
      <Section background="white" padding="xl">
        <Container>
          <div 
            ref={industryAnimation.ref}
            className={`text-center mb-16 square-box-beige p-8 transform transition-all duration-1000 ease-out ${
              industryAnimation.isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
              Industry Expertise Showcase
            </h2>
            <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
              Our strategic approach adapts to different markets while maintaining the same competitive edge focus.
            </p>
          </div>

          {/* Industry Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 ease-out delay-200 ${
            industryAnimation.isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? 'bg-yb-navy text-yb-white'
                    : 'bg-yb-beige bg-opacity-20 text-yb-navy hover:bg-yb-beige hover:bg-opacity-40'
                }`}
              >
                <span className="mr-2">{industry.icon}</span>
                {industry.name}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transform transition-all duration-1000 ease-out delay-400 ${
            industryAnimation.isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            {filteredCaseStudies.map((study, index) => (
              <Card key={study.id} className={`p-8 hover:shadow-lg transition-all duration-300 square-box transform ${
                industryAnimation.isVisible 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-12 opacity-0 scale-95'
              }`} style={{ transitionDelay: `${600 + index * 200}ms` }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-xl font-bold text-yb-navy">{study.client}</h3>
                  <span className="bg-yb-beige bg-opacity-30 text-yb-navy px-3 py-1 rounded-full text-sm font-medium">
                    {industries.find(i => i.id === study.industry)?.name}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-yb-navy mb-2">Challenge</h4>
                    <p className="text-yb-navy-light text-sm">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-yb-navy mb-2">Solution</h4>
                    <p className="text-yb-navy-light text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-yb-navy mb-3">Results in {study.results.timeframe}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-yb-beige bg-opacity-20 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-yb-navy">{study.results.traffic}</div>
                        <div className="text-xs text-yb-navy-light">Traffic Growth</div>
                      </div>
                      <div className="bg-yb-beige bg-opacity-20 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-yb-navy">{study.results.conversions}</div>
                        <div className="text-xs text-yb-navy-light">Conversions</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-yb-navy italic mb-2">&ldquo;{study.quote}&rdquo;</p>
                    <p className="text-yb-navy-light text-sm">— {study.author}</p>
                  </div>
                </div>
              </Card>
            ))}
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
