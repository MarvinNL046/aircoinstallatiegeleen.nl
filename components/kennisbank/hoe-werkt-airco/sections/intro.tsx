import { TableOfContents } from "../components/table-of-contents"

export function Intro() {
  return (
    <>
      <TableOfContents />
      
      <h2 id="intro" className="text-2xl font-bold mb-4">
        Wat is een airconditioning?
      </h2>
      <p className="mb-6">
        Een airconditioning (airco) is een systeem dat de temperatuur, luchtvochtigheid en luchtkwaliteit 
        in een ruimte reguleert. Het primaire doel is om een comfortabel binnenklimaat te creëren, 
        ongeacht de weersomstandigheden buiten. Moderne airconditioners kunnen niet alleen koelen, 
        maar ook verwarmen, ontvochtigen en de lucht filteren.
      </p>
      <p className="mb-6">
        De eerste airconditioners werden begin 20e eeuw ontwikkeld, maar pas in de jaren '70 werden ze 
        betaalbaar voor huishoudens. Tegenwoordig zijn ze niet meer weg te denken uit onze woningen en 
        kantoren, zeker met de steeds warmere zomers in Nederland.
      </p>
    </>
  )
}
