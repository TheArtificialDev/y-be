import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'beige' | 'navy'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  id,
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-yb-white',
    beige: 'bg-yb-beige-light',
    navy: 'bg-yb-navy text-yb-white',
  }
  
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  }
  
  const classes = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`
  
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}
