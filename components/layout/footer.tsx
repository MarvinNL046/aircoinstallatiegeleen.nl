import Link from "next/link"
import { AirVent, Mail, MapPin, Phone } from "lucide-react"

const cities = [
  "Maastricht",
  "Venlo",
  "Roermond",
  "Heerlen",
  "Sittard",
  "Weert",
  "Kerkrade",
  "Brunssum",
]

export function Footer() {
  return (
    <footer className="border-t bg-blue-900 text-white">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <AirVent className="h-6 w-6" />
              <span className="font-bold">StayCool Airco Geleen</span>
            </div>
            <p className="mt-4 text-sm text-blue-200">
              Professionele airconditioning installatie in Geleen en omgeving. Erkend en gecertificeerd.
            </p>
            <p className="mt-2 text-sm text-blue-200">
              <a href="https://staycoolairco.nl" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">
                Bezoek onze hoofdwebsite
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Telefoon: 046 202 1430</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>WhatsApp: 06 3648 1054</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@staycoolairco.nl" className="hover:underline">info@staycoolairco.nl</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Geleen en omgeving</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Navigatie</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/diensten" className="hover:text-blue-200">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/steden" className="hover:text-blue-200">
                  Steden
                </Link>
              </li>
              <li>
                <Link href="/merken" className="hover:text-blue-200">
                  Merken
                </Link>
              </li>
              <li>
                <Link href="/kennisbank" className="hover:text-blue-200">
                  Kennisbank
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-blue-200">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Steden</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {cities.map((city) => (
                <li key={city}>
                  <Link href={`/steden/${city.toLowerCase()}`} className="hover:text-blue-200">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-800 pt-8 text-center text-sm text-blue-200">
          <p>© {new Date().getFullYear()} StayCool Airco. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
