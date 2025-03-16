export function MaintenanceImportance() {
  const benefits = [
    {
      title: "Langere Levensduur",
      description: "Tot 5 jaar extra levensduur met goed onderhoud"
    },
    {
      title: "Energiebesparing",
      description: "15-20% lagere energiekosten"
    },
    {
      title: "Betere Prestaties",
      description: "Optimale koeling en verwarming"
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
          <h3 className="font-semibold mb-2">{benefit.title}</h3>
          <p className="text-sm text-blue-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  )
}