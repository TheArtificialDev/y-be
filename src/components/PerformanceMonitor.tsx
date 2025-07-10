'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const reportWebVitals = (metric: { name: string; id: string; value: number }) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        })
      }
    }

    // Import and setup web vitals reporting
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(reportWebVitals)
      onFCP(reportWebVitals)
      onLCP(reportWebVitals)
      onTTFB(reportWebVitals)
      onINP(reportWebVitals)
    }).catch(() => {
      // Silently fail if web-vitals is not available
    })

    // Monitor performance navigation timing
    const reportPerformanceMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            ttfb: navigation.responseStart - navigation.requestStart,
            download: navigation.responseEnd - navigation.responseStart,
            domLoad: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            pageLoad: navigation.loadEventEnd - navigation.fetchStart,
          }

          // Report to analytics
          if (window.gtag) {
            Object.entries(metrics).forEach(([key, value]) => {
              window.gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: key,
                value: Math.round(value),
                non_interaction: true,
              })
            })
          }
        }
      }
    }

    // Report metrics after page load
    if (document.readyState === 'complete') {
      reportPerformanceMetrics()
    } else {
      window.addEventListener('load', reportPerformanceMetrics)
    }

    return () => {
      window.removeEventListener('load', reportPerformanceMetrics)
    }
  }, [])

  return null
}
