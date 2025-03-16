import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Koudemiddelen en Milieu-impact | StayCool Airco",
  description: "Informatie over verschillende koudemiddelen in airconditioners, hun eigenschappen, milieu-impact en de regelgeving rondom het gebruik ervan.",
}

export default function KoudemiddelenPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Koudemiddelen", href: "/kennisbank/koudemiddelen" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          milieu
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          techniek
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          duurzaamheid
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Koudemiddelen en Milieu-impact</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Informatie over verschillende koudemiddelen in airconditioners, hun eigenschappen, milieu-impact en de regelgeving rondom het gebruik ervan.
      </p>

      <div className="prose max-w-none">
        <p className="lead">
          Koudemiddelen zijn essentiële stoffen in airconditioners die warmte absorberen en afgeven 
          tijdens het koelproces. De keuze van het koudemiddel heeft grote invloed op de efficiëntie, 
          veiligheid en milieu-impact van uw airconditioning.
        </p>

        <h2>Wat zijn koudemiddelen?</h2>
        <p>
          Koudemiddelen zijn speciale vloeistoffen die gemakkelijk van vloeistof naar gas en terug 
          kunnen veranderen bij relatief lage temperaturen. Deze eigenschap maakt ze ideaal voor 
          gebruik in koelsystemen zoals airconditioners en koelkasten. Door druk- en temperatuurveranderingen 
          kunnen ze warmte opnemen en afgeven, waardoor ze warmte kunnen transporteren van binnen naar buiten.
        </p>

        <h2>De evolutie van koudemiddelen</h2>
        <p>
          De geschiedenis van koudemiddelen weerspiegelt onze groeiende kennis over milieu-impact:
        </p>

        <h3>Eerste generatie: Natuurlijke koudemiddelen (voor 1930)</h3>
        <p>
          De eerste koelsystemen gebruikten natuurlijke stoffen zoals ammoniak, zwaveldioxide en 
          kooldioxide. Deze waren effectief maar vaak giftig, brandbaar of vereisten hoge druk.
        </p>

        <h3>Tweede generatie: CFK's en HCFK's (1930-1990)</h3>
        <p>
          Chloorfluorkoolstoffen (CFK's) zoals R-12 en later hydrochloorfluorkoolstoffen (HCFK's) 
          zoals R-22 werden populair vanwege hun veiligheid, stabiliteit en efficiëntie. Helaas 
          bleek later dat deze stoffen de ozonlaag ernstig beschadigen.
        </p>

        <h3>Derde generatie: HFK's (1990-2010)</h3>
        <p>
          Na het Montreal-protocol werden hydrofluorkoolstoffen (HFK's) zoals R-134a en R-410A 
          geïntroduceerd. Deze tasten de ozonlaag niet aan, maar hebben wel een hoog aardopwarmingspotentieel (GWP).
        </p>

        <h3>Vierde generatie: HFO's en natuurlijke koudemiddelen (2010-heden)</h3>
        <p>
          De nieuwste generatie omvat hydrofluoro-olefinen (HFO's) zoals R-1234yf en een hernieuwde 
          interesse in natuurlijke koudemiddelen zoals propaan (R-290) en CO₂ (R-744). Deze hebben 
          een minimale milieu-impact.
        </p>

        <h2>Veelgebruikte koudemiddelen in moderne airconditioners</h2>

        <h3>R-32 (Difluormethaan)</h3>
        <p>
          R-32 is momenteel een van de meest gebruikte koudemiddelen in nieuwe residentiële airconditioners.
        </p>
        <ul>
          <li><strong>GWP:</strong> 675 (veel lager dan R-410A)</li>
          <li><strong>Voordelen:</strong> Hoge energie-efficiëntie, lagere milieu-impact, vereist minder koudemiddel</li>
          <li><strong>Nadelen:</strong> Licht ontvlambaar (A2L classificatie)</li>
          <li><strong>Toepassingen:</strong> Split-unit en multi-split airconditioners voor woningen</li>
        </ul>

        <h3>R-410A (Mengsel van HFK's)</h3>
        <p>
          R-410A was tot voor kort de standaard in residentiële en lichte commerciële airconditioners.
        </p>
        <ul>
          <li><strong>GWP:</strong> 2088</li>
          <li><strong>Voordelen:</strong> Niet-ontvlambaar, goede efficiëntie, betrouwbaar</li>
          <li><strong>Nadelen:</strong> Hoog aardopwarmingspotentieel</li>
          <li><strong>Toepassingen:</strong> Wordt uitgefaseerd maar nog aanwezig in veel bestaande systemen</li>
        </ul>

        <h3>R-290 (Propaan)</h3>
        <p>
          Een natuurlijk koudemiddel dat steeds vaker wordt gebruikt in kleinere systemen.
        </p>
        <ul>
          <li><strong>GWP:</strong> 3 (vrijwel verwaarloosbaar)</li>
          <li><strong>Voordelen:</strong> Zeer lage milieu-impact, hoge efficiëntie</li>
          <li><strong>Nadelen:</strong> Hoog ontvlambaar (A3 classificatie), vereist speciale veiligheidsmaatregelen</li>
          <li><strong>Toepassingen:</strong> Mobiele airco's, kleine split-units</li>
        </ul>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6">
          <h4 className="text-blue-800 font-semibold">Wat is GWP?</h4>
          <p className="text-blue-800 mb-0">
            GWP (Global Warming Potential) is een maat voor hoeveel warmte een broeikasgas in de atmosfeer kan vasthouden 
            in vergelijking met kooldioxide (CO₂). CO₂ heeft een GWP van 1. Hoe hoger het GWP, hoe schadelijker het gas 
            is voor het klimaat als het in de atmosfeer terechtkomt.
          </p>
        </div>

        <h2>Regelgeving en uitfasering</h2>
        <p>
          De Europese F-gassenverordening reguleert het gebruik van gefluoreerde broeikasgassen, 
          waaronder de meeste synthetische koudemiddelen. De belangrijkste punten:
        </p>
        <ul>
          <li>Geleidelijke vermindering van HFK's met 79% tegen 2030 (vergeleken met 2015)</li>
          <li>Verbod op koudemiddelen met een GWP hoger dan 750 in nieuwe split-airconditioners vanaf 2025</li>
          <li>Verplichte lekcontroles voor systemen met bepaalde hoeveelheden koudemiddel</li>
          <li>Certificeringseisen voor technici die met koudemiddelen werken</li>
        </ul>

        <h2>Wat betekent dit voor u als gebruiker?</h2>
        <p>
          Als eigenaar of potentiële koper van een airconditioning is het goed om rekening te houden met:
        </p>
        <ul>
          <li><strong>Bestaande systemen:</strong> Oudere systemen met R-22 mogen niet meer worden bijgevuld met dit koudemiddel. Bij lekkage moet worden overgeschakeld op alternatieven of het systeem moet worden vervangen.</li>
          <li><strong>Nieuwe aankopen:</strong> Kies voor systemen met koudemiddelen met een lage GWP, zoals R-32 of natuurlijke koudemiddelen.</li>
          <li><strong>Onderhoud:</strong> Regelmatig onderhoud helpt lekkage van koudemiddel te voorkomen, wat zowel het milieu als uw portemonnee ten goede komt.</li>
          <li><strong>Einde levensduur:</strong> Zorg dat oude airconditioners professioneel worden afgevoerd, zodat het koudemiddel veilig kan worden teruggewonnen.</li>
        </ul>

        <h2>StayCool Airco's aanpak</h2>
        <p>
          Bij StayCool Airco zijn we toegewijd aan duurzaamheid en milieubewustzijn:
        </p>
        <ul>
          <li>We installeren bij voorkeur systemen met R-32 of andere milieuvriendelijke koudemiddelen</li>
          <li>Onze technici zijn volledig gecertificeerd voor het werken met alle koudemiddelen</li>
          <li>We voeren zorgvuldige lekcontroles uit tijdens onderhoudsbeurten</li>
          <li>We zorgen voor correcte terugwinning en verwerking van koudemiddelen bij vervanging of ontmanteling</li>
        </ul>

        <div className="my-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Advies over duurzame airconditioning?</h3>
          <p>
            Wilt u meer weten over milieuvriendelijke airconditioners of heeft u vragen over het 
            koudemiddel in uw huidige systeem? Onze experts geven u graag persoonlijk advies.
          </p>
          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Neem Contact Op
            </Link>
          </div>
        </div>

        <h2>Veelgestelde vragen over koudemiddelen</h2>
        
        <h3>Is het koudemiddel in mijn airco gevaarlijk voor mijn gezondheid?</h3>
        <p>
          Moderne koudemiddelen zijn over het algemeen veilig bij normaal gebruik. Ze circuleren in een 
          gesloten systeem en komen niet in contact met de lucht in uw woning. Bij een groot lek is het 
          wel raadzaam de ruimte te ventileren en het systeem uit te schakelen.
        </p>
        
        <h3>Hoe weet ik welk koudemiddel in mijn airco zit?</h3>
        <p>
          Deze informatie staat meestal op het typeplaatje van de buitenunit. Als u het niet kunt vinden, 
          kan een technicus dit voor u controleren of kunt u contact opnemen met de fabrikant met het model- en serienummer.
        </p>
        
        <h3>Moet ik mijn oude airco met R-410A vervangen?</h3>
        <p>
          Niet noodzakelijk. Hoewel R-410A een hoger GWP heeft dan nieuwere alternatieven, mag het nog 
          steeds worden gebruikt in bestaande systemen. Als uw systeem goed functioneert, is het uit 
          milieuoogpunt vaak beter om het te blijven gebruiken tot het einde van zijn levensduur, in 
          plaats van het voortijdig te vervangen.
        </p>
        
        <h3>Wat gebeurt er met het koudemiddel als mijn airco wordt afgevoerd?</h3>
        <p>
          Bij professionele verwijdering wordt het koudemiddel teruggewonnen met speciale apparatuur. 
          Het kan dan worden gerecycled, geregenereerd of vernietigd, afhankelijk van het type en de kwaliteit. 
          Dit voorkomt dat het in de atmosfeer terechtkomt.
        </p>
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Gerelateerde artikelen</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Link href="/kennisbank/hoe-werkt-airco">
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">Hoe Werkt een Airconditioning?</h3>
              <p className="text-muted-foreground">Een duidelijke uitleg over de werking van moderne airconditioningsystemen</p>
            </Card>
          </Link>
          <Link href="/kennisbank/energiebesparing">
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">Energiebesparing met Airconditioning</h3>
              <p className="text-muted-foreground">Tips om uw energieverbruik te minimaliseren en kosten te besparen</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
