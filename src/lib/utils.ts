// Y-Be Design System Utility Classes

// Brand Colors
export const colors = {
  yb: {
    navy: 'text-yb-navy',
    navyDark: 'text-yb-navy-dark',
    navyLight: 'text-yb-navy-light',
    beige: 'text-yb-beige',
    beigeDark: 'text-yb-beige-dark',
    beigeLight: 'text-yb-beige-light',
    white: 'text-yb-white',
  },
  bg: {
    navy: 'bg-yb-navy',
    navyDark: 'bg-yb-navy-dark',
    navyLight: 'bg-yb-navy-light',
    beige: 'bg-yb-beige',
    beigeDark: 'bg-yb-beige-dark',
    beigeLight: 'bg-yb-beige-light',
    white: 'bg-yb-white',
  },
}

// Typography
export const typography = {
  heading: 'font-heading',
  sans: 'font-sans',
  mono: 'font-mono',
}

// Spacing
export const spacing = {
  section: {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  },
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
}

// Organic curves
export const curves = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  organic: 'rounded-organic',
}

// Shadows
export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  organic: 'shadow-organic',
}

// Animations
export const animations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideIn: 'animate-slide-in',
}

// Common component classes
export const components = {
  card: 'bg-yb-white rounded-organic shadow-organic p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl',
  button: {
    primary: 'bg-yb-beige text-yb-navy hover:bg-yb-beige-dark',
    secondary: 'bg-yb-navy text-yb-white hover:bg-yb-navy-dark',
    outline: 'border-2 border-yb-navy text-yb-navy hover:bg-yb-navy hover:text-yb-white',
  },
  section: {
    white: 'bg-yb-white',
    beige: 'bg-yb-beige-light',
    navy: 'bg-yb-navy text-yb-white',
  },
}

// Utility function to combine classes
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ')
}
