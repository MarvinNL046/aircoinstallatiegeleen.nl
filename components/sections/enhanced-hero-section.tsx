"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Calendar, ThumbsUp, Clock, Award } from "lucide-react"
import { useState } from "react"

export function EnhancedHeroSection() {
  const [showUrgencyMessage, setShowUrgencyMessage] = useState(true)
  
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8" aria-hidden="true" />
      
      {/* Urgency Banner */}
      {showUrgencyMessage && (
        <div className="absolute top-0 left-0 right-0 bg-amber-500 py-2 px-4 text-center">
          <div className="container flex items-center justify-between">
            <p className="font-medium text-black">
              <span className="hidden sm:inline">⚡</span> Speciale actie: Tot €250 korting op airco installaties in mei!
            </p>
            <button 
              onClick={() => setShowUrgencyMessage(false)}
              className="text-black hover:text-gray-800"
              aria-label="Sluiten"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex rounded-full bg-blue-400/20 px-3 py-1 text-sm font-semibold">
              #1 Airco-specialist in Limburg
            </div>
            <h1 
              id="hero-heading" 
              className="text-4xl font-bold tracking-tight sm:text-6xl"
              tabIndex={-1}
            >
              StayCool Airco Geleen
            </h1>
            <p className="mt-2 text-3xl font-semibold text-blue-100">
              Professionele Airco Installatie
            </p>
            <p className="mt-6 text-xl text-blue-100">
              Geniet van optimaal klimaatcomfort het hele jaar door in Geleen en omgeving. 
              Vakkundige installatie door gecertificeerde monteurs met 5 jaar garantie.
            </p>
            
            {/* Added Trust Indicators */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                <span className="mr-1 text-yellow-300">★★★★★</span>
                <span className="text-blue-100">4.9/5</span>
              </div>
              <span className="mx-2 text-blue-300">•</span>
              <span className="text-blue-100">128+ tevreden klanten in Geleen</span>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://youtu.be/9m-jkGgfLog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-blue-200 transition-colors group"
              >
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 group-hover:bg-red-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </div>
                <span className="font-medium">Bekijk onze bedrijfsvideo</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/offerte">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-6 py-6 h-auto relative overflow-hidden group">
                  <span className="relative z-10">
                    <Calendar className="mr-2 h-5 w-5 inline-block" />
                    Gratis Offerte Aanvragen
                  </span>
                  <span className="absolute bottom-0 left-0 h-1 w-full bg-green-500 transition-all duration-300 group-hover:h-full"></span>
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-lg h-auto py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>
                    Direct contact: <span className="font-bold">046 202 1430</span>
                  </span>
                </Button>
              </Link>
            </div>
            
            <div 
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm"
              role="list"
              aria-label="Voordelen"
            >
              <div className="flex items-center gap-2" role="listitem">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white" aria-hidden="true">
                  <Award className="h-4 w-4" />
                </span>
                <span>5 jaar garantie</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white" aria-hidden="true">
                  <Clock className="h-4 w-4" />
                </span>
                <span>24/7 service</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white" aria-hidden="true">
                  <ThumbsUp className="h-4 w-4" />
                </span>
                <span>Gratis advies</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 z-10 rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-black shadow-lg transform rotate-12">
              Beperkte actie!
            </div>
            <Card className="p-6 bg-white/95 backdrop-blur shadow-xl border-2 border-blue-200">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600 uppercase tracking-wider">Vanaf</p>
                <div className="flex items-center justify-center">
                  <p className="text-5xl font-bold text-blue-600">€1299,-</p>
                  <div className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    Incl. BTW
                  </div>
                </div>
                <p className="text-sm text-gray-600">Complete installatie</p>
                <div className="mt-2 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Binnen 1-5 werkdagen geïnstalleerd
                  </span>
                </div>
              </div>
              <p className="text-center font-medium text-gray-700 mb-4">
                Ontvang binnen 24 uur een vrijblijvende offerte op maat
              </p>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
