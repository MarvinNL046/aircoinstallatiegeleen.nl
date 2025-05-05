import { NextRequest, NextResponse } from 'next/server'

// Define the shape of a click tracking event
type ClickEvent = {
  element: string
  location: string
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
      if (event.element && event.location) {
        ctrEvents.push({
          element: event.element,
          location: event.location,
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
  const locationCounts: Record<string, number> = {}
  
  events.forEach(event => {
    // Count by element type
    elementCounts[event.element] = (elementCounts[event.element] || 0) + 1
    
    // Count by location
    locationCounts[event.location] = (locationCounts[event.location] || 0) + 1
  })
  
  // Calculate CTR for different elements
  const elementStats = Object.entries(elementCounts).map(([element, count]) => ({
    element,
    clicks: count,
    percentage: events.length ? (count / events.length * 100).toFixed(2) + '%' : '0%'
  }))
  
  // Calculate CTR for different pages
  const locationStats = Object.entries(locationCounts).map(([location, count]) => ({
    location,
    clicks: count,
    percentage: events.length ? (count / events.length * 100).toFixed(2) + '%' : '0%'
  }))
  
  return {
    byElement: elementStats,
    byLocation: locationStats,
    // Add time-based analytics in a real implementation
  }
}
