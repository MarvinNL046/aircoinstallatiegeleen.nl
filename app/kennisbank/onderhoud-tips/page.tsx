import { Metadata } from "next"
import { OnderhoudsContent } from "@/components/kennisbank/onderhoud/onderhoud-content"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export const metadata: Metadata = {
  title: "Onderhoudstips voor Optimale Prestaties | Airco Offerte Limburg",
  description: "Leer hoe u uw airconditioning in topconditie houdt met deze essentiële onderhoudstips.",
}

export default function OnderhoudsPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Onderhoudstips", href: "/kennisbank/onderhoud-tips" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          onderhoud
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          prestaties
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          levensduur
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Onderhoudstips voor Optimale Prestaties</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Essentiële tips voor het onderhoud van uw airconditioning
      </p>

      <OnderhoudsContent />
    </div>
  )
}