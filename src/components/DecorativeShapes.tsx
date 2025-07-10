"use client"

import { ReactNode, useEffect, useState } from 'react'

interface DecorativeShapeProps {
  shape: 'circle' | 'square'
  size: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animation?: 'float' | 'pulse' | 'none'
}

interface RandomShape {
  id: string
  shape: 'circle' | 'square'
  size: 'sm' | 'md' | 'lg' | 'xl'
  animation: 'float' | 'pulse' | 'none'
  top: number
  left: number
  opacity: number
  zIndex: number
}

export function DecorativeShape({ 
  shape, 
  size, 
  className = '', 
  animation = 'none' 
}: DecorativeShapeProps) {
  const shapeClass = shape === 'circle' ? 'decorative-circle' : 'decorative-square'
  const sizeClass = `decorative-shape-${size}`
  const animationClass = animation !== 'none' ? `decorative-shape-${animation}` : ''
  
  return (
    <div 
      className={`decorative-shape ${shapeClass} ${sizeClass} ${animationClass} ${className}`}
      aria-hidden="true"
    />
  )
}

// Random shapes generator for the entire website
export function RandomDecorativeShapes() {
  const [shapes, setShapes] = useState<RandomShape[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Generate random shapes
    const generateShapes = () => {
      const newShapes: RandomShape[] = []
      const shapeTypes: ('circle' | 'square')[] = ['circle', 'square']
      const sizes: ('sm' | 'md' | 'lg' | 'xl')[] = ['sm', 'md', 'lg', 'xl']
      const animations: ('float' | 'pulse' | 'none')[] = ['float', 'pulse', 'none']
      
      // Generate different amounts based on screen size
      const isMobile = window.innerWidth < 768
      const numShapes = isMobile ? 8 + Math.floor(Math.random() * 4) : 15 + Math.floor(Math.random() * 6)
      
      for (let i = 0; i < numShapes; i++) {
        // Avoid putting shapes in the center area (40-60% width, 30-70% height)
        let top, left
        do {
          top = Math.random() * 90
          left = Math.random() * 90
        } while (
          top > 30 && top < 70 && left > 40 && left < 60
        )
        
        newShapes.push({
          id: `shape-${i}`,
          shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          size: sizes[Math.floor(Math.random() * sizes.length)],
          animation: animations[Math.floor(Math.random() * animations.length)],
          top,
          left,
          opacity: 0.05 + Math.random() * 0.25, // 0.05-0.3 opacity
          zIndex: -10 - Math.floor(Math.random() * 10) // -10 to -20 z-index
        })
      }
      
      setShapes(newShapes)
    }

    generateShapes()
    
    // Regenerate shapes on resize
    const handleResize = () => {
      generateShapes()
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute decorative-shape ${
            shape.shape === 'circle' ? 'decorative-circle' : 'decorative-square'
          } decorative-shape-${shape.size} ${
            shape.animation !== 'none' ? `decorative-shape-${shape.animation}` : ''
          }`}
          style={{
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            opacity: shape.opacity,
            zIndex: shape.zIndex,
            animationDelay: `${Math.random() * 2}s` // Random animation delay
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

interface DecorativeWrapperProps {
  children: ReactNode
  className?: string
}

export function DecorativeWrapper({ children, className = '' }: DecorativeWrapperProps) {
  return (
    <div className={`relative-decorative ${className}`}>
      {children}
      {/* Decorative shapes */}
      <DecorativeShape 
        shape="circle" 
        size="lg" 
        className="top-10 right-10" 
        animation="float" 
      />
      <DecorativeShape 
        shape="square" 
        size="md" 
        className="bottom-20 left-20" 
        animation="pulse" 
      />
      <DecorativeShape 
        shape="circle" 
        size="sm" 
        className="top-1/2 left-10" 
        animation="float" 
      />
      <DecorativeShape 
        shape="square" 
        size="xl" 
        className="bottom-10 right-1/4 opacity-50" 
        animation="pulse" 
      />
    </div>
  )
}

export default DecorativeWrapper
