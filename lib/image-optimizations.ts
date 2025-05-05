/**
 * Image optimization utilities for improving page performance
 * This helps address the SEO KPI issues related to:
 * - Large image sizes (target <200KB)
 * - Slow Largest Contentful Paint
 * - Cumulative Layout Shift
 */

// Quality settings for different image types
const QUALITY_SETTINGS = {
  hero: 80,      // Higher quality for hero images
  content: 75,   // Good quality for content images
  thumbnail: 70, // Lower quality acceptable for thumbnails
  icon: 90       // High quality for small icons that need to be crisp
};

/**
 * Get appropriate image dimensions for responsive displays
 * Helps ensure proper image sizing while preventing layout shifts
 */
export function getResponsiveDimensions(
  baseWidth: number,
  baseHeight: number,
  imageType: 'hero' | 'content' | 'thumbnail' | 'icon' = 'content'
): { dimensions: { width: number, height: number }[], sizes: string } {
  // Calculate aspect ratio
  const aspectRatio = baseWidth / baseHeight;
  
  // Define dimensions based on image type
  let dimensions: { width: number, height: number }[] = [];
  let sizesString = '';
  
  switch (imageType) {
    case 'hero':
      // Hero images should be responsive to screen width
      dimensions = [
        { width: 640, height: Math.round(640 / aspectRatio) },
        { width: 768, height: Math.round(768 / aspectRatio) },
        { width: 1024, height: Math.round(1024 / aspectRatio) },
        { width: 1280, height: Math.round(1280 / aspectRatio) },
        { width: 1536, height: Math.round(1536 / aspectRatio) }
      ];
      sizesString = '(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1536px';
      break;
      
    case 'content':
      // Content images should be appropriately sized
      dimensions = [
        { width: 480, height: Math.round(480 / aspectRatio) },
        { width: 640, height: Math.round(640 / aspectRatio) },
        { width: 768, height: Math.round(768 / aspectRatio) },
        { width: 1024, height: Math.round(1024 / aspectRatio) }
      ];
      sizesString = '(max-width: 640px) 480px, (max-width: 768px) 640px, (max-width: 1024px) 768px, 1024px';
      break;
      
    case 'thumbnail':
      // Thumbnails are smaller
      dimensions = [
        { width: 120, height: Math.round(120 / aspectRatio) },
        { width: 240, height: Math.round(240 / aspectRatio) },
        { width: 360, height: Math.round(360 / aspectRatio) }
      ];
      sizesString = '(max-width: 640px) 120px, (max-width: 1024px) 240px, 360px';
      break;
      
    case 'icon':
      // Icons are fixed size
      dimensions = [
        { width: baseWidth, height: baseHeight }
      ];
      sizesString = `${baseWidth}px`;
      break;
  }
  
  return { dimensions, sizes: sizesString };
}

/**
 * Get appropriate image quality setting for the image type
 */
export function getQualitySetting(imageType: 'hero' | 'content' | 'thumbnail' | 'icon' = 'content'): number {
  return QUALITY_SETTINGS[imageType];
}

/**
 * Check if an image should be preloaded (priority)
 * This helps with First Contentful Paint and Largest Contentful Paint
 */
export function shouldPreloadImage(imageType: 'hero' | 'content' | 'thumbnail' | 'icon', index: number): boolean {
  switch (imageType) {
    case 'hero':
      // Always preload hero images
      return true;
    case 'content':
      // Only preload the first content image
      return index === 0;
    default:
      return false;
  }
}

/**
 * Generate image placeholder color
 * Provides a consistent placeholder color based on the image URL
 */
export function generatePlaceholderColor(src: string): string {
  // Simple hash function for the URL
  let hash = 0;
  for (let i = 0; i < src.length; i++) {
    hash = ((hash << 5) - hash) + src.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  
  // Generate HSL color with high lightness for a light placeholder
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 40%, 90%)`;
}

/**
 * Detect if browser supports WebP format
 * This should be used client-side only
 */
export async function supportsWebP(): Promise<boolean> {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return blob.size > 0;
  } catch (e) {
    return false;
  }
}

/**
 * Generate image URL with optimization parameters
 * Use this for external services that support image optimization (like Cloudinary or Imgix)
 */
export function getOptimizedImageUrl(
  src: string, 
  width: number, 
  height: number, 
  quality: number,
  format: 'auto' | 'webp' | 'avif' | 'original' = 'auto'
): string {
  // Check if this is already an external optimized URL
  if (src.includes('cloudinary.com') || src.includes('imgix.net')) {
    return src;
  }
  
  // For local images, apply format if needed
  if (src.startsWith('/')) {
    // Apply format transformation if needed
    if (format !== 'original') {
      const extension = format === 'auto' ? 'webp' : format; // Default to WebP for 'auto'
      
      // If the URL already has a file extension, replace it
      if (src.match(/\.(jpe?g|png|gif|svg)(\?.*)?$/i)) {
        return src.replace(/\.(jpe?g|png|gif|svg)(\?.*)?$/i, `.${extension}$2`);
      }
      
      // Otherwise append the format parameter
      return `${src}${src.includes('?') ? '&' : '?'}format=${extension}`;
    }
  }
  
  // For other URLs, return as-is
  return src;
}
