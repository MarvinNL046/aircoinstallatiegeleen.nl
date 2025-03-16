import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Airco Storingscodes Uitgelegd | StayCool Airco",
  description: "Een overzicht van veelvoorkomende storingscodes bij airconditioners, wat ze betekenen en hoe u ze kunt oplossen. Handige gids voor probleemdiagnose.",
}

export default function StoringscodesGidsPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Storingscode Gids", href: "/kennisbank/storingscode-gids" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          storing
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          codes
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          diagnose
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Airco Storingscodes Uitgelegd</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Een overzicht van veelvoorkomende storingscodes bij airconditioners, wat ze betekenen en hoe u ze kunt oplossen. Handige gids voor probleemdiagnose.
      </p>

      <div className="prose max-w-none">
        <p className="lead">
          Moderne airconditioners zijn uitgerust met geavanceerde diagnostische systemen die storingen 
          kunnen detecteren en weergeven via foutcodes. Deze codes helpen bij het identificeren van 
          specifieke problemen, maar kunnen verwarrend zijn zonder de juiste uitleg. In deze gids 
          behandelen we de meest voorkomende storingscodes van populaire merken.
        </p>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-6">
          <h4 className="text-yellow-800 font-semibold">Belangrijk</h4>
          <p className="text-yellow-800 mb-0">
            Deze gids is bedoeld als eerste hulp bij het interpreteren van storingscodes. Voor definitieve 
            diagnose en reparatie raden we aan de handleiding van uw specifieke model te raadplegen of 
            contact op te nemen met een gecertificeerde technicus. Onjuiste reparatiepogingen kunnen 
            gevaarlijk zijn en de garantie ongeldig maken.
          </p>
        </div>

        <h2>Hoe storingscodes aflezen</h2>
        <p>
          Storingscodes worden meestal weergegeven op een van de volgende manieren:
        </p>
        <ul>
          <li><strong>Digitaal display:</strong> Een code zoals "E1" of "F4" op het display van de binnenunit</li>
          <li><strong>LED-indicatoren:</strong> Een patroon van knipperende lampjes op de binnenunit</li>
          <li><strong>Smartphone-app:</strong> Sommige moderne units kunnen codes doorgeven aan een app</li>
          <li><strong>Afstandsbediening:</strong> Sommige modellen tonen codes op de afstandsbediening</li>
        </ul>

        <h2>Daikin storingscodes</h2>
        <p>
          Daikin is een van de meest voorkomende airco-merken in Nederland. Hier zijn enkele veelvoorkomende storingscodes:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Code</th>
                <th className="border p-2 text-left">Betekenis</th>
                <th className="border p-2 text-left">Mogelijke oorzaak</th>
                <th className="border p-2 text-left">Oplossing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">A1</td>
                <td className="border p-2">PCB-defect</td>
                <td className="border p-2">Defecte printplaat in binnenunit</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">A5</td>
                <td className="border p-2">Vorstbeveiliging of hoge druk controle</td>
                <td className="border p-2">Vervuilde filters, koudemiddeltekort</td>
                <td className="border p-2">Filters reinigen, professionele controle</td>
              </tr>
              <tr>
                <td className="border p-2">A6</td>
                <td className="border p-2">Ventilatormotor binnenunit defect</td>
                <td className="border p-2">Geblokkeerde ventilator, defecte motor</td>
                <td className="border p-2">Controleer op obstakels, professionele reparatie</td>
              </tr>
              <tr>
                <td className="border p-2">C4/C5</td>
                <td className="border p-2">Temperatuursensor defect</td>
                <td className="border p-2">Defecte sensor in binnenunit</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">E1</td>
                <td className="border p-2">PCB-defect buitenunit</td>
                <td className="border p-2">Defecte printplaat in buitenunit</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">E5</td>
                <td className="border p-2">Compressor overbelast/geblokkeerd</td>
                <td className="border p-2">Compressorprobleem, hoge buitentemperatuur</td>
                <td className="border p-2">Professionele controle vereist</td>
              </tr>
              <tr>
                <td className="border p-2">E6</td>
                <td className="border p-2">Compressor geblokkeerd</td>
                <td className="border p-2">Defecte compressor, elektrisch probleem</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">F3</td>
                <td className="border p-2">Hoge temperatuur afvoerleiding</td>
                <td className="border p-2">Koudemiddeltekort, vervuilde condensor</td>
                <td className="border p-2">Professionele controle vereist</td>
              </tr>
              <tr>
                <td className="border p-2">H6</td>
                <td className="border p-2">Positiesensor compressor defect</td>
                <td className="border p-2">Defecte sensor, bekabelingsprobleem</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">U0</td>
                <td className="border p-2">Koudemiddeltekort</td>
                <td className="border p-2">Lek in systeem, onvoldoende koudemiddel</td>
                <td className="border p-2">Professionele controle en bijvulling vereist</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Mitsubishi storingscodes</h2>
        <p>
          Mitsubishi airconditioners gebruiken vaak een combinatie van LED-knipperingen en codes:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Code</th>
                <th className="border p-2 text-left">Betekenis</th>
                <th className="border p-2 text-left">Mogelijke oorzaak</th>
                <th className="border p-2 text-left">Oplossing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">E1/E2</td>
                <td className="border p-2">Communicatiefout</td>
                <td className="border p-2">Verbindingsprobleem tussen binnen- en buitenunit</td>
                <td className="border p-2">Controleer bekabeling, professionele controle</td>
              </tr>
              <tr>
                <td className="border p-2">E3/E4</td>
                <td className="border p-2">Sensorfout</td>
                <td className="border p-2">Defecte temperatuursensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">E5</td>
                <td className="border p-2">Communicatiefout PCB</td>
                <td className="border p-2">Interne communicatiefout in printplaat</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">E6</td>
                <td className="border p-2">Omkeerbeveiligingsfout</td>
                <td className="border p-2">Probleem met omkeerklep (bij warmtepomp)</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">E9</td>
                <td className="border p-2">Communicatiefout binnen/buiten</td>
                <td className="border p-2">Verbindingsprobleem tussen units</td>
                <td className="border p-2">Controleer bekabeling, professionele controle</td>
              </tr>
              <tr>
                <td className="border p-2">U2</td>
                <td className="border p-2">Overspanning</td>
                <td className="border p-2">Spanningsprobleem, instabiele stroomtoevoer</td>
                <td className="border p-2">Controleer stroomtoevoer, professionele controle</td>
              </tr>
              <tr>
                <td className="border p-2">U4</td>
                <td className="border p-2">Communicatiefout PCB</td>
                <td className="border p-2">Probleem met printplaat buitenunit</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">F3</td>
                <td className="border p-2">Oververhitting afvoerleiding</td>
                <td className="border p-2">Koudemiddeltekort, vervuilde condensor</td>
                <td className="border p-2">Professionele controle vereist</td>
              </tr>
              <tr>
                <td className="border p-2">F5</td>
                <td className="border p-2">Hoge druk fout</td>
                <td className="border p-2">Overbelasting, vervuilde condensor</td>
                <td className="border p-2">Reinig buitenunit, professionele controle</td>
              </tr>
              <tr>
                <td className="border p-2">P4</td>
                <td className="border p-2">Sensorfout</td>
                <td className="border p-2">Defecte sensor in buitenunit</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>LG storingscodes</h2>
        <p>
          LG airconditioners tonen meestal codes op het display van de binnenunit:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Code</th>
                <th className="border p-2 text-left">Betekenis</th>
                <th className="border p-2 text-left">Mogelijke oorzaak</th>
                <th className="border p-2 text-left">Oplossing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">CH01</td>
                <td className="border p-2">Binnenunit luchtinlaatsensor fout</td>
                <td className="border p-2">Defecte temperatuursensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">CH02</td>
                <td className="border p-2">Binnenunit leidingsensor fout</td>
                <td className="border p-2">Defecte temperatuursensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">CH06</td>
                <td className="border p-2">Buitenunit leidingsensor fout</td>
                <td className="border p-2">Defecte temperatuursensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">CH09</td>
                <td className="border p-2">EEPROM fout binnenunit</td>
                <td className="border p-2">Probleem met geheugen van printplaat</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">CH10</td>
                <td className="border p-2">Ventilatormotor binnenunit fout</td>
                <td className="border p-2">Defecte ventilatormotor, geblokkeerde ventilator</td>
                <td className="border p-2">Controleer op obstakels, professionele reparatie</td>
              </tr>
              <tr>
                <td className="border p-2">CH21</td>
                <td className="border p-2">Compressor overbelast</td>
                <td className="border p-2">Hoge druk, overbelasting</td>
                <td className="border p-2">Professionele controle vereist</td>
              </tr>
              <tr>
                <td className="border p-2">CH44</td>
                <td className="border p-2">Buitentemperatuursensor fout</td>
                <td className="border p-2">Defecte sensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">CH45</td>
                <td className="border p-2">Buitenunit leidingsensor fout</td>
                <td className="border p-2">Defecte sensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">CH67</td>
                <td className="border p-2">Ventilatormotor buitenunit fout</td>
                <td className="border p-2">Defecte ventilatormotor, geblokkeerde ventilator</td>
                <td className="border p-2">Controleer op obstakels, professionele reparatie</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Panasonic storingscodes</h2>
        <p>
          Panasonic airconditioners tonen meestal codes met een "H" of "F" gevolgd door een cijfer:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Code</th>
                <th className="border p-2 text-left">Betekenis</th>
                <th className="border p-2 text-left">Mogelijke oorzaak</th>
                <th className="border p-2 text-left">Oplossing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">H11</td>
                <td className="border p-2">Communicatiefout binnen/buiten</td>
                <td className="border p-2">Verbindingsprobleem tussen units</td>
                <td className="border p-2">Controleer bekabeling, professionele controle</td>
              </tr>
              <tr>
                <td className="border p-2">H12</td>
                <td className="border p-2">Capaciteit binnenunit komt niet overeen</td>
                <td className="border p-2">Incompatibele binnen- en buitenunit</td>
                <td className="border p-2">Professionele controle vereist</td>
              </tr>
              <tr>
                <td className="border p-2">H14</td>
                <td className="border p-2">Binnenunit luchtinlaatsensor fout</td>
                <td className="border p-2">Defecte temperatuursensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">H15</td>
                <td className="border p-2">Buitenunit compressorsensor fout</td>
                <td className="border p-2">Defecte temperatuursensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">H23</td>
                <td className="border p-2">Binnenunit leidingsensor fout</td>
                <td className="border p-2">Defecte temperatuursensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">H27</td>
                <td className="border p-2">Buitenunit luchtsensor fout</td>
                <td className="border p-2">Defecte temperatuursensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">H28</td>
                <td className="border p-2">Buitenunit leidingsensor fout</td>
                <td className="border p-2">Defecte temperatuursensor</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">F90</td>
                <td className="border p-2">PFC-circuit beveiliging</td>
                <td className="border p-2">Elektrisch probleem in buitenunit</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">F91</td>
                <td className="border p-2">Koelcircuit fout</td>
                <td className="border p-2">Probleem met koelcircuit</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">F93</td>
                <td className="border p-2">Compressor rotatiefout</td>
                <td className="border p-2">Compressorprobleem</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">F95</td>
                <td className="border p-2">Hoge druk koeling fout</td>
                <td className="border p-2">Overbelasting, vervuilde condensor</td>
                <td className="border p-2">Reinig buitenunit, professionele controle</td>
              </tr>
              <tr>
                <td className="border p-2">F96</td>
                <td className="border p-2">Transistormodule oververhitting</td>
                <td className="border p-2">Elektrisch probleem, oververhitting</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
              <tr>
                <td className="border p-2">F97</td>
                <td className="border p-2">Compressor oververhitting</td>
                <td className="border p-2">Compressorprobleem, koudemiddeltekort</td>
                <td className="border p-2">Professionele controle vereist</td>
              </tr>
              <tr>
                <td className="border p-2">F99</td>
                <td className="border p-2">DC piekdetectie</td>
                <td className="border p-2">Elektrisch probleem in buitenunit</td>
                <td className="border p-2">Professionele reparatie vereist</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Algemene storingscodes voor andere merken</h2>
        <p>
          Hoewel specifieke codes per merk verschillen, zijn er enkele algemene categorieën:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Categorie</th>
                <th className="border p-2 text-left">Betekenis</th>
                <th className="border p-2 text-left">Mogelijke oorzaak</th>
                <th className="border p-2 text-left">Oplossing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">E1-E9</td>
                <td className="border p-2">Communicatie- of PCB-fouten</td>
                <td className="border p-2">Verbindingsproblemen, defecte printplaat</td>
                <td className="border p-2">Professionele controle vereist</td>
              </tr>
              <tr>
                <td className="border p-2">F1-F9</td>
                <td className="border p-2">Sensorfouten</td>
                <td className="border p-2">Defecte temperatuur- of druksensoren</td>
                <td className="border p-2">Professionele vervanging vereist</td>
              </tr>
              <tr>
                <td className="border p-2">P1-P9</td>
                <td className="border p-2">Overbelasting of beveiligingsfouten</td>
                <td className="border p-2">Overbelasting, oververhitting</td>
                <td className="border p-2">Professionele controle vereist</td>
              </tr>
              <tr>
                <td className="border p-2">U1-U9</td>
                <td className="border p-2">Systeemfouten</td>
                <td className="border p-2">Koudemiddelproblemen, elektrische problemen</td>
                <td className="border p-2">Professionele controle vereist</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Hulp nodig bij een storingscode?</h3>
          <p>
            Als uw airco een storingscode weergeeft die niet in deze gids staat, of als u hulp nodig heeft 
            bij het oplossen van een probleem, neem dan contact met ons op. Onze gecertificeerde technici 
            kunnen u helpen met alle merken en modellen.
          </p>
          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Hulp Aanvragen
            </Link>
          </div>
        </div>

        <h2>Tips voor het resetten van storingscodes</h2>
        <p>
          In sommige gevallen kunt u een storingscode resetten na het oplossen van een eenvoudig probleem:
        </p>
        <ol>
          <li><strong>Stroom uitschakelen:</strong> Schakel de airco uit en haal de stekker uit het stopcontact of schakel de stroomonderbreker uit gedurende 1-3 minuten</li>
          <li><strong>Filters reinigen:</strong> Reinig de luchtfilters als deze vervuild zijn</li>
          <li><strong>Obstakels verwijderen:</strong> Zorg dat er geen obstakels zijn rond de binnen- of buitenunit</li>
          <li><strong>Stroom inschakelen:</strong> Schakel de stroom weer in en controleer of de foutcode verdwenen is</li>
        </ol>
        <p>
          Als de foutcode terugkeert na het resetten, is er waarschijnlijk een onderliggend probleem 
          dat professionele aandacht vereist.
        </p>

        <h2>Veelgestelde vragen over storingscodes</h2>
        
        <h3>Kan ik mijn airco blijven gebruiken als er een storingscode wordt weergegeven?</h3>
        <p>
          Dit wordt over het algemeen afgeraden. Storingscodes wijzen op een probleem dat kan verergeren 
          als het niet wordt opgelost. Sommige airconditioners schakelen zichzelf uit als beveiliging 
          tegen verdere schade.
        </p>
        
        <h3>Hoe vind ik de storingscodes voor mijn specifieke model?</h3>
        <p>
          De handleiding van uw airco bevat meestal een lijst met storingscodes en hun betekenis. 
          Als u de handleiding niet meer heeft, kunt u deze vaak downloaden van de website van de fabrikant 
          door het model- of serienummer in te voeren.
        </p>
        
        <h3>Waarom blijft mijn airco dezelfde storingscode weergeven na een reset?</h3>
        <p>
          Als een storingscode terugkeert na het resetten, is er waarschijnlijk een onderliggend probleem 
          dat niet is opgelost. Dit kan variëren van een defecte sensor tot een koudemiddellek of een 
          elektrisch probleem. In de meeste gevallen is professionele hulp nodig.
        </p>
        
        <h3>Zijn storingscodes hetzelfde voor alle modellen van hetzelfde merk?</h3>
        <p>
          Niet altijd. Hoewel er vaak overlap is, kunnen storingscodes verschillen tussen verschillende 
          modelseries of generaties van hetzelfde merk. Raadpleeg altijd de handleiding van uw specifieke model.
        </p>
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Gerelateerde artikelen</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Link href="/kennisbank/veelvoorkomende-problemen">
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">Veelvoorkomende Airco Problemen</h3>
              <p className="text-muted-foreground">Herken en los veelvoorkomende problemen met uw airconditioning op</p>
            </Card>
          </Link>
          <Link href="/kennisbank/airco-luchtfilter-onderhoud">
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">Airco Luchtfilter Onderhoud</h3>
              <p className="text-muted-foreground">Stap-voor-stap gids voor het reinigen en onderhouden van uw airco filters</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
