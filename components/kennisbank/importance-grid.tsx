const importanceItems = [
  {
    title: '1. Energieverbruik',
    description: 'Hogere waarden betekenen lager energieverbruik',
    bgColor: 'bg-green-50'
  },
  {
    title: '2. Kostenbesparingen',
    description: 'Energiezuinige systemen verlagen uw energierekening',
    bgColor: 'bg-blue-50'
  },
  {
    title: '3. Milieuimpact',
    description: 'Efficiëntere systemen zijn beter voor het milieu',
    bgColor: 'bg-yellow-50'
  },
  {
    title: '4. Wetgeving',
    description: 'Minimale efficiëntie-eisen worden steeds strenger',
    bgColor: 'bg-purple-50'
  }
]

export function ImportanceGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      {importanceItems.map((item, index) => (
        <div key={index} className={`${item.bgColor} p-4 rounded-lg`}>
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}