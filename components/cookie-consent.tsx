"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-4 md:p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Cookie Voorkeuren</h3>
            <p className="text-sm text-muted-foreground">
              Wij gebruiken cookies om uw ervaring op onze website te verbeteren. 
              U kunt kiezen welke cookies u wilt accepteren.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={acceptEssential}
              className="whitespace-nowrap"
            >
              Alleen Essentieel
            </Button>
            <Button
              onClick={acceptAll}
              className="whitespace-nowrap"
            >
              Accepteer Alles
            </Button>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            aria-label="Sluit cookie melding"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}