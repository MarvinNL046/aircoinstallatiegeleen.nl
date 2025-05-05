"use client"

import { OptimizedImage } from "./optimized-image"

interface ProductCardImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

// This component is optimized for product card displays in listing pages
// Modified for airco products to ensure full visibility
export function ProductCardImage({
  src,
  alt,
  width = 400,
  height = 400,
  priority = false,
  className,
}: ProductCardImageProps) {
  return (
    <div 
      className="relative bg-white rounded-lg overflow-hidden w-full h-full"
      style={{ 
        aspectRatio: '3/4', // 3:4 ratio for taller product cards to fit airco units better
        backgroundColor: '#f3f4f6', // Light gray background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        objectFit="contain" // Changed to contain to ensure full visibility
        blurEffect={true}
      />
    </div>
  )
}
