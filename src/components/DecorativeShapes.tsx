"use client"

import { ReactNode, useEffect, useState } from 'react'

interface FloatingShape {
  id: string
  shape: 'circle' | 'rounded-square' | 'triangle'
  size: number // px
  x: number // percentage
  y: number // percentage
  opacity: number
  animationDuration: number // seconds
  animationDelay: number // seconds
  direction: 'clockwise' | 'counterclockwise' | 'diagonal' | 'wave' | 'spiral'
}

// Create a truly fixed background with floating shapes
export function FloatingBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="floating-background">
      {/* Test shapes with simple setup */}
      <div
        className="floating-shape floating-shape-circle"
        style={{
          left: '10%',
          top: '10%',
          width: '50px',
          height: '50px',
          opacity: 0.8,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-rounded-square"
        style={{
          left: '30%',
          top: '30%',
          width: '40px',
          height: '40px',
          opacity: 0.8,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-circle"
        style={{
          left: '60%',
          top: '20%',
          width: '60px',
          height: '60px',
          opacity: 0.8,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-rounded-square"
        style={{
          left: '80%',
          top: '50%',
          width: '45px',
          height: '45px',
          opacity: 0.8,
        }}
        aria-hidden="true"
      />
      <div
        className="floating-shape floating-shape-circle"
        style={{
          left: '20%',
          top: '70%',
          width: '55px',
          height: '55px',
          opacity: 0.8,
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
