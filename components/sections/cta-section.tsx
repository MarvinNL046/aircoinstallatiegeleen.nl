"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-blue-600 py-24">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8" />
      <div className="container relative">
        <div className="mx-auto max-w-4xl">
          <div className="transform transition-all duration-300">
            <Card className="overflow-hidden p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold">
                    Vraag Nu een Gratis Offerte Aan
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Ontvang binnen 24 uur een vrijblijvende offerte voor uw airconditioning project in Maastricht en omgeving.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
                      Gratis inspectie ter plaatse
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
                      Persoonlijk advies
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
                      Scherpe prijsgarantie
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/offerte">
                      <Mail className="mr-2 h-4 w-4" />
                      Offerte Aanvragen
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link href="tel:0462021430">
                      <Phone className="mr-2 h-4 w-4" />
                      Bel 0462021430
                    </Link>
                  </Button>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    Binnen 24 uur reactie • Geen verplichtingen
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
