"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  quality?: number
  blurEffect?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  objectFit = "contain",
  quality = 75,
  blurEffect = true,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [placeholderSrc, setPlaceholderSrc] = useState("")
  
  // Generate a simple color placeholder based on the image URL (for consistency)
  useEffect(() => {
    if (blurEffect && src) {
      // Simple hash function
      let hash = 0;
      for (let i = 0; i < src.length; i++) {
        hash = ((hash << 5) - hash) + src.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
      }
      
      // Generate HSL color with high lightness for a light placeholder
      const hue = Math.abs(hash % 360);
      setPlaceholderSrc(`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='hsl(${hue}, 40%, 90%)'/%3E%3C/svg%3E`);
    }
  }, [src, width, height, blurEffect]);

  // Modern format support detection
  const [supportsWebp, setSupportsWebp] = useState(false)
  
  useEffect(() => {
    const checkWebpSupport = async () => {
      if (typeof window !== 'undefined') {
        try {
          const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
          const blob = await fetch(webpData).then(r => r.blob());
          setSupportsWebp(blob.size > 0);
        } catch (e) {
          setSupportsWebp(false);
        }
      }
    };
    
    checkWebpSupport();
  }, []);
  
  // Determine the best format based on browser support
  const getOptimizedSrc = (originalSrc: string): string => {
    // Convert to WebP if supported and the source is not already WebP
    if (supportsWebp && !originalSrc.endsWith('.webp') && !originalSrc.includes('data:')) {
      // Check if this is a URL with an extension we can replace
      if (originalSrc.match(/\.(jpe?g|png)(\?.*)?$/i)) {
        // Replace the file extension with .webp
        return originalSrc.replace(/\.(jpe?g|png)(\?.*)?$/i, '.webp$2');
      }
      
      // For URLs without file extensions, append webp format parameter if it's from our domain
      if (originalSrc.startsWith('/') || originalSrc.includes('aircoinstallatiegeleen.nl')) {
        return originalSrc + (originalSrc.includes('?') ? '&format=webp' : '?format=webp');
      }
    }
    
    return originalSrc;
  };
  
  // Apply format optimization to src
  const optimizedSrc = getOptimizedSrc(src);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        className
      )}
      style={{ width: width || "100%", height: height || "auto", aspectRatio: width && height ? `${width}/${height}` : undefined }}
    >
      {/* Show placeholder while image is loading */}
      {blurEffect && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundColor: placeholderSrc ? undefined : "#f3f4f6",
            backgroundImage: placeholderSrc ? `url(${placeholderSrc})` : undefined
          }}
        />
      )}
      
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full transition-opacity duration-300",
          objectFit === "contain" && "object-contain",
          objectFit === "cover" && "object-cover",
          objectFit === "fill" && "object-fill",
          objectFit === "none" && "object-none",
          objectFit === "scale-down" && "object-scale-down",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  )
}
