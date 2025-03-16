import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { MaastrichtContent } from "@/components/kennisbank/maastricht/maastricht-content"

export const metadata: Metadata = {
  title: "Airco Installatie in Maastricht | StayCool Airco",
  description: "Alles wat u moet weten over airco installatie in Maastricht. Lokale expertise, vergunningen, en tips voor optimale installatie in uw woning of bedrijf.",
}

export default function AircoInstallatieMaastrichtPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Airco Installatie Maastricht", href: "/kennisbank/airco-installatie-maastricht" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          installatie
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          maastricht
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          lokaal
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Airco Installatie in Maastricht</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Alles wat u moet weten over airco installatie in Maastricht. Lokale expertise, vergunningen, en tips voor optimale installatie.
      </p>

      <MaastrichtContent />
    </div>
  )
}
