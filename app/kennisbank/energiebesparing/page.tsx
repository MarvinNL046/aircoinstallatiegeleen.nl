import { Metadata } from "next"
import { EnergieContent } from "@/components/kennisbank/energie/energie-content"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export const metadata: Metadata = {
  title: "Energiebesparende Tips voor uw Airconditioning | Airco Offerte Limburg",
  description: "Ontdek hoe u uw energierekening kunt verlagen met deze praktische tips voor het gebruik van uw airconditioning.",
}

export default function EnergiebesparingPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Energiebesparende Tips", href: "/kennisbank/energiebesparing" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          energie
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          besparing
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          kosten
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Energiebesparende Tips voor uw Airconditioning</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Praktische tips om uw airconditioning energiezuinig te gebruiken
      </p>

      <EnergieContent />
    </div>
  )
}