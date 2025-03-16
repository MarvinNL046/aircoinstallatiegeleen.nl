const fs = require('fs');
const path = require('path');

const oldDomain = 'https://aircooffertelimburg.nl';
const newDomain = 'https://aircoinstallatie-maastricht.nl';

// List of sitemap files to update
const sitemapFiles = [
  'sitemap.xml',
  'sitemap-main.xml',
  'sitemap-locations.xml',
  'sitemap-services.xml',
  'sitemap-0.xml'
];

// Function to update domain in a file
async function updateDomainInFile(filePath) {
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    // Read file content
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all occurrences of the old domain with the new domain
    const updatedContent = content.replace(new RegExp(oldDomain, 'g'), newDomain);
    
    // Write updated content back to file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    
    console.log(`Updated domain in ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

// Update all sitemap files
async function updateAllSitemaps() {
  for (const file of sitemapFiles) {
    const filePath = path.join(process.cwd(), 'public', file);
    await updateDomainInFile(filePath);
  }
  console.log('All sitemap files updated successfully');
}

// Run the update function
updateAllSitemaps();
