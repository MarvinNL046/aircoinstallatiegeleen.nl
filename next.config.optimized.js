/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image Optimization Configuration - addressing the large image sizes issue
  images: {
    // Use WebP as default format for better compression
    formats: ['image/webp', 'image/avif'],
    // Optimize device-specific images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Optimize images at various sizes for responsive designs
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Limit image size to improve LCP
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    // Lower default image quality to reduce size
    quality: 75,
    // Allow image optimization from these domains
    domains: [],
    // Enforce reasonable image limits
    limit: 50, // Limit concurrent image optimizations
  },
  
  // Configure page optimization
  compiler: {
    // Remove React properties from production builds
    removeConsole: process.env.NODE_ENV === 'production',
    // Automatically minify and bundle code
    minify: true,
  },
  
  // Add headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Enable browser cache for static assets
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Performance optimization headers
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Special cache rules for static assets
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts for longer periods
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images with a longer TTL
        source: '/:path*.(?:jpg|jpeg|gif|png|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Configure webpack for optimizations
  webpack(config, { dev, isServer }) {
    // Optimize CSS
    if (!dev && !isServer) {
      // Measure and limit bundle size in production
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
      };
    }
    
    return config;
  },
  
  // Add compression for better performance
  compress: true,
  
  // Configure redirects for improved SEO
  async redirects() {
    return [
      // Redirect trailing slashes for consistency
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
  
  // Configure sitemaps to improve SEO
  experimental: {
    // Enable new Next.js features as they become available
    optimizeCss: true,
    optimizeServerReact: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  // Disable powered by header for security
  poweredByHeader: false,
};

module.exports = nextConfig;
