"use client"

import { ReactNode, useEffect, useState } from 'react'

// Create a truly fixed background with floating shapes
export function FloatingBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Always render the container, but control visibility with CSS
  return (
    <div className={`floating-background ${!isClient ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
      {/* Shapes moving in different directions - more transparent */}
      
      {/* Northeast moving shapes */}
      <div
        className="floating-shape floating-shape-circle floating-animate-northeast"
        style={{
          left: '5%',
          top: '80%',
          width: '45px',
          height: '45px',
          opacity: 0.4,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-rounded-square floating-animate-northeast"
        style={{
          left: '15%',
          top: '90%',
          width: '35px',
          height: '35px',
          opacity: 0.35,
        }}
        aria-hidden="true"
      />
      
      {/* Southwest moving shapes */}
      <div
        className="floating-shape floating-shape-circle floating-animate-southwest"
        style={{
          left: '85%',
          top: '10%',
          width: '50px',
          height: '50px',
          opacity: 0.4,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-rounded-square floating-animate-southwest"
        style={{
          left: '90%',
          top: '20%',
          width: '40px',
          height: '40px',
          opacity: 0.3,
        }}
        aria-hidden="true"
      />
      
      {/* Northwest moving shapes */}
      <div
        className="floating-shape floating-shape-circle floating-animate-northwest"
        style={{
          left: '80%',
          top: '85%',
          width: '42px',
          height: '42px',
          opacity: 0.38,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-rounded-square floating-animate-northwest"
        style={{
          left: '75%',
          top: '75%',
          width: '38px',
          height: '38px',
          opacity: 0.32,
        }}
        aria-hidden="true"
      />
      
      {/* Southeast moving shapes */}
      <div
        className="floating-shape floating-shape-circle floating-animate-southeast"
        style={{
          left: '10%',
          top: '15%',
          width: '48px',
          height: '48px',
          opacity: 0.36,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-rounded-square floating-animate-southeast"
        style={{
          left: '20%',
          top: '5%',
          width: '44px',
          height: '44px',
          opacity: 0.34,
        }}
        aria-hidden="true"
      />
      
      {/* Vertical moving shapes */}
      <div
        className="floating-shape floating-shape-circle floating-animate-vertical"
        style={{
          left: '45%',
          top: '90%',
          width: '40px',
          height: '40px',
          opacity: 0.3,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-rounded-square floating-animate-vertical"
        style={{
          left: '55%',
          top: '85%',
          width: '36px',
          height: '36px',
          opacity: 0.35,
        }}
        aria-hidden="true"
      />
      
      {/* Horizontal moving shapes */}
      <div
        className="floating-shape floating-shape-circle floating-animate-horizontal"
        style={{
          left: '5%',
          top: '45%',
          width: '46px',
          height: '46px',
          opacity: 0.32,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-rounded-square floating-animate-horizontal"
        style={{
          left: '10%',
          top: '55%',
          width: '42px',
          height: '42px',
          opacity: 0.38,
        }}
        aria-hidden="true"
      />
      
      {/* Circular moving shapes */}
      <div
        className="floating-shape floating-shape-circle floating-animate-circular"
        style={{
          left: '65%',
          top: '40%',
          width: '52px',
          height: '52px',
          opacity: 0.28,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-rounded-square floating-animate-circular"
        style={{
          left: '35%',
          top: '60%',
          width: '38px',
          height: '38px',
          opacity: 0.33,
        }}
        aria-hidden="true"
      />
      
      {/* Spiral moving shapes */}
      <div
        className="floating-shape floating-shape-circle floating-animate-spiral"
        style={{
          left: '25%',
          top: '25%',
          width: '44px',
          height: '44px',
          opacity: 0.36,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-rounded-square floating-animate-spiral"
        style={{
          left: '70%',
          top: '65%',
          width: '40px',
          height: '40px',
          opacity: 0.3,
        }}
        aria-hidden="true"
      />
    </div>
  )
}

// Keep the DecorativeWrapper for local section decorations if needed
interface DecorativeWrapperProps {
  children: ReactNode
  className?: string
}

// Simple wrapper for backward compatibility - just passes through children
export function DecorativeWrapper({ children, className = '' }: DecorativeWrapperProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  )
}

export default DecorativeWrapper
