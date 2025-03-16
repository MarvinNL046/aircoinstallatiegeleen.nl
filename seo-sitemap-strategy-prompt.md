# SEO en Sitemap Optimalisatie Prompt voor Next.js Project

## Context

Implementeer een geavanceerde SEO en sitemap strategie gebaseerd op het succesvolle Airco Offerte Limburg project. Dit project behaalde uitstekende indexeringsresultaten door een combinatie van:

1. Hiërarchische sitemap structuur
2. Dynamische metadata per pagina
3. Uitgebreide structured data
4. Locatie-gebaseerde content strategie
5. Meerdere geoptimaliseerde sitemaps

## Vereisten

Implementeer de volgende componenten in het project:

### 1. Sitemap Strategie

#### 1.1 Next.js App Router Sitemap (app/sitemap.ts)

Creëer een dynamische sitemap.ts die:
- Statische pagina's met aangepaste prioriteiten bevat
- Dynamische pagina's genereert voor alle content dimensies (bijv. locaties, diensten)
- Prioriteiten toewijst op basis van relevantie (bijv. populatie voor steden, datum voor blogs)
- Combinaties van content dimensies genereert (bijv. dienst-stad combinaties)

Voorbeeld structuur:
```typescript
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  // Statische pagina's met prioriteiten
  const staticPages = [
    { route: '', priority: 1.0 }, // Homepage
    { route: 'contact', priority: 0.8 },
    // Voeg alle statische pagina's toe
  ].map((page) => ({
    url: `${siteUrl}/${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.route === '' ? 'daily' : 'weekly',
    priority: page.priority,
  }))

  // Dynamische pagina's voor primaire content dimensie
  const primaryItems = await getPrimaryItems()
  const primaryUrls = primaryItems.map((item) => ({
    url: `${siteUrl}/primary/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // Dynamische pagina's voor secundaire content dimensie
  const secondaryItems = await getSecondaryItems()
  const secondaryUrls = secondaryItems.map((item) => ({
    url: `${siteUrl}/secondary/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: calculatePriority(item), // Functie die prioriteit bepaalt op basis van item eigenschappen
  }))

  // Combinatie pagina's
  const combinationUrls = primaryItems.flatMap((primary) =>
    secondaryItems.map((secondary) => ({
      url: `${siteUrl}/primary/${primary.slug}/${secondary.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: calculateCombinationPriority(primary, secondary),
    }))
  )

  return [
    ...staticPages,
    ...primaryUrls,
    ...secondaryUrls,
    ...combinationUrls,
  ]
}
```

#### 1.2 Aangepaste Sitemap Generatie (lib/generate-sitemaps.ts)

Creëer een script dat meerdere sitemap bestanden genereert:
- Een hoofdsitemap voor statische pagina's
- Aparte sitemaps voor elke content dimensie
- Een sitemap index die naar alle andere sitemaps verwijst

Voorbeeld implementatie:
```typescript
import { promises as fs } from 'fs'
import path from 'path'

async function generateMainSitemap() {
  const staticPages = [
    { url: '', priority: 1.0 },
    { url: 'contact', priority: 0.8 },
    // Meer statische pagina's
  ].map(page => ({
    loc: `https://example.com/${page.url}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: page.url === '' ? 'daily' : 'weekly',
    priority: page.priority
  }))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  await fs.writeFile(
    path.join(process.cwd(), 'public', 'sitemap-main.xml'),
    xml
  )
}

async function generatePrimarySitemap() {
  // Genereer sitemap voor primaire items
}

async function generateSecondarySitemap() {
  // Genereer sitemap voor secundaire items
}

