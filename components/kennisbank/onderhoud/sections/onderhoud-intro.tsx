import { TableOfContents } from "../components/table-of-contents"
import { MaintenanceImportance } from "../components/maintenance-importance"

export function OnderhoudsIntro() {
  return (
    <>
      <TableOfContents />
      
      <h2 id="intro" className="text-2xl font-bold mb-4">
        Het Belang van Goed Onderhoud
      </h2>
      <p className="mb-6">
        Regelmatig onderhoud van uw airconditioning is essentieel voor optimale prestaties, 
        een lange levensduur en een gezond binnenklimaat. Met de juiste onderhoudstips 
        houdt u uw systeem in topconditie.
      </p>

      <MaintenanceImportance />
    </>
  )
}