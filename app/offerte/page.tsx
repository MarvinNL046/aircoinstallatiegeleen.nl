import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { PriceCalculator } from "@/components/calculators/price-calculator"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Offerte Aanvragen | Airco Offerte Limburg",
  description: "Vraag een vrijblijvende offerte aan voor uw airconditioning project. Ontvang binnen 24 uur een offerte op maat.",
}

export default function OffertePage() {
  const breadcrumbItems = [
    { label: "Offerte", href: "/offerte" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Vraag een Vrijblijvende Offerte Aan
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ontvang binnen 24 uur een offerte op maat voor uw airconditioning project
          </p>
          
          <PriceCalculator />
        </div>

        <div>
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold mb-6">
              Direct Contact
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}