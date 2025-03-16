import Link from "next/link"
import { TableOfContents } from "./table-of-contents"
import { IdealValues } from "./ideal-values"
import { ComponentsGrid } from "./components-grid"
import { BenefitsList } from "./benefits-list"
import { SystemTypes } from "./system-types"
import { UsageTips } from "./usage-tips"

export function ArticleContent() {
  return (
    <div className="prose max-w-none">
      <TableOfContents />
      
      <h2 id="intro" className="text-2xl font-bold mb-4">Wat is klimaatbeheersing?</h2>
      <p className="mb-6">
        Klimaatbeheersing omvat alle systemen en technieken die zorgen voor een optimaal binnenklimaat. 
        Het gaat hierbij om temperatuur, luchtvochtigheid en luchtkwaliteit. Een goed klimaatbeheersingssysteem 
        zorgt voor comfort, gezondheid en energiebesparing.
      </p>

      <IdealValues />

      <h2 id="components" className="text-2xl font-bold mb-4">
        Componenten van klimaatbeheersing
      </h2>
      
      <ComponentsGrid />

      <h2 id="benefits" className="text-2xl font-bold mb-4">
        Voordelen van goede klimaatbeheersing
      </h2>
      
      <BenefitsList />

      <h2 id="types" className="text-2xl font-bold mb-4">
        Soorten klimaatbeheersingssystemen
      </h2>
      
      <SystemTypes />

      <h2 id="tips" className="text-2xl font-bold mb-4">
        Tips voor optimaal gebruik
      </h2>
      
      <UsageTips />

      <div className="bg-blue-100 p-4 rounded-lg">
        <p className="font-semibold">Advies nodig?</p>
        <p>
          Onze experts helpen u graag bij het kiezen van het juiste klimaatbeheersingssysteem voor uw situatie.{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Neem contact op
          </Link>{" "}
          voor persoonlijk advies.
        </p>
      </div>
    </div>
  )
}