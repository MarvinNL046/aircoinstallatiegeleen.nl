"use client"

import { useEffect } from "react"
import Script from "next/script"

// Track click events to analyze CTR
type ClickEvent = {
  elementId: string
  pathname: string
  timestamp: Date
}

// Extend the Window interface to include our tracking functions
declare global {
  interface Window {
    trackCTR: (elementId: string, pathname: string) => void
    ctrEvents: ClickEvent[]
    sendCTRData: () => void
  }
}

export function CTRTracker() {
  useEffect(() => {
    // Initialize tracking array if it doesn't exist
    if (!window.ctrEvents) {
      window.ctrEvents = []
    }

    // Define tracking function
    window.trackCTR = (elementId: string, pathname: string) => {
      window.ctrEvents.push({
        elementId,
        pathname,
        timestamp: new Date()
      })
      
      console.log(`CTR Event tracked: ${elementId} in ${pathname}`)
      
      // If we have accumulated 5 or more events, send the data
      if (window.ctrEvents.length >= 5) {
        window.sendCTRData()
      }
    }
    
    // Function to send tracking data to backend
    window.sendCTRData = () => {
      if (window.ctrEvents.length === 0) return
      
      // In a real implementation, this would send the data to a backend
      const eventsToSend = [...window.ctrEvents]
      
      // Clear the events array
      window.ctrEvents = []
      
      // For this demo, we'll just log the events
      console.log('Sending CTR events to analytics:', eventsToSend)
      
      // In a real implementation, this would be:
      // fetch('/api/track-ctr', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ events: eventsToSend })
      // })
    }
    
    // Add click event listeners to important CTA elements
    const trackClicksOn = (selector: string, elementName: string) => {
      document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('click', () => {
          window.trackCTR(elementName, window.location.pathname)
        })
      })
    }
    
    // Track clicks on important elements
    trackClicksOn('a[href="/offerte"]', 'offerte-link')
    trackClicksOn('a[href="tel:0462021430"]', 'phone-call')
    trackClicksOn('a[href*="wa.me"]', 'whatsapp-contact')
    trackClicksOn('.contact-form button[type="submit"]', 'form-submit')
    
    // Send any remaining data when the user leaves the page
    const handleBeforeUnload = () => {
      window.sendCTRData()
    }
    
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])
  
  return (
    <>
      {/* Google Tag Manager script would go here in a real implementation */}
      <Script id="ctr-tracking-helpers" strategy="afterInteractive">
        {`
          // Helper function to add tracking to dynamically added elements
          function addCTRTrackingToNewElements() {
            // Find all CTAs added after initial page load
            document.querySelectorAll('a[href="/offerte"]:not([data-ctr-tracked])').forEach(element => {
              element.setAttribute('data-ctr-tracked', 'true')
              element.addEventListener('click', () => {
                if (window.trackCTR) {
                  window.trackCTR('offerte-link', window.location.pathname)
                }
              })
            })
            
            // Similar for other important CTA elements
          }
          
          // Run periodically to catch dynamically added elements
          setInterval(addCTRTrackingToNewElements, 2000)
        `}
      </Script>
    </>
  )
}
