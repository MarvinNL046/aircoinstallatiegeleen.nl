import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import diensten from "@/data/diensten.json"
import { generateServiceSchema } from "@/lib/structured-data"
import Script from "next/script"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dienst = diensten.find((d) => d.slug === params.slug)
  
  if (!dienst) {
    return {
      title: "Dienst niet gevonden",
      description: "De opgevraagde dienst bestaat niet."
    }
  }

  return {
    title: `${dienst.title} | Airco Offerte Limburg`,
    description: dienst.description,
    openGraph: {
      title: `${dienst.title} | Airco Offerte Limburg`,
      description: dienst.description,
      url: `https://aircooffertelimburg.nl/diensten/${params.slug}`,
      siteName: "Airco Offerte Limburg",
      locale: "nl_NL",
      type: "website",
    },
  }
}

export function generateStaticParams() {
  return diensten.map((dienst) => ({
    slug: dienst.slug,
  }))
}

export default function DienstPage({ params }: Props) {
  const dienst = diensten.find((d) => d.slug === params.slug)

  if (!dienst) {
    notFound()
  }

  const serviceSchema = generateServiceSchema({
    name: dienst.title,
    description: dienst.description,
    price: dienst.price.from.toString(),
  })

  const breadcrumbItems = [
    { label: "Diensten", href: "/diensten" },
    { label: dienst.title, href: `/diensten/${dienst.slug}` }
  ]

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-6">{dienst.title}</h1>
        
        <div className="prose max-w-none mb-16">
          <p className="text-lg mb-4">{dienst.description}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Voordelen</h2>
          <ul className="space-y-2">
            {dienst.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Kenmerken</h2>
          <ul className="space-y-2">
            {dienst.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <CTAWithForm 
          title="Interesse in deze dienst?"
          description="Vraag direct een vrijblijvende offerte aan voor deze dienst."
        />
      </div>
    </>
  )
}