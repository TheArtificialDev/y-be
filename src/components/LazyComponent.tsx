'use client'

import { useEffect, useState } from 'react'

interface LazyComponentProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  threshold?: number
}

export default function LazyComponent({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-200 rounded h-32" />,
  threshold = 0.1 
}: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [element, setElement] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [element, threshold])

  return (
    <div ref={setElement}>
      {isVisible ? children : fallback}
    </div>
  )
}
