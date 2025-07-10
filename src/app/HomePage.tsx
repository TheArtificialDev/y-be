'use client'

import { useState, useEffect } from 'react'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'
import DecorativeWrapper from '@/components/DecorativeShapes'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <Section background="navy" padding="xl">
        <DecorativeWrapper>
          <Container>
            <div className="relative z-10">
              <div className="relative z-10 text-center lg:text-left lg:max-w-4xl">
                <h1 className={`font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-yb-beige mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  We don&apos;t just build websites, we{' '}
                  <span className="text-yb-beige-light">engineer competitive advantages</span>
                </h1>
                <p className={`text-xl text-yb-beige/80 max-w-3xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Your Business Engine - Powering innovation and growth through data-driven web solutions that position you ahead of the competition.
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <Button href="/getting-started" variant="outline" size="lg">
                    See How We Analyze Your Competition
                  </Button>
                  <Button href="/our-process" variant="outline" size="lg">
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </DecorativeWrapper>
      </Section>

      {/* Problem-Solution Bridge Section */}
      <Section background="beige" padding="xl">
        <DecorativeWrapper>
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
                The Gap Between Generic Solutions and Strategic Advantage
              </h2>
              <p className="text-lg text-yb-navy/80 max-w-2xl mx-auto">
                Most businesses settle for cookie-cutter websites. We engineer competitive advantages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-yb-navy/10 hover:bg-yb-navy/20 transition-all duration-300 border border-yb-navy/20">
                <h3 className="font-heading text-2xl font-bold text-yb-navy/70 mb-6">Generic Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-yb-navy/80">Template-based designs that look like everyone else&apos;s</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-yb-navy/80">No competitive analysis or market research</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-yb-navy/80">Generic messaging that doesn&apos;t differentiate</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-yb-navy/80">Limited data insights and optimization</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-8 bg-yb-navy text-yb-beige hover:bg-yb-navy-dark transition-all duration-300 border border-yb-navy">
                <h3 className="font-heading text-2xl font-bold text-yb-beige mb-6">Y-Be Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-yb-beige/90">Custom designs based on competitor analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-yb-beige/90">Deep market research and positioning strategy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-yb-beige/90">Messaging that highlights your unique advantages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-yb-beige/90">Continuous optimization based on real data</span>
                  </li>
                </ul>
              </Card>
            </div>
          </Container>
        </DecorativeWrapper>
      </Section>

      {/* Data-Driven Differentiation Section */}
      <Section background="navy" padding="xl">
        <DecorativeWrapper>
          <Container>
            <div className="bg-yb-beige/5 border border-yb-beige/20 rounded-2xl p-8 mb-8">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-beige mb-4">
                  Data-Driven Differentiation
                </h2>
                <p className="text-lg text-yb-beige/80 max-w-2xl mx-auto">
                  See how we analyze your competition and identify opportunities for strategic advantage
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="p-6 bg-yb-beige text-yb-navy hover:shadow-lg hover:shadow-yb-beige/20 transition-all duration-300 border border-yb-beige/30">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yb-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-yb-beige font-bold text-2xl">📊</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-yb-navy mb-4">
                      Competitor Analysis
                    </h3>
                    <p className="text-yb-navy/80 mb-4">
                      We analyze your top 10 competitors&apos; websites, SEO strategies, and user experiences
                </p>
                <div className="bg-yb-navy/20 rounded-lg p-4">
                  <div className="text-sm text-yb-navy font-medium">Sample Insights:</div>
                  <div className="text-xs text-yb-navy/80 mt-2">
                    • Competitor A: 45% faster load times needed<br/>
                    • Competitor B: Missing mobile optimization<br/>
                    • Competitor C: Poor conversion funnel
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-yb-beige text-yb-navy hover:shadow-lg hover:shadow-yb-beige/20 transition-all duration-300 border border-yb-beige/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-yb-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yb-beige font-bold text-2xl">🎯</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-yb-navy mb-4">
                  SEO Gap Analysis
                </h3>
                <p className="text-yb-navy/80 mb-4">
                  Identify keyword opportunities and technical SEO advantages
                </p>
                <div className="bg-yb-navy/20 rounded-lg p-4">
                  <div className="text-sm text-yb-navy font-medium">Opportunity Score:</div>
                  <div className="flex items-center mt-2">
                    <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                    <span className="ml-2 text-sm text-yb-navy">84%</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-yb-beige text-yb-navy hover:shadow-lg hover:shadow-yb-beige/20 transition-all duration-300 border border-yb-beige/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-yb-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yb-beige font-bold text-2xl">🚀</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-yb-navy mb-4">
                  Performance Metrics
                </h3>
                <p className="text-yb-navy/80 mb-4">
                  Track and optimize every aspect of your competitive position
                </p>
                <div className="bg-yb-navy/20 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-yb-navy font-medium">Speed</div>
                      <div className="text-green-500">+67%</div>
                    </div>
                    <div>
                      <div className="text-yb-navy font-medium">Conv.</div>
                      <div className="text-green-500">+132%</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        </Container>
      </DecorativeWrapper>
      </Section>

      {/* 360° Service Spectrum Section */}
      <Section background="beige" padding="xl">
        <DecorativeWrapper>
          <Container>
            <div className="bg-yb-navy/5 border border-yb-navy/20 rounded-2xl p-8 mb-8">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
                  360° Service Spectrum
                </h2>
                <p className="text-lg text-yb-navy/80 max-w-2xl mx-auto">
                  Integrated services that work together to create your competitive advantage
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="p-6 bg-yb-navy text-yb-beige group hover:bg-yb-navy-dark hover:shadow-lg hover:shadow-yb-beige/20 transition-all duration-300 cursor-pointer border border-yb-navy/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yb-beige-light transition-all duration-300">
                  <span className="text-yb-navy font-bold text-2xl">🎨</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-yb-beige mb-4">
                  Creative Design
                </h3>
                <p className="text-yb-beige/80 text-sm mb-4">
                  Custom designs that reflect your competitive positioning
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-yb-navy bg-yb-beige rounded p-2">
                    Integration benefits: Brand consistency, faster loading, better conversions
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-yb-navy text-yb-beige group hover:bg-yb-navy-dark hover:shadow-lg hover:shadow-yb-beige/20 transition-all duration-300 cursor-pointer border border-yb-navy/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yb-beige-light transition-all duration-300">
                  <span className="text-yb-navy font-bold text-2xl">🏷️</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-yb-beige mb-4">
                  Strategic Branding
                </h3>
                <p className="text-yb-beige/80 text-sm mb-4">
                  Brand identity that sets you apart from competitors
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-yb-navy bg-yb-beige rounded p-2">
                    Integration benefits: Cohesive messaging, stronger differentiation
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-yb-navy text-yb-beige group hover:bg-yb-navy-dark hover:shadow-lg hover:shadow-yb-beige/20 transition-all duration-300 cursor-pointer border border-yb-navy/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yb-beige-light transition-all duration-300">
                  <span className="text-yb-navy font-bold text-2xl">⚡</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-yb-beige mb-4">
                  Development
                </h3>
                <p className="text-yb-beige/80 text-sm mb-4">
                  Technical excellence that outperforms competitors
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-yb-navy bg-yb-beige rounded p-2">
                    Integration benefits: Superior performance, better SEO rankings
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-yb-navy text-yb-beige group hover:bg-yb-navy-dark hover:shadow-lg hover:shadow-yb-beige/20 transition-all duration-300 cursor-pointer border border-yb-navy/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yb-beige-light transition-all duration-300">
                  <span className="text-yb-navy font-bold text-2xl">🔧</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-yb-beige mb-4">
                  Premium Hosting
                </h3>
                <p className="text-yb-beige/80 text-sm mb-4">
                  Lightning-fast infrastructure for competitive advantage
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-yb-navy bg-yb-beige rounded p-2">
                    Integration benefits: 99.9% uptime, faster speeds than competitors
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        </Container>
      </DecorativeWrapper>
      </Section>

      {/* Social Proof Teaser Section */}
      <Section background="beige" padding="xl">
        <DecorativeWrapper>
          <Container>
            <div className="bg-yb-navy/5 border border-yb-navy/20 rounded-2xl p-8 mb-8 hover:shadow-lg hover:shadow-yb-beige/20 transition-all duration-300">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
                  Results That Speak for Themselves
                </h2>
                <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
                  Real transformations from businesses that chose strategic advantage over generic solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="p-6 text-center bg-yb-beige hover:bg-yb-beige-light transition-all duration-300">
                  <div className="text-5xl font-bold text-yb-navy mb-2">+148%</div>
                  <p className="text-yb-navy-light text-sm mb-2">Traffic increase in 3 months</p>
                  <p className="text-xs text-yb-navy-light">&ldquo;E-commerce retailer&rdquo;</p>
                </Card>
                <Card className="p-6 text-center bg-yb-beige hover:bg-yb-beige-light transition-all duration-300">
                  <div className="text-5xl font-bold text-yb-navy mb-2">2.3x</div>
                  <p className="text-yb-navy-light text-sm mb-2">Conversion rate improvement</p>
                  <p className="text-xs text-yb-navy-light">&ldquo;SaaS company&rdquo;</p>
                </Card>
                <Card className="p-6 text-center bg-yb-beige hover:bg-yb-beige-light transition-all duration-300">
                  <div className="text-5xl font-bold text-yb-navy mb-2">67%</div>
                  <p className="text-yb-navy-light text-sm mb-2">Faster load times vs competitors</p>
                  <p className="text-xs text-yb-navy-light">&ldquo;Professional services&rdquo;</p>
                </Card>
              </div>
              
              <div className="bg-yb-beige rounded-lg p-8 max-w-4xl mx-auto">
                <div className="text-center mb-6">
                  <div className="text-6xl text-yb-beige mb-4">&ldquo;</div>
                  <p className="text-lg text-yb-navy italic mb-4">
                    &ldquo;Y-Be didn&apos;t just build us a website - they engineered our competitive advantage. 
                    Our competitor analysis showed we were falling behind, but within 6 months we were 
                    outperforming our top 3 competitors in every metric that matters.&rdquo;
                  </p>
                  <div className="text-sm text-yb-navy-light">
                    — Sarah Mitchell, CEO of TechFlow Solutions
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </DecorativeWrapper>
      </Section>

      {/* CTA Bridge Section */}
      <Section background="navy" padding="xl">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-yb-white mb-6">
              Ready to Engineer Your Competitive Advantage?
            </h2>
            <p className="text-xl text-yb-beige-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Get your free competitive analysis and see exactly how we can position you ahead of the competition. 
              No generic solutions - just strategic advantages tailored to your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/getting-started" variant="primary" size="lg">
                Claim Your Free Competitive Analysis
              </Button>
              <Button href="/our-process" variant="outline" size="lg" className="border-yb-beige text-yb-beige hover:bg-yb-beige hover:text-yb-navy">
                See Our Process →
              </Button>
            </div>
            <p className="text-sm text-yb-beige-light">
              ✓ No commitment required  ✓ Results in 48 hours  ✓ Actionable insights included
            </p>
          </div>
        </Container>
      </Section>
    </div>
  )
}
