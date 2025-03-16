export function OptimalSettings() {
  const settings = [
    {
      setting: "Temperatuur",
      optimal: "21-23°C",
      description: "Ideale balans tussen comfort en verbruik"
    },
    {
      setting: "Ventilatorsnelheid",
      optimal: "Auto",
      description: "Laat het systeem zelf de beste snelheid bepalen"
    },
    {
      setting: "Timer",
      optimal: "Geprogrammeerd",
      description: "Stel schema's in voor dag en nacht"
    },
    {
      setting: "Eco-modus",
      optimal: "Aan",
      description: "Gebruik de energiebesparende modus"
    }
  ]

  return (
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="border p-3 text-left">Instelling</th>
            <th className="border p-3 text-left">Optimale Waarde</th>
            <th className="border p-3 text-left">Toelichting</th>
          </tr>
        </thead>
        <tbody>
          {settings.map((item, index) => (
            <tr key={index}>
              <td className="border p-3 font-medium">{item.setting}</td>
              <td className="border p-3 text-blue-600">{item.optimal}</td>
              <td className="border p-3">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}