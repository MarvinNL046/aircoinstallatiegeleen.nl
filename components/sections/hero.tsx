import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AirVent, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl">
            Professionele Airconditioning Services in Limburg
          </h1>
          <p className="mb-12 text-lg text-blue-100 sm:text-xl">
            Ervaar optimaal comfort met onze airconditioning oplossingen. 
            Van installatie tot onderhoud, wij zijn uw betrouwbare partner in heel Limburg.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/offerte">
              <Button size="lg" className="w-full bg-green-600 text-white hover:bg-green-700 sm:w-auto">
                <AirVent className="mr-2 h-5 w-5" />
                Gratis Offerte Aanvragen
              </Button>
            </Link>
            <Link href="tel:0462021430">
              <Button 
                size="lg" 
                className="w-full bg-white text-blue-600 hover:bg-blue-50 sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Bel Direct: 046 202 1430
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-sm text-blue-100">
            Of stuur een WhatsApp: 06 3648 1054
          </div>
        </div>
      </div>
    </section>
  )
}