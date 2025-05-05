"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface EnhancedCTABannerProps {
  theme?: "light" | "dark"
}

export function EnhancedCTABanner({ theme = "light" }: EnhancedCTABannerProps) {
  const bgColor = theme === "light" ? "bg-blue-50" : "bg-blue-900"
  const textColor = theme === "light" ? "text-blue-900" : "text-white"
  const borderColor = theme === "light" ? "border-blue-100" : "border-blue-800"
  
  // Add countdown timer for urgency
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 0
  })
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1
        
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds }
        }
        
        const newMinutes = prev.minutes - 1
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 }
        }
        
        const newHours = prev.hours - 1
        if (newHours >= 0) {
          return { ...prev, hours: newHours, minutes: 59, seconds: 59 }
        }
        
        const newDays = prev.days - 1
        if (newDays >= 0) {
          return { ...prev, days: newDays, hours: 23, minutes: 59, seconds: 59 }
        }
        
        // If timer is done, just return current values
        clearInterval(timer)
        return prev
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  // Add visual attention animation
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      setTimeout(() => {
        setIsAnimating(false)
      }, 700)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  const animationClass = isAnimating ? "scale-[1.01] shadow-lg" : ""

  return (
    <div 
      className={`${bgColor} ${borderColor} border-y py-4 transform transition-all duration-300 ${animationClass}`}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div>
              <div className={`${textColor} font-medium flex items-center`}>
                <span className="flex items-center justify-center bg-amber-400 text-black h-8 w-8 rounded-full mr-2">
                  <Clock className="h-4 w-4" />
                </span>
                <span className="text-sm sm:text-base font-bold">
                  Actie verloopt over: {timeLeft.days}d {timeLeft.hours}u {timeLeft.minutes}m {timeLeft.seconds}s
                </span>
              </div>
              <p className={`${textColor} text-sm sm:text-base font-medium`}>
                <span className="hidden sm:inline">❄️</span> Krijg tot <span className="font-bold">€250 korting</span> bij airco installatie in Geleen!
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="border-blue-300 hover:border-blue-400 font-medium" 
              asChild
            >
              <Link href="tel:0462021430">
                <Phone className="mr-2 h-4 w-4" />
                <span>Bel <span className="font-bold">046 202 1430</span></span>
              </Link>
            </Button>
            <Button 
              size="sm" 
              className="bg-green-600 hover:bg-green-700 px-5 group" 
              asChild
            >
              <Link href="/offerte">
                <Calendar className="mr-2 h-4 w-4 group-hover:mr-1 transition-all" />
                <span>Plan Nu Afspraak</span>
                <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
