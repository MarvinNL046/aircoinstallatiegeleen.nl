import { OptimalSettings } from "../components/optimal-settings"

export function EnergieInstellingen() {
  return (
    <>
      <h2 id="settings" className="text-2xl font-bold mb-4">
        Optimale Instellingen
      </h2>
      <p className="mb-6">
        De juiste instellingen zijn cruciaal voor een energiezuinige werking van uw airconditioning.
      </p>
      <OptimalSettings />
    </>
  )
}