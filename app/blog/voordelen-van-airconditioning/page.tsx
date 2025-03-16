import { Metadata } from "next"
import { VoordelenBlogContent } from "@/components/blog/voordelen/voordelen-blog-content"

export const metadata: Metadata = {
  title: "De 7 Belangrijkste Voordelen van een Airconditioning | Airco Offerte Limburg",
  description: "Ontdek waarom een airconditioning meer is dan alleen koeling en hoe het uw leefcomfort kan verbeteren.",
}

export default function VoordelenBlogPage() {
  return (
    <div className="container py-12">
      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          comfort
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          voordelen
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          gezondheid
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-4">
        De 7 Belangrijkste Voordelen van een Airconditioning
      </h1>

      <div className="text-muted-foreground mb-8">
        20 februari 2024
      </div>

      <VoordelenBlogContent />
    </div>
  )
}