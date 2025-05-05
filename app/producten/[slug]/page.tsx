import Link from "next/link"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ProductImage } from "@/components/ui/product-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedCTABanner } from "@/components/sections/enhanced-cta-banner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Phone, ChevronLeft, Info, Shield, Star, Zap, Volume2 } from "lucide-react"
import brandsData from "@/data/brands.json"
import daikinProductsData from "@/data/products-daikin.json"
import toshibaProductsData from "@/data/products-toshiba.json"
import samsungProductsData from "@/data/products-samsung.json" 
import lgProductsData from "@/data/products-lg.json"
import mitsubishiProductsData from "@/data/products-mitsubishi.json"
import staycoolProductsData from "@/data/products-staycool.json"
import tosotProductsData from "@/data/products-tosot.json"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Combine products from all brand files
  const daikinProducts = daikinProductsData.products || []
  const toshibaProducts = toshibaProductsData.products || []
  const samsungProducts = samsungProductsData.products || []
  const lgProducts = lgProductsData.products || []
  const mitsubishiProducts = mitsubishiProductsData.products || []
  const staycoolProducts = staycoolProductsData.products || []
  // Handle tosot products (which might be in array format)
  const tosotProducts = Array.isArray(tosotProductsData) ? 
    tosotProductsData : ((tosotProductsData as any).products || [])
  
  const allProducts = [
    ...daikinProducts,
    ...toshibaProducts,
    ...samsungProducts,
    ...lgProducts,
    ...mitsubishiProducts,
    ...staycoolProducts,
    ...tosotProducts
  ]
  
  const product = allProducts.find(product => product.slug === params.slug)
  
  if (!product) {
    return {
      title: "Product niet gevonden",
      description: "Het opgevraagde product kon niet worden gevonden"
    }
  }

  return {
    title: `${product.name} | Airco Installatie Geleen`,
    description: `${product.description.slice(0, 150)}...`,
    openGraph: {
      images: [product.images[0]]
    }
  }
}

// Pre-generate static paths for all products
export async function generateStaticParams() {
  const daikinProducts = daikinProductsData.products || []
  const toshibaProducts = toshibaProductsData.products || []
  const samsungProducts = samsungProductsData.products || []
  const lgProducts = lgProductsData.products || []
  const mitsubishiProducts = mitsubishiProductsData.products || []
  const staycoolProducts = staycoolProductsData.products || []
  // Handle tosot products (which might be in array format)
  const tosotProducts = Array.isArray(tosotProductsData) ? 
    tosotProductsData : ((tosotProductsData as any).products || [])
  
  const allProducts = [
    ...daikinProducts,
    ...toshibaProducts,
    ...samsungProducts,
    ...lgProducts,
    ...mitsubishiProducts,
    ...staycoolProducts,
    ...tosotProducts
  ]
  
  return allProducts.map(product => ({
    slug: product.slug
  }))
}

