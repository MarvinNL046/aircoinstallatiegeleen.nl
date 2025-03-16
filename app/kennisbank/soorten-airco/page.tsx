import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Soorten Airconditioning Systemen | Vergelijking & Advies | StayCool Airco",
  description: "Ontdek de verschillende soorten airconditioners: split-unit, multi-split, mobiele en kanaal airco's. Vergelijk voor- en nadelen en vind het beste systeem voor uw situatie.",
}

export default function SoortenAircoPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Soorten Airco", href: "/kennisbank/soorten-airco" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          vergelijking
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          systemen
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          keuze
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Soorten Airconditioning Systemen</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Ontdek de verschillende soorten airconditioners: split-unit, multi-split, mobiele en kanaal airco's. Vergelijk voor- en nadelen en vind het beste systeem voor uw situatie.
      </p>

      <div className="prose max-w-none">
        <p className="lead">
          Bij het kiezen van een airconditioning is het belangrijk om het juiste type systeem voor uw 
          specifieke situatie te selecteren. In dit artikel bespreken we de verschillende soorten 
          airconditioners, hun voor- en nadelen, en voor welke situaties ze het meest geschikt zijn.
        </p>

        <h2>1. Split-unit airconditioning</h2>
        <p>
          Een split-unit airco is het meest voorkomende type voor woningen en kleine kantoren. 
          Het bestaat uit een binnenunit en een buitenunit die met elkaar verbonden zijn via leidingen.
        </p>

        <h3>Hoe werkt het?</h3>
        <p>
          De binnenunit bevat de verdamper en een ventilator, terwijl de buitenunit de compressor 
          en condensor bevat. Koelmiddel circuleert tussen de twee units via leidingen, waarbij 
          warmte uit de binnenruimte wordt onttrokken en naar buiten wordt afgevoerd.
        </p>

        <h3>Voordelen</h3>
        <ul>
          <li><strong>Stille werking:</strong> De luidruchtige compressor bevindt zich buiten</li>
          <li><strong>Energiezuinig:</strong> Hoge efficiëntie, vooral modellen met inverter-technologie</li>
          <li><strong>Krachtig:</strong> Kan grote ruimtes effectief koelen of verwarmen</li>
          <li><strong>Esthetisch:</strong> Slanke binnenunits die weinig ruimte innemen</li>
          <li><strong>Duurzaam:</strong> Lange levensduur (10-15 jaar bij goed onderhoud)</li>
        </ul>

        <h3>Nadelen</h3>
        <ul>
          <li><strong>Vaste installatie:</strong> Vereist professionele installatie</li>
          <li><strong>Buitenunit nodig:</strong> Vereist een geschikte locatie voor de buitenunit</li>
          <li><strong>Hogere aanschafkosten:</strong> Duurder in aanschaf dan mobiele units</li>
          <li><strong>Vergunning:</strong> In sommige gevallen is een vergunning nodig voor de buitenunit</li>
        </ul>

        <h3>Ideaal voor</h3>
        <ul>
          <li>Individuele ruimtes zoals woonkamers, slaapkamers of kantoren</li>
          <li>Situaties waar permanente koeling of verwarming gewenst is</li>
          <li>Gebruikers die waarde hechten aan stille werking en efficiëntie</li>
        </ul>

        <h3>Kostenindicatie</h3>
        <p>
          €1.000 - €2.500 inclusief installatie, afhankelijk van capaciteit en merk
        </p>

        <h2>2. Multi-split airconditioning</h2>
        <p>
          Een multi-split systeem is vergelijkbaar met een split-unit, maar heeft één buitenunit 
          die verbonden is met meerdere binnenunits in verschillende ruimtes.
        </p>

        <h3>Hoe werkt het?</h3>
        <p>
          Het principe is hetzelfde als bij een split-unit, maar het systeem kan 2 tot 5 (of soms meer) 
          binnenunits bedienen met één buitenunit. Elke binnenunit kan meestal individueel worden bediend.
        </p>

        <h3>Voordelen</h3>
        <ul>
          <li><strong>Ruimtebesparing buiten:</strong> Slechts één buitenunit voor meerdere ruimtes</li>
          <li><strong>Individuele controle:</strong> Elke kamer kan op een andere temperatuur worden ingesteld</li>
          <li><strong>Esthetisch:</strong> Minder visuele impact aan de buitenzijde van het gebouw</li>
          <li><strong>Kostenefficiënt:</strong> Goedkoper dan meerdere split-units als u meerdere ruimtes wilt koelen</li>
        </ul>

        <h3>Nadelen</h3>
        <ul>
          <li><strong>Complexere installatie:</strong> Vereist meer planning en expertise</li>
          <li><strong>Hogere initiële kosten:</strong> Duurder in aanschaf dan een enkele split-unit</li>
          <li><strong>Bij storing:</strong> Als de buitenunit uitvalt, werkt geen enkele binnenunit</li>
          <li><strong>Capaciteitsverdeling:</strong> Bij gelijktijdig gebruik van alle units kan de capaciteit per unit lager zijn</li>
        </ul>

        <h3>Ideaal voor</h3>
        <ul>
          <li>Woningen of kantoren waar meerdere ruimtes gekoeld of verwarmd moeten worden</li>
          <li>Situaties waar beperkte ruimte is voor meerdere buitenunits</li>
          <li>Gebruikers die verschillende temperatuurzones willen creëren</li>
        </ul>

        <h3>Kostenindicatie</h3>
        <p>
          €2.500 - €6.000 afhankelijk van het aantal binnenunits, capaciteit en merk
        </p>

        <h2>3. Mobiele airconditioning</h2>
        <p>
          Een mobiele airco is een standalone unit die geen vaste installatie vereist. 
          De warme lucht wordt via een slang naar buiten afgevoerd, meestal door een raam.
        </p>

        <h3>Hoe werkt het?</h3>
        <p>
          Alle componenten (verdamper, compressor, condensor) bevinden zich in één behuizing. 
          De unit zuigt lucht aan uit de kamer, koelt deze af, en voert de warme lucht en 
          condensatie af via een afvoerslang die naar buiten leidt.
        </p>

        <h3>Voordelen</h3>
        <ul>
          <li><strong>Geen installatie nodig:</strong> Plug-and-play oplossing</li>
          <li><strong>Mobiliteit:</strong> Kan worden verplaatst tussen verschillende ruimtes</li>
          <li><strong>Lagere aanschafkosten:</strong> Goedkoper dan vaste systemen</li>
          <li><strong>Geen vergunning nodig:</strong> Geen permanente wijzigingen aan het gebouw</li>
        </ul>

        <h3>Nadelen</h3>
        <ul>
          <li><strong>Minder efficiënt:</strong> Hoger energieverbruik voor dezelfde koelcapaciteit</li>
          <li><strong>Luider:</strong> Alle componenten, inclusief compressor, bevinden zich in de ruimte</li>
          <li><strong>Neemt vloerruimte in:</strong> Vereist ruimte in de kamer</li>
          <li><strong>Beperkte capaciteit:</strong> Meestal alleen geschikt voor kleinere ruimtes</li>
          <li><strong>Afvoerslang:</strong> Vereist een opening naar buiten, wat niet altijd ideaal is</li>
        </ul>

        <h3>Ideaal voor</h3>
        <ul>
          <li>Huurwoningen waar geen permanente installatie mogelijk is</li>
          <li>Incidenteel gebruik of als tijdelijke oplossing</li>
          <li>Kleinere ruimtes (tot ongeveer 25m²)</li>
          <li>Situaties waar flexibiliteit belangrijk is</li>
        </ul>

        <h3>Kostenindicatie</h3>
        <p>
          €300 - €800 afhankelijk van capaciteit en functies
        </p>

        <h2>4. Kanaal airconditioning</h2>
        <p>
          Een kanaalairco is een centraal systeem dat koele lucht via kanalen naar verschillende 
          ruimtes in het gebouw leidt. De hoofdunit is meestal verborgen in een verlaagd plafond of zolder.
        </p>

        <h3>Hoe werkt het?</h3>
        <p>
          Een centrale unit koelt of verwarmt de lucht, die vervolgens via een netwerk van 
          geïsoleerde kanalen naar verschillende ruimtes wordt gedistribueerd. De lucht komt 
          de ruimtes binnen via roosters of diffusers in het plafond of de muur.
        </p>

        <h3>Voordelen</h3>
        <ul>
          <li><strong>Onzichtbaar:</strong> Alleen roosters zijn zichtbaar in de ruimtes</li>
          <li><strong>Hele huis koeling:</strong> Kan een volledig huis of kantoor bedienen</li>
          <li><strong>Gelijkmatige temperatuur:</strong> Zorgt voor consistente temperatuur in het hele gebouw</li>
          <li><strong>Centraal filtersysteem:</strong> Efficiënte luchtfiltratie voor het hele gebouw</li>
        </ul>

        <h3>Nadelen</h3>
        <ul>
          <li><strong>Duur:</strong> Hoge aanschaf- en installatiekosten</li>
          <li><strong>Complexe installatie:</strong> Vereist uitgebreide werkzaamheden, vooral in bestaande gebouwen</li>
          <li><strong>Ruimte nodig:</strong> Vereist ruimte voor kanalen en de centrale unit</li>
          <li><strong>Minder flexibel:</strong> Moeilijker om per kamer te regelen zonder zonering</li>
          <li><strong>Energieverlies:</strong> Mogelijke warmteverliezen via de kanalen</li>
        </ul>

        <h3>Ideaal voor</h3>
        <ul>
          <li>Nieuwbouwprojecten waar kanalen tijdens de bouw kunnen worden geïnstalleerd</li>
          <li>Grote woningen of kantoren waar een consistent klimaat gewenst is</li>
          <li>Situaties waar esthetiek belangrijk is en zichtbare units niet gewenst zijn</li>
        </ul>

        <h3>Kostenindicatie</h3>
        <p>
          €5.000 - €15.000 voor een volledig systeem, afhankelijk van de grootte van het gebouw en complexiteit
        </p>

        <h2>5. Plafond/vloer airconditioning</h2>
        <p>
          Deze units kunnen aan het plafond worden gemonteerd of op de vloer worden geplaatst, 
          afhankelijk van de beschikbare ruimte en voorkeur.
        </p>

        <h3>Hoe werkt het?</h3>
        <p>
          Het werkingsprincipe is vergelijkbaar met split-units, maar de binnenunit heeft een 
          ander ontwerp dat geschikt is voor montage aan het plafond of plaatsing op de vloer.
        </p>

        <h3>Voordelen</h3>
        <ul>
          <li><strong>Flexibele plaatsing:</strong> Kan worden geïnstalleerd waar wandmontage niet mogelijk is</li>
          <li><strong>Goede luchtverdeling:</strong> Efficiënte verspreiding van koele of warme lucht</li>
          <li><strong>Hogere capaciteit:</strong> Vaak geschikt voor grotere ruimtes dan wandunits</li>
        </ul>

        <h3>Nadelen</h3>
        <ul>
          <li><strong>Zichtbaarder:</strong> Meer opvallend dan wandunits of kanaalairco's</li>
          <li><strong>Installatiekosten:</strong> Vaak duurder te installeren dan standaard wandunits</li>
        </ul>

        <h3>Ideaal voor</h3>
        <ul>
          <li>Ruimtes met glazen wanden waar wandmontage niet mogelijk is</li>
          <li>Grotere ruimtes zoals winkels, restaurants of kantoorruimtes</li>
          <li>Situaties waar de luchtstroom vanaf het plafond of de vloer gewenst is</li>
        </ul>

        <h3>Kostenindicatie</h3>
        <p>
          €1.500 - €3.000 inclusief installatie, afhankelijk van capaciteit en merk
        </p>

        <div className="my-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Welk type airco past bij u?</h3>
          <p>
            De keuze voor het juiste type airconditioning hangt af van verschillende factoren, 
            waaronder uw specifieke ruimte, budget, esthetische voorkeuren en installatievereisten. 
            Onze experts kunnen u helpen de beste keuze te maken voor uw situatie.
          </p>
          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Vraag Persoonlijk Advies
            </Link>
          </div>
        </div>

        <h2>Vergelijkingstabel: Soorten Airconditioning</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Type</th>
                <th className="border p-2 text-left">Kosten</th>
                <th className="border p-2 text-left">Installatie</th>
                <th className="border p-2 text-left">Efficiëntie</th>
                <th className="border p-2 text-left">Geluidsniveau</th>
                <th className="border p-2 text-left">Beste voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Split-unit</td>
                <td className="border p-2">€€</td>
                <td className="border p-2">Professioneel</td>
                <td className="border p-2">Hoog</td>
                <td className="border p-2">Laag</td>
                <td className="border p-2">Individuele ruimtes</td>
              </tr>
              <tr>
                <td className="border p-2">Multi-split</td>
                <td className="border p-2">€€€</td>
                <td className="border p-2">Professioneel</td>
                <td className="border p-2">Hoog</td>
                <td className="border p-2">Laag</td>
                <td className="border p-2">Meerdere ruimtes</td>
              </tr>
              <tr>
                <td className="border p-2">Mobiel</td>
                <td className="border p-2">€</td>
                <td className="border p-2">Geen</td>
                <td className="border p-2">Laag</td>
                <td className="border p-2">Hoog</td>
                <td className="border p-2">Tijdelijke oplossingen</td>
              </tr>
              <tr>
                <td className="border p-2">Kanaal</td>
                <td className="border p-2">€€€€</td>
                <td className="border p-2">Complex</td>
                <td className="border p-2">Gemiddeld-Hoog</td>
                <td className="border p-2">Zeer laag</td>
                <td className="border p-2">Hele gebouwen</td>
              </tr>
              <tr>
                <td className="border p-2">Plafond/vloer</td>
                <td className="border p-2">€€€</td>
                <td className="border p-2">Professioneel</td>
                <td className="border p-2">Hoog</td>
                <td className="border p-2">Gemiddeld</td>
                <td className="border p-2">Speciale plaatsing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Veelgestelde vragen over soorten airco's</h2>
        
        <h3>Welk type airco is het meest energiezuinig?</h3>
        <p>
          Split-unit en multi-split systemen met inverter-technologie zijn doorgaans het meest 
          energiezuinig. Deze systemen passen de snelheid van de compressor aan op basis van de 
          benodigde koeling of verwarming, in plaats van volledig aan of uit te schakelen.
        </p>
        
        <h3>Kan ik een airco zelf installeren?</h3>
        <p>
          Alleen mobiele airco's zijn geschikt voor zelfinstallatie. Alle andere typen vereisen 
          professionele installatie door een gecertificeerde monteur, omdat ze werken met koudemiddel 
          onder druk en specifieke elektrische aansluitingen nodig hebben.
        </p>
        
        <h3>Welk type airco is het stilste?</h3>
        <p>
          Kanaalairco's zijn doorgaans het stilste omdat de hoofdunit verborgen is en het geluid 
          wordt gedempt door de kanalen. Bij split-units en multi-split systemen bevindt de luidruchtige 
          compressor zich buiten, wat resulteert in een stille werking binnenshuis.
        </p>
        
        <h3>Is een duurder systeem altijd beter?</h3>
        <p>
          Niet noodzakelijk. De beste keuze hangt af van uw specifieke behoeften. Een duurder 
          systeem biedt vaak meer functies, hogere efficiëntie en langere garanties, maar een 
          eenvoudiger systeem kan perfect voldoen voor bepaalde situaties.
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
          <Link href="/kennisbank/airco-installatie-maastricht">
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">Airco Installatie in Maastricht</h3>
              <p className="text-muted-foreground">Lokale expertise voor airco installatie in Maastricht en omgeving</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
