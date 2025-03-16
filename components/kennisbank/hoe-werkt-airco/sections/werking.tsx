export function Werking() {
  return (
    <>
      <h2 id="werking" className="text-2xl font-bold mb-4">
        Hoe werkt een airco?
      </h2>
      <p className="mb-6">
        Een airconditioning werkt volgens hetzelfde principe als een koelkast. Het systeem gebruikt 
        een koudemiddel (refrigerant) dat circuleert tussen de binnen- en buitenunit. Dit proces 
        bestaat uit vier hoofdstappen:
      </p>
      
      <ol className="list-decimal pl-6 mb-6">
        <li className="mb-3">
          <strong>Verdamping:</strong> In de binnenunit absorbeert het vloeibare koudemiddel warmte uit de 
          lucht in de kamer, waardoor het verdampt en in gasvorm verandert. De afgekoelde lucht wordt 
          terug de kamer in geblazen.
        </li>
        <li className="mb-3">
          <strong>Compressie:</strong> Het gasvormige koudemiddel wordt naar de compressor in de buitenunit 
          geleid, waar het wordt samengeperst. Dit verhoogt de druk en temperatuur van het gas.
        </li>
        <li className="mb-3">
          <strong>Condensatie:</strong> Het hete, samengeperste gas stroomt door de condensor in de buitenunit, 
          waar het warmte afgeeft aan de buitenlucht en weer vloeibaar wordt.
        </li>
        <li className="mb-3">
          <strong>Expansie:</strong> Het vloeibare koudemiddel stroomt door een expansieventiel, waar de druk 
          plotseling daalt. Hierdoor koelt het koudemiddel sterk af en is het klaar om opnieuw warmte 
          op te nemen in de binnenunit.
        </li>
      </ol>
      
      <p className="mb-6">
        Deze cyclus herhaalt zich continu totdat de gewenste temperatuur is bereikt. Een thermostaat 
        in de binnenunit meet de kamertemperatuur en schakelt de compressor aan of uit om de ingestelde 
        temperatuur te handhaven.
      </p>
    </>
  )
}
