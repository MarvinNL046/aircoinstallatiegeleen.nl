"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Star, Clock, Shield, CheckCircle, Calendar } from "lucide-react"
import ContactForm from "@/components/forms/ContactForm"

const rotatingTexts = [
  "Professionele Airco Installatie in Limburg",
  "Airco Service Limburg - Direct Beschikbaar", 
  "Airco Specialist Limburg - 5 Jaar Garantie",
  "Klimaatbeheersing Limburg - Alle Merken"
]

export function HeroOptimized() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentFullText = rotatingTexts[currentTextIndex]
    
    if (isTyping) {
      // Typing effect
      let charIndex = 0
      const typingInterval = setInterval(() => {
        if (charIndex <= currentFullText.length) {
          setDisplayText(currentFullText.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typingInterval)
          // Wait before deleting
          setTimeout(() => setIsTyping(false), 2000)
        }
      }, 50)
      
      return () => clearInterval(typingInterval)
    } else {
      // Deleting effect
      let charIndex = currentFullText.length
      const deletingInterval = setInterval(() => {
        if (charIndex >= 0) {
          setDisplayText(currentFullText.slice(0, charIndex))
          charIndex--
        } else {
          clearInterval(deletingInterval)
          // Move to next text
          setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
          setIsTyping(true)
        }
      }, 30)
      
      return () => clearInterval(deletingInterval)
    }
  }, [currentTextIndex, isTyping])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-12 sm:py-16 lg:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-8" />
      
      {/* Orange ribbon - positioned in mobile view */}
      <div className="absolute top-4 right-4 sm:hidden bg-orange-500 text-white px-4 py-2 transform rotate-6 shadow-lg z-20">
        <p className="text-sm font-semibold">Binnen 24u reactie</p>
      </div>

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text content */}
          <div className="text-white">
            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight min-h-[1.2em]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">4.7/5</span>
                <span className="text-sm">163 reviews</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">Erkend installateur</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Snel ter plaatse</span>
              </div>
            </div>

            <p className="mb-8 text-lg text-blue-100">
              Dé airco specialist in heel Limburg! Van installatie tot onderhoud, 
              wij regelen het allemaal. Gratis offerte en advies op maat.
            </p>

            {/* USPs */}
            <div className="mb-8 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-blue-100">Gratis offerte & advies op locatie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-blue-100">Onderhoud vanaf €11 per maand</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-blue-100">Alle topmerken leverbaar</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <Link href="tel:0462021430">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg shadow-lg transition-all hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Bel Direct: 046 202 1430
                </Button>
              </Link>
              <Link 
                href="https://wa.me/31636481054" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold px-8 py-6 text-lg backdrop-blur-sm transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp: 06 3648 1054
                </Button>
              </Link>
              <Link 
                href="https://afspraken.staycoolairco.nl" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg shadow-lg transition-all hover:scale-105"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Plan Direct Online Afspraak
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact form */}
          <div className="relative">
            {/* Orange ribbon for desktop - positioned over form */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-2 transform rotate-12 shadow-lg z-20">
              <p className="text-sm font-semibold">Binnen 24u reactie</p>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              <ContactForm 
                title="Direct een gratis offerte?"
                subtitle="Vul het formulier in en ontvang binnen 24 uur reactie"
                showCityField={true}
                formType="hero_form"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}