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

export default function PrismCompany() {
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
    name: 'The PRISM Company',
    status: 'Development',
    industry: 'R&D Technology',
    focus: 'Digital Solutions',
    description: 'Complete digital infrastructure for a research & development startup. End-to-end solution including data management, analytics dashboard, and research collaboration tools.',
    challenges: [
      'Complex research data management requirements',
      'Collaboration tools for distributed teams',
      'Advanced analytics and reporting needs',
      'Secure data handling for R&D projects'
    ],
    solutions: [
      'Centralized data management system',
      'Collaborative research workspace',
      'Advanced analytics with custom visualizations',
      'Role-based access control and security'
    ],
    progress: {
      'Development Phase': 'Phase 1 of 4',
      'Database Design': '70% complete',
      'Security Implementation': '80% complete',
      'Collaboration Tools': '40% complete',
      'Analytics Engine': '35% complete'
    },
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Chart.js', 'WebRTC'],
    timeline: '20 weeks total',
    teamSize: '3 full-stack developers',
    expectedLaunch: 'Q3 2025'
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
                <div className="text-3xl font-bold text-yb-beige mb-2">50%</div>
                <div className="text-sm text-yb-beige-light">Faster R&D</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">24/7</div>
                <div className="text-sm text-yb-beige-light">Data Access</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">80%</div>
                <div className="text-sm text-yb-beige-light">Less Email Chains</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yb-beige mb-2">Q3 2025</div>
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
                The PRISM Company required a comprehensive digital infrastructure to support complex research operations and team collaboration.
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
                We&apos;re developing a secure, scalable platform that streamlines research workflows and enhances team collaboration.
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
                We&apos;re building a robust foundation with strong emphasis on security and data management capabilities.
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
