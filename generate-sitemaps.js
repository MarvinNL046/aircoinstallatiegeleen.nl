// Import the generateAllSitemaps function
// Need to use the compiled JS version for Node.js compatibility
const { generateAllSitemaps } = require('./lib/generate-sitemaps.ts');

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
  process.env.NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aircoinstallatiegeleen.nl';
}

console.log('Using site URL:', process.env.NEXT_PUBLIC_SITE_URL);

// Call the function to regenerate the sitemaps
generateAllSitemaps()
  .then(() => {
    console.log('Sitemaps generated successfully');
  })
  .catch((error) => {
    console.error('Error generating sitemaps:', error);
  });
