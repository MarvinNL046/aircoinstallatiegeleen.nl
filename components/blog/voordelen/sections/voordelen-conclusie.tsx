import Link from "next/link"

export function VoordelenConclusie() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Conclusie</h2>
      
      <p className="mb-6">
        Een airconditioning is veel meer dan alleen een koelsysteem. Het is een complete 
        klimaatoplossing die bijdraagt aan een gezonder, comfortabeler en energiezuiniger 
        binnenklimaat. Met de juiste installatie en regelmatig onderhoud kunt u jarenlang 
        genieten van alle voordelen die een modern airconditioningsysteem te bieden heeft.
      </p>

      <div className="bg-blue-100 p-6 rounded-lg">
        <p className="font-semibold mb-2">Interesse in een airconditioning?</p>
        <p>
          Wilt u ook profiteren van deze voordelen? Neem dan{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            contact met ons op
          </Link>{" "}
          voor een vrijblijvend adviesgesprek of{" "}
          <Link href="/offerte" className="text-blue-600 hover:underline">
            vraag direct een offerte aan
          </Link>.
        </p>
      </div>
    </div>
  )
}