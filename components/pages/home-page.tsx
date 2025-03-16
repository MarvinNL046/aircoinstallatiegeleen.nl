"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CTASection } from "@/components/sections/cta-section"
import { MainLayout } from "@/components/layout/main-layout"

export function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <CTASection />
    </MainLayout>
  )
}