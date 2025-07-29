"use client"

import Image from "next/image"
import { useState } from "react"

const brands = [
  { name: "Daikin", logo: "/images/producten/daikin-logo.png" },
  { name: "LG", logo: "/images/producten/lg-logo.png" },
  { name: "Samsung", logo: "/images/producten/samsung-logo.png" },
  { name: "Mitsubishi", logo: "/images/producten/mitsubishi-logo.png" },
  { name: "Toshiba", logo: "/images/producten/toshiba-logo.png" },
  { name: "Tosot", logo: "/images/producten/tosot-logo.png" }
]

export function BrandLogos() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (brandName: string) => {
    setImageErrors(prev => new Set(prev).add(brandName))
  }

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Wij Leveren Alle Topmerken
          </h2>
          <p className="text-gray-600">
            Als erkend installateur werken wij met de beste airco merken
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="group relative bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {imageErrors.has(brand.name) ? (
                <div className="h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                    {brand.name}
                  </span>
                </div>
              ) : (
                <div className="relative h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} airco`}
                    fill
                    className="object-contain"
                    onError={() => handleImageError(brand.name)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Niet het merk dat u zoekt? Neem contact op voor alle mogelijkheden.
          </p>
        </div>
      </div>
    </section>
  )
}