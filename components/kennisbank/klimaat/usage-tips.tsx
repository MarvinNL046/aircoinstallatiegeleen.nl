export function UsageTips() {
  const tips = [
    {
      tip: "Stel de temperatuur niet te laag in tijdens koeling (ideaal: 21-23°C)",
      icon: "💡"
    },
    {
      tip: "Laat het systeem regelmatig onderhouden",
      icon: "💡"
    },
    {
      tip: "Gebruik timers en programmering voor energiebesparing",
      icon: "💡"
    },
    {
      tip: "Zorg voor regelmatige filterreiniging",
      icon: "💡"
    }
  ]

  return (
    <div className="bg-yellow-50 p-6 rounded-lg mb-8">
      <ul className="space-y-3">
        {tips.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-yellow-600 mt-1">{item.icon}</span>
            <p>{item.tip}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}