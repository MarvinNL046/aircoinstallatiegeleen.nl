import Link from "next/link"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ProductCardImage } from "@/components/ui/product-card-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedCTABanner } from "@/components/sections/enhanced-cta-banner"
import brandsData from "@/data/brands.json"
import daikinProductsData from "@/data/products-daikin.json"
import toshibaProductsData from "@/data/products-toshiba.json"
import samsungProductsData from "@/data/products-samsung.json" 
import lgProductsData from "@/data/products-lg.json"
import mitsubishiProductsData from "@/data/products-mitsubishi.json"
import staycoolProductsData from "@/data/products-staycool.json"
import { Phone, MailIcon, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Airco Producten | Alle topmerken airconditioners",
  description: "Ontdek ons assortiment airco producten in Geleen. Kwaliteitsvolle airconditioning van Daikin, Toshiba, Mitsubishi, LG en meer. Vraag direct een offerte aan!",
  openGraph: {
    title: "Airco Producten | Kwaliteitsvolle airconditioners",
    description: "Ontdek ons assortiment airco producten in Geleen. Kwaliteitsvolle airconditioning van topmerken zoals Daikin, Toshiba en meer.",
    images: ["/images/producten/daikin-emura-wit.webp"]
  }
}

interface BrandGroup {
  brand: string
  brandSlug: string
  description: string
  features: string[]
  products: any[]
}

