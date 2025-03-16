export function MaintenanceChecklist() {
  const checklistItems = [
    {
      task: "Filters reinigen of vervangen",
      frequency: "Maandelijks",
      importance: "Essentieel"
    },
    {
      task: "Condensafvoer controleren",
      frequency: "3 maanden",
      importance: "Belangrijk"
    },
    {
      task: "Buitenunit schoonmaken",
      frequency: "6 maanden",
      importance: "Belangrijk"
    },
    {
      task: "Koudemiddel controleren",
      frequency: "Jaarlijks",
      importance: "Essentieel"
    }
  ]

  return (
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="border p-3 text-left">Onderhoudstaak</th>
            <th className="border p-3 text-left">Frequentie</th>
            <th className="border p-3 text-left">Belang</th>
          </tr>
        </thead>
        <tbody>
          {checklistItems.map((item, index) => (
            <tr key={index}>
              <td className="border p-3">{item.task}</td>
              <td className="border p-3">{item.frequency}</td>
              <td className="border p-3">
                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                  item.importance === 'Essentieel' 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {item.importance}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}