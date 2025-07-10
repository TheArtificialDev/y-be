'use client'

import { useState, useEffect } from 'react'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Section background="navy" padding="xl">
      <Container>
        <div className="relative">
          {/* Organic curve overlay */}
          <div className="absolute top-0 right-0 w-full h-full">
            <svg
              viewBox="0 0 1200 800"
              className="absolute top-0 right-0 w-full h-full opacity-10"
              preserveAspectRatio="none"
            >
              <path
                d="M800,0 Q1200,200 1000,400 Q800,600 1200,800 L1200,0 Z"
                fill="currentColor"
                className="text-yb-beige"
              />
            </svg>
          </div>
          
          <div className="relative z-10 text-center lg:text-left lg:max-w-4xl">
            <h1 className={`font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-yb-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We don&apos;t just build websites, we{' '}
              <span className="text-yb-beige">engineer competitive advantages</span>
            </h1>
            <p className={`text-xl text-yb-beige-light max-w-3xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Your Business Engine - Powering innovation and growth through data-driven web solutions that position you ahead of the competition.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button href="/getting-started" variant="primary" size="lg">
                See How We Analyze Your Competition
              </Button>
              <Button href="/our-process" variant="outline" size="lg" className="border-yb-beige text-yb-beige hover:bg-yb-beige hover:text-yb-navy">
                Learn More →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
