"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AirVent, Settings, Wrench } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: AirVent,
    title: "Airco Installatie",
    description: "Professionele installatie van airconditioning systemen voor uw woning of bedrijf.",
    price: "Vanaf €999,-",
    features: [
      "Gratis inspectie ter plaatse",
      "5 jaar garantie",
      "Inclusief montage",
      "24/7 service",
    ],
    link: "/diensten/installatie",
  },
  {
    icon: Settings,
    title: "Airco Onderhoud",
    description: "Regelmatig onderhoud voor optimale prestaties en langere levensduur van uw systeem.",
    price: "Vanaf €89,-",
    features: [
      "Complete inspectie",
      "Filter reiniging",
      "Prestatie optimalisatie",
      "Onderhoudsrapport",
    ],
    link: "/diensten/onderhoud",
  },
  {
    icon: Wrench,
    title: "Airco Reparatie",
    description: "Snelle en vakkundige reparatie bij storingen aan uw airconditioner.",
    price: "Vanaf €129,-",
    features: [
      "Snelle responstijd",
      "Alle merken",
      "Originele onderdelen",
      "Garantie op reparatie",
    ],
    link: "/diensten/reparatie",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Onze Diensten
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Compleet aanbod van airconditioning diensten voor particulieren en bedrijven.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-1"
            >
              <Card className="flex h-full flex-col p-6">
                <service.icon className="h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{service.description}</p>
                
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 text-sm">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                  <Button className="mt-4 w-full" asChild>
                    <Link href={service.link}>
                      Meer Informatie
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}