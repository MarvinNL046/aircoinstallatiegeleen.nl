export function IdealValues() {
  const values = [
    { value: "21°C", label: "Ideale binnentemperatuur" },
    { value: "40-60%", label: "Optimale luchtvochtigheid" },
    { value: "4-6×", label: "Luchtverversing per uur" }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      {values.map((item, index) => (
        <div key={index} className={`p-4 rounded-lg text-center ${
          index === 0 ? 'bg-blue-50' :
          index === 1 ? 'bg-green-50' :
          'bg-purple-50'
        }`}>
          <p className={`text-3xl font-bold mb-2 ${
            index === 0 ? 'text-blue-600' :
            index === 1 ? 'text-green-600' :
            'text-purple-600'
          }`}>{item.value}</p>
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  )
}