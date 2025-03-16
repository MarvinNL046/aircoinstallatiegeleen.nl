import { Card } from "@/components/ui/card"

interface BrandTechnologyProps {
  brand: {
    name: string
  }
}

export function BrandTechnology({ brand }: BrandTechnologyProps) {
  const technology = getBrandTechnology(brand.name)

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Technologie</h2>
      <div className="space-y-6">
        {technology.map((tech, index) => (
          <div key={index}>
            <h3 className="font-semibold text-blue-600 mb-2">{tech.name}</h3>
            <p className="text-muted-foreground mb-4">{tech.description}</p>
            <ul className="list-disc pl-5 space-y-1">
              {tech.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex} className="text-sm text-muted-foreground">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  )
}

function getBrandTechnology(brandName: string) {
  const technology = {
    "Daikin": [
      {
        name: "Flash Streamer Technologie",
        description: "Geavanceerd luchtzuiveringssysteem dat schadelijke stoffen afbreekt",
        benefits: [
          "Verwijdert 99.9% van virussen en bacteriën",
          "Neutraliseert geuren",
          "Verbetert de luchtkwaliteit"
        ]
      },
      {
        name: "Intelligent Thermal Sensor",
        description: "Detecteert temperatuurverschillen en past de luchtstroom aan",
        benefits: [
          "Optimale temperatuurverdeling",
          "Voorkomt tocht",
          "Energiezuinig comfort"
        ]
      }
    ],
    "Mitsubishi Electric": [
      {
        name: "Plasma Quad Plus",
        description: "Geavanceerd plasmafiltersysteem voor optimale luchtzuivering",
        benefits: [
          "Filtert microscopisch kleine deeltjes",
          "Verwijdert allergenen",
          "Neutraliseert virussen en bacteriën"
        ]
      },
      {
        name: "3D i-see Sensor",
        description: "Intelligente temperatuurmeting en -regeling",
        benefits: [
          "Detecteert menselijke activiteit",
          "Past klimaat automatisch aan",
          "Maximaliseert energiebesparing"
        ]
      }
    ],
    "Samsung": [
      {
        name: "WindFree™ Technologie",
        description: "Zorgt voor koeling zonder directe luchtstroom",
        benefits: [
          "Voorkomt koude tocht",
          "Gelijkmatige temperatuurverdeling",
          "Ultiem comfort"
        ]
      },
      {
        name: "AI Auto Comfort",
        description: "Kunstmatige intelligentie voor klimaatbeheersing",
        benefits: [
          "Leert van gebruikersvoorkeuren",
          "Optimaliseert energieverbruik",
          "Past zich automatisch aan"
        ]
      }
    ],
    "Toshiba": [
      {
        name: "HADA Care",
        description: "Speciale luchtstroom voor huidverzorging",
        benefits: [
          "Voorkomt uitdroging van de huid",
          "Indirect koeleffect",
          "Maximaal comfort"
        ]
      },
      {
        name: "Hybrid Inverter",
        description: "Geavanceerde compressortechnologie",
        benefits: [
          "Hoog rendement",
          "Stabiele temperatuur",
          "Laag energieverbruik"
        ]
      }
    ],
    "Mitsubishi Heavy Industries": [
      {
        name: "Silent Operation",
        description: "Geavanceerde geluidreductie technologie",
        benefits: [
          "Fluisterstille werking",
          "Verbeterd nachtcomfort",
          "Optimale prestaties"
        ]
      },
      {
        name: "3D Auto",
        description: "Driedimensionale luchtstroomregeling",
        benefits: [
          "Optimale luchtverdeling",
          "Aanpasbare luchtrichting",
          "Verbeterd comfort"
        ]
      }
    ],
    "LG": [
      {
        name: "Dual Inverter Compressor",
        description: "Energiezuinige compressortechnologie",
        benefits: [
          "Tot 70% energiebesparing",
          "Snellere koeling",
          "Langere levensduur"
        ]
      },
      {
        name: "UVnano",
        description: "UV-sterilisatietechnologie",
        benefits: [
          "Elimineert 99.9% van bacteriën",
          "Zelfreinigende functie",
          "Gezondere lucht"
        ]
      }
    ],
    "Tosot": [
      {
        name: "I-Feel",
        description: "Intelligente temperatuurregeling",
        benefits: [
          "Temperatuurmeting bij afstandsbediening",
          "Persoonlijk comfort",
          "Energiebesparing"
        ]
      },
      {
        name: "Multi-stage Filtration",
        description: "Geavanceerd filtratiesysteem",
        benefits: [
          "Meerdere filterlagen",
          "Effectieve stofverwijdering",
          "Verbeterde luchtkwaliteit"
        ]
      }
    ],
    "Gree": [
      {
        name: "G-Tech Inverter",
        description: "Eigen invertertechnologie",
        benefits: [
          "Hoge efficiëntie",
          "Stabiele werking",
          "Laag energieverbruik"
        ]
      },
      {
        name: "Cold Plasma Generator",
        description: "Geavanceerde luchtreiniging",
        benefits: [
          "Ionisatie technologie",
          "Verwijdert schadelijke stoffen",
          "Frisser binnenklimaat"
        ]
      }
    ]
  }

  return technology[brandName as keyof typeof technology]
}