// This script is used to generate custom sitemaps using the generateAllSitemaps function
// It needs to be run in the Next.js environment

// Import the Next.js runtime
const { createServer } = require('next/dist/server/next');

// Create a Next.js server instance
const app = createServer({
  dev: false,
  dir: process.cwd(),
  quiet: false,
});

// Initialize the server
app.prepare().then(async () => {
  try {
    // Import the generateAllSitemaps function
    const { generateAllSitemaps } = require('./lib/generate-sitemaps');
    
    // Set the environment variable for the site URL if not already set
    // This ensures we use the value from .env.production when available
    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      try {
        // Try to load from .env.production
        require('dotenv').config({ path: '.env.production' });
      } catch (e) {
        // If dotenv is not available or file not found, use default
        console.log('Using default site URL');
      }
      
      // Set default if still not available
      process.env.NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aircoinstallatie-maastricht.nl';
    }
    
    console.log('Using site URL:', process.env.NEXT_PUBLIC_SITE_URL);
    
    // Call the function to regenerate the sitemaps
    await generateAllSitemaps();
    
    console.log('Custom sitemaps generated successfully');
  } catch (error) {
    console.error('Error generating custom sitemaps:', error);
  } finally {
    // Close the server
    process.exit(0);
  }
});
