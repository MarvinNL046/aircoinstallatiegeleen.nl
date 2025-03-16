import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Veelvoorkomende Airco Problemen en Oplossingen | StayCool Airco",
  description: "Praktische gids voor het herkennen en oplossen van veelvoorkomende problemen met uw airconditioning. Eenvoudige troubleshooting tips en wanneer een professional in te schakelen.",
}

export default function VeelvoorkomendeProblemenPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Veelvoorkomende Problemen", href: "/kennisbank/veelvoorkomende-problemen" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          problemen
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          oplossingen
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          zelf doen
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Veelvoorkomende Airco Problemen en Oplossingen</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Praktische gids voor het herkennen en oplossen van veelvoorkomende problemen met uw airconditioning. Eenvoudige troubleshooting tips en wanneer een professional in te schakelen.
      </p>

      <div className="prose max-w-none">
        <p className="lead">
          Zelfs de beste airconditioners kunnen soms problemen vertonen. In deze gids bespreken we 
          de meest voorkomende problemen, mogelijke oorzaken, en wat u zelf kunt doen om ze op te lossen. 
          We geven ook aan wanneer het tijd is om professionele hulp in te schakelen.
        </p>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-6">
          <h4 className="text-yellow-800 font-semibold">Veiligheid eerst</h4>
          <p className="text-yellow-800 mb-0">
            Schakel altijd de stroom uit voordat u onderhoud aan uw airconditioning uitvoert. 
            Als u twijfelt of u een probleem zelf kunt oplossen, raadpleeg dan een professional. 
            Onjuiste reparaties kunnen gevaarlijk zijn en de garantie ongeldig maken.
          </p>
        </div>

        <h2>Probleem 1: Airco koelt of verwarmt niet goed</h2>
        <p>
          Een van de meest voorkomende klachten is dat de airco niet voldoende koelt of verwarmt.
        </p>

        <h3>Mogelijke oorzaken</h3>
        <ul>
          <li><strong>Vervuilde filters:</strong> Belemmeren de luchtstroom en verminderen de efficiëntie</li>
          <li><strong>Verkeerde temperatuurinstelling:</strong> De thermostaat is niet correct ingesteld</li>
          <li><strong>Onvoldoende koudemiddel:</strong> Door een lek of onvoldoende bijvulling</li>
          <li><strong>Vervuilde verdamper of condensor:</strong> Vermindert de warmteoverdracht</li>
          <li><strong>Verkeerde grootte van de airco:</strong> Te klein voor de ruimte</li>
          <li><strong>Obstructies rond de buitenunit:</strong> Belemmeren de luchtstroom</li>
        </ul>

        <h3>Wat u zelf kunt doen</h3>
        <ol>
          <li>Controleer en reinig de luchtfilters (zie ons <Link href="/kennisbank/airco-luchtfilter-onderhoud" className="text-blue-600 hover:underline">artikel over filteronderhoud</Link>)</li>
          <li>Controleer de temperatuurinstelling en zorg dat deze correct is</li>
          <li>Zorg dat er geen meubels of gordijnen de luchtstroom van de binnenunit blokkeren</li>
          <li>Verwijder bladeren, vuil of andere obstakels rond de buitenunit</li>
          <li>Controleer of alle ramen en deuren gesloten zijn tijdens gebruik</li>
        </ol>

        <h3>Wanneer een professional inschakelen</h3>
        <p>
          Als bovenstaande stappen niet helpen, kan er sprake zijn van een koudemiddellek, 
          een defecte compressor of een ander technisch probleem dat professionele aandacht vereist.
        </p>

        <h2>Probleem 2: Airco schakelt constant aan en uit</h2>
        <p>
          Dit fenomeen, bekend als "korte cycling", kan de levensduur van uw airco verkorten en het energieverbruik verhogen.
        </p>

        <h3>Mogelijke oorzaken</h3>
        <ul>
          <li><strong>Vervuilde filters:</strong> Veroorzaken oververhitting en automatische uitschakeling</li>
          <li><strong>Verkeerd geplaatste thermostaat:</strong> Bijvoorbeeld in direct zonlicht of bij een warmtebron</li>
          <li><strong>Onjuiste grootte van de airco:</strong> Een te grote unit koelt de ruimte te snel af</li>
          <li><strong>Elektrische problemen:</strong> Defecte relais of bedieningspaneel</li>
          <li><strong>Laag koudemiddelniveau:</strong> Veroorzaakt drukproblemen in het systeem</li>
        </ul>

        <h3>Wat u zelf kunt doen</h3>
        <ol>
          <li>Controleer en reinig de luchtfilters</li>
          <li>Controleer of de thermostaat niet in direct zonlicht of bij een warmtebron staat</li>
          <li>Zorg voor voldoende luchtcirculatie rond de binnen- en buitenunit</li>
        </ol>

        <h3>Wanneer een professional inschakelen</h3>
        <p>
          Als het probleem aanhoudt, is er mogelijk een elektrisch probleem of een probleem 
          met het koudemiddel dat door een technicus moet worden opgelost.
        </p>

        <h2>Probleem 3: Airco maakt ongewone geluiden</h2>
        <p>
          Verschillende geluiden kunnen wijzen op verschillende problemen:
        </p>

        <h3>Soorten geluiden en mogelijke oorzaken</h3>
        <ul>
          <li><strong>Ratelend of rammelend geluid:</strong> Losse onderdelen in de binnen- of buitenunit</li>
          <li><strong>Fluitend of sissend geluid:</strong> Mogelijk koudemiddellek of hoge druk in het systeem</li>
          <li><strong>Klikkend geluid:</strong> Normaal bij het aan- en uitschakelen, maar overmatig klikken kan wijzen op een defecte thermostaat of relais</li>
          <li><strong>Schurend geluid:</strong> Problemen met de ventilatormotor of -bladen</li>
          <li><strong>Bubbelend geluid:</strong> Koudemiddel dat door het systeem stroomt (meestal normaal)</li>
        </ul>

        <h3>Wat u zelf kunt doen</h3>
        <ol>
          <li>Controleer of de installatie stevig is gemonteerd en niet trilt</li>
          <li>Controleer of er geen losse onderdelen zijn in de binnen- of buitenunit</li>
          <li>Reinig de filters en verwijder eventuele obstakels</li>
        </ol>

        <h3>Wanneer een professional inschakelen</h3>
        <p>
          Bij aanhoudende of luide geluiden, vooral sissende of schurende geluiden, 
          is het raadzaam een technicus te raadplegen om schade aan het systeem te voorkomen.
        </p>

        <h2>Probleem 4: Water lekt uit de binnenunit</h2>
        <p>
          Een kleine hoeveelheid condenswater is normaal, maar overmatige lekkage wijst op een probleem.
        </p>

        <h3>Mogelijke oorzaken</h3>
        <ul>
          <li><strong>Verstopte condensafvoer:</strong> Voorkomt dat water correct wordt afgevoerd</li>
          <li><strong>Niet-waterpas geïnstalleerde binnenunit:</strong> Veroorzaakt onjuiste afvoer</li>
          <li><strong>Gebroken of losse afvoerslang:</strong> Leidt tot lekkage</li>
          <li><strong>Bevroren verdamper:</strong> Smelt en veroorzaakt overmatige waterproductie</li>
          <li><strong>Lage koudemiddelniveaus:</strong> Kunnen leiden tot ijsvorming en vervolgens lekkage</li>
        </ul>

        <h3>Wat u zelf kunt doen</h3>
        <ol>
          <li>Schakel de airco uit om verdere lekkage te voorkomen</li>
          <li>Controleer of de condensafvoer verstopt is en reinig deze indien nodig</li>
          <li>Controleer of de binnenunit waterpas is geïnstalleerd</li>
          <li>Controleer de filters en reinig deze indien nodig</li>
        </ol>

        <h3>Wanneer een professional inschakelen</h3>
        <p>
          Als de lekkage aanhoudt na deze stappen, of als u vermoedt dat er een probleem is 
          met de afvoerslang of het koudemiddelniveau, is professionele hulp nodig.
        </p>

        <h2>Probleem 5: Airco schakelt helemaal niet in</h2>
        <p>
          Als uw airco helemaal niet reageert, kunnen er verschillende oorzaken zijn.
        </p>

        <h3>Mogelijke oorzaken</h3>
        <ul>
          <li><strong>Stroomuitval:</strong> Geen stroom naar het systeem</li>
          <li><strong>Doorgeslagen zekering of stroomonderbreker:</strong> Onderbroken stroomtoevoer</li>
          <li><strong>Defecte afstandsbediening:</strong> Kan geen signalen verzenden</li>
          <li><strong>Defecte thermostaat:</strong> Geeft geen juiste signalen door</li>
          <li><strong>Interne veiligheidsschakelaar:</strong> Geactiveerd door een probleem</li>
        </ul>

        <h3>Wat u zelf kunt doen</h3>
        <ol>
          <li>Controleer of er stroom is in huis en of andere apparaten werken</li>
          <li>Controleer de zekering of stroomonderbreker en reset deze indien nodig</li>
          <li>Vervang de batterijen in de afstandsbediening</li>
          <li>Controleer of de stekker goed in het stopcontact zit</li>
          <li>Wacht 30 minuten als de airco recent heeft gedraaid (interne beveiliging kan actief zijn)</li>
        </ol>

        <h3>Wanneer een professional inschakelen</h3>
        <p>
          Als geen van deze stappen helpt, is er waarschijnlijk een elektrisch probleem 
          dat door een technicus moet worden onderzocht.
        </p>

        <h2>Probleem 6: Onaangename geuren uit de airco</h2>
        <p>
          Verschillende geuren kunnen wijzen op verschillende problemen:
        </p>

        <h3>Soorten geuren en mogelijke oorzaken</h3>
        <ul>
          <li><strong>Muffe geur:</strong> Schimmel of bacteriën in het systeem door vocht</li>
          <li><strong>Verbrandingsgeur:</strong> Mogelijk een elektrisch probleem of oververhitting</li>
          <li><strong>Zoetige geur:</strong> Mogelijk een koudemiddellek</li>
          <li><strong>Rioollucht:</strong> Probleem met de condensafvoer of verstopte afvoer</li>
        </ul>

        <h3>Wat u zelf kunt doen</h3>
        <ol>
          <li>Reinig of vervang de luchtfilters</li>
          <li>Laat de ventilator enkele uren draaien om vocht te verwijderen</li>
          <li>Controleer en reinig de condensafvoer</li>
          <li>Overweeg het gebruik van een airco-reiniger (volgens instructies van de fabrikant)</li>
        </ol>

        <h3>Wanneer een professional inschakelen</h3>
        <p>
          Bij aanhoudende geuren, vooral verbrandings- of zoetige geuren, 
          is het raadzaam een technicus te raadplegen. Een professionele reiniging 
          van de verdamper kan nodig zijn bij hardnekkige schimmelgeuren.
        </p>

        <div className="my-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Professionele hulp nodig?</h3>
          <p>
            Sommige problemen vereisen de expertise van een gecertificeerde technicus. 
            Bij StayCool Airco bieden we snelle en betrouwbare service voor alle merken en modellen.
          </p>
          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Service Aanvragen
            </Link>
          </div>
        </div>

        <h2>Preventief onderhoud: problemen voorkomen</h2>
        <p>
          De beste manier om problemen te voorkomen is regelmatig onderhoud:
        </p>
        <ul>
          <li>Reinig of vervang de filters elke 1-3 maanden</li>
          <li>Houd de binnen- en buitenunit vrij van obstakels</li>
          <li>Laat jaarlijks professioneel onderhoud uitvoeren</li>
          <li>Controleer regelmatig op ongewone geluiden of geuren</li>
          <li>Gebruik de airco op een redelijke temperatuur (22-24°C is optimaal)</li>
          <li>Laat de ventilator na gebruik nog even draaien om vocht te verwijderen</li>
        </ul>

        <h2>Veelgestelde vragen over airco problemen</h2>
        
        <h3>Kan ik mijn airco blijven gebruiken als deze niet goed koelt?</h3>
        <p>
          Dit wordt afgeraden. Een airco die niet goed koelt, verbruikt meer energie en kan 
          verdere schade oplopen. Het is beter het probleem eerst op te lossen.
        </p>
        
        <h3>Hoe vaak moet ik mijn airco laten onderhouden?</h3>
        <p>
          Voor optimale prestaties en levensduur raden we aan om uw airco jaarlijks professioneel 
          te laten onderhouden, bij voorkeur voor het begin van het koelseizoen.
        </p>
        
        <h3>Mijn airco geeft een foutcode weer. Wat moet ik doen?</h3>
        <p>
          Raadpleeg eerst de handleiding van uw airco om de betekenis van de foutcode te achterhalen. 
          Sommige eenvoudige fouten kunt u zelf oplossen, maar voor de meeste foutcodes is het 
          raadzaam een professional in te schakelen.
        </p>
        
        <h3>Is het normaal dat mijn airco af en toe ijsvorming vertoont?</h3>
        <p>
          Nee, ijsvorming op de binnenunit is meestal een teken van een probleem, zoals vervuilde 
          filters, een koudemiddellek of een defecte ventilator. Schakel de airco uit en laat het 
          ijs smelten voordat u verdere actie onderneemt.
        </p>
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Gerelateerde artikelen</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Link href="/kennisbank/airco-luchtfilter-onderhoud">
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">Airco Luchtfilter Onderhoud</h3>
              <p className="text-muted-foreground">Stap-voor-stap gids voor het reinigen en onderhouden van uw airco filters</p>
            </Card>
          </Link>
          <Link href="/kennisbank/storingscode-gids">
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">Airco Storingscodes Uitgelegd</h3>
              <p className="text-muted-foreground">Een overzicht van veelvoorkomende storingscodes en wat ze betekenen</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
