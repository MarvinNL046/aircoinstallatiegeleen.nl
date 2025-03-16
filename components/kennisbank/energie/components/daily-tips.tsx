export function DailyTips() {
  const tips = [
    {
      title: "Optimale Temperatuur",
      description: "Stel de temperatuur in op 21-23°C voor de beste balans tussen comfort en verbruik"
    },
    {
      title: "Gebruik Timers",
      description: "Programmeer uw airco om alleen te draaien wanneer nodig"
    },
    {
      title: "Voorkom Warmtebronnen",
      description: "Houd zonlicht en warmteproducerende apparaten weg van de thermostaat"
    },
    {
      title: "Natuurlijke Ventilatie",
      description: "Gebruik 's nachts natuurlijke ventilatie wanneer mogelijk"
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {tips.map((tip, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">{tip.title}</h3>
          <p className="text-muted-foreground">{tip.description}</p>
        </div>
      ))}
    </div>
  )
}