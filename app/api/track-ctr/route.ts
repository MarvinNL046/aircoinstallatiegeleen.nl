import { NextRequest, NextResponse } from 'next/server'

// Define the shape of a click tracking event
type ClickEvent = {
  elementId: string
  pathname: string
  timestamp: Date
}

// Simple in-memory storage for the CTR events
// In a production app, this would be stored in a database
let ctrEvents: ClickEvent[] = []

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await request.json()
    
    // Validate the incoming data
    if (!body.events || !Array.isArray(body.events)) {
      return NextResponse.json(
        { error: 'Invalid request format, events array is required' },
        { status: 400 }
      )
    }
    
    // Process and store each event
    body.events.forEach((event: ClickEvent) => {
      if (event.elementId && event.pathname) {
        ctrEvents.push({
          elementId: event.elementId,
          pathname: event.pathname,
          timestamp: new Date(event.timestamp) // Convert string to Date if needed
        })
      }
    })
    
    // Log events (in a real app, you'd save to a database)
    console.log('CTR Events stored:', ctrEvents)
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: `${body.events.length} events tracked successfully`,
      totalEventsTracked: ctrEvents.length
    })
  } catch (error) {
    console.error('Error tracking CTR events:', error)
    return NextResponse.json(
      { error: 'Failed to process tracking data' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Get CTR statistics (in a real app, you'd calculate these from a database)
  const stats = calculateCTRStats(ctrEvents)
  
  return NextResponse.json({
    totalEvents: ctrEvents.length,
    stats
  })
}

function calculateCTRStats(events: ClickEvent[]) {
  // Group events by element type
  const elementCounts: Record<string, number> = {}
  const pathnameCounts: Record<string, number> = {}
  
  events.forEach(event => {
    // Count by element type
    elementCounts[event.elementId] = (elementCounts[event.elementId] || 0) + 1
    
    // Count by pathname
    pathnameCounts[event.pathname] = (pathnameCounts[event.pathname] || 0) + 1
  })
  
  // Calculate CTR for different elements
  const elementStats = Object.entries(elementCounts).map(([elementId, count]) => ({
    elementId,
    clicks: count,
    percentage: events.length ? (count / events.length * 100).toFixed(2) + '%' : '0%'
  }))
  
  // Calculate CTR for different pages
  const pathnameStats = Object.entries(pathnameCounts).map(([pathname, count]) => ({
    pathname,
    clicks: count,
    percentage: events.length ? (count / events.length * 100).toFixed(2) + '%' : '0%'
  }))
  
  return {
    byElement: elementStats,
    byPathname: pathnameStats,
    // Add time-based analytics in a real implementation
  }
}
