export function SavingsOverview() {
  const savings = [
    {
      percentage: "30%",
      description: "Gemiddelde energiebesparing met juiste instellingen"
    },
    {
      percentage: "15%",
      description: "Extra besparing door regelmatig onderhoud"
    },
    {
      percentage: "20%",
      description: "Besparing met moderne energiezuinige systemen"
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      {savings.map((item, index) => (
        <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
          <p className="text-3xl font-bold text-green-600 mb-2">
            {item.percentage}
          </p>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  )
}