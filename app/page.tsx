import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FlavorCarousel } from "@/components/flavor-carousel"
import { BentoGrid } from "@/components/bento-grid"
import { ActivationsSection } from "@/components/activations-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"
import { LifestyleSection } from "@/components/lifestyle-section"
import { TreasureHunt } from "@/components/treasure-hunt"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FlavorCarousel />
      <LifestyleSection />
      <BentoGrid />
      <ActivationsSection />
      <SocialSection />
      <Footer />
      <TreasureHunt />
    </main>
  )
}
