export function BenefitsDetails() {
  const details = [
    {
      title: "Optimaal Comfort het Hele Jaar Door",
      description: "Moderne airconditioners kunnen zowel koelen als verwarmen, waardoor u het hele jaar door kunt genieten van een aangename temperatuur.",
      features: [
        "Instelbare temperatuur per ruimte",
        "Snelle opwarming en afkoeling",
        "Gelijkmatige temperatuurverdeling"
      ]
    },
    {
      title: "Betere Luchtkwaliteit",
      description: "Airconditioners filteren de lucht en verwijderen stof, pollen en andere verontreinigingen, wat zorgt voor een gezondere leefomgeving.",
      features: [
        "Geavanceerde filtersystemen",
        "Verwijdering van allergenen",
        "Reductie van luchtvervuiling"
      ]
    },
    {
      title: "Energiebesparing",
      description: "Moderne aircosystemen zijn zeer energiezuinig en kunnen zelfs leiden tot lagere energiekosten wanneer ze correct worden gebruikt.",
      features: [
        "Hoge SCOP en SEER waarden",
        "Slimme temperatuurregeling",
        "Energiebesparende modi"
      ]
    }
  ]

  return (
    <div className="space-y-8 mb-8">
      {details.map((detail, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">{detail.title}</h3>
          <p className="mb-4 text-muted-foreground">{detail.description}</p>
          <ul className="space-y-2">
            {detail.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}