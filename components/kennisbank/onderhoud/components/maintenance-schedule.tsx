export function MaintenanceSchedule() {
  const schedules = [
    {
      usage: "Normaal gebruik (thuis)",
      frequency: "1x per jaar",
      description: "Jaarlijkse onderhoudsbeurt voor optimale prestaties"
    },
    {
      usage: "Intensief gebruik (kantoor)",
      frequency: "2x per jaar",
      description: "Halfjaarlijks onderhoud voor continue prestaties"
    },
    {
      usage: "Industrieel gebruik",
      frequency: "4x per jaar",
      description: "Kwartaalonderhoud voor maximale betrouwbaarheid"
    }
  ]

  return (
    <div className="space-y-4 mb-8">
      {schedules.map((schedule, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold text-blue-600 mb-2">{schedule.usage}</h3>
          <p className="font-medium mb-1">Frequentie: {schedule.frequency}</p>
          <p className="text-muted-foreground">{schedule.description}</p>
        </div>
      ))}
    </div>
  )
}