import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t bg-muted/50 py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Klaar voor de Perfecte Klimaatoplossing?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Vraag nu een vrijblijvende offerte aan en ontdek hoe wij uw comfort kunnen verbeteren.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/offerte">
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 sm:w-auto">
                Offerte Aanvragen
              </Button>
            </Link>
            <Link href="tel:0462021430">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                046 202 1430
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}