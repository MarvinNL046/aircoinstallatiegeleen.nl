"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, Calendar, Check, Star, Shield, BadgeCheck } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function EnhancedCTASection() {
  // Add animated counter effect
  const [count, setCount] = useState(0)
  const targetCount = 250 // The amount of discount
  
  useEffect(() => {
    if (count < targetCount) {
      const timeout = setTimeout(() => {
        setCount(prev => Math.min(prev + 5, targetCount))
      }, 20)
      
      return () => clearTimeout(timeout)
    }
  }, [count])
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-900 py-16 sm:py-24">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8" />
      
      {/* Background design elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-500 opacity-20 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Left content - value proposition */}
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-white">
                De beste keuze voor Geleen & omgeving
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Krijg tot <span className="text-amber-400">{count === targetCount ? `€${count},-` : `€${count}`}</span> korting op uw airco installatie
              </h2>
              
              <p className="text-xl text-blue-100 mb-8">
                Wacht niet langer en profiteer van ons beperkte aanbod. Ontvang binnen 24 uur een gratis offerte op maat voor uw airconditioning project.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-white/10 backdrop-blur border-0 p-4">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 mr-3">
                      <BadgeCheck className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Gecertificeerde installatie</h3>
                      <p className="text-sm text-blue-100">Door F-gassen gecertificeerde monteurs met jarenlange ervaring</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur border-0 p-4">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 mr-3">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Hoogste klanttevredenheid</h3>
                      <p className="text-sm text-blue-100">4.7/5 sterren op basis van 163 beoordelingen</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur border-0 p-4">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 mr-3">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">5 jaar garantie</h3>
                      <p className="text-sm text-blue-100">Volledige garantie op installatie en onderdelen</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur border-0 p-4">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 mr-3">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Snelle installatie</h3>
                      <p className="text-sm text-blue-100">Binnen 1-5 werkdagen geïnstalleerd en werkend</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Testimonial for social proof */}
              <Card className="bg-white/5 backdrop-blur border-0 p-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-lg font-semibold text-blue-900">MG</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="text-amber-400">★★★★★</div>
                      <span className="ml-2 text-sm text-blue-100">1 week geleden</span>
                    </div>
                    <p className="text-white italic text-sm">
                      "Fantastische service en installatie! Het team was stipt op tijd, werkte netjes en het resultaat was boven verwachting. De airco werkt perfect en ik geniet nu van een aangenaam klimaat in huis."
                    </p>
                    <p className="mt-1 font-medium text-blue-100">- Mark G. uit Geleen</p>
                  </div>
                </div>
              </Card>
              
              {/* Logos for trust */}
              <div className="mb-6">
                <p className="text-sm text-blue-200 mb-3">Erkend installateur van topmerken:</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="bg-white/90 py-2 px-4 rounded-md">
                    <span className="font-bold text-blue-900">Daikin</span>
                  </div>
                  <div className="bg-white/90 py-2 px-4 rounded-md">
                    <span className="font-bold text-blue-900">Mitsubishi</span>
                  </div>
                  <div className="bg-white/90 py-2 px-4 rounded-md">
                    <span className="font-bold text-blue-900">Panasonic</span>
                  </div>
                  <div className="bg-white/90 py-2 px-4 rounded-md">
                    <span className="font-bold text-blue-900">Toshiba</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right content - CTA form */}
            <div className="lg:col-span-5">
              <Card className="overflow-hidden shadow-xl border-0">
                <div className="bg-orange-500 p-4 text-white text-center">
                  <h3 className="text-lg font-bold">Vraag Nu Uw Offerte Aan</h3>
                  <p className="text-sm text-orange-100">Binnen 24 uur reactie gegarandeerd</p>
                </div>
                
                <div className="p-6">
                  {/* Limited offer notice */}
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mb-6">
                    <div className="flex items-start">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 mr-2 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-amber-800 text-sm font-medium">
                          Beperkte tijd aanbieding: Tot €250 korting op uw installatie bij offerte aanvragen deze week!
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-5">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 h-14 text-base relative overflow-hidden group" asChild>
                      <Link href="/offerte">
                        <span className="relative z-10">
                          <Mail className="mr-2 h-5 w-5 inline-block" />
                          Gratis Offerte Aanvragen
                        </span>
                        <span className="absolute bottom-0 left-0 h-1 w-full bg-orange-400 transition-all duration-300 group-hover:h-full"></span>
                      </Link>
                    </Button>
                    
                    <Button size="lg" variant="outline" className="border-blue-300 h-14 text-base hover:bg-blue-50" asChild>
                      <Link href="tel:0462021430">
                        <Phone className="mr-2 h-5 w-5" />
                        <span>Bel Direct: <span className="font-bold">046 202 1430</span></span>
                      </Link>
                    </Button>
                    
                    <Link href="https://wa.me/310636481054" className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-md hover:bg-[#128C7E] transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="font-medium">WhatsApp Ons</span>
                    </Link>
                    
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 h-14 text-base relative overflow-hidden group" asChild>
                      <Link href="https://afspraken.staycoolairco.nl" target="_blank" rel="noopener noreferrer">
                        <span className="relative z-10">
                          <Calendar className="mr-2 h-5 w-5 inline-block" />
                          Online Afspraak Maken
                        </span>
                        <span className="absolute bottom-0 left-0 h-1 w-full bg-green-500 transition-all duration-300 group-hover:h-full"></span>
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Al <span className="font-semibold">163</span> tevreden klanten in Geleen
                    </p>
                    
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {["Geen verplichtingen", "Vakkundig advies", "Beste prijs-kwaliteit"].map(item => (
                        <span key={item} className="inline-flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                          <Check className="h-3 w-3 mr-1" /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
