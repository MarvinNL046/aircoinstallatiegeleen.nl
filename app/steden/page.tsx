import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { getCities } from "@/lib/cities"
import { AirVent, MapPin, ThermometerSun, Wrench, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: 'Airco Installatie Limburg | Alle Steden en Regio\'s',
  description: 'Professionele airco installatie in heel Limburg. Vind uw stad of regio en vraag direct een vrijblijvende offerte aan. ✓ Erkend ✓ Gecertificeerd ✓ Vakkundig.',
}

export default async function CitiesPage() {
  const cities = await getCities()

  // Group cities by region
  const citiesByRegion = cities.reduce((acc: { [key: string]: typeof cities }, city) => {
    if (!acc[city.region]) {
      acc[city.region] = []
    }
    acc[city.region].push(city)
    return acc
  }, {})

  const breadcrumbItems = [
    { label: "Steden", href: "/steden" }
  ]

  const services = [
    {
      icon: AirVent,
      title: "Airco Installatie",
      description: "Professionele installatie van airconditioning systemen voor woningen en bedrijven",
      features: ["Gratis inspectie", "5 jaar garantie", "Vakkundige montage"]
    },
    {
      icon: ThermometerSun,
      title: "Klimaatbeheersing",
      description: "Complete klimaatoplossingen voor optimaal comfort",
      features: ["Temperatuurregeling", "Luchtvochtigheid", "Energiezuinig"]
    },
    {
      icon: Wrench,
      title: "Onderhoud & Service",
      description: "Regelmatig onderhoud en snelle service bij storingen",
      features: ["24/7 service", "Onderhoudscontracten", "Alle merken"]
    }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Airco Installatie in Limburg</h1>
        <p className="text-xl text-muted-foreground">
          Uw betrouwbare partner voor airconditioning in heel Limburg. Vind een specialist bij u in de buurt.
        </p>
      </div>

      {/* Services Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card key={index} className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <ul className="mt-auto space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Cities by Region */}
      {Object.entries(citiesByRegion).map(([region, cities]) => (
        <div key={region} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Airco Service {region}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities
              .sort((a, b) => b.population - a.population)
              .map((city) => (
                <Link key={city.slug} href={`/steden/${city.slug}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Airco Installatie {city.city}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {city.population.toLocaleString()} inwoners
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Postcodes: {city.postal_codes}
                        </p>
                        <div className="mt-4 text-sm text-blue-600">
                          Bekijk airco services in {city.city} →
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      ))}

      {/* Service Benefits */}
      <Card className="p-8 bg-blue-50">
        <h2 className="text-2xl font-semibold mb-6">
          Waarom Kiezen voor Onze Airco Service?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
            <div>
              <h3 className="font-semibold mb-1">Lokale Expertise</h3>
              <p className="text-sm text-muted-foreground">Kennis van lokale regelgeving en omstandigheden</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
            <div>
              <h3 className="font-semibold mb-1">Snelle Service</h3>
              <p className="text-sm text-muted-foreground">Binnen 24 uur ter plaatse in heel Limburg</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
            <div>
              <h3 className="font-semibold mb-1">Erkend Installateur</h3>
              <p className="text-sm text-muted-foreground">Gecertificeerd en volledig verzekerd</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