export default function ProductsPage() {
  // Combine products from all brand files
  const daikinProducts = daikinProductsData.products || []
  const toshibaProducts = toshibaProductsData.products || []
  const samsungProducts = samsungProductsData.products || []
  const lgProducts = lgProductsData.products || []
  const mitsubishiProducts = mitsubishiProductsData.products || []
  const staycoolProducts = staycoolProductsData.products || []
  
  const products = [
    ...daikinProducts,
    ...toshibaProducts,
    ...samsungProducts,
    ...lgProducts,
    ...mitsubishiProducts,
    ...staycoolProducts
  ]
  const { brands } = brandsData

  if (!products || products.length === 0) {
    return notFound()
  }

  // Group products by brand
  const brandGroups: BrandGroup[] = []
  
  products.forEach(product => {
    const existingGroup = brandGroups.find(group => group.brandSlug === product.brandSlug)
    
    if (existingGroup) {
      existingGroup.products.push(product)
    } else {
      const brandInfo = brands.find(brand => brand.slug === product.brandSlug)
      
      if (brandInfo) {
        brandGroups.push({
          brand: brandInfo.name,
          brandSlug: brandInfo.slug,
          description: brandInfo.description,
          features: brandInfo.features,
          products: [product]
        })
      }
    }
  })

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          Airco Producten
        </h1>
        <p className="text-muted-foreground text-center mx-auto max-w-3xl">
          Ontdek ons uitgebreide assortiment hoogwaardige airconditioners van topmerken.
          Vind de perfecte airco voor uw woning of bedrijfspand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Waarom kiezen voor een airco van StayCool?</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5">✓</div>
              <div>
                <p className="font-medium">Professionele installatie</p>
                <p className="text-muted-foreground text-sm">Door ervaren en gecertificeerde monteurs</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5">✓</div>
              <div>
                <p className="font-medium">Uitsluitend A-merken</p>
                <p className="text-muted-foreground text-sm">Hoogwaardige kwaliteit en betrouwbaarheid</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5">✓</div>
              <div>
                <p className="font-medium">5 jaar garantie</p>
                <p className="text-muted-foreground text-sm">Op zowel de airco als de installatie</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5">✓</div>
              <div>
                <p className="font-medium">Persoonlijk advies</p>
                <p className="text-muted-foreground text-sm">Welke airco past het beste bij uw situatie?</p>
              </div>
            </li>
          </ul>
          <div className="pt-4">
            <h3 className="font-semibold mb-2">Neem direct contact op:</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="sm" className="gap-2 bg-green-600 hover:bg-green-700">
                <Link href="tel:0462021430">
                  <Phone className="h-4 w-4" />
                  <span>046 202 1430</span>
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="gap-2">
                <Link href="mailto:info@aircoinstallatiegeleen.nl">
                  <MailIcon className="h-4 w-4" />
                  <span>E-mail ons</span>
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="gap-2">
                <Link href="https://wa.me/0636481054" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <OptimizedImage 
            src="/images/producten/Haori-zwart-vooraanzicht_3_11zon.webp" 
            alt="Airco producten bij StayCool" 
            width={800} 
            height={600}
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <p className="text-xl font-semibold mb-2">Vind uw ideale airco</p>
              <p className="text-sm opacity-90">Energiezuinig, stil en betrouwbaar</p>
            </div>
          </div>
        </div>
      </div>

      <EnhancedCTABanner theme="light" />

      {brandGroups.map((brandGroup, index) => (
        <section key={brandGroup.brandSlug} className={`py-12 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
          <div className="container">
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                {brandGroup.brand} Airconditioners
              </h2>
              <p className="text-muted-foreground max-w-3xl">
                {brandGroup.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {brandGroup.features.map((feature: string, idx: number) => (
                  <span key={idx} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandGroup.products.map((product) => (
                <Card key={product.slug} className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-md">
                  <div className="h-[300px]">
                    <ProductCardImage
                      src={product.images[0]}
                      alt={product.name}
                      width={400}
                      height={600}
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {product.description.substring(0, 120)}...
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pb-4">
                    <div className="space-y-1.5">
                      <div className="text-sm font-medium">Eigenschappen:</div>
                      <ul className="text-sm text-muted-foreground space-y-1.5">
                        {product.features.slice(0, 3).map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-sm flex space-x-3 pt-2">
                        <span className="flex items-center gap-1 text-orange-600">
                          <span className="inline-block w-3 h-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                          </span>
                          <span>{product.specifications.energieLabel}</span>
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <span className="inline-block w-3 h-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 3.75a.75.75 0 0 1 .75.75v13.19l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6.75 6.75a.75.75 0 0 1-1.06 0l-6.75-6.75a.75.75 0 1 1 1.06-1.06l5.47 5.47V4.5a.75.75 0 0 1 .75-.75Z" />
                            </svg>
                          </span>
                          <span>{product.specifications.geluidsniveau}</span>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex gap-2">
                    <Button asChild className="flex-1">
                      <Link href={`/producten/${product.slug}`}>
                        Bekijk details
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/offerte">
                        Offerte aanvragen
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                href={`/merken/${brandGroup.brandSlug}`} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Ontdek meer over {brandGroup.brand}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="py-12">
        <div className="container">
          <div className="flex flex-col gap-3 mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Hulp nodig bij het kiezen?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl">
              Onze airco-experts staan voor u klaar om u te helpen bij het kiezen van de juiste airconditioning voor uw situatie. Vraag vrijblijvend een offerte aan of neem contact met ons op voor persoonlijk advies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-sm border-blue-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Persoonlijk advies</CardTitle>
                <CardDescription>
                  Ontvang deskundig advies over de beste airco voor uw woning of bedrijfspand
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5 text-xs">✓</div>
                    <span className="text-sm">Vrijblijvend adviesgesprek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5 text-xs">✓</div>
                    <span className="text-sm">Berekening van de juiste capaciteit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5 text-xs">✓</div>
                    <span className="text-sm">Advies over energiebesparing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild>
                  <Link href="/contact">
                    Contact opnemen
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="shadow-sm border-blue-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Offerte aanvragen</CardTitle>
                <CardDescription>
                  Ontvang binnen 24 uur een vrijblijvende offerte op maat
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5 text-xs">✓</div>
                    <span className="text-sm">Gedetailleerde kostenspecificatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5 text-xs">✓</div>
                    <span className="text-sm">Meerdere opties om te vergelijken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5 text-xs">✓</div>
                    <span className="text-sm">No-nonsense, transparante prijzen</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild>
                  <Link href="/offerte">
                    Offerte aanvragen
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="shadow-sm border-blue-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Installatie & service</CardTitle>
                <CardDescription>
                  Professionele installatie en onderhoud van uw aircosysteem
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5 text-xs">✓</div>
                    <span className="text-sm">Installatie door gecertificeerde monteurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5 text-xs">✓</div>
                    <span className="text-sm">Onderhoudsabonnementen beschikbaar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mt-0.5 text-xs">✓</div>
                    <span className="text-sm">Snelle service bij storingen</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild>
                  <Link href="/diensten">
                    Meer over onze diensten
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <EnhancedCTABanner theme="dark" />
    </div>
  )
}
