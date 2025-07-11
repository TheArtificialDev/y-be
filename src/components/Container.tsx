import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function Container({
  children,
  className = '',
  size = 'lg',
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none',
  }
  
  const classes = `${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
