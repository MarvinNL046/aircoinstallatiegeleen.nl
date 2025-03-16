export function Soorten() {
  return (
    <>
      <h2 id="soorten" className="text-2xl font-bold mb-4">
        Verschillende soorten airco's
      </h2>
      <p className="mb-6">
        Er zijn verschillende typen airconditioners, elk met eigen voor- en nadelen. De keuze hangt af 
        van uw specifieke situatie, budget en wensen.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Split-unit airco</h3>
      <p className="mb-4">
        Dit is het meest voorkomende type voor woningen en kleine kantoren. Het bestaat uit een binnenunit 
        en een buitenunit die met elkaar verbonden zijn via leidingen.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Voordelen:</strong> Stil, efficiënt, geschikt voor individuele ruimtes</li>
        <li><strong>Nadelen:</strong> Vereist professionele installatie, buitenunit nodig</li>
        <li><strong>Kosten:</strong> €1.000 - €2.500 inclusief installatie</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Multi-split airco</h3>
      <p className="mb-4">
        Vergelijkbaar met een split-unit, maar met één buitenunit die verbonden is met meerdere binnenunits 
        in verschillende ruimtes.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Voordelen:</strong> Bespaart ruimte buiten, individuele temperatuurregeling per kamer</li>
        <li><strong>Nadelen:</strong> Complexere installatie, hogere kosten</li>
        <li><strong>Kosten:</strong> €2.500 - €6.000 afhankelijk van het aantal binnenunits</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Mobiele airco</h3>
      <p className="mb-4">
        Een draagbare unit die geen vaste installatie vereist. De warme lucht wordt via een slang naar 
        buiten afgevoerd, meestal door een raam.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Voordelen:</strong> Geen installatie nodig, verplaatsbaar, lagere aanschafkosten</li>
        <li><strong>Nadelen:</strong> Minder efficiënt, luider, neemt vloerruimte in</li>
        <li><strong>Kosten:</strong> €300 - €800</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Kanaalairco</h3>
      <p className="mb-4">
        Een centraal systeem dat koele lucht via kanalen naar verschillende ruimtes in het gebouw leidt.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Voordelen:</strong> Onzichtbaar, kan een heel huis koelen, gelijkmatige temperatuur</li>
        <li><strong>Nadelen:</strong> Duur, complexe installatie, moeilijker om per kamer te regelen</li>
        <li><strong>Kosten:</strong> €5.000 - €15.000 voor een volledig systeem</li>
      </ul>
    </>
  )
}
