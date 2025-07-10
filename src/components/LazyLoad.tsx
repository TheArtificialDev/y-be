'use client'

import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

interface LazyLoadProps {
  children: React.ReactNode
  placeholder?: React.ReactNode
  threshold?: number
  rootMargin?: string
}

export default function LazyLoad({ 
  children, 
  placeholder = null, 
  threshold = 0.1, 
  rootMargin = '100px' 
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, hasLoaded])

  return (
    <div ref={ref}>
      {isVisible ? children : placeholder}
    </div>
  )
}

// Higher-order component for lazy loading
export function withLazyLoading<T extends object>(
  Component: React.ComponentType<T>,
  placeholderHeight: string = '400px'
) {
  return function LazyLoadedComponent(props: T) {
    const Placeholder = () => (
      <div 
        className="animate-pulse bg-gray-200 rounded-lg"
        style={{ height: placeholderHeight }}
      />
    )

    return (
      <LazyLoad placeholder={<Placeholder />}>
        <Component {...props} />
      </LazyLoad>
    )
  }
}

// Dynamic import helper with loading state
export function createLazyComponent<T extends object>(
  importFunc: () => Promise<{ default: React.ComponentType<T> }>,
  loadingComponent?: React.ComponentType
) {
  return dynamic(importFunc, {
    loading: () => loadingComponent ? React.createElement(loadingComponent) : (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yb-navy"></div>
      </div>
    ),
    ssr: false,
  })
}
