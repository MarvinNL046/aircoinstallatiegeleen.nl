import { OnderhoudsIntro } from "./sections/onderhoud-intro"
import { OnderhoudsChecklist } from "./sections/onderhoud-checklist"
import { OnderhoudsFrequentie } from "./sections/onderhoud-frequentie"
import { OnderhoudsProfessioneel } from "./sections/onderhoud-professioneel"
import { ContactAdvice } from "../shared/contact-advice"

export function OnderhoudsContent() {
  return (
    <article className="prose max-w-none">
      <OnderhoudsIntro />
      <OnderhoudsChecklist />
      <OnderhoudsFrequentie />
      <OnderhoudsProfessioneel />
      <ContactAdvice />
    </article>
  )
}