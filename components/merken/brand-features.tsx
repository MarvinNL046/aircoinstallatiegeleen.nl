import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

interface BrandFeaturesProps {
  brand: {
    name: string
    features: string[]
  }
}

export function BrandFeatures({ brand }: BrandFeaturesProps) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Kenmerken</h2>
      <ul className="space-y-3">
        {brand.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}