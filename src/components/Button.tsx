import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
  className?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-medium transition-all duration-300 inline-flex items-center justify-center rounded-organic focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-yb-beige text-yb-navy hover:bg-yb-beige-dark hover:shadow-organic focus:ring-yb-beige',
    secondary: 'bg-yb-navy text-yb-beige hover:bg-yb-navy-dark hover:shadow-organic focus:ring-yb-navy border border-yb-beige',
    outline: 'border-2 border-yb-beige text-yb-beige hover:bg-yb-beige hover:text-yb-navy focus:ring-yb-beige',
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  // Handle click tracking
  const handleClick = (e: React.MouseEvent) => {
    // Track button clicks with a small delay to ensure gtag is available
    setTimeout(() => {
      trackEvent('click', 'Button', `${variant}-${children?.toString() || 'button'}`)
    }, 50)
    
    // Call original onClick if provided
    if (props.onClick) {
      props.onClick(e as React.MouseEvent<HTMLButtonElement>)
    }
  }

  if (href) {
    return (
      <Link 
        href={href} 
        className={classes}
        onClick={() => {
          setTimeout(() => {
            trackEvent('click', 'Link', `${variant}-${href}`)
          }, 50)
        }}
      >
        {children}
      </Link>
    )
  }
  
  return (
    <button className={classes} {...props} onClick={handleClick}>
      {children}
    </button>
  )
}
