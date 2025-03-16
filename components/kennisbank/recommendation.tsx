export function Recommendation() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <h2 id="recommendation" className="text-2xl font-bold mb-4">
        Onze aanbeveling
      </h2>
      <p className="text-lg">Kies voor een systeem met minimaal:</p>
      <ul className="list-disc pl-6 mt-2">
        <li className="mb-2">
          <span className="font-semibold">SEER 6.1</span> (A++) voor optimale koelefficiëntie
        </li>
        <li className="mb-2">
          <span className="font-semibold">SCOP 4.6</span> (A++) voor optimale verwarmingsefficiëntie
        </li>
      </ul>
      <p className="mt-4 text-sm text-gray-600">
        Dit biedt de beste balans tussen aanschafkosten en energiebesparing.
      </p>
    </div>
  )
}