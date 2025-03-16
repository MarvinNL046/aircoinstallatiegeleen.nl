import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Airco Luchtfilter Onderhoud | Stap-voor-stap Gids | StayCool Airco",
  description: "Leer hoe u de luchtfilters van uw airconditioning correct kunt reinigen en onderhouden. Verbeter de luchtkwaliteit en verleng de levensduur van uw airco.",
}

export default function AircoLuchtfilterOnderhoudPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Airco Luchtfilter Onderhoud", href: "/kennisbank/airco-luchtfilter-onderhoud" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          onderhoud
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          luchtfilter
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          luchtkwaliteit
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Airco Luchtfilter Onderhoud</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Leer hoe u de luchtfilters van uw airconditioning correct kunt reinigen en onderhouden. Verbeter de luchtkwaliteit en verleng de levensduur van uw airco.
      </p>

      <div className="prose max-w-none">
        <p className="lead">
          Het regelmatig reinigen van de luchtfilters is de belangrijkste onderhoudstaak die u zelf 
          kunt uitvoeren aan uw airconditioning. Schone filters zorgen voor betere luchtkwaliteit, 
          lagere energiekosten en een langere levensduur van uw systeem.
        </p>

        <h2>Waarom is luchtfilter onderhoud belangrijk?</h2>
        <p>
          De luchtfilters in uw airconditioning hebben een cruciale functie: ze vangen stof, pollen, 
          huisdierenhaar en andere deeltjes op uit de lucht die door het systeem stroomt. Na verloop 
          van tijd raken deze filters verstopt, wat verschillende nadelige gevolgen heeft:
        </p>
        <ul>
          <li><strong>Verminderde luchtkwaliteit:</strong> Vuile filters kunnen niet effectief vervuilende stoffen uit de lucht filteren</li>
          <li><strong>Hoger energieverbruik:</strong> Een verstopt filter belemmert de luchtstroom, waardoor het systeem harder moet werken</li>
          <li><strong>Verminderde koeling of verwarming:</strong> De beperkte luchtstroom vermindert de efficiëntie van het systeem</li>
          <li><strong>Kortere levensduur:</strong> Een overbelast systeem slijt sneller en kan eerder defect raken</li>
          <li><strong>IJsvorming:</strong> Slechte luchtstroom kan leiden tot ijsvorming op de verdamper</li>
        </ul>

        <h2>Hoe vaak moet u de luchtfilters reinigen?</h2>
        <p>
          De frequentie waarmee u de filters moet reinigen, hangt af van verschillende factoren:
        </p>
        <ul>
          <li><strong>Gebruiksintensiteit:</strong> Bij dagelijks gebruik vaker reinigen dan bij incidenteel gebruik</li>
          <li><strong>Omgevingsfactoren:</strong> In stoffige omgevingen of bij huisdieren vaker reinigen</li>
          <li><strong>Seizoen:</strong> Tijdens piekgebruik (zomer/winter) vaker reinigen</li>
        </ul>
        <p>
          Als algemene richtlijn adviseren wij:
        </p>
        <ul>
          <li>Bij normaal gebruik in een gemiddeld huishouden: elke 2-4 weken</li>
          <li>Bij huishoudens met huisdieren of in stoffige omgevingen: elke 1-2 weken</li>
          <li>Bij licht of incidenteel gebruik: elke 4-6 weken</li>
        </ul>

        <h2>Stap-voor-stap handleiding voor het reinigen van luchtfilters</h2>
        <p>
          Het reinigen van de luchtfilters is een eenvoudige taak die u zelf kunt uitvoeren. 
          Volg deze stappen voor een grondige reiniging:
        </p>

        <h3>Voorbereiding</h3>
        <ol>
          <li>Schakel de airconditioning uit via de afstandsbediening</li>
          <li>Schakel de stroom uit via de stroomonderbreker of stekker voor extra veiligheid</li>
          <li>Zorg voor voldoende ruimte om te werken</li>
        </ol>

        <h3>De filters verwijderen</h3>
        <ol>
          <li>Open het voorpaneel van de binnenunit door het voorzichtig omhoog te tillen</li>
          <li>Zoek de luchtfilters (meestal 1-2 rechthoekige filters achter het voorpaneel)</li>
          <li>Verwijder de filters door ze voorzichtig naar beneden te trekken of volgens de instructies in uw handleiding</li>
        </ol>

        <h3>De filters reinigen</h3>
        <ol>
          <li>Verwijder licht stof met een stofzuiger met zachte borstel</li>
          <li>Voor grondigere reiniging, was de filters in lauw water met een mild reinigingsmiddel</li>
          <li>Spoel de filters grondig af met schoon water</li>
          <li>Schud overtollig water voorzichtig af</li>
        </ol>

        <h3>Drogen en terugplaatsen</h3>
        <ol>
          <li>Laat de filters volledig aan de lucht drogen, uit direct zonlicht</li>
          <li>Plaats de filters NOOIT terug als ze nog vochtig zijn</li>
          <li>Plaats de filters terug in de juiste positie</li>
          <li>Sluit het voorpaneel</li>
          <li>Schakel de stroom weer in</li>
        </ol>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-6">
          <h4 className="text-yellow-800 font-semibold">Belangrijk</h4>
          <p className="text-yellow-800 mb-0">
            Gebruik nooit water warmer dan 40°C voor het reinigen van de filters. 
            Gebruik geen agressieve reinigingsmiddelen, bleekmiddel of schuurmiddelen. 
            Gebruik geen föhn of andere warmtebron om de filters te drogen.
          </p>
        </div>

        <h2>Verschillende soorten luchtfilters</h2>
        <p>
          Moderne airconditioners kunnen verschillende typen filters hebben, elk met specifieke eigenschappen:
        </p>

        <h3>Standaard stoffilters</h3>
        <p>
          Deze basisfilters vangen grotere stofdeeltjes op. Ze zijn meestal wasbaar en herbruikbaar, 
          en moeten regelmatig worden gereinigd zoals hierboven beschreven.
        </p>

        <h3>HEPA-filters</h3>
        <p>
          High-Efficiency Particulate Air (HEPA) filters kunnen veel kleinere deeltjes opvangen, 
          waaronder pollen, schimmelsporen en sommige bacteriën. Deze filters zijn meestal niet 
          wasbaar en moeten periodiek worden vervangen volgens de instructies van de fabrikant.
        </p>

        <h3>Elektrostatische filters</h3>
        <p>
          Deze filters gebruiken een elektrische lading om deeltjes aan te trekken en vast te houden. 
          Ze zijn zeer effectief voor kleine deeltjes en kunnen meestal worden gewassen en hergebruikt.
        </p>

        <h3>Koolstoffilters</h3>
        <p>
          Filters met actieve kool kunnen geuren en bepaalde gassen absorberen. Deze filters kunnen 
          meestal niet worden gewassen en moeten worden vervangen wanneer ze verzadigd zijn.
        </p>

        <h2>Wanneer moet u filters vervangen in plaats van reinigen?</h2>
        <p>
          Zelfs wasbare filters hebben een beperkte levensduur. Overweeg vervanging in de volgende gevallen:
        </p>
        <ul>
          <li>De filters zijn fysiek beschadigd (scheuren, gaten)</li>
          <li>De filters blijven vuil of verkleurd na reiniging</li>
          <li>De filters zijn vervormd en passen niet meer goed</li>
          <li>U merkt een verminderde luchtkwaliteit of prestaties na reiniging</li>
          <li>De filters zijn ouder dan 1-2 jaar bij regelmatig gebruik</li>
        </ul>

        <div className="my-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Professioneel onderhoud</h3>
          <p>
            Naast het regelmatig reinigen van de filters, raden wij aan om jaarlijks een professionele 
            onderhoudsbeurt te laten uitvoeren. Onze technici reinigen dan niet alleen de filters, maar 
            ook de verdamper, condensor en andere onderdelen die niet toegankelijk zijn voor gebruikers.
          </p>
          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Plan Onderhoud
            </Link>
          </div>
        </div>

        <h2>Veelgestelde vragen over luchtfilter onderhoud</h2>
        
        <h3>Kan ik mijn airco gebruiken zonder filters?</h3>
        <p>
          Absoluut niet. Het gebruik van een airconditioning zonder filters kan ernstige schade 
          veroorzaken aan de verdamper en andere interne componenten. Bovendien zal stof en vuil 
          zich ophopen in het systeem, wat de luchtkwaliteit verslechtert en de efficiëntie vermindert.
        </p>
        
        <h3>Kan ik de filters reinigen met desinfectiemiddel?</h3>
        <p>
          Dit wordt niet aanbevolen tenzij specifiek vermeld in de handleiding van uw apparaat. 
          De meeste desinfectiemiddelen kunnen het filtermateriaal beschadigen of residuen achterlaten 
          die in de lucht kunnen komen. Een mild afwasmiddel is meestal voldoende.
        </p>
        
        <h3>Hoe weet ik of mijn filters aan vervanging toe zijn?</h3>
        <p>
          Tekenen dat uw filters aan vervanging toe zijn: ze blijven vuil na reiniging, ze zijn 
          fysiek beschadigd, ze hebben hun vorm verloren, of u merkt een verminderde luchtkwaliteit 
          of prestaties van uw airconditioning.
        </p>
        
        <h3>Waar kan ik vervangende filters kopen?</h3>
        <p>
          Vervangende filters zijn verkrijgbaar bij de fabrikant, geautoriseerde dealers, of bij 
          StayCool Airco. Zorg ervoor dat u het juiste model voor uw specifieke airconditioning bestelt.
        </p>
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Gerelateerde artikelen</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Link href="/kennisbank/onderhoud-tips">
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">Onderhoudstips voor Optimale Prestaties</h3>
              <p className="text-muted-foreground">Essentiële tips voor het onderhoud van uw airconditioning</p>
            </Card>
          </Link>
          <Link href="/kennisbank/veelvoorkomende-problemen">
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">Veelvoorkomende Airco Problemen</h3>
              <p className="text-muted-foreground">Herken en los veelvoorkomende problemen met uw airconditioning op</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
