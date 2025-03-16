import { TableOfContents } from "../components/table-of-contents"
import { SavingsOverview } from "../components/savings-overview"

export function EnergieIntro() {
  return (
    <>
      <TableOfContents />
      
      <h2 id="intro" className="text-2xl font-bold mb-4">
        Bespaar op uw Energiekosten
      </h2>
      <p className="mb-6">
        Met de juiste instellingen en gebruiksgewoonten kunt u significant besparen op uw energiekosten. 
        Een moderne airconditioning kan zeer energiezuinig zijn, maar alleen als deze op de juiste manier 
        wordt gebruikt.
      </p>

      <SavingsOverview />
    </>
  )
}