import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gift, Users, Clock, Shield, Phone } from "lucide-react"

const benefits = [
  {
    icon: Gift,
    title: "Gratis Offerte",
    description: "Vrijblijvend advies en offerte op locatie. Geen verborgen kosten."
  },
  {
    icon: Users,
    title: "Gecertificeerde Monteurs",
    description: "Erkende installateurs met jarenlange ervaring in airconditioning."
  },
  {
    icon: Clock,
    title: "Snelle Service",
    description: "Binnen 24 uur reactie. Flexibele planning die bij u past."
  },
  {
    icon: Shield,
    title: "5 Jaar Garantie",
    description: "Volledige garantie op installatie en apparatuur voor uw gemoedsrust."
  }
]

export function WhyUs() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Waarom Kiezen voor StayCool Airco?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Als airco specialist in Limburg bieden wij meer dan alleen installatie. 
            Ontdek waarom klanten ons een 4.7/5 geven.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/offerte">
            <Button 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg shadow-lg transition-all hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Vraag Direct Een Gratis Offerte Aan
            </Button>
          </Link>
          <p className="mt-4 text-gray-600">
            Of bel direct: <a href="tel:0462021430" className="font-semibold text-orange-600 hover:underline">046 202 1430</a>
          </p>
        </div>
      </div>
    </section>
  )
}