async function generateSitemapIndex() {
  const today = new Date().toISOString().split('T')[0]
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-main.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-primary.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-secondary.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`

  await fs.writeFile(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    xml
  )
}

export async function generateAllSitemaps() {
  await Promise.all([
    generateMainSitemap(),
    generatePrimarySitemap(),
    generateSecondarySitemap(),
    generateSitemapIndex()
  ])
}
```

#### 1.3 Sitemap Configuratie (next-sitemap.config.js)

Configureer next-sitemap om:
- De basis URL te definiëren
- robots.txt te genereren
- Pagina's uit te sluiten die niet geïndexeerd moeten worden
- Verwijzingen naar aangepaste sitemaps toe te voegen

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://example.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
    ],
    additionalSitemaps: [
      'https://example.com/sitemap-primary.xml',
      'https://example.com/sitemap-secondary.xml',
    ],
  },
  exclude: ['/404', '/500', '/offline'],
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
}
```

### 2. SEO Optimalisatie

#### 2.1 Metadata Configuratie (app/layout.tsx)

Implementeer uitgebreide metadata in de root layout:
- Titel en beschrijving
- Uitgebreide lijst met relevante keywords
- OpenGraph en Twitter metadata
- Canonical URL
- Robot instructies

```typescript
export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Hoofdtitel van de Website | Tagline',
    template: '%s | Website Naam'
  },
  description: 'Uitgebreide beschrijving van de website met belangrijke zoektermen en USPs',
  keywords: [
    // Primaire zoektermen
    'keyword 1',
    'keyword 2',
    
    // Categorie 1
    'categorie 1 keyword 1',
    'categorie 1 keyword 2',
    
    // Categorie 2
    'categorie 2 keyword 1',
    'categorie 2 keyword 2',
    
    // Voeg 30-50 relevante keywords toe
  ],
  authors: [{ name: 'Bedrijfsnaam' }],
  creator: 'Bedrijfsnaam',
  publisher: 'Bedrijfsnaam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: '/',
    siteName: 'Website Naam',
    title: 'Hoofdtitel van de Website | Tagline',
    description: 'Uitgebreide beschrijving voor sociale media',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Website Naam - Beschrijving van de afbeelding'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoofdtitel van de Website | Tagline',
    description: 'Uitgebreide beschrijving voor Twitter',
    images: ['/opengraph-image'],
    creator: '@twitterhandle',
    site: '@twitterhandle'
  },
  alternates: {
    canonical: 'https://example.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
    yahoo: 'verification_token',
  }
}
```

#### 2.2 Dynamische Metadata per Pagina

Voor elke dynamische pagina:
- Genereer unieke, relevante metadata
- Voeg pagina-specifieke keywords toe
- Stel canonical URL in
- Optimaliseer voor sociale media

```typescript
export function generateMetadata({ params }: Props): Metadata {
  const item = getItemBySlug(params.slug)
  
  if (!item) return {}

  const title = `${item.title} | Website Naam`
  const description = `Specifieke beschrijving voor ${item.title}. Voeg USPs en zoektermen toe.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://example.com/items/${params.slug}`,
      siteName: "Website Naam",
      locale: "nl_NL",
      type: "website",
    },
    alternates: {
      canonical: `https://example.com/items/${params.slug}`,
    },
    keywords: [
      // Item-specifieke keywords
      `${item.category} ${item.title}`,
      `${item.title} keyword`,
      // Voeg 10-20 relevante keywords toe
    ]
  }
}
```

### 3. Structured Data Implementatie

Implementeer de volgende schema.org types:
- Organization schema voor bedrijfsinformatie
- Specifieke schema's voor content types (bijv. Product, Service, Event)
- LocalBusiness schema voor locatie-specifieke pagina's
- BreadcrumbList schema voor navigatiepaden

```typescript
// lib/schema.ts
import { Organization, WithContext, Service, LocalBusiness, BreadcrumbList } from "schema-dts"

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bedrijfsnaam",
    url: "https://example.com",
    logo: "https://example.com/logo.png",
    description: "Beschrijving van het bedrijf",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Regio",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-123-456-789",
      contactType: "customer service",
    },
    sameAs: [
      "https://facebook.com/bedrijfsnaam",
      "https://instagram.com/bedrijfsnaam",
      "https://linkedin.com/company/bedrijfsnaam",
    ],
  }
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Bedrijfsnaam",
    },
    areaServed: {
      "@type": "State",
      name: "Regio",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.price,
        priceCurrency: "EUR",
      },
    },
  }
}

