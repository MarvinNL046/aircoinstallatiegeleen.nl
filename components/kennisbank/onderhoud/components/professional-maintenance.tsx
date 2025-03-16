export function ProfessionalMaintenance() {
  const professionalTasks = [
    {
      task: "Koudemiddel bijvullen",
      reason: "Vereist speciale certificering en apparatuur"
    },
    {
      task: "Elektrische controles",
      reason: "Voor veiligheid en conformiteit"
    },
    {
      task: "Systeemoptimalisatie",
      reason: "Specialistische kennis vereist"
    },
    {
      task: "Reparaties",
      reason: "Garantiebehoud en betrouwbaarheid"
    }
  ]

  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-8">
      <ul className="space-y-4">
        {professionalTasks.map((task, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm">
              {index + 1}
            </span>
            <div>
              <p className="font-medium">{task.task}</p>
              <p className="text-sm text-blue-600">{task.reason}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}