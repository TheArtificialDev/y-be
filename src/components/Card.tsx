import { ReactNode } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  variant?: 'default' | 'beige' | 'navy'
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
  padding = 'md',
  ...props
}: CardProps) {
  const baseClasses = 'rounded-organic transition-all duration-300'
  
  const variantClasses = {
    default: 'bg-yb-white shadow-organic',
    beige: 'bg-yb-beige-light shadow-organic',
    navy: 'bg-yb-navy text-yb-white shadow-organic',
  }
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  
  const hoverClasses = hover
    ? 'hover:transform hover:-translate-y-1 hover:shadow-xl'
    : ''
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
