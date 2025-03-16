import { Intro } from "./sections/intro"
import { Werking } from "./sections/werking"
import { Componenten } from "./sections/componenten"
import { Soorten } from "./sections/soorten"
import { Installatie } from "./sections/installatie"
import { Onderhoud } from "./sections/onderhoud"
import { FAQ } from "./sections/faq"
import { ContactAdvice } from "./sections/contact-advice"
import { RelatedArticles } from "./sections/related-articles"

export function HoeWerktAircoContent() {
  return (
    <article className="prose max-w-none">
      <Intro />
      <Werking />
      <Componenten />
      <Soorten />
      <Installatie />
      <Onderhoud />
      <ContactAdvice />
      <FAQ />
      <RelatedArticles />
    </article>
  )
}
