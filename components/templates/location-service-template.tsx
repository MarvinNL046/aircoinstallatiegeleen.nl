import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { CheckCircle } from "lucide-react"

interface LocationServiceTemplateProps {
  dienst: {
    title: string
    description: string
    features: string[]
  }
  stad: {
    title: string
    region: string
  }
}

export function LocationServiceTemplate({ dienst, stad }: LocationServiceTemplateProps) {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight">
        {dienst.title} in {stad.title}
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">
        {dienst.description} in de regio {stad.region}
      </p>
      
      <Card className="mt-8 p-6">
        <h2 className="text-2xl font-semibold">Onze Service Kenmerken</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {dienst.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-8">
          <Button size="lg">
            Vraag een Offerte Aan
          </Button>
        </div>
      </Card>
    </div>
  )
}