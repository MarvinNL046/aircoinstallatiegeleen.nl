import { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import diensten from "@/data/diensten.json"
import citiesData from "@/data/steden.json"
import { generateServiceSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema"

interface Props {
  params: {
    slug: string
    city: string
  }
}

export function generateStaticParams() {
  const allCities = citiesData.limburg.reduce((acc: string[], municipality) => {
    return [...acc, ...municipality.places.map(place => place.toLowerCase())]
  }, [])

  const paths = []
  for (const dienst of diensten) {
    for (const city of allCities) {
      paths.push({
        slug: dienst.slug,
        city: city.toLowerCase(),
      })
    }
  }
  return paths
}

export function generateMetadata({ params }: Props): Metadata {
  const dienst = diensten.find((d) => d.slug === params.slug)
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  
  if (!dienst) return {}

  const title = `${dienst.title} in ${cityName} | Airco Offerte Limburg`
  const description = `Professionele ${dienst.title.toLowerCase()} in ${cityName}. ✓ Erkend ✓ Gecertificeerd ✓ Vakkundig. ${dienst.description}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://aircooffertelimburg.nl/diensten/${params.slug}/${params.city}`,
      siteName: "Airco Offerte Limburg",
      locale: "nl_NL",
      type: "website",
    },
    alternates: {
      canonical: `https://aircooffertelimburg.nl/diensten/${params.slug}/${params.city}`,
    },
    keywords: [
      `${dienst.title} ${cityName}`,
      `airco ${cityName}`,
      `airconditioning ${cityName}`,
      "airco installatie",
      "airco onderhoud",
      "klimaatbeheersing",
      params.city,
      "Limburg",
      "Airco installatie Limburg",
      "Airconditioning Limburg",
      "Airco onderhoud Limburg",
      "Klimaatbeheersing Limburg",
      "Airco specialist Limburg",
      "Airco montage Limburg",
      "Airco reparatie Limburg",
      "Warmtepomp installatie Limburg",
      "Duurzame koeling Limburg",
      "Energiezuinige airco Limburg",
      "Professionele airco service Limburg",
      "Aircop systemen Limburg",
      "Binnenklimaat verbetering Limburg",
      "Airco voor bedrijven Limburg",
      "Residentiële airconditioning Limburg",
      "Commerciële airconditioning Limburg",
      "Split-unit airco Limburg",
      "Multi-split airco systemen Limburg",
      "Mobiele airco Limburg",
      "LG airco Limburg",
      "Daikin airco Limburg",
      "Mitsubishi airco Limburg",
      "Airco met wifi-bediening Limburg",
      "Geluidsarme airco Limburg",
      "Airco met luchtzuivering Limburg",
      "Airco voor slaapkamer Limburg",
      "Airco voor kantoor Limburg",
      "Airco onderhoud contract Limburg",
      "24/7 airco service Limburg",
      "Airco met warmtepompfunctie Limburg"
    ]
  }
}

export default function DienstStadPage({ params }: Props) {
  const dienst = diensten.find((d) => d.slug === params.slug)
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)

  if (!dienst) {
    notFound()
  }

  // Convert price object to string format
  const priceString = `${dienst.price.from}${dienst.price.period ? ` ${dienst.price.period}` : ''}`

  const serviceSchema = generateServiceSchema({
    name: `${dienst.title} in ${cityName}`,
    description: dienst.description,
    price: priceString,
  })

  const localBusinessSchema = generateLocalBusinessSchema(cityName)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Diensten", item: "/diensten" },
    { name: dienst.title, item: `/diensten/${params.slug}` },
    { name: cityName, item: `/diensten/${params.slug}/${params.city}` },
  ])

  const breadcrumbItems = [
    { label: "Diensten", href: "/diensten" },
    { label: dienst.title, href: `/diensten/${params.slug}` },
    { label: cityName, href: `/diensten/${params.slug}/${params.city}` },
  ]

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-6">
          {dienst.title} in {cityName}
        </h1>
        
        <div className="prose max-w-none mb-16">
          <p className="text-lg mb-4">
            Op zoek naar professionele {dienst.title.toLowerCase()} in {cityName}? 
            Wij zijn uw betrouwbare partner voor alle airconditioning diensten in de regio {cityName}.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Onze {dienst.title} Diensten in {cityName}
          </h2>
          <p>{dienst.description}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Waarom Kiezen voor Onze {dienst.title} in {cityName}?
          </h2>
          <ul className="space-y-2">
            {dienst.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Kenmerken van Onze Service
          </h2>
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
          title={`${dienst.title} Nodig in ${cityName}?`}
          description="Vraag direct een vrijblijvende offerte aan voor deze dienst."
        />
      </div>
    </>
  )
}