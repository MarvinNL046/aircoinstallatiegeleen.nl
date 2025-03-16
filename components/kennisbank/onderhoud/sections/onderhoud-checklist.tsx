import { MaintenanceChecklist } from "../components/maintenance-checklist"

export function OnderhoudsChecklist() {
  return (
    <>
      <h2 id="checklist" className="text-2xl font-bold mb-4">
        Onderhouds Checklist
      </h2>
      <p className="mb-6">
        Gebruik deze checklist om uw airconditioning regelmatig te controleren en onderhouden.
      </p>
      <MaintenanceChecklist />
    </>
  )
}