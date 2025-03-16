"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8" aria-hidden="true" />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 
              id="hero-heading" 
              className="text-4xl font-bold tracking-tight sm:text-6xl"
              tabIndex={-1}
            >
              StayCool Airco Maastricht
            </h1>
            <p className="mt-2 text-3xl font-semibold text-blue-100">
              Professionele Airco Installatie
            </p>
            <p className="mt-6 text-xl text-blue-100">
              Geniet van optimaal klimaatcomfort het hele jaar door in Maastricht en omgeving. 
              Vakkundige installatie door gecertificeerde monteurs met 5 jaar garantie.
            </p>
            <div className="mt-6">
              <a 
                href="https://youtu.be/9m-jkGgfLog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span>Bekijk onze bedrijfsvideo</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="/offerte">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Offerte Aanvragen
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel 046 202 1430
                </Button>
              </Link>
            </div>
            <div 
              className="mt-8 flex flex-wrap items-center gap-4 text-sm"
              role="list"
              aria-label="Voordelen"
            >
              {["5 jaar garantie", "24/7 service", "Gratis advies"].map((item) => (
                <div 
                  key={item} 
                  className="flex items-center gap-2"
                  role="listitem"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="p-6 bg-white/95 backdrop-blur">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600">Vanaf</p>
                <p className="text-4xl font-bold text-blue-600">€1299,-</p>
                <p className="text-sm text-gray-600">Complete installatie</p>
              </div>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
