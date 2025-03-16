import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, ThermometerSun } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

interface CityContentProps {
  city: {
    title: string
    description: string
    region: string
    population: number
    postal_codes: string
  }
}

export function CityContent({ city }: CityContentProps) {
  return (
    <div className="container py-12">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">{city.region}</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Airco Installatie {city.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {city.description}
          </p>

          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Onze Services in {city.title}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <ThermometerSun className="h-5 w-5 text-blue-600" />
                <span>Airco installatie vanaf €1299,-</span>
              </li>
              <li className="flex items-center gap-3">
                <ThermometerSun className="h-5 w-5 text-blue-600" />
                <span>Airco onderhoud vanaf €9,- p.m.</span>
              </li>
              <li className="flex items-center gap-3">
                <ThermometerSun className="h-5 w-5 text-blue-600" />
                <span>Airco reparatie vanaf €129,-</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Over {city.title}
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="font-medium">Inwoners:</span>
                <span>{city.population.toLocaleString()}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Postcodes:</span>
                <span>{city.postal_codes}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Regio:</span>
                <span>{city.region}</span>
              </li>
            </ul>
          </Card>
        </div>

        <div>
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">
              Vraag een Offerte Aan
            </h2>
            <ContactForm cityName={city.title} />
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Direct Contact
            </h2>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                asChild
              >
                <Link href="tel:0462021430">
                  <Phone className="h-4 w-4" />
                  <span>Telefoon: 046 202 1430</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                asChild
              >
                <Link href="https://wa.me/31636481054">
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp: 06 3648 1054</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                asChild
              >
                <Link href="mailto:info@staycoolairco.nl">
                  <Mail className="h-4 w-4" />
                  <span>info@staycoolairco.nl</span>
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}