export default function ProductPage({ params }: Props) {
  // Combine products from all brand files
  const daikinProducts = daikinProductsData.products || []
  const toshibaProducts = toshibaProductsData.products || []
  const samsungProducts = samsungProductsData.products || []
  const lgProducts = lgProductsData.products || []
  const mitsubishiProducts = mitsubishiProductsData.products || []
  const staycoolProducts = staycoolProductsData.products || []
  // Handle tosot products (which might be in array format)
  const tosotProducts = Array.isArray(tosotProductsData) ? 
    tosotProductsData : ((tosotProductsData as any).products || [])
  
  const allProducts = [
    ...daikinProducts,
    ...toshibaProducts,
    ...samsungProducts,
    ...lgProducts,
    ...mitsubishiProducts,
    ...staycoolProducts,
    ...tosotProducts
  ]
  
  const product = allProducts.find(product => product.slug === params.slug)
  
  if (!product) {
    return notFound()
  }

  const brand = brandsData.brands.find(brand => brand.slug === product.brandSlug)
  
  // Get related products from the same brand (excluding current product)
  const relatedProducts = allProducts
    .filter(p => p.brandSlug === product.brandSlug && p.slug !== product.slug)
    .slice(0, 3)

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-6">
        <Link href="/producten" className="text-blue-600 hover:text-blue-800 flex items-center">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Terug naar alle producten
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          {/* Main product image */}
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white p-4">
            <div className="h-[500px]">
              <ProductImage
                src={product.images[0]}
                alt={product.name}
                width={800}
                height={1000}
                priority
              />
            </div>
          </div>
          
          {/* Image gallery (if multiple images) */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image: string, index: number) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white p-2 cursor-pointer hover:border-blue-300 transition-colors"
                >
                  <div className="aspect-square relative">
                    <OptimizedImage
                      src={image}
                      alt={`${product.name} - Afbeelding ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
              <Link href={`/merken/${product.brandSlug}`} className="hover:underline">{product.brand}</Link>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 capitalize">{product.type}</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
            
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20">
                <Star className="h-3 w-3 mr-1" />
                Energielabel {product.specifications.energieLabel}
              </span>
              
              <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                <Volume2 className="h-3 w-3 mr-1" />
                {product.specifications.geluidsniveau}
              </span>
              
              <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                <Zap className="h-3 w-3 mr-1" />
                {product.specifications.vermogenKoelen}
              </span>
            </div>
          </div>
          
          <div className="prose prose-blue max-w-none">
            <p>{product.description}</p>
          </div>
          
          <div className="border-t border-b border-gray-200 py-5">
            <h2 className="font-semibold text-lg mb-3">Belangrijkste kenmerken</h2>
            <ul className="space-y-2">
              {product.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex gap-3">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-blue-800">Airco adviseur nodig?</p>
              <p className="text-sm text-blue-700">
                We helpen u graag met een persoonlijk adviesgesprek om de juiste
                keuze te maken. Bel ons direct of vraag een offerte aan.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" asChild>
              <Link href="tel:0462021430">
                <Phone className="h-4 w-4" />
                <span>046 202 1430</span>
              </Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="/offerte">
                Offerte aanvragen
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <EnhancedCTABanner theme="light" />

      <Tabs defaultValue="details" className="mt-12">
        <TabsList className="mb-4">
          <TabsTrigger value="details">Productdetails</TabsTrigger>
          <TabsTrigger value="specs">Specificaties</TabsTrigger>
          <TabsTrigger value="brand">Over {product.brand}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2 prose prose-blue max-w-none">
              <h2>Over de {product.name}</h2>
              <p>{product.description}</p>
              <p>
                De {product.name} is een uitstekende keuze voor wie op zoek is naar een betrouwbare, 
                energiezuinige en stijlvolle airconditioning. Met een energielabel van {product.specifications.energieLabel} 
                bespaart u aanzienlijk op uw energierekening, terwijl het fluisterstille 
                geluidsniveau van {product.specifications.geluidsniveau} zorgt dat u ongestoord kunt genieten 
                van een aangenaam binnenklimaat.
              </p>
              
              <h3>Comfortabel klimaat het hele jaar door</h3>
              <p>
                Deze airco is niet alleen perfect voor koeling in de zomer, maar dient ook 
                uitstekend als verwarmingssysteem in de koudere maanden. Met een vermogen van 
                {product.specifications.vermogenKoelen} is deze unit geschikt voor ruimtes van 
                gemiddelde grootte, zoals een woon- of slaapkamer.
              </p>
              
              <h3>Slimme technologie</h3>
              <p>
                Dankzij de smart control functies kunt u uw {product.name} eenvoudig bedienen via 
                uw smartphone, zelfs als u niet thuis bent. Zo komt u altijd thuis in een perfect 
                geklimatiseerde ruimte. De geavanceerde luchtzuiveringssystemen zorgen bovendien 
                voor gezondere lucht in uw woning.
              </p>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Garantie & Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">5 jaar garantie</p>
                      <p className="text-sm text-muted-foreground">Op product en installatie</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Professionele installatie</p>
                      <p className="text-sm text-muted-foreground">Door gecertificeerde monteurs</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Info className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Volledig advies</p>
                      <p className="text-sm text-muted-foreground">Inclusief capaciteitsberekening</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/offerte">
                      Offerte aanvragen
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="specs">
          <div className="bg-white rounded-lg border overflow-hidden">
            <div className="divide-y">
              <div className="grid grid-cols-3 p-4">
                <div className="font-medium">Specificatie</div>
                <div className="font-medium col-span-2">Waarde</div>
              </div>
              
              <div className="grid grid-cols-3 p-4">
                <div className="text-muted-foreground">Merk</div>
                <div className="col-span-2">{product.brand}</div>
              </div>
              
              <div className="grid grid-cols-3 p-4 bg-gray-50">
                <div className="text-muted-foreground">Type</div>
                <div className="col-span-2 capitalize">{product.type}</div>
              </div>
              
              <div className="grid grid-cols-3 p-4">
                <div className="text-muted-foreground">Energielabel</div>
                <div className="col-span-2">{product.specifications.energieLabel}</div>
              </div>
              
              <div className="grid grid-cols-3 p-4 bg-gray-50">
                <div className="text-muted-foreground">Geluidsniveau</div>
                <div className="col-span-2">{product.specifications.geluidsniveau}</div>
              </div>
              
              <div className="grid grid-cols-3 p-4">
                <div className="text-muted-foreground">Vermogen koelen</div>
                <div className="col-span-2">{product.specifications.vermogenKoelen}</div>
              </div>
              
              <div className="grid grid-cols-3 p-4 bg-gray-50">
                <div className="text-muted-foreground">Toepassingen</div>
                <div className="col-span-2">Woning, Kantoor, Slaapkamer</div>
              </div>
              
              <div className="grid grid-cols-3 p-4">
                <div className="text-muted-foreground">Smart control</div>
                <div className="col-span-2">Ja, via app</div>
              </div>
              
              <div className="grid grid-cols-3 p-4 bg-gray-50">
                <div className="text-muted-foreground">Garantie</div>
                <div className="col-span-2">5 jaar op product en installatie</div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="brand">
          {brand && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2 prose prose-blue max-w-none">
                <h2>Over {brand.name}</h2>
                <p>{brand.description}</p>
                
                <h3>Waarom kiezen voor {brand.name}?</h3>
                <ul>
                  {brand.features.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <p>
                  Als erkend {brand.name} dealer zorgen wij voor een perfecte installatie 
                  volgens de richtlijnen van de fabrikant. Zo kunt u rekenen op jarenlang 
                  probleemloos gebruik van uw airconditioning.
                </p>
                
                <p>
                  <Link href={`/merken/${brand.slug}`} className="text-blue-600 hover:text-blue-800">
                    Meer informatie over {brand.name}
                  </Link>
                </p>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Andere {brand.name} producten</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedProducts.length > 0 ? (
                      relatedProducts.map(related => (
                        <div key={related.slug} className="flex gap-3 items-center">
                          <div className="h-12 w-12 relative flex-shrink-0 rounded border overflow-hidden" 
                               style={{ backgroundColor: '#f3f4f6' }}>
                            <OptimizedImage
                              src={related.images[0]}
                              alt={related.name}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <Link 
                              href={`/producten/${related.slug}`}
                              className="font-medium text-sm text-blue-600 hover:text-blue-800"
                            >
                              {related.name}
                            </Link>
                            <p className="text-xs text-muted-foreground capitalize">{related.type}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Geen gerelateerde producten gevonden.
                      </p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/merken/${brand.slug}`}>
                        Bekijk alle {brand.name} producten
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Related products section */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Gerelateerde producten</h2>
          <Link 
            href="/producten" 
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
          >
            Bekijk alle producten
            <ChevronLeft className="ml-1 h-4 w-4 rotate-180" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.length > 0 ? (
            relatedProducts.map(related => (
              <Card key={related.slug} className="overflow-hidden flex flex-col h-full">
                <div className="h-[300px]">
                  <ProductImage
                    src={related.images[0]}
                    alt={related.name}
                    width={300}
                    height={400}
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{related.name}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700">
                      {related.specifications.energieLabel}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                      {related.specifications.geluidsniveau}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {related.description.substring(0, 100)}...
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/producten/${related.slug}`}>
                      Bekijk product
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-4 text-center py-12 text-muted-foreground">
              Geen gerelateerde producten gevonden.
            </div>
          )}
        </div>
      </section>

      <div className="mt-16">
        <EnhancedCTABanner theme="dark" />
      </div>
    </div>
  )
}
