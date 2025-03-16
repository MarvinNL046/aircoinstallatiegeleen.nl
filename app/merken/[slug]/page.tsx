import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { ContactForm } from "@/components/contact-form"
import brandsData from "@/data/brands.json"
import { BrandInfo } from "@/components/merken/brand-info"
import { BrandFeatures } from "@/components/merken/brand-features"
import { BrandModels } from "@/components/merken/brand-models"
import { BrandTechnology } from "@/components/merken/brand-technology"

interface BrandPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return brandsData.brands.map((brand) => ({
    slug: brand.slug,
  }))
}

export function generateMetadata({ params }: BrandPageProps): Metadata {
  const brand = brandsData.brands.find((b) => b.slug === params.slug)

  if (!brand) {
    return {
      title: "Merk niet gevonden | Airco Offerte Limburg",
      description: "Het opgevraagde merk kon niet worden gevonden.",
    }
  }

  return {
    title: `${brand.name} Airconditioners | Airco Offerte Limburg`,
    description: brand.description,
  }
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = brandsData.brands.find((b) => b.slug === params.slug)

  if (!brand) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Merken", href: "/merken" },
    { label: brand.name, href: `/merken/${brand.slug}` }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="mb-8 text-4xl font-bold">{brand.name} Airconditioners</h1>
      
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <BrandInfo brand={brand} />
          <BrandFeatures brand={brand} />
          <BrandModels brand={brand} />
          <BrandTechnology brand={brand} />
        </div>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Vraag een Offerte Aan voor {brand.name}
            </h2>
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  )
}