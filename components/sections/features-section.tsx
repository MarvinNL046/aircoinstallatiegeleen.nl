"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AirVent, ThermometerSun, Wrench, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: AirVent,
    title: "Professionele Installatie",
    description: "Vakkundige montage door gecertificeerde monteurs met ruime ervaring.",
    link: "/diensten/installatie",
  },
  {
    icon: ThermometerSun,
    title: "Klimaatbeheersing",
    description: "Perfect binnenklimaat in alle seizoenen met energiezuinige systemen.",
    link: "/kennisbank/klimaatbeheersing",
  },
  {
    icon: Wrench,
    title: "Onderhoud & Service",
    description: "Regelmatig onderhoud en 24/7 service bij storingen.",
    link: "/diensten/onderhoud",
  },
  {
    icon: Clock,
    title: "Snelle Service",
    description: "Binnen 24 uur een offerte en snelle installatie mogelijk.",
    link: "/offerte",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-blue-600 font-semibold">Waarom Kiezen voor Ons?</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            De Airco Specialist van Limburg
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Al meer dan 10 jaar specialist in airconditioning voor woningen en bedrijven.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={feature.link}>
                <Card className="relative h-full overflow-hidden p-6 transition-all hover:shadow-lg">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10" />
                  <feature.icon className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  <div className="mt-4 flex items-center text-blue-600">
                    <span className="text-sm">Lees meer</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <Link href="/offerte">
              Vraag Nu een Offerte Aan
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}