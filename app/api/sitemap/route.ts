import { generateAllSitemaps } from '@/lib/generate-sitemaps'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
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