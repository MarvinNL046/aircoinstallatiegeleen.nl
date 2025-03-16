import { BenefitsOverview } from "../components/benefits-overview"

export function VoordelenLijst() {
  return (
    <>
      <h2 id="overview" className="text-2xl font-bold mb-4">
        De 7 Belangrijkste Voordelen
      </h2>
      <p className="mb-6">
        Ontdek waarom steeds meer mensen kiezen voor een airconditioning in hun woning of bedrijf.
      </p>
      <BenefitsOverview />
    </>
  )
}