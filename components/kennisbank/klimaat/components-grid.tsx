export function ComponentsGrid() {
  const components = [
    {
      title: "1. Temperatuurregeling",
      items: ["Verwarming", "Koeling", "Thermostaat"]
    },
    {
      title: "2. Luchtkwaliteit",
      items: ["Ventilatie", "Filtering", "Luchtreiniging"]
    },
    {
      title: "3. Vochtregulering",
      items: ["Ontvochtiging", "Bevochtiging", "Vochtmeting"]
    },
    {
      title: "4. Monitoring",
      items: ["Sensoren", "Smart controls", "Automatisering"]
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {components.map((component, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">{component.title}</h3>
          <ul className="list-disc pl-4">
            {component.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}