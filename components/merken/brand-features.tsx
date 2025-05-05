import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

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
      
      {/* Voorbeeld afbeelding van het merk */}
      <div className="mt-6 relative overflow-hidden rounded-lg border border-gray-200 h-[300px]"
           style={{ 
             backgroundColor: '#f3f4f6',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center'
           }}>
        <OptimizedImage 
          src={`/images/brands/${brand.name.toLowerCase().replace(/ /g, '-')}.webp`}
          alt={`${brand.name} feature image`}
          width={600}
          height={400}
          className="w-full h-full"
          objectFit="contain"
        />
      </div>
    </Card>
  )
}
