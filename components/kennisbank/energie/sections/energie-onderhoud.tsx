import { MaintenanceTips } from "../components/maintenance-tips"

export function EnergieOnderhoud() {
  return (
    <>
      <h2 id="maintenance" className="text-2xl font-bold mb-4">
        Onderhoud voor Energiebesparing
      </h2>
      <p className="mb-6">
        Goed onderhoud zorgt niet alleen voor een langere levensduur, maar ook voor een lager energieverbruik.
      </p>
      <MaintenanceTips />
    </>
  )
}