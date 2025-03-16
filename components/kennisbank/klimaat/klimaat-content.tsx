import { KlimaatIntro } from "./sections/klimaat-intro"
import { KlimaatComponents } from "./sections/klimaat-components"
import { KlimaatBenefits } from "./sections/klimaat-benefits"
import { KlimaatTypes } from "./sections/klimaat-types"
import { KlimaatTips } from "./sections/klimaat-tips"
import { ContactAdvice } from "./sections/contact-advice"

export function KlimaatContent() {
  return (
    <article className="prose max-w-none">
      <KlimaatIntro />
      <KlimaatComponents />
      <KlimaatBenefits />
      <KlimaatTypes />
      <KlimaatTips />
      <ContactAdvice />
    </article>
  )
}