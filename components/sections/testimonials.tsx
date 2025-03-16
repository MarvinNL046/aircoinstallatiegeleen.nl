import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Peter van der Berg",
    location: "Maastricht",
    text: "Uitstekende service! De installatie was snel en netjes uitgevoerd. Zeer tevreden met het resultaat.",
    rating: 5
  },
  {
    name: "Lisa Janssen",
    location: "Venlo",
    text: "Professioneel advies en goede nazorg. Een aanrader voor iedereen die een airco zoekt.",
    rating: 5
  },
  {
    name: "Mark Hendrix",
    location: "Roermond",
    text: "Snelle reactie op mijn aanvraag en zeer concurrerende prijzen. Top service!",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Wat Klanten Zeggen</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ontdek waarom klanten voor onze airconditioning services kiezen.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}