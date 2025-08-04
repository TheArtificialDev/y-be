'use client'

import { useState, useEffect, useRef } from 'react'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'
import DecorativeWrapper from '@/components/DecorativeShapes'
import { trackPageView } from '@/lib/analytics'

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

export default function HomePage() {
  const [animationState, setAnimationState] = useState({
    word0: false,
    word1: false,
    word2: false,
    word3: false,
    word4: false,
    restOfTitle: false,
    subtitle: false,
    buttons: false
  })

  // Intersection observers for different elements with specific thresholds
  const [gapTitleRef, isGapTitleVisible] = useBidirectionalIntersectionObserver(0.8, '-20px') // Wait for 80% of title to be visible
  const [gapCardsRef, isGapCardsVisible] = useBidirectionalIntersectionObserver(0.25, '-10px') // Wait for 25% of cards to be visible
  
  // Data-driven differentiation section observers
  const [dataBorderRef, isDataBorderVisible] = useBidirectionalIntersectionObserver(0.1, '-20px') // Border fade in early
  const [dataTitleRef, isDataTitleVisible] = useBidirectionalIntersectionObserver(0.8, '-20px') // Wait for 80% of title to be visible
  const [dataCardsRef, isDataCardsVisible] = useBidirectionalIntersectionObserver(0.25, '-10px') // Wait for 25% of cards to be visible
  
  // 360° Service Spectrum section observers
  const [serviceBorderRef, isServiceBorderVisible] = useBidirectionalIntersectionObserver(0.1, '-20px') // Border fade in early
  const [serviceTitleRef, isServiceTitleVisible] = useBidirectionalIntersectionObserver(0.8, '-20px') // Wait for 80% of title to be visible
  const [serviceCardsRef, isServiceCardsVisible] = useBidirectionalIntersectionObserver(0.25, '-10px') // Wait for 25% of cards to be visible
  
  // Social Proof section observers
  const [socialBorderRef, isSocialBorderVisible] = useBidirectionalIntersectionObserver(0.1, '-20px') // Border fade in early
  const [socialTitleRef, isSocialTitleVisible] = useBidirectionalIntersectionObserver(0.8, '-20px') // Wait for 80% of title to be visible
  const [socialCardsRef, isSocialCardsVisible] = useBidirectionalIntersectionObserver(0.25, '-10px') // Wait for 25% of cards to be visible
  const [socialTestimonialRef, isSocialTestimonialVisible] = useBidirectionalIntersectionObserver(0.5, '-10px') // Testimonial visibility
  
  // CTA section observers
  const [ctaTitleRef, isCtaTitleVisible] = useBidirectionalIntersectionObserver(0.8, '-20px') // Wait for 80% of title to be visible
  const [ctaButtonsRef, isCtaButtonsVisible] = useBidirectionalIntersectionObserver(0.25, '-10px') // Wait for 25% of buttons to be visible

  useEffect(() => {
    const sequence = async () => {
      // First 5 words drop down one by one with staggered timing
      const firstWords = ['We', 'don\'t', 'just', 'build', 'websites,']
      for (let i = 0; i < firstWords.length; i++) {
        setTimeout(() => {
          setAnimationState(prev => ({
            ...prev,
            [`word${i}` as keyof typeof prev]: true
          }))
        }, i * 250) // 250ms delay between each word for premium feel
      }
      
      // Wait 1.5 seconds after last word, then fade in the rest
      setTimeout(() => {
        setAnimationState(prev => ({
          ...prev,
          restOfTitle: true
        }))
      }, 1500 + (firstWords.length * 250))
      
      // Subtitle slides in from right with slight delay
      setTimeout(() => {
        setAnimationState(prev => ({
          ...prev,
          subtitle: true
        }))
      }, 2200 + (firstWords.length * 250))
      
      // Buttons rise from bottom with premium timing
      setTimeout(() => {
        setAnimationState(prev => ({
          ...prev,
          buttons: true
        }))
      }, 2800 + (firstWords.length * 250))
    }
    
    sequence()
  }, [])

  // Track page view
  useEffect(() => {
    trackPageView(window.location.href)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <Section background="navy" padding="xl">
        <DecorativeWrapper>
          <Container>
            <div className="relative z-10">
              <div className="relative z-10 text-center lg:text-left lg:max-w-4xl">
                <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-yb-beige mb-6 hero-premium-shadow">
                  {/* First 5 words that drop down */}
                  <span className="inline-block">
                    {['We', 'don\'t', 'just', 'build', 'websites,'].map((word, index) => (
                      <span 
                        key={index}
                        className={`inline-block mr-3 hero-word premium-transition ${
                          animationState[`word${index}` as keyof typeof animationState]
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 -translate-y-16'
                        }`}
                        style={{
                          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          transitionDelay: `${index * 0.1}s`,
                          transform: animationState[`word${index}` as keyof typeof animationState] 
                            ? 'translateY(0) rotateX(0deg) scale(1)' 
                            : 'translateY(-64px) rotateX(90deg) scale(0.8)',
                          transformOrigin: 'bottom center'
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                  
                  {/* Rest of the title that fades in */}
                  <span className={`inline-block premium-transition-slow ${
                    animationState.restOfTitle 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                  style={{
                    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    filter: animationState.restOfTitle ? 'blur(0px)' : 'blur(2px)'
                  }}>
                    we{' '}
                    <span className="text-yb-beige-light">engineer competitive advantages</span>
                  </span>
                </h1>
                
                {/* Subtitle that slides in from right */}
                <p className={`text-xl text-yb-beige/80 max-w-3xl mx-auto lg:mx-0 mb-8 leading-relaxed premium-transition-slow ${
                  animationState.subtitle 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-12'
                }`}
                style={{
                  transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transitionDelay: '0.3s'
                }}>
                  Your Business Engine - Powering innovation and growth through data-driven web solutions that position you ahead of the competition.
                </p>
                
                {/* Buttons that rise from bottom */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start premium-transition-slow ${
                  animationState.buttons 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.5s',
                  transform: animationState.buttons ? 'translateY(0) scale(1)' : 'translateY(48px) scale(0.9)'
                }}>
                  <Button href="/getting-started" variant="outline" size="lg" className="!rounded-none">
                    See How We Analyze Your Competition
                  </Button>
                  <Button href="/our-process" variant="outline" size="lg" className="!rounded-none">
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
            <div ref={gapTitleRef} className="text-center mb-16">
              <h2 className={`font-heading text-4xl md:text-5xl font-bold text-yb-navy mb-4 bidirectional-title-drop ${
                isGapTitleVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                The Gap Between Generic Solutions and Strategic Advantage
              </h2>
              <p className={`text-xl text-yb-navy/80 max-w-2xl mx-auto bidirectional-title-drop ${
                isGapTitleVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.3s' }}>
                Most businesses settle for cookie-cutter websites. We engineer competitive advantages.
              </p>
            </div>
            
            <div ref={gapCardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className={`p-8 bg-yb-navy/10 hover:bg-yb-navy/20 border border-yb-navy/20 !rounded-none premium-card card-depth bidirectional-slide-left ${
                isGapCardsVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-16'
              }`}
              style={{
                transitionDelay: '0.2s',
                transform: isGapCardsVisible 
                  ? 'translateX(0) scale(1)' 
                  : 'translateX(-64px) scale(0.95)'
              }}>
                {/* ...existing card content... */}
                <h3 className="font-heading text-3xl font-bold text-yb-navy/70 mb-6">Generic Solutions</h3>
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
              
              <Card className={`p-8 bg-yb-navy text-yb-beige hover:bg-yb-navy-dark border border-yb-navy !rounded-none premium-card card-depth bidirectional-slide-right ${
                isGapCardsVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-16'
              }`}
              style={{
                transitionDelay: '0.4s',
                transform: isGapCardsVisible 
                  ? 'translateX(0) scale(1)' 
                  : 'translateX(64px) scale(0.95)'
              }}>
                {/* ...existing card content... */}
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
            <div 
              ref={dataBorderRef}
              className={`bg-yb-beige/5 border border-yb-beige/20 !rounded-none p-8 mb-8 bidirectional-fade ${
                isDataBorderVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              style={{
                filter: isDataBorderVisible ? 'blur(0px)' : 'blur(1px)'
              }}
            >
              <div ref={dataTitleRef} className="text-center mb-16">
                <h2 className={`font-heading text-3xl md:text-4xl font-bold text-yb-beige mb-4 bidirectional-title-drop ${
                  isDataTitleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-12'
                }`}
                style={{ transitionDelay: '0.3s' }}>
                  Data-Driven Differentiation
                </h2>
                <p className={`text-lg text-yb-beige/80 max-w-2xl mx-auto bidirectional-title-drop ${
                  isDataTitleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-8'
                }`}
                style={{ transitionDelay: '0.6s' }}>
                  See how we analyze your competition and identify opportunities for strategic advantage
                </p>
              </div>
              
              <div ref={dataCardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className={`p-6 bg-yb-beige text-yb-navy hover:shadow-lg hover:shadow-yb-beige/20 border border-yb-beige/30 !rounded-none premium-card card-depth bidirectional-card-materialize ${
                  isDataCardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: '0.2s',
                  transform: isDataCardsVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.9)'
                }}>
                  {/* ...existing card content... */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yb-navy !rounded-none flex items-center justify-center mx-auto mb-4">
                      <span className="text-yb-beige font-bold text-2xl">📊</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-yb-navy mb-4">
                      Competitor Analysis
                    </h3>
                    <p className="text-yb-navy/80 mb-4">
                      We analyze your top 10 competitors&apos; websites, SEO strategies, and user experiences
                    </p>
                    <div className="bg-yb-navy/20 !rounded-none p-4">
                      <div className="text-sm text-yb-navy font-medium">Sample Insights:</div>
                      <div className="text-xs text-yb-navy/80 mt-2">
                        • Competitor A: 45% faster load times needed<br/>
                        • Competitor B: Missing mobile optimization<br/>
                        • Competitor C: Poor conversion funnel
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className={`p-6 bg-yb-beige text-yb-navy hover:shadow-lg hover:shadow-yb-beige/20 border border-yb-beige/30 !rounded-none premium-card card-depth bidirectional-card-materialize ${
                  isDataCardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: '0.5s',
                  transform: isDataCardsVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.9)'
                }}>
                  {/* ...existing card content... */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yb-navy !rounded-none flex items-center justify-center mx-auto mb-4">
                      <span className="text-yb-beige font-bold text-2xl">🎯</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-yb-navy mb-4">
                      SEO Gap Analysis
                    </h3>
                    <p className="text-yb-navy/80 mb-4">
                      Identify keyword opportunities and technical SEO advantages
                    </p>
                    <div className="bg-yb-navy/20 !rounded-none p-4">
                      <div className="text-sm text-yb-navy font-medium">Opportunity Score:</div>
                      <div className="flex items-center mt-2">
                        <div className="bg-green-500 h-2 !rounded-none w-4/5"></div>
                        <span className="ml-2 text-sm text-yb-navy">84%</span>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className={`p-6 bg-yb-beige text-yb-navy hover:shadow-lg hover:shadow-yb-beige/20 border border-yb-beige/30 !rounded-none premium-card card-depth bidirectional-card-materialize ${
                  isDataCardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: '0.8s',
                  transform: isDataCardsVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.9)'
                }}>
                  {/* ...existing card content... */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yb-navy !rounded-none flex items-center justify-center mx-auto mb-4">
                      <span className="text-yb-beige font-bold text-2xl">🚀</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-yb-navy mb-4">
                      Performance Metrics
                    </h3>
                    <p className="text-yb-navy/80 mb-4">
                      Track and optimize every aspect of your competitive position
                    </p>
                    <div className="bg-yb-navy/20 !rounded-none p-4">
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
            <div 
              ref={serviceBorderRef}
              className={`bg-yb-navy/5 border border-yb-navy/20 !rounded-none p-8 mb-8 transition-all duration-1500 ease-out ${
                isServiceBorderVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              style={{
                transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: isServiceBorderVisible ? 'blur(0px)' : 'blur(1px)'
              }}
            >
              <div ref={serviceTitleRef} className="text-center mb-16">
                <h2 className={`font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4 transition-all duration-1000 ease-out ${
                  isServiceTitleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-12'
                }`}
                style={{
                  transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.3s'
                }}>
                  360° Service Spectrum
                </h2>
                <p className={`text-lg text-yb-navy/80 max-w-2xl mx-auto transition-all duration-1000 ease-out ${
                  isServiceTitleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-8'
                }`}
                style={{
                  transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.6s'
                }}>
                  Integrated services that work together to create your competitive advantage
                </p>
              </div>
              
              <div ref={serviceCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className={`p-6 bg-yb-navy text-yb-beige group hover:bg-yb-navy-dark hover:shadow-lg hover:shadow-yb-beige/20 cursor-pointer border border-yb-navy/30 !rounded-none premium-card card-depth ${
                  isServiceCardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.1s',
                  transform: isServiceCardsVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.9)'
                }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yb-beige !rounded-none flex items-center justify-center mx-auto mb-4 group-hover:bg-yb-beige-light transition-all duration-300">
                      <span className="text-yb-navy font-bold text-2xl">🎨</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-yb-beige mb-4">
                      Creative Design
                    </h3>
                    <p className="text-yb-beige/80 text-sm mb-4">
                      Custom designs that reflect your competitive positioning
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-xs text-yb-navy bg-yb-beige !rounded-none p-2">
                        Integration benefits: Brand consistency, faster loading, better conversions
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className={`p-6 bg-yb-navy text-yb-beige group hover:bg-yb-navy-dark hover:shadow-lg hover:shadow-yb-beige/20 cursor-pointer border border-yb-navy/30 !rounded-none premium-card card-depth ${
                  isServiceCardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.3s',
                  transform: isServiceCardsVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.9)'
                }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yb-beige !rounded-none flex items-center justify-center mx-auto mb-4 group-hover:bg-yb-beige-light transition-all duration-300">
                      <span className="text-yb-navy font-bold text-2xl">🏷️</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-yb-beige mb-4">
                      Strategic Branding
                    </h3>
                    <p className="text-yb-beige/80 text-sm mb-4">
                      Brand identity that sets you apart from competitors
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-xs text-yb-navy bg-yb-beige !rounded-none p-2">
                        Integration benefits: Cohesive messaging, stronger differentiation
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className={`p-6 bg-yb-navy text-yb-beige group hover:bg-yb-navy-dark hover:shadow-lg hover:shadow-yb-beige/20 cursor-pointer border border-yb-navy/30 !rounded-none premium-card card-depth ${
                  isServiceCardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.5s',
                  transform: isServiceCardsVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.9)'
                }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yb-beige !rounded-none flex items-center justify-center mx-auto mb-4 group-hover:bg-yb-beige-light transition-all duration-300">
                      <span className="text-yb-navy font-bold text-2xl">⚡</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-yb-beige mb-4">
                      Development
                    </h3>
                    <p className="text-yb-beige/80 text-sm mb-4">
                      Technical excellence that outperforms competitors
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-xs text-yb-navy bg-yb-beige !rounded-none p-2">
                        Integration benefits: Superior performance, better SEO rankings
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className={`p-6 bg-yb-navy text-yb-beige group hover:bg-yb-navy-dark hover:shadow-lg hover:shadow-yb-beige/20 cursor-pointer border border-yb-navy/30 !rounded-none premium-card card-depth ${
                  isServiceCardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.7s',
                  transform: isServiceCardsVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.9)'
                }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yb-beige !rounded-none flex items-center justify-center mx-auto mb-4 group-hover:bg-yb-beige-light transition-all duration-300">
                      <span className="text-yb-navy font-bold text-2xl">🔧</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-yb-beige mb-4">
                      Premium Hosting
                    </h3>
                    <p className="text-yb-beige/80 text-sm mb-4">
                      Lightning-fast infrastructure for competitive advantage
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-xs text-yb-navy bg-yb-beige !rounded-none p-2">
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
            <div 
              ref={socialBorderRef}
              className={`bg-yb-navy/5 border border-yb-navy/20 !rounded-none p-8 mb-8 hover:shadow-lg hover:shadow-yb-beige/20 transition-all duration-1500 ease-out ${
                isSocialBorderVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              style={{
                transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: isSocialBorderVisible ? 'blur(0px)' : 'blur(1px)'
              }}
            >
              <div ref={socialTitleRef} className="text-center mb-12">
                <h2 className={`font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4 transition-all duration-1000 ease-out ${
                  isSocialTitleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-12'
                }`}
                style={{
                  transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.3s'
                }}>
                  Results That Speak for Themselves
                </h2>
                <p className={`text-lg text-yb-navy-light max-w-2xl mx-auto transition-all duration-1000 ease-out ${
                  isSocialTitleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-8'
                }`}
                style={{
                  transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.6s'
                }}>
                  Real transformations from businesses that chose strategic advantage over generic solutions
                </p>
              </div>
              
              <div ref={socialCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className={`p-6 text-center bg-yb-beige hover:bg-yb-beige-light !rounded-none premium-card card-depth ${
                  isSocialCardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.2s',
                  transform: isSocialCardsVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.9)'
                }}>
                  <div className="text-5xl font-bold text-yb-navy mb-2">+148%</div>
                  <p className="text-yb-navy-light text-sm mb-2">Traffic increase in 3 months</p>
                  <p className="text-xs text-yb-navy-light">&ldquo;E-commerce retailer&rdquo;</p>
                </Card>
                <Card className={`p-6 text-center bg-yb-beige hover:bg-yb-beige-light !rounded-none premium-card card-depth ${
                  isSocialCardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.5s',
                  transform: isSocialCardsVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.9)'
                }}>
                  <div className="text-5xl font-bold text-yb-navy mb-2">2.3x</div>
                  <p className="text-yb-navy-light text-sm mb-2">Conversion rate improvement</p>
                  <p className="text-xs text-yb-navy-light">&ldquo;SaaS company&rdquo;</p>
                </Card>
                <Card className={`p-6 text-center bg-yb-beige hover:bg-yb-beige-light !rounded-none premium-card card-depth ${
                  isSocialCardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.8s',
                  transform: isSocialCardsVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.9)'
                }}>
                  <div className="text-5xl font-bold text-yb-navy mb-2">67%</div>
                  <p className="text-yb-navy-light text-sm mb-2">Faster load times vs competitors</p>
                  <p className="text-xs text-yb-navy-light">&ldquo;Professional services&rdquo;</p>
                </Card>
              </div>
              
              <div 
                ref={socialTestimonialRef}
                className={`bg-yb-beige !rounded-none p-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
                  isSocialTestimonialVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: '0.4s',
                  transform: isSocialTestimonialVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(64px) scale(0.95)'
                }}
              >
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
            <div ref={ctaTitleRef}>
              <h2 className={`font-heading text-3xl md:text-5xl font-bold text-yb-white mb-6 transition-all duration-1000 ease-out ${
                isCtaTitleVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-12'
              }`}
              style={{
                transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '0.2s'
              }}>
                Ready to Engineer Your Competitive Advantage?
              </h2>
              <p className={`text-xl text-yb-beige-light mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
                isCtaTitleVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-8'
              }`}
              style={{
                transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '0.5s'
              }}>
                Get your free competitive analysis and see exactly how we can position you ahead of the competition. 
                No generic solutions - just strategic advantages tailored to your market.
              </p>
            </div>
            
            <div ref={ctaButtonsRef}>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-1000 ease-out ${
                isCtaButtonsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{
                transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '0.3s',
                transform: isCtaButtonsVisible 
                  ? 'translateY(0) scale(1)' 
                  : 'translateY(64px) scale(0.9)'
              }}>
                <Button href="/getting-started" variant="primary" size="lg" className="!rounded-none">
                  Claim Your Free Competitive Analysis
                </Button>
                <Button href="/our-process" variant="outline" size="lg" className="border-yb-beige text-yb-beige hover:bg-yb-beige hover:text-yb-navy !rounded-none">
                  See Our Process →
                </Button>
              </div>
              <p className={`text-sm text-yb-beige-light transition-all duration-1000 ease-out ${
                isCtaButtonsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '0.6s'
              }}>
                ✓ No commitment required  ✓ Results in 48 hours  ✓ Actionable insights included
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
