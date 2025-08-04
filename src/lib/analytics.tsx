'use client'

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-JGNZN346TF'

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('click', 'button', buttonName, undefined)
}

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'form', formName, undefined)
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage)
}
