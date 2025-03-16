export function BenefitsOverview() {
  const benefits = [
    {
      title: "Optimaal Comfort",
      description: "Het hele jaar door een aangename temperatuur",
      icon: "🌡️"
    },
    {
      title: "Betere Luchtkwaliteit",
      description: "Filtering van stof, pollen en verontreinigingen",
      icon: "🌿"
    },
    {
      title: "Energiebesparing",
      description: "Moderne systemen zijn zeer energiezuinig",
      icon: "⚡"
    },
    {
      title: "Verhoogde Productiviteit",
      description: "Betere concentratie door optimale werktemperatuur",
      icon: "💪"
    },
    {
      title: "Betere Nachtrust",
      description: "Comfortabele slaapkamertemperatuur",
      icon: "🌙"
    },
    {
      title: "Waardeverhoging Woning",
      description: "Aantrekkelijke feature voor potentiële kopers",
      icon: "🏠"
    },
    {
      title: "Vochtregulering",
      description: "Voorkomt schimmelvorming en verhoogt comfort",
      icon: "💧"
    }
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-3xl mb-4">{benefit.icon}</div>
          <h3 className="font-semibold mb-2">{benefit.title}</h3>
          <p className="text-muted-foreground">{benefit.description}</p>
        </div>
      ))}
    </div>
  )
}