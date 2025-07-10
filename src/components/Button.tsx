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
    secondary: 'bg-yb-navy text-yb-white hover:bg-yb-navy-dark hover:shadow-organic focus:ring-yb-navy',
    outline: 'border-2 border-yb-navy text-yb-navy hover:bg-yb-navy hover:text-yb-white focus:ring-yb-navy',
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  // Handle click tracking
  const handleClick = (e: React.MouseEvent) => {
    // Track button clicks
    trackEvent('click', 'Button', `${variant}-${children?.toString() || 'button'}`)
    
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
        onClick={() => trackEvent('click', 'Link', `${variant}-${href}`)}
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
