import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { CTABanner } from "@/components/sections/cta-banner"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'StayCool Airco Geleen | #1 in Airconditioning ✓',
  description: 'Dé airco specialist van Geleen! Professionele airco installatie voor woning en bedrijf door StayCool Airco. ✓ Gratis offerte ✓ Erkend installateur ✓ Alle topmerken ✓ 5 jaar garantie. Bel: 046 202 1430',
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
        <CTABanner theme="light" />
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Bekijk Onze Bedrijfsvideo</h2>
            <div className="max-w-3xl mx-auto aspect-video">
              <iframe 
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/9m-jkGgfLog" 
                title="StayCool Airco Bedrijfsvideo" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground">
                Ontdek hoe StayCool Airco uw ideale partner is voor airconditioning in Geleen en omgeving.
              </p>
              <p className="mt-4">
                <a 
                  href="https://staycoolairco.nl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Bezoek onze hoofdwebsite voor meer informatie
                </a>
              </p>
            </div>
          </div>
        </section>
        <TestimonialsSection />
        <CTASection />
        <CTABanner theme="dark" />
      </main>
    </>
  )
}
