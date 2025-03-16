export function IdealValues() {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <p className="text-3xl font-bold text-blue-600 mb-2">21°C</p>
        <p className="text-sm">Ideale binnentemperatuur</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg text-center">
        <p className="text-3xl font-bold text-green-600 mb-2">40-60%</p>
        <p className="text-sm">Optimale luchtvochtigheid</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg text-center">
        <p className="text-3xl font-bold text-purple-600 mb-2">4-6×</p>
        <p className="text-sm">Luchtverversing per uur</p>
      </div>
    </div>
  )
}