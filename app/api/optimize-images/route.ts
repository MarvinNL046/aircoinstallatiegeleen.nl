import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import util from 'util';

// Mark route as dynamic to prevent static pre-rendering issues
export const dynamic = 'force-dynamic';

const execPromise = util.promisify(exec);

// Define supported image formats
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif'];

// Define optimization parameters for different formats
const DEFAULT_QUALITY = {
  jpg: 80,
  webp: 75,
  png: 85,
  avif: 70
};

// API route to scan and optimize images
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const dryRun = searchParams.get('dryRun') === 'true';
    const format = searchParams.get('format') || 'webp';
    // Get quality parameter or use defaults based on format
    let quality = parseInt(searchParams.get('quality') || '0', 10);
    if (quality <= 0 || quality > 100) {
      quality = DEFAULT_QUALITY[format as keyof typeof DEFAULT_QUALITY] || 75;
    }
    
    // Security check - only allow specific formats
    if (!['webp', 'avif', 'jpg', 'png'].includes(format)) {
      return NextResponse.json({ error: 'Invalid format specified' }, { status: 400 });
    }
    
    // Scan public directory for images
    const results = await scanAndOptimizeImages('public', format, quality, dryRun);
    
    return NextResponse.json({ 
      success: true, 
      message: dryRun ? 'Dry run completed' : 'Image optimization completed',
      results 
    });
  } catch (error) {
    console.error('Error optimizing images:', error);
    return NextResponse.json({ 
      error: 'Failed to optimize images', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}

/**
 * Scan directory recursively for images and optimize them
 */
async function scanAndOptimizeImages(
  baseDir: string, 
  format: string = 'webp', 
  quality: number = 75,
  dryRun: boolean = false
) {
  const results = {
    totalScanned: 0,
    totalOptimized: 0,
    totalSizeBefore: 0,
    totalSizeAfter: 0,
    errors: [] as string[],
    optimizedFiles: [] as { path: string, sizeBefore: number, sizeAfter: number, reduction: string }[]
  };
  
  try {
    // Check if directory exists
    try {
      await fs.access(baseDir);
    } catch (error) {
      throw new Error(`Directory ${baseDir} does not exist or is not accessible`);
    }
    
    // Get list of files in directory
    const entries = await fs.readdir(baseDir, { withFileTypes: true });
    
    // Process each entry
    for (const entry of entries) {
      const entryPath = path.join(baseDir, entry.name);
      
      // If directory, recursively scan
      if (entry.isDirectory()) {
        const subResults = await scanAndOptimizeImages(entryPath, format, quality, dryRun);
        
        // Merge results
        results.totalScanned += subResults.totalScanned;
        results.totalOptimized += subResults.totalOptimized;
        results.totalSizeBefore += subResults.totalSizeBefore;
        results.totalSizeAfter += subResults.totalSizeAfter;
        results.errors.push(...subResults.errors);
        results.optimizedFiles.push(...subResults.optimizedFiles);
        
        continue;
      }
      
      // If file, check if it's an image
      const ext = path.extname(entry.name).toLowerCase();
      if (!SUPPORTED_EXTENSIONS.includes(ext)) {
        continue;
      }
      
      results.totalScanned++;
      
      try {
        // Get file stats before optimization
        const statsBefore = await fs.stat(entryPath);
        results.totalSizeBefore += statsBefore.size;
        
        // Skip if already optimized (webp or avif)
        if (ext === `.${format}`) {
          continue;
        }
        
        // Calculate output path
        const outputPath = entryPath.replace(ext, `.${format}`);
        
        // Skip dry run if requested
        if (!dryRun) {
          // Check if Sharp module is available, otherwise fall back to simpler method
          try {
            // Optimized method with Sharp (if available)
            try {
              await optimizeWithSharp(entryPath, outputPath, format, quality);
            } catch (e) {
              // Fallback to exec if Sharp is not available
              await optimizeWithExec(entryPath, outputPath, format, quality);
            }
          } catch (e) {
            throw new Error(`Failed to optimize ${entryPath}: ${e instanceof Error ? e.message : 'Unknown error'}`);
          }
          
          // Get file stats after optimization
          const statsAfter = await fs.stat(outputPath);
          results.totalSizeAfter += statsAfter.size;
          results.totalOptimized++;
          
          const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(2);
          
          results.optimizedFiles.push({
            path: entryPath,
            sizeBefore: statsBefore.size,
            sizeAfter: statsAfter.size,
            reduction: `${reduction}%`
          });
        } else {
          // For dry run, just count the file
          results.totalOptimized++;
          results.optimizedFiles.push({
            path: entryPath,
            sizeBefore: statsBefore.size,
            sizeAfter: 0,
            reduction: 'dry-run'
          });
        }
      } catch (error) {
        results.errors.push(`Failed to process ${entryPath}: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
    
    return results;
  } catch (error) {
    console.error('Error scanning directory:', error);
    throw error;
  }
}

/**
 * Optimize image using Sharp module (if available)
 */
async function optimizeWithSharp(
  inputPath: string, 
  outputPath: string, 
  format: string, 
  quality: number
) {
  // Dynamically import sharp to avoid build issues
  // @ts-ignore - Ignoring TS warning about require
  const sharpModule = require('sharp');
  
  let transformer = sharpModule(inputPath);
  
  // Apply format-specific operations
  switch (format) {
    case 'webp':
      transformer = transformer.webp({ quality });
      break;
    case 'avif':
      transformer = transformer.avif({ quality });
      break;
    case 'jpg':
    case 'jpeg':
      transformer = transformer.jpeg({ quality });
      break;
    case 'png':
      transformer = transformer.png({ quality: Math.min(quality, 100) });
      break;
    default:
      transformer = transformer.webp({ quality });
  }
  
  await transformer.toFile(outputPath);
}

/**
 * Fallback optimization using executable tools
 */
async function optimizeWithExec(
  inputPath: string, 
  outputPath: string, 
  format: string, 
  quality: number
) {
  // Based on available tools (imagemagick, cwebp, etc.)
  // Commands might need adjustment based on operating system
  try {
    // Try using ImageMagick if available
    await execPromise(`convert "${inputPath}" -quality ${quality} "${outputPath}"`);
  } catch (e) {
    // If ImageMagick fails or is not available, try cwebp for WebP format
    if (format === 'webp') {
      try {
        await execPromise(`cwebp -q ${quality} "${inputPath}" -o "${outputPath}"`);
      } catch (e2) {
        // If all else fails, inform the user
        throw new Error(`No image optimization tools available. Please install Sharp, ImageMagick or cwebp.`);
      }
    } else {
      throw new Error(`No image optimization tools available for ${format} format.`);
    }
  }
}
