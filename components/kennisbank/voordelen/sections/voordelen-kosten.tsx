import { CostBenefits } from "../components/cost-benefits"

export function VoordelenKosten() {
  return (
    <>
      <h2 id="costs" className="text-2xl font-bold mb-4">
        Kosten en Baten
      </h2>
      <p className="mb-6">
        Een airconditioning is een investering die zich op verschillende manieren terugverdient.
      </p>
      <CostBenefits />
    </>
  )
}