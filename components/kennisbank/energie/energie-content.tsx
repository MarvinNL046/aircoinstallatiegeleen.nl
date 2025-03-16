import { EnergieIntro } from "./sections/energie-intro"
import { EnergieTips } from "./sections/energie-tips"
import { EnergieInstellingen } from "./sections/energie-instellingen"
import { EnergieOnderhoud } from "./sections/energie-onderhoud"
import { ContactAdvice } from "../shared/contact-advice"

export function EnergieContent() {
  return (
    <article className="prose max-w-none">
      <EnergieIntro />
      <EnergieTips />
      <EnergieInstellingen />
      <EnergieOnderhoud />
      <ContactAdvice />
    </article>
  )
}