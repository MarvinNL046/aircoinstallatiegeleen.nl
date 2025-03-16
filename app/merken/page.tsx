import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import brandsData from "@/data/brands.json"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Airco Merken | Airco Offerte Limburg",
  description: "Ontdek ons uitgebreide assortiment aan hoogwaardige airconditioning merken. Van Daikin tot Mitsubishi, wij bieden alleen de beste kwaliteit.",
  keywords: [
    "airco merken",
    "Daikin",
    "Mitsubishi Electric",
    "Samsung",
    "LG",
    "Tosot",
    "Gree",
    "airconditioning",
    "klimaatbeheersing",
    "Limburg"
  ],
}

export default function BrandsPage() {
  const breadcrumbItems = [
    { label: "Merken", href: "/merken" }
  ]

  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <div className="container py-12">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="mb-8 text-4xl font-bold">Airconditioning Merken</h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Wij werken uitsluitend met de beste merken voor optimale kwaliteit en betrouwbaarheid
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brandsData.brands.map((brand) => (
            <Link key={brand.slug} href={`/merken/${brand.slug}`}>
              <Card className="h-full p-6 transition-shadow hover:shadow-lg">
                <h2 className="mb-4 text-2xl font-semibold">{brand.name}</h2>
                <p className="mb-4 text-muted-foreground">{brand.description}</p>
                <ul className="mb-4 space-y-2">
                  {brand.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center text-sm text-blue-600">
                  Meer informatie
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <CTAWithForm 
        title="Advies over het Beste Merk voor uw Situatie?" 
        description="Onze experts helpen u graag bij het kiezen van de juiste airconditioning"
      />
    </>
  )
}