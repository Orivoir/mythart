import { Container } from "@/components/ui/layout/container"
import { HeroContent as CTAHeroContent } from "@/components/ui/cta/home/hero-content"
import { ArgumentsContent as CTAArgumentsContent } from "@/components/ui/cta/home/arguments-content"
import { FooterText as CTAFooterText } from "@/components/ui/cta/home/footer-text"

export default async function Home() {

  return (
    <Container>

      <CTAHeroContent />

      <CTAArgumentsContent />

      <CTAFooterText />

    </Container>
  )
}