import Link from "next/link"
import { Wrench, Shield, Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Settings,
    title: "Airco Installatie Limburg",
    description: "Professionele installatie van alle merken airconditioning. Erkend installateur met 5 jaar garantie.",
    features: [
      "Gratis advies op locatie",
      "Alle topmerken",
      "5 jaar garantie",
      "Binnen 24u reactie"
    ],
    link: "/diensten/installatie"
  },
  {
    icon: Wrench,
    title: "Airco Onderhoud Limburg",
    description: "Regelmatig onderhoud voor optimale prestaties en langere levensduur. Vanaf €11 per maand.",
    features: [
      "Onderhoudscontract vanaf €11/mnd",
      "Jaarlijkse inspectie",
      "Filtervervanging",
      "Prestatiegarantie"
    ],
    link: "/diensten/onderhoud"
  },
  {
    icon: Shield,
    title: "Airco Service & Reparatie",
    description: "Snelle service bij storingen. Onze monteurs staan voor u klaar in heel Limburg.",
    features: [
      "Snelle responstijd",
      "Ervaren monteurs",
      "Transparante prijzen",
      "Garantie op reparaties"
    ],
    link: "/diensten/reparatie"
  }
]

export function ServicesOptimized() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Airco Service Limburg - Onze Diensten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Van installatie tot onderhoud: StayCool Airco is uw betrouwbare partner voor 
            klimaatbeheersing in heel Limburg.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href={service.link}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold group">
                  Meer informatie
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* YouTube Video */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Bekijk Hoe Wij Te Werk Gaan
          </h3>
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/9m-jkGgfLog" 
              title="StayCool Airco - Professionele Installatie" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}