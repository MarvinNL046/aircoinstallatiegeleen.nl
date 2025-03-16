export function CostBenefits() {
  const benefits = [
    {
      category: "Directe Besparingen",
      items: [
        "Lagere energiekosten door efficiënt gebruik",
        "Verminderde onderhoudskosten van andere klimaatsystemen",
        "Langere levensduur van elektronische apparatuur"
      ]
    },
    {
      category: "Indirecte Voordelen",
      items: [
        "Hogere productiviteit door beter werkklimaat",
        "Minder ziekteverzuim door betere luchtkwaliteit",
        "Verhoogde waarde van uw woning"
      ]
    },
    {
      category: "Lange Termijn",
      items: [
        "Duurzame investering in comfort",
        "Toekomstbestendige klimaatbeheersing",
        "Bijdrage aan duurzaam energiegebruik"
      ]
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-600 mb-4">{benefit.category}</h3>
          <ul className="space-y-3">
            {benefit.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}