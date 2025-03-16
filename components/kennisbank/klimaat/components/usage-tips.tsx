export function UsageTips() {
  const tips = [
    "Stel de temperatuur niet te laag in tijdens koeling (ideaal: 21-23°C)",
    "Laat het systeem regelmatig onderhouden",
    "Gebruik timers en programmering voor energiebesparing",
    "Zorg voor regelmatige filterreiniging"
  ]

  return (
    <div className="bg-yellow-50 p-6 rounded-lg mb-8">
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-yellow-600 mt-1">💡</span>
            <p>{tip}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}