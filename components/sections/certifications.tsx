import { Card } from "@/components/ui/card"
import { Shield, Award, CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "F-gassen Gecertificeerd",
    description: "Officieel gecertificeerd voor het werken met koudemiddelen",
    icon: Shield
  },
  {
    title: "STEK Erkend",
    description: "Erkend door Stichting Emissiepreventie Koudetechniek",
    icon: Award
  },
  {
    title: "ISO 9001",
    description: "Gecertificeerd voor kwaliteitsmanagement",
    icon: CheckCircle
  }
]

export function CertificationsSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Onze Certificeringen</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Wij zijn trots op onze certificeringen en erkenningen die onze expertise en kwaliteit waarborgen
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => {
            const Icon = cert.icon
            return (
              <Card key={cert.title} className="p-6 text-center">
                <Icon className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{cert.title}</h3>
                <p className="mt-2 text-muted-foreground">{cert.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}