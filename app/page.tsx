import { Metadata } from "next"
import { FeaturesSection } from "@/components/sections/features-section"
import { ServicesOptimized } from "@/components/sections/services-optimized"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { HeroOptimized } from "@/components/sections/hero-optimized"
import { WhyUs } from "@/components/sections/why-us"
import { BrandLogos } from "@/components/sections/brand-logos"
import { EnhancedCTASection } from "@/components/sections/enhanced-cta-section"
import { EnhancedCTABanner } from "@/components/sections/enhanced-cta-banner"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Installatie Geleen | StayCool Airco Limburg ✓ Vanaf €11/mnd',
  description: 'Airco specialist Limburg ✓ Professionele airco installatie Geleen ✓ Onderhoud vanaf €11/maand ✓ Daikin, LG, Samsung airco ✓ Gratis offerte binnen 24u. Bel: 046 202 1430',
  alternates: {
    canonical: 'https://aircoinstallatiegeleen.nl'
  }
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <main>
        <EnhancedCTABanner theme="light" />
        <HeroOptimized />
        <FeaturesSection />
        <ServicesOptimized />
        <WhyUs />
        <BrandLogos />
        <TestimonialsSection />
        <EnhancedCTASection />
        <EnhancedCTABanner theme="dark" />
      </main>
    </>
  )
}
