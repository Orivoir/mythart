import { LeftSide as CTALeftSide } from "@/components/ui/cta/home/left-side"
import { RightSide as CTARightSide } from "@/components/ui/cta/home/right-side"

export function HeroContent() {

  return (
    <section className="
      flex
      flex-col
      xl:flex-row
      md:gap-48
      gap-24
      items-center
      justify-between
      w-full
      mb-16
      min-h-100
    ">
      <CTALeftSide />
      <CTARightSide />
    </section>
  )
}