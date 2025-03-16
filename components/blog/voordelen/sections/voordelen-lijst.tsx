export function VoordelenLijst() {
  const voordelen = [
    {
      title: "1. Optimaal Comfort het Hele Jaar Door",
      description: "Moderne airconditioners kunnen zowel koelen als verwarmen, waardoor u het hele jaar door kunt genieten van een aangename temperatuur.",
      icon: "🌡️"
    },
    {
      title: "2. Betere Luchtkwaliteit",
      description: "Airconditioners filteren de lucht en verwijderen stof, pollen en andere verontreinigingen, wat zorgt voor een gezondere leefomgeving.",
      icon: "🌿"
    },
    {
      title: "3. Energiebesparing",
      description: "Moderne aircosystemen zijn zeer energiezuinig en kunnen zelfs leiden tot lagere energiekosten wanneer ze correct worden gebruikt.",
      icon: "⚡"
    },
    {
      title: "4. Verhoogde Productiviteit",
      description: "Een aangename werktemperatuur zorgt voor betere concentratie en hogere productiviteit, zowel thuis als op kantoor.",
      icon: "💪"
    },
    {
      title: "5. Betere Nachtrust",
      description: "Een constante, comfortabele temperatuur in de slaapkamer draagt bij aan een betere nachtrust.",
      icon: "🌙"
    },
    {
      title: "6. Waardeverhoging van uw Woning",
      description: "Een airconditioning kan de waarde van uw woning verhogen en is een aantrekkelijke feature voor potentiële kopers.",
      icon: "🏠"
    },
    {
      title: "7. Vochtregulering",
      description: "Airconditioners helpen bij het reguleren van de luchtvochtigheid, wat schimmelvorming voorkomt en het comfort verhoogt.",
      icon: "💧"
    }
  ]

  return (
    <div className="space-y-8 mb-12">
      {voordelen.map((voordeel) => (
        <div key={voordeel.title} className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <span className="text-3xl">{voordeel.icon}</span>
            <div>
              <h2 className="text-xl font-semibold mb-2">{voordeel.title}</h2>
              <p className="text-muted-foreground">{voordeel.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}