import { ReactNode } from 'react'

interface DecorativeShapeProps {
  shape: 'circle' | 'square'
  size: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animation?: 'float' | 'pulse' | 'none'
}

export function DecorativeShape({ 
  shape, 
  size, 
  className = '', 
  animation = 'none' 
}: DecorativeShapeProps) {
  const shapeClass = shape === 'circle' ? 'decorative-circle' : 'decorative-square'
  const sizeClass = `decorative-shape-${size}`
  const animationClass = animation !== 'none' ? `decorative-shape-${animation}` : ''
  
  return (
    <div 
      className={`decorative-shape ${shapeClass} ${sizeClass} ${animationClass} ${className}`}
      aria-hidden="true"
    />
  )
}

interface DecorativeWrapperProps {
  children: ReactNode
  className?: string
}

export function DecorativeWrapper({ children, className = '' }: DecorativeWrapperProps) {
  return (
    <div className={`relative-decorative ${className}`}>
      {children}
      {/* Decorative shapes */}
      <DecorativeShape 
        shape="circle" 
        size="lg" 
        className="top-10 right-10" 
        animation="float" 
      />
      <DecorativeShape 
        shape="square" 
        size="md" 
        className="bottom-20 left-20" 
        animation="pulse" 
      />
      <DecorativeShape 
        shape="circle" 
        size="sm" 
        className="top-1/2 left-10" 
        animation="float" 
      />
      <DecorativeShape 
        shape="square" 
        size="xl" 
        className="bottom-10 right-1/4 opacity-50" 
        animation="pulse" 
      />
    </div>
  )
}

export default DecorativeWrapper
