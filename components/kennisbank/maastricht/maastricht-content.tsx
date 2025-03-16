import { MaastrichtIntro } from "./sections/maastricht-intro"
import { Vergunningen } from "./sections/vergunningen"
import { Uitdagingen } from "./sections/uitdagingen"
import { Modellen } from "./sections/modellen"
import { Kosten } from "./sections/kosten"
import { Onderhoud } from "./sections/onderhoud"
import { WaaromStaycool } from "./sections/waarom-staycool"
import { ContactAdvice } from "./sections/contact-advice"
import { FAQ } from "./sections/faq"
import { RelatedArticles } from "./sections/related-articles"

export function MaastrichtContent() {
  return (
    <article className="prose max-w-none">
      <MaastrichtIntro />
      <Vergunningen />
      <Uitdagingen />
      <Modellen />
      <Kosten />
      <Onderhoud />
      <WaaromStaycool />
      <ContactAdvice />
      <FAQ />
      <RelatedArticles />
    </article>
  )
}
