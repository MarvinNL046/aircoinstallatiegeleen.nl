// This script is used to generate sitemaps during the prebuild process
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Load environment variables from .env.production
try {
  require('dotenv').config({ path: '.env.production' });
} catch (e) {
  console.log('Could not load dotenv, using default values');
}

// Get the site URL from environment variables
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aircoinstallatie-maastricht.nl';
console.log('Using site URL for sitemaps:', siteUrl);

// Update the next-sitemap.config.js file with the correct site URL
const configPath = path.join(process.cwd(), 'next-sitemap.config.js');
const configContent = `
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "${siteUrl}",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
    ],
    additionalSitemaps: [
      "${siteUrl}/sitemap-locations.xml",
      "${siteUrl}/sitemap-services.xml",
    ],
  },
  exclude: ['/404', '/500', '/offline'],
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
}
`;

// Write the updated config file
fs.writeFileSync(configPath, configContent);
console.log('Updated next-sitemap.config.js with the correct site URL');

// Run the next-sitemap command to generate sitemaps
try {
  console.log('Generating sitemaps...');
  execSync('npx next-sitemap', { stdio: 'inherit' });
  console.log('Sitemaps generated successfully');
} catch (error) {
  console.error('Error generating sitemaps:', error);
  process.exit(1);
}

// Update any hardcoded URLs in the generated sitemap files
const sitemapFiles = [
  'sitemap.xml',
  'sitemap-0.xml',
  'robots.txt'
];

// Function to update URLs in a file
function updateUrlsInFile(filePath, oldUrl, newUrl) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(new RegExp(oldUrl, 'g'), newUrl);
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated URLs in ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
}

// Update URLs in all sitemap files
for (const file of sitemapFiles) {
  const filePath = path.join(process.cwd(), 'public', file);
  updateUrlsInFile(filePath, 'https://aircooffertelimburg.nl', siteUrl);
}

console.log('Prebuild sitemap generation completed');
