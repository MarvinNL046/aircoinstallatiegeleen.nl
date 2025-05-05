const fs = require('fs');
const path = require('path');
const daikinProductsData = require('./data/products-daikin.json');
const toshibaProductsData = require('./data/products-toshiba.json');
const samsungProductsData = require('./data/products-samsung.json');
const lgProductsData = require('./data/products-lg.json');
const mitsubishiProductsData = require('./data/products-mitsubishi.json');
const staycoolProductsData = require('./data/products-staycool.json');

// Combine all products
const allProducts = [
  ...(daikinProductsData.products || []),
  ...(toshibaProductsData.products || []),
  ...(samsungProductsData.products || []),
  ...(lgProductsData.products || []),
  ...(mitsubishiProductsData.products || []),
  ...(staycoolProductsData.products || [])
];

// Create XML sitemap content for products
function generateProductsSitemap() {
  const siteUrl = 'https://aircoinstallatiegeleen.nl';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/producten</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
  
  // Add each product URL
  allProducts.forEach(product => {
    sitemap += `
  <url>
    <loc>${siteUrl}/producten/${product.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });
  
  sitemap += `
</urlset>`;

  return sitemap;
}

// Write product sitemap to file
function writeProductsSitemap() {
  try {
    const sitemapContent = generateProductsSitemap();
    const outputPath = path.join(process.cwd(), 'public', 'sitemap-products.xml');
    
    fs.writeFileSync(outputPath, sitemapContent, 'utf8');
    console.log('Products sitemap generated successfully:', outputPath);
  } catch (error) {
    console.error('Error generating products sitemap:', error);
  }
}

// Execute the sitemap generation
writeProductsSitemap();
