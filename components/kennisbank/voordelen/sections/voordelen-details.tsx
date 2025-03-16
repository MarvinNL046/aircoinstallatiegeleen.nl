import { BenefitsDetails } from "../components/benefits-details"

export function VoordelenDetails() {
  return (
    <>
      <h2 id="details" className="text-2xl font-bold mb-4">
        Voordelen in Detail
      </h2>
      <p className="mb-6">
        Laten we elk voordeel in detail bekijken en zien hoe dit uw dagelijks leven kan verbeteren.
      </p>
      <BenefitsDetails />
    </>
  )
}