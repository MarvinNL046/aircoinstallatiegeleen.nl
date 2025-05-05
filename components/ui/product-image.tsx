"use client"

import { OptimizedImage } from "./optimized-image"

interface ProductImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

export function ProductImage({
  src,
  alt,
  width = 400,
  height = 400,
  priority = false,
  className,
}: ProductImageProps) {
  return (
    <div 
      className="relative bg-white rounded-lg overflow-hidden w-full h-full"
      style={{ 
        aspectRatio: '3/4', // Changed to 3:4 ratio for taller airco units
        backgroundColor: '#f3f4f6', // Light gray background for empty areas
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem'
      }}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        objectFit="contain" // Always use contain to show full image
        blurEffect={true}
      />
    </div>
  )
}
