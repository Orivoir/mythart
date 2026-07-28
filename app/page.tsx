import { Container } from "@/components/ui/layout/container"
import { FeaturesList as CTAFeaturesList } from "@/components/ui/cta/list-features"
import {TitleHome as CTATitle} from "@/components/ui/cta/title-home"
import {SubtitleHome as CTASubtitle} from "@/components/ui/cta/subtitle-home"
import { ChipNoInstall as CTANoInstallChip } from "@/components/ui/cta/chip-no-install"
import { ActionButtonHome as CTAActionButton } from "@/components/ui/cta/actions-button-home"
import { ListMarketing as CTAListMarketing } from "@/components/ui/cta/list-marketing"
import { EditorPreview as CTAPreviewEditor } from "@/components/ui/cta/editor-preview"

export default async function Home() {

  return (
    <Container>
      <section className="
        flex
        flex-col-reverse
        xl:flex-row
        gap-48
        items-center
        justify-between
        w-full
        mb-16
        min-h-100
      ">
        <div className="
          flex
          flex-col
          gap-8
          xl:flex-1
          w-full
        ">  
          <CTANoInstallChip />
          <CTATitle />
          <CTASubtitle />
          <CTAActionButton />
          <CTAListMarketing />

          {/* 
          - Ranking users (stars 0 to 5)

          - Already used by x users

          - Reassuring cards CTA (you own the data, etc...)
          */}
        </div>

        {/* right side */}
        <div className="
          flex
          flex-col
          gap-4
          xl:flex-1
          w-full
        ">
          <CTAPreviewEditor />
        </div>

      </section>

      <CTAFeaturesList />

    </Container>
  )
}