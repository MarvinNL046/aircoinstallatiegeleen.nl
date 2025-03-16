import { Metadata } from "next"
import { VoordelenContent } from "@/components/kennisbank/voordelen/voordelen-content"

export const metadata: Metadata = {
  title: "De 7 Belangrijkste Voordelen van een Airconditioning | Airco Offerte Limburg",
  description: "Ontdek waarom een airconditioning meer is dan alleen koeling en hoe het uw leefcomfort kan verbeteren.",
}

export default function VoordelenPage() {
  return (
    <div className="container py-12">
      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          voordelen
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          comfort
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          gezondheid
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">De 7 Belangrijkste Voordelen van een Airconditioning</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Waarom een airconditioning meer is dan alleen koeling
      </p>

      <VoordelenContent />
    </div>
  )
}