export function generateLocalBusinessSchema(location: string): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Bedrijfsnaam - ${location}`,
    description: `Beschrijving specifiek voor ${location}`,
    url: `https://example.com/locations/${location.toLowerCase()}`,
    telephone: "+31-123-456-789",
    email: "info@example.com",
    areaServed: {
      "@type": "City",
      name: location,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Regio",
      addressCountry: "NL",
    },
    priceRange: "€€",
  }
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://example.com${item.item}`,
    })),
  }
}
```

Implementatie in pagina's:
```typescript
export default function ItemPage({ params }: Props) {
  const item = getItemBySlug(params.slug)
  
  if (!item) {
    notFound()
  }

  const serviceSchema = generateServiceSchema({
    name: item.title,
    description: item.description,
    price: item.price,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Items", item: "/items" },
    { name: item.title, item: `/items/${params.slug}` },
  ])

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Pagina inhoud */}
    </>
  )
}
```

### 4. Content Dimensie Strategie

Identificeer minimaal twee content dimensies die gecombineerd kunnen worden:
- Primaire dimensie (bijv. diensten, producten, categorieën)
- Secundaire dimensie (bijv. locaties, doelgroepen, toepassingen)

Voor elke combinatie:
- Creëer een unieke pagina met relevante content
- Genereer specifieke metadata
- Voeg passende structured data toe
- Neem op in de sitemap met gepaste prioriteit

Voorbeeld implementatie voor dienst-locatie combinatie:
```typescript
// app/[service]/[location]/page.tsx
export function generateStaticParams() {
  const services = getServices()
  const locations = getLocations()

  const paths = []
  for (const service of services) {
    for (const location of locations) {
      paths.push({
        service: service.slug,
        location: location.slug,
      })
    }
  }
  return paths
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.service)
  const location = getLocationBySlug(params.location)
  
  if (!service || !location) return {}

  const title = `${service.title} in ${location.name} | Website Naam`
  const description = `Professionele ${service.title.toLowerCase()} in ${location.name}. Voeg USPs en zoektermen toe.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://example.com/${params.service}/${params.location}`,
      siteName: "Website Naam",
      locale: "nl_NL",
      type: "website",
    },
    alternates: {
      canonical: `https://example.com/${params.service}/${params.location}`,
    },
    keywords: [
      `${service.title} ${location.name}`,
      `${service.category} ${location.name}`,
      // Voeg 10-20 relevante keywords toe
    ]
  }
}

export default function ServiceLocationPage({ params }: Props) {
  const service = getServiceBySlug(params.service)
  const location = getLocationBySlug(params.location)

  if (!service || !location) {
    notFound()
  }

  const serviceSchema = generateServiceSchema({
    name: `${service.title} in ${location.name}`,
    description: service.description,
    price: service.price,
  })

  const localBusinessSchema = generateLocalBusinessSchema(location.name)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: service.title, item: `/${params.service}` },
    { name: location.name, item: `/${params.service}/${params.location}` },
  ])

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">
          {service.title} in {location.name}
        </h1>
        
        <div className="prose max-w-none mb-16">
          <p className="text-lg mb-4">
            Op zoek naar professionele {service.title.toLowerCase()} in {location.name}? 
            Wij zijn uw betrouwbare partner voor alle {service.category} diensten in de regio {location.name}.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Onze {service.title} Diensten in {location.name}
          </h2>
          <p>{service.description}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Waarom Kiezen voor Onze {service.title} in {location.name}?
          </h2>
          <ul className="space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <ContactForm 
          title={`${service.title} Nodig in ${location.name}?`}
          description="Vraag direct een vrijblijvende offerte aan voor deze dienst."
        />
      </div>
    </>
  )
}
```

### 5. Implementatie Richtlijnen

1. Gebruik statische generatie (SSG) waar mogelijk voor betere prestaties
2. Implementeer dynamische routes voor alle content dimensies
3. Zorg voor unieke, relevante content op elke pagina
4. Optimaliseer laadtijden en Core Web Vitals
5. Implementeer een breadcrumb navigatie voor betere gebruikerservaring en SEO
6. Voeg alt teksten toe aan alle afbeeldingen
7. Gebruik semantische HTML structuur

## Technische Implementatie

1. Installeer benodigde packages:
   ```bash
   npm install next-sitemap schema-dts
   ```

2. Creëer de benodigde bestanden:
   - app/sitemap.ts
   - app/robots.ts
   - lib/generate-sitemaps.ts
   - lib/schema.ts
   - next-sitemap.config.js

3. Implementeer dynamische routes voor alle content dimensies

4. Voeg structured data toe aan alle relevante pagina's

5. Configureer build scripts om sitemaps te genereren tijdens build

## Verwachte Resultaten

Na implementatie verwachten we:
- Verbeterde indexering door zoekmachines
- Hogere ranking voor relevante zoektermen
- Betere click-through rates vanuit zoekresultaten
- Verbeterde gebruikerservaring door duidelijke navigatie
- Meer organisch verkeer door locatie-specifieke zoekresultaten
