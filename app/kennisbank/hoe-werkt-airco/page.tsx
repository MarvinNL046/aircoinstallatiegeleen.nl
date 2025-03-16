import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { HoeWerktAircoContent } from "@/components/kennisbank/hoe-werkt-airco/hoe-werkt-airco-content"

export const metadata: Metadata = {
  title: "Hoe Werkt een Airconditioning? | StayCool Airco",
  description: "Een duidelijke uitleg over de werking van moderne airconditioningsystemen. Leer over koelmiddelen, compressoren en energiezuinige technologieën.",
}

export default function HoeWerktAircoPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Hoe Werkt Airco", href: "/kennisbank/hoe-werkt-airco" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          techniek
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          uitleg
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          werking
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Hoe Werkt een Airconditioning?</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Een duidelijke uitleg over de werking van moderne airconditioningsystemen. Leer over koelmiddelen, compressoren en energiezuinige technologieën.
      </p>

      <HoeWerktAircoContent />
    </div>
  )
}
