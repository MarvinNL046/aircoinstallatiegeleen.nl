export function MaintenanceTips() {
  const tips = [
    {
      tip: "Reinig of vervang filters elke 1-2 maanden",
      impact: "5-15% energiebesparing"
    },
    {
      tip: "Laat jaarlijks professioneel onderhoud uitvoeren",
      impact: "10-20% energiebesparing"
    },
    {
      tip: "Controleer regelmatig op lekkages",
      impact: "Voorkom 20-30% efficiëntieverlies"
    },
    {
      tip: "Houd de condensor en verdamper schoon",
      impact: "5-10% energiebesparing"
    }
  ]

  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-8">
      <ul className="space-y-4">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm">
              {index + 1}
            </span>
            <div>
              <p className="font-medium">{tip.tip}</p>
              <p className="text-sm text-blue-600">{tip.impact}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}