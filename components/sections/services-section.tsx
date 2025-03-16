"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AirVent, Settings, Wrench } from "lucide-react"
import Link from "next/link"
import diensten from "@/data/diensten.json"

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
          {diensten.map((dienst) => {
            const Icon = dienst.slug === 'installatie' ? AirVent :
                        dienst.slug === 'onderhoud' ? Settings :
                        Wrench

            return (
              <div
                key={dienst.slug}
                className="transform transition-all duration-300 hover:-translate-y-1"
              >
                <Card className="flex h-full flex-col p-6">
                  <Icon className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-xl font-semibold">{dienst.title}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{dienst.description}</p>
                  <div className="mt-6">
                    <p className="text-lg font-semibold text-blue-600">
                      Vanaf €{dienst.price.from},-
                      {dienst.price.period && <span className="text-sm"> {dienst.price.period}</span>}
                    </p>
                    <Button className="mt-4 w-full" asChild>
                      <Link href={`/diensten/${dienst.slug}`}>
                        Meer Informatie
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}