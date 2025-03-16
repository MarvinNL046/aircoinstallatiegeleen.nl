import { TableOfContents } from "../components/table-of-contents"
import { IdealValues } from "../components/ideal-values"

export function KlimaatIntro() {
  return (
    <>
      <TableOfContents />
      
      <h2 id="intro" className="text-2xl font-bold mb-4">
        Wat is klimaatbeheersing?
      </h2>
      <p className="mb-6">
        Klimaatbeheersing omvat alle systemen en technieken die zorgen voor een optimaal binnenklimaat. 
        Het gaat hierbij om temperatuur, luchtvochtigheid en luchtkwaliteit. Een goed klimaatbeheersingssysteem 
        zorgt voor comfort, gezondheid en energiebesparing.
      </p>

      <IdealValues />
    </>
  )
}