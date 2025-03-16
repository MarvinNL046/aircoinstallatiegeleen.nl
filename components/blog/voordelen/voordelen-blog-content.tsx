import { VoordelenIntro } from "./sections/voordelen-intro"
import { VoordelenLijst } from "./sections/voordelen-lijst"
import { VoordelenDetails } from "./sections/voordelen-details"
import { VoordelenConclusie } from "./sections/voordelen-conclusie"
import { RelatedArticles } from "@/components/sections/related-articles"

export function VoordelenBlogContent() {
  const relatedArticles = [
    {
      title: "Energiebesparende Tips voor uw Airconditioning",
      description: "Praktische tips om uw airconditioning energiezuinig te gebruiken",
      slug: "energiebesparing"
    },
    {
      title: "Onderhoudstips voor Optimale Prestaties",
      description: "Essentiële tips voor het onderhoud van uw airconditioning",
      slug: "onderhoud-tips"
    },
    {
      title: "SCOP en SEER Waarden Uitgelegd",
      description: "Alles over de energie-efficiëntie van airconditioners",
      slug: "scop-seer-waarden"
    }
  ]

  return (
    <article className="prose max-w-none">
      <VoordelenIntro />
      <VoordelenLijst />
      <VoordelenDetails />
      <VoordelenConclusie />
      <RelatedArticles articles={relatedArticles} type="kennisbank" />
    </article>
  )
}