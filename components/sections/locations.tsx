import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const cities = [
  "Maastricht",
  "Venlo",
  "Roermond",
  "Heerlen",
  "Sittard",
  "Weert",
  "Kerkrade",
  "Brunssum"
]

export function LocationsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Werkgebied</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Wij zijn actief in heel Limburg en omstreken. Bekijk onze services per regio.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map((city) => (
            <Link key={city} href={`/steden/${city.toLowerCase()}`}>
              <Card className="transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="mr-2 h-5 w-5" />
                    {city}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Airco services in {city} en omgeving
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}