import { ProfessionalMaintenance } from "../components/professional-maintenance"

export function OnderhoudsProfessioneel() {
  return (
    <>
      <h2 id="professional" className="text-2xl font-bold mb-4">
        Professioneel Onderhoud
      </h2>
      <p className="mb-6">
        Sommige onderhoudstaken kunt u beter aan een professional overlaten.
      </p>
      <ProfessionalMaintenance />
    </>
  )
}