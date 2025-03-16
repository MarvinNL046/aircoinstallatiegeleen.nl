interface EfficiencyTableProps {
  type: 'seer' | 'scop'
}

const tableData = {
  seer: {
    title: 'SEER',
    rows: [
      { value: '> 8.5', classification: 'Zeer energiezuinig', label: 'A+++' },
      { value: '6.1 - 8.5', classification: 'Energiezuinig', label: 'A++' },
      { value: '5.6 - 6.1', classification: 'Gemiddeld', label: 'A+' },
      { value: '< 5.6', classification: 'Minder efficiënt', label: 'A of lager' }
    ]
  },
  scop: {
    title: 'SCOP',
    rows: [
      { value: '> 5.1', classification: 'Zeer energiezuinig', label: 'A+++' },
      { value: '4.6 - 5.1', classification: 'Energiezuinig', label: 'A++' },
      { value: '4.0 - 4.6', classification: 'Gemiddeld', label: 'A+' },
      { value: '< 4.0', classification: 'Minder efficiënt', label: 'A of lager' }
    ]
  }
}

export function EfficiencyTable({ type }: EfficiencyTableProps) {
  const data = tableData[type]

  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="border p-3 text-left">{data.title} Waarde</th>
            <th className="border p-3 text-left">Classificatie</th>
            <th className="border p-3 text-left">Energielabel</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index}>
              <td className="border p-3">{row.value}</td>
              <td className="border p-3">{row.classification}</td>
              <td className={`border p-3 font-semibold ${
                row.label === 'A+++' ? 'text-green-600' :
                row.label === 'A++' ? 'text-green-500' :
                row.label === 'A+' ? 'text-green-400' :
                'text-gray-600'
              }`}>
                {row.label}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}