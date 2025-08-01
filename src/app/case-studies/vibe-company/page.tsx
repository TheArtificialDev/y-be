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

export default function VibeCompany() {
  const [heroAnimationState, setHeroAnimationState] = useState({
    title: false,
    subtitle: false,
    stats: false,
    content: false
  })

  const heroAnimation = useIntersectionObserver()
  const challengesAnimation = useIntersectionObserver()
  const solutionsAnimation = useIntersectionObserver()
  const progressAnimation = useIntersectionObserver()
  const techAnimation = useIntersectionObserver()

  // Hero animation sequence
  useEffect(() => {
    const sequence = async () => {
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, title: true }))
      }, 300)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, subtitle: true }))
      }, 800)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, stats: true }))
      }, 1300)
      
      setTimeout(() => {
        setHeroAnimationState(prev => ({ ...prev, content: true }))
      }, 1800)
    }
    
    sequence()
  }, [])

  const projectData = {
    name: 'The VIBE Company',
    status: 'Development',
    industry: 'Social Analytics',
    focus: 'Platform Development',
    description: 'Next-generation platform for social media content recommendation and consumer trend analysis. Building both the marketing website and user-facing dashboard.',
    challenges: [
      'Real-time social media data processing',
      'Complex algorithm implementation for recommendations',
      'Scalable architecture for trend analysis',
      'User-friendly interface for complex data'
    ],
    solutions: [
      'Real-time data pipeline with stream processing',
      'Machine learning models for content analysis',
      'Interactive data visualization dashboard',
      'Responsive design for all device types'
    ],
    progress: {
      'Development Phase': 'Phase 1 of 3',
      'Backend Architecture': '45% complete',
      'Data Pipeline': '60% complete',
      'Frontend Development': '30% complete',
      'ML Integration': '25% complete'
    },
    technologies: ['React', 'Python', 'TensorFlow', 'Kafka', 'MongoDB', 'D3.js'],
    timeline: '16 weeks total',
    teamSize: '4 developers + 1 ML engineer',
    expectedLaunch: 'Q2 2025'
  }

  return (
    <div>
      {/* Hero Section */}
      <Section background="navy" padding="sm" className="min-h-screen flex items-center justify-center py-0">
        <Container>
          <div 
            ref={heroAnimation.ref}
            className="text-center py-16 min-h-screen flex flex-col justify-center"
          >
            <div className={`transition-all duration-1000 ease-out mb-6 ${
              heroAnimationState.title 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}>
              <div className="inline-flex items-center px-4 py-2 bg-yb-beige bg-opacity-20 rounded-full text-yb-beige text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                {projectData.status} • {projectData.industry}
              </div>
            </div>

            <h1 className={`font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-yb-white mb-8 transition-all duration-1200 ease-out ${
              heroAnimationState.title 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}>
              {projectData.name}
            </h1>

            <p className={`text-xl md:text-2xl text-yb-beige-light max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1200 ease-out ${
              heroAnimationState.subtitle 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}>
              {projectData.description}
            </p>

            <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-1000 ease-out ${
              heroAnimationState.stats 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">1M+</div>
                <div className="text-sm text-yb-beige-light">Posts Analyzed Daily</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">Real-time</div>
                <div className="text-sm text-yb-beige-light">Recommendations</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">95%+</div>
                <div className="text-sm text-yb-beige-light">Prediction Accuracy</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">Q2 2025</div>
                <div className="text-sm text-yb-beige-light">Expected Launch</div>
              </div>
            </div>

            <div className={`transition-all duration-1000 ease-out ${
              heroAnimationState.content 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                href="/case-studies"
                variant="outline"
                size="lg"
              >
                All Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenge Section */}
      <Section background="white" padding="lg">
        <Container>
          <div 
            ref={challengesAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              challengesAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-6 text-center">
                The Challenge
              </h2>
              <p className="text-lg text-yb-navy-light mb-8 text-center max-w-3xl mx-auto">
                The VIBE Company needed a sophisticated platform to process massive amounts of social media data and provide real-time trend analysis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectData.challenges.map((challenge, index) => (
                  <Card key={index} className="p-6 border border-yb-navy border-opacity-10">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <p className="text-yb-navy-light">{challenge}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution Section */}
      <Section background="beige" padding="lg">
        <Container>
          <div 
            ref={solutionsAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              solutionsAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-6 text-center">
                Our Solution
              </h2>
              <p className="text-lg text-yb-navy-light mb-8 text-center max-w-3xl mx-auto">
                We&apos;re building a cutting-edge platform with machine learning capabilities and real-time data processing for accurate trend prediction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectData.solutions.map((solution, index) => (
                  <Card key={index} className="p-6 bg-white border border-yb-beige border-opacity-30">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      </div>
                      <p className="text-yb-navy-light">{solution}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Progress Section */}
      <Section background="white" padding="lg">
        <Container>
          <div 
            ref={progressAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              progressAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-6 text-center">
                Development Progress
              </h2>
              <p className="text-lg text-yb-navy-light mb-8 text-center max-w-3xl mx-auto">
                We&apos;re making steady progress across all aspects of the platform, from data processing to user interface development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(projectData.progress).map(([key, value], index) => (
                  <Card key={index} className="p-6 bg-yb-beige bg-opacity-5 border border-yb-beige border-opacity-20">
                    <h3 className="font-semibold text-yb-navy mb-4">{key}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-yb-navy-light">Status:</span>
                        <span className="text-yellow-600 font-medium">{value}</span>
                      </div>
                      {value.includes('%') && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: value }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Technology & Details Section */}
      <Section background="navy" padding="lg">
        <Container>
          <div 
            ref={techAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              techAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-white mb-12">
                Project Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                  <h3 className="font-semibold text-yb-beige mb-4">Timeline</h3>
                  <p className="text-yb-white">{projectData.timeline}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-yb-beige mb-4">Team Size</h3>
                  <p className="text-yb-white">{projectData.teamSize}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-yb-beige mb-4">Expected Launch</h3>
                  <p className="text-yb-white">{projectData.expectedLaunch}</p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="font-semibold text-yb-beige mb-6">Technologies Used</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {projectData.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-yb-beige bg-opacity-20 rounded-full text-yb-white text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  href="/case-studies"
                  variant="outline"
                  size="lg"
                >
                  View All Case Studies
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
