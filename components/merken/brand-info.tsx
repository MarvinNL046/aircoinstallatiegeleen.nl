import { Card } from "@/components/ui/card"

interface BrandInfoProps {
  brand: {
    name: string
    description: string
  }
}

export function BrandInfo({ brand }: BrandInfoProps) {
  const brandInfo = getBrandInfo(brand.name)

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Over {brand.name}</h2>
      <p className="text-muted-foreground mb-6">{brand.description}</p>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Geschiedenis</h3>
          <p className="text-muted-foreground">{brandInfo.history}</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Innovatie</h3>
          <p className="text-muted-foreground">{brandInfo.innovation}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Duurzaamheid</h3>
          <p className="text-muted-foreground">{brandInfo.sustainability}</p>
        </div>
      </div>
    </Card>
  )
}

function getBrandInfo(brandName: string) {
  const brandInfo = {
    "Daikin": {
      history: "Daikin, opgericht in 1924 in Japan, is uitgegroeid tot een wereldleider in klimaatbeheersing. Met meer dan 90 jaar ervaring staat het bedrijf bekend om zijn baanbrekende innovaties.",
      innovation: "Daikin investeert jaarlijks fors in R&D, wat heeft geleid tot revolutionaire technologieën zoals de VRV-systemen en het gebruik van het energiezuinige R-32 koudemiddel.",
      sustainability: "Daikin zet zich in voor duurzaamheid met energiezuinige producten en een circulaire economie voor koudemiddelen. Het bedrijf streeft naar CO2-neutraliteit in 2050.",
    },
    "Mitsubishi Electric": {
      history: "Mitsubishi Electric, opgericht in 1921, is een gerenommeerd Japans bedrijf dat bekend staat om zijn hoogwaardige elektronica en klimaatsystemen.",
      innovation: "Het bedrijf staat voorop in technologische ontwikkeling met innovaties zoals de Hyper Heating technologie en geavanceerde filtersystemen.",
      sustainability: "Mitsubishi Electric's Environmental Vision 2050 richt zich op het verminderen van CO2-uitstoot en het creëren van een recycling-gebaseerde samenleving.",
    },
    "Samsung": {
      history: "Samsung's airconditioningdivisie heeft zich ontwikkeld tot een van de meest innovatieve spelers in de markt, met een focus op smart home integratie.",
      innovation: "Samsung's WindFree technologie en AI-gestuurde klimaatbeheersing zijn voorbeelden van hun innovatieve aanpak.",
      sustainability: "Het bedrijf zet zich in voor duurzame productie en energiezuinige oplossingen met hun SmartThings energiemanagement.",
    },
    "Toshiba": {
      history: "Toshiba heeft een rijke geschiedenis in klimaattechnologie die teruggaat tot 1875, met talloze innovaties in airconditioning.",
      innovation: "De HADA Care technologie en hybrid inverter zijn kenmerkende innovaties van Toshiba's focus op comfort en efficiëntie.",
      sustainability: "Toshiba's Environmental Vision 2050 richt zich op CO2-reductie en duurzame productinnovatie.",
    },
    "Mitsubishi Heavy Industries": {
      history: "MHI, opgericht in 1884, combineert industriële expertise met innovatieve klimaatoplossingen.",
      innovation: "Het bedrijf staat bekend om zijn Silent Operation technologie en geavanceerde inverter systemen.",
      sustainability: "MHI focust op duurzame technologieën en energiezuinige oplossingen voor een betere toekomst.",
    },
    "LG": {
      history: "LG's airconditioningdivisie heeft zich ontwikkeld tot een technologische voorloper met focus op smart features.",
      innovation: "De Dual Inverter Compressor en ThinQ technologie zijn voorbeelden van LG's innovatieve aanpak.",
      sustainability: "LG streeft naar duurzaamheid door energiezuinige producten en milieuvriendelijke productieprocessen.",
    },
    "Tosot": {
      history: "Tosot, onderdeel van de Gree Electric groep, biedt hoogwaardige airconditioners tegen een competitieve prijs.",
      innovation: "Het merk staat bekend om zijn I-Feel technologie en intelligente klimaatbeheersing.",
      sustainability: "Tosot zet in op energiezuinige technologieën en duurzame productie.",
    },
    "Gree": {
      history: "Gree is uitgegroeid tot 's werelds grootste fabrikant van airconditioners met focus op kwaliteit en innovatie.",
      innovation: "Het bedrijf ontwikkelt eigen technologieën zoals G-Tech Inverter en intelligente klimaatbeheersing.",
      sustainability: "Gree investeert in duurzame productie en energiezuinige technologieën.",
    }
  }

  return brandInfo[brandName as keyof typeof brandInfo]
}