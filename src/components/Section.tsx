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
    white: 'bg-yb-beige text-yb-navy',
    beige: 'bg-yb-beige text-yb-navy',
    navy: 'bg-yb-navy-dark text-yb-beige',
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
