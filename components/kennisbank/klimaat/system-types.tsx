export function SystemTypes() {
  const systems = [
    {
      title: "1. Split-unit Airconditioner",
      description: "Ideaal voor kleinere ruimtes en lokale klimaatbeheersing"
    },
    {
      title: "2. Multi-split Systeem",
      description: "Perfect voor grotere woningen met meerdere ruimtes"
    },
    {
      title: "3. VRF/VRV Systeem",
      description: "Geschikt voor kantoren en commerciële ruimtes"
    },
    {
      title: "4. Centrale Klimaatbeheersing",
      description: "Complete oplossing voor grote gebouwen"
    }
  ]

  return (
    <div className="space-y-4 mb-8">
      {systems.map((system, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold text-blue-600 mb-2">{system.title}</h3>
          <p>{system.description}</p>
        </div>
      ))}
    </div>
  )
}