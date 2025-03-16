import { Card } from "@/components/ui/card"

interface BrandModelsProps {
  brand: {
    name: string
  }
}

export function BrandModels({ brand }: BrandModelsProps) {
  const models = getBrandModels(brand.name)

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Populaire Modellen</h2>
      <div className="grid gap-4">
        {models.map((model, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{model.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{model.description}</p>
            <div className="flex flex-wrap gap-2">
              {model.features.map((feature, featureIndex) => (
                <span
                  key={featureIndex}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

function getBrandModels(brandName: string) {
  const models = {
    "Daikin": [
      {
        name: "Perfera FTXM-R",
        description: "Perfect voor residentieel gebruik met uitstekende energie-efficiëntie",
        features: ["SEER tot 8.65", "Fluisterstil", "Flash Streamer"]
      },
      {
        name: "Stylish FTXA-AW",
        description: "Design model met geavanceerde functies",
        features: ["3D luchtstroom", "Coanda effect", "Smart control"]
      },
      {
        name: "Emura FTXJ-MW",
        description: "Premium design met hoogwaardige prestaties",
        features: ["2-zone bewegingssensor", "WiFi standaard", "Multi-monitoring"]
      }
    ],
    "Mitsubishi Electric": [
      {
        name: "MSZ-LN Deluxe",
        description: "Premium wandmodel met unieke features",
        features: ["3D i-see sensor", "Plasma Quad Plus", "Dubbele lamellen"]
      },
      {
        name: "MSZ-AP Design",
        description: "Stijlvol en efficiënt wandmodel",
        features: ["Weekly timer", "Dual Barrier Coating", "WiFi control"]
      },
      {
        name: "MFZ-KT Vloermodel",
        description: "Krachtig vloermodel voor optimaal comfort",
        features: ["Hyper Heating", "Dubbele luchtstroom", "Auto Vane"]
      }
    ],
    "Samsung": [
      {
        name: "Wind-Free Pure 1.0",
        description: "Innovatief model met WindFree technologie",
        features: ["AI Auto Comfort", "PM1.0 filter", "Triple protector"]
      },
      {
        name: "Cebu",
        description: "Betrouwbaar basis model met goede prestaties",
        features: ["Fast cooling", "Auto clean", "Good Sleep"]
      },
      {
        name: "Better",
        description: "Uitgebreid model met extra features",
        features: ["5-step cooling", "Easy filter", "Digital Inverter"]
      }
    ],
    "Toshiba": [
      {
        name: "Daiseikai 9",
        description: "Premium model met maximaal comfort",
        features: ["HADA Care", "Ultra Pure filter", "Fireplace mode"]
      },
      {
        name: "Shorai Edge",
        description: "Modern design met uitstekende prestaties",
        features: ["Magic Coil", "Self cleaning", "Voice control"]
      },
      {
        name: "Seiya",
        description: "Compact en efficiënt instapmodel",
        features: ["Eco mode", "Hi-power", "Quiet operation"]
      }
    ],
    "Mitsubishi Heavy Industries": [
      {
        name: "Diamond ZSX",
        description: "Topmodel met geavanceerde features",
        features: ["Allergen Clear", "3D Auto", "Silent mode"]
      },
      {
        name: "Premium SRK-ZS",
        description: "Hoogwaardig model voor optimale prestaties",
        features: ["Eco operation", "Weekly timer", "Self clean"]
      },
      {
        name: "Kireia",
        description: "Stijlvol design met goede prestaties",
        features: ["Motion sensor", "Anti-bacterial", "Auto restart"]
      }
    ],
    "LG": [
      {
        name: "Artcool Gallery",
        description: "Design model met verwisselbaar frontpaneel",
        features: ["ThinQ", "Dual Inverter", "UV nano"]
      },
      {
        name: "DualCool",
        description: "Krachtig model voor grote ruimtes",
        features: ["10 Year warranty", "Smart Diagnosis", "Auto cleaning"]
      },
      {
        name: "Standard Plus",
        description: "Betrouwbaar basismodel",
        features: ["Gold Fin", "Low noise", "Energy saving"]
      }
    ],
    "Tosot": [
      {
        name: "Clivia",
        description: "Premium wandmodel met uitstekende prestaties",
        features: ["Smart WiFi", "Turbo cooling", "Self cleaning"]
      },
      {
        name: "Pular",
        description: "Veelzijdig model voor middelgrote ruimtes",
        features: ["I-Feel technologie", "Sleep mode", "Anti-cold air"]
      },
      {
        name: "Cosmo",
        description: "Modern design met geavanceerde functies",
        features: ["ECO mode", "Timer functie", "Auto restart"]
      }
    ],
    "Gree": [
      {
        name: "Amber",
        description: "Premium model met uitgebreide features",
        features: ["G-Tech inverter", "WiFi", "Self clean"]
      },
      {
        name: "Bora",
        description: "Populair model voor residentieel gebruik",
        features: ["Cold plasma", "Intelligent defrost", "Quiet operation"]
      },
      {
        name: "Lomo Eco",
        description: "Energiezuinig instapmodel",
        features: ["Eco mode", "Sleep function", "Auto restart"]
      }
    ]
  }

  return models[brandName as keyof typeof models]
}