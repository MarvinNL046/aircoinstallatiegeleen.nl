import { MaintenanceSchedule } from "../components/maintenance-schedule"

export function OnderhoudsFrequentie() {
  return (
    <>
      <h2 id="frequency" className="text-2xl font-bold mb-4">
        Onderhoudsfrequentie
      </h2>
      <p className="mb-6">
        De juiste frequentie van onderhoud is belangrijk voor optimale prestaties.
      </p>
      <MaintenanceSchedule />
    </>
  )
}