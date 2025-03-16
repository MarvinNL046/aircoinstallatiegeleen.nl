"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface PriceRange {
  min: number
  max: number
}

const roomSizes = {
  small: { size: "< 20m²", price: { min: 1000, max: 1500 } },
  medium: { size: "20-35m²", price: { min: 1500, max: 2000 } },
  large: { size: "35-50m²", price: { min: 2000, max: 2500 } },
  xlarge: { size: "> 50m²", price: { min: 2500, max: 3500 } },
}

const systemTypes = {
  basic: { name: "Basis (alleen koelen)", modifier: 1 },
  standard: { name: "Standaard (koelen & verwarmen)", modifier: 1.2 },
  premium: { name: "Premium (koelen, verwarmen & zuiveren)", modifier: 1.4 },
}

const brands = {
  budget: { name: "Budget", modifier: 0.9 },
  midrange: { name: "Middensegment", modifier: 1 },
  premium: { name: "Premium", modifier: 1.2 },
}

export function PriceCalculator() {
  const [roomSize, setRoomSize] = useState<keyof typeof roomSizes>("small")
  const [systemType, setSystemType] = useState<keyof typeof systemTypes>("basic")
  const [brand, setBrand] = useState<keyof typeof brands>("midrange")
  const [showPrice, setShowPrice] = useState(false)

  const calculatePrice = (): PriceRange => {
    const basePrice = roomSizes[roomSize].price
    const totalModifier = systemTypes[systemType].modifier * brands[brand].modifier

    return {
      min: Math.round(basePrice.min * totalModifier),
      max: Math.round(basePrice.max * totalModifier),
    }
  }

  const price = calculatePrice()

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Bereken uw Indicatieve Prijs</h2>
      
      <div className="space-y-6">
        <div>
          <Label className="text-base">Kamergrootte</Label>
          <Select value={roomSize} onValueChange={(value: keyof typeof roomSizes) => setRoomSize(value)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Selecteer kamergrootte" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(roomSizes).map(([key, { size }]) => (
                <SelectItem key={key} value={key}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-base">Type Systeem</Label>
          <RadioGroup
            value={systemType}
            onValueChange={(value: keyof typeof systemTypes) => setSystemType(value)}
            className="mt-2 grid gap-2"
          >
            {Object.entries(systemTypes).map(([key, { name }]) => (
              <div key={key} className="flex items-center space-x-2">
                <RadioGroupItem value={key} id={`system-${key}`} />
                <Label htmlFor={`system-${key}`}>{name}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label className="text-base">Merk Segment</Label>
          <RadioGroup
            value={brand}
            onValueChange={(value: keyof typeof brands) => setBrand(value)}
            className="mt-2 grid gap-2"
          >
            {Object.entries(brands).map(([key, { name }]) => (
              <div key={key} className="flex items-center space-x-2">
                <RadioGroupItem value={key} id={`brand-${key}`} />
                <Label htmlFor={`brand-${key}`}>{name}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Button 
          className="w-full" 
          onClick={() => setShowPrice(true)}
        >
          Bereken Prijs
        </Button>

        {showPrice && (
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-lg font-semibold">Indicatieve Prijs:</p>
            <p className="text-2xl font-bold text-primary">
              €{price.min} - €{price.max}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              * Dit is een indicatieve prijs inclusief installatie en BTW. 
              Voor een exacte offerte kunt u contact met ons opnemen.
            </p>
          </div>
        )}
      </div>
    </Card>
  )
}