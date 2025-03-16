import { generateAllSitemaps } from '@/lib/generate-sitemaps'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Log the environment variable
    console.log('NEXT_PUBLIC_SITE_URL:', process.env.NEXT_PUBLIC_SITE_URL)
    
    // Use the environment variable from .env.production
    // No need to override it as it's already set correctly
    
    // Pass the environment variables to the generateAllSitemaps function
    await generateAllSitemaps()
    
    return NextResponse.json({ success: true, message: 'Sitemaps generated successfully' })
  } catch (error) {
    console.error('Error generating sitemaps:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to generate sitemaps' },
      { status: 500 }
    )
  }
}
