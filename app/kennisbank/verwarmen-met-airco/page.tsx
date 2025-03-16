import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Verwarmen met Airco | Efficiënt en Duurzaam | StayCool Airco",
  description: "Ontdek hoe u uw woning of bedrijf efficiënt kunt verwarmen met een airconditioning. Bespaar op energiekosten en verminder uw CO2-uitstoot.",
}

export default function VerwarmenMetAircoPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Verwarmen met Airco", href: "/kennisbank/verwarmen-met-airco" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          verwarming
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          energiebesparing
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          duurzaam
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Verwarmen met Airco</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Ontdek hoe u uw woning of bedrijf efficiënt kunt verwarmen met een airconditioning. Bespaar op energiekosten en verminder uw CO2-uitstoot.
      </p>

      <div className="prose max-w-none">
        <p className="lead">
          Veel mensen weten niet dat een moderne airconditioning niet alleen kan koelen, maar ook zeer 
          efficiënt kan verwarmen. In dit artikel leggen we uit hoe dit werkt en waarom het een 
          uitstekende optie is voor verwarming in Nederland.
        </p>

        <h2>Hoe werkt verwarmen met een airco?</h2>
        <p>
          Een moderne airconditioning is in feite een warmtepomp die zowel kan koelen als verwarmen. 
          In de verwarmingsmodus wordt het proces omgekeerd: in plaats van warmte uit uw woning te 
          onttrekken, haalt het systeem warmte uit de buitenlucht en brengt deze naar binnen.
        </p>
        <p>
          Dit klinkt misschien contra-intuïtief, vooral op koude dagen, maar zelfs bij lage 
          buitentemperaturen (tot ongeveer -15°C) bevat de lucht nog steeds warmte die kan worden 
          benut. Het systeem werkt als volgt:
        </p>
        <ol>
          <li>De buitenunit onttrekt warmte aan de buitenlucht</li>
          <li>Deze warmte wordt via het koudemiddel naar de binnenunit getransporteerd</li>
          <li>De binnenunit geeft de warmte af aan de lucht in uw woning</li>
          <li>Een ventilator verspreidt de warme lucht door de ruimte</li>
        </ol>

        <h2>Voordelen van verwarmen met airco</h2>
        <h3>1. Energiezuinig</h3>
        <p>
          Het grootste voordeel van verwarmen met een airco is de hoge efficiëntie. Een moderne 
          airco met warmtepompfunctie heeft een rendement (SCOP) van 4 of hoger. Dit betekent dat 
          voor elke kilowatt elektriciteit die het systeem verbruikt, het 4 of meer kilowatt aan 
          warmte produceert. Ter vergelijking: een traditionele elektrische verwarming heeft een 
          rendement van maximaal 1.
        </p>

        <h3>2. Kostenbesparend</h3>
        <p>
          Door het hoge rendement kunt u aanzienlijk besparen op uw energierekening. Afhankelijk 
          van uw huidige verwarmingssysteem kan de besparing oplopen tot 60% vergeleken met 
          elektrische verwarming en tot 30% vergeleken met gasverwarming.
        </p>

        <h3>3. Milieuvriendelijk</h3>
        <p>
          Verwarmen met een airco is veel duurzamer dan traditionele verwarmingsmethoden. Het 
          systeem stoot geen CO2 uit op locatie en door het hoge rendement is ook de indirecte 
          CO2-uitstoot (via elektriciteitsproductie) veel lager dan bij andere systemen.
        </p>

        <h3>4. Comfort</h3>
        <p>
          Een airco verwarmt snel en gelijkmatig, zonder droge lucht te produceren zoals bij 
          sommige verwarmingssystemen. Bovendien kunt u in de zomer hetzelfde systeem gebruiken 
          voor koeling, wat een airco tot een veelzijdige investering maakt.
        </p>

        <h3>5. Geen radiatoren nodig</h3>
        <p>
          Een airco heeft geen radiatoren of vloerverwarming nodig, wat ruimte bespaart en 
          flexibiliteit biedt bij het inrichten van uw woning.
        </p>

        <h2>Aandachtspunten bij verwarmen met airco</h2>
        <h3>Capaciteit</h3>
        <p>
          Voor optimale verwarming is het belangrijk dat de airco de juiste capaciteit heeft 
          voor de ruimte. Een onderdimensioneerd systeem zal moeite hebben om de gewenste 
          temperatuur te bereiken, vooral op zeer koude dagen.
        </p>

        <h3>Isolatie</h3>
        <p>
          Goede isolatie van uw woning is essentieel voor efficiënt verwarmen met een airco. 
          Investeren in betere isolatie kan de prestaties van uw systeem aanzienlijk verbeteren.
        </p>

        <h3>Plaatsing</h3>
        <p>
          De binnenunit moet strategisch worden geplaatst voor optimale warmteverdeling. 
          Idealiter wordt deze hoog aan de wand gemonteerd, aangezien warme lucht opstijgt.
        </p>

        <h2>Is verwarmen met airco geschikt voor uw situatie?</h2>
        <p>
          Verwarmen met een airco is bijzonder geschikt voor:
        </p>
        <ul>
          <li>Woningen zonder gasaansluiting</li>
          <li>Nieuwbouwwoningen met goede isolatie</li>
          <li>Huishoudens die willen verduurzamen</li>
          <li>Ruimtes die zowel koeling als verwarming nodig hebben</li>
          <li>Bijverwarming van specifieke ruimtes (zoals een uitbouw of zolder)</li>
        </ul>

        <div className="my-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Advies over verwarmen met airco?</h3>
          <p>
            Wilt u weten of verwarmen met een airco geschikt is voor uw woning of bedrijfspand? 
            Onze experts geven u graag persoonlijk advies over de mogelijkheden en kosten.
          </p>
          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Vraag Advies Aan
            </Link>
          </div>
        </div>

        <h2>Veelgestelde vragen over verwarmen met airco</h2>
        
        <h3>Kan een airco mijn hele huis verwarmen?</h3>
        <p>
          Dit hangt af van de grootte en indeling van uw woning. In goed geïsoleerde woningen 
          met een open indeling kan één krachtige airco vaak een groot deel van het huis verwarmen. 
          Voor grotere woningen of woningen met veel aparte kamers is een multi-split systeem met 
          meerdere binnenunits vaak een betere oplossing.
        </p>
        
        <h3>Werkt een airco ook bij vrieskou?</h3>
        <p>
          Ja, moderne airconditioners met warmtepompfunctie werken efficiënt tot ongeveer -15°C. 
          Bij lagere temperaturen neemt de efficiëntie af, maar het systeem blijft functioneren. 
          In het Nederlandse klimaat is dit zelden een probleem.
        </p>
        
        <h3>Hoeveel kan ik besparen door te verwarmen met airco?</h3>
        <p>
          De exacte besparing hangt af van uw huidige verwarmingssysteem, energieprijzen en 
          isolatie. Gemiddeld genomen kunt u rekenen op een besparing van 30-60% op uw 
          verwarmingskosten vergeleken met traditionele elektrische verwarming.
        </p>
        
        <h3>Kan ik subsidie krijgen voor een airco met warmtepompfunctie?</h3>
        <p>
          In sommige gevallen kunt u inderdaad subsidie krijgen voor een airco met warmtepompfunctie. 
          Dit valt onder de ISDE-regeling (Investeringssubsidie Duurzame Energie). Niet alle modellen 
          komen in aanmerking, dus vraag ons naar de mogelijkheden voor uw specifieke situatie.
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
