import { ContactForm } from "@/components/forms/contact-form"
import { Card } from "@/components/ui/card"

interface CTAWithFormProps {
  title: string
  description: string
}

export function CTAWithForm({ title, description }: CTAWithFormProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  )
}