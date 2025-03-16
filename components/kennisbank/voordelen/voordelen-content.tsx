import { VoordelenIntro } from "./sections/voordelen-intro"
import { VoordelenLijst } from "./sections/voordelen-lijst"
import { VoordelenDetails } from "./sections/voordelen-details"
import { VoordelenKosten } from "./sections/voordelen-kosten"
import { ContactAdvice } from "../shared/contact-advice"

export function VoordelenContent() {
  return (
    <article className="prose max-w-none">
      <VoordelenIntro />
      <VoordelenLijst />
      <VoordelenDetails />
      <VoordelenKosten />
      <ContactAdvice />
    </article>
  )
}