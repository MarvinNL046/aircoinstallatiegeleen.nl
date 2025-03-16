import { Metadata } from "next"
import { KlimaatContent } from "@/components/kennisbank/klimaat/klimaat-content"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export const metadata: Metadata = {
  title: "Alles over Klimaatbeheersing | Airco Offerte Limburg",
  description: "Een complete gids over moderne klimaatbeheersing voor uw woning of bedrijf",
}

export default function KlimaatbeheersingPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Klimaatbeheersing", href: "/kennisbank/klimaatbeheersing" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          klimaat
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          comfort
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          technologie
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Alles over Klimaatbeheersing</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Een complete gids over moderne klimaatbeheersing voor uw woning of bedrijf
      </p>

      <KlimaatContent />
    </div>
  )
}