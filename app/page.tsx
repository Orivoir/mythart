import { getTranslations } from "next-intl/server"
import { Feature, FeatureType } from "@/components/ui/feature-cta"

import { Container } from "@/components/ui/layout/container"
import {TitleHome as CTATitle} from "@/components/ui/cta/title-home"
import {SubtitleHome as CTASubtitle} from "@/components/ui/cta/subtitle-home"
import { ChipNoInstall as CTANoInstallChip } from "@/components/ui/cta/chip-no-install"
import { ActionButtonHome as CTAActionButton } from "@/components/ui/cta/actions-button-home"
import { ListMarketing as CTAListMarketing } from "@/components/ui/cta/list-marketing"
import { EditorPreview as CTAPreviewEditor } from "@/components/ui/cta/editor-preview"

export default async function Home() {
  const t = await getTranslations("Brand")

  const features = [
    {
      title: "Ecriture enrichie",
      description: "Texte, entités et relations. Tout est lié, tout fait sens.",
      type: "pencil" as FeatureType
    },
    {
      title: "Collaboration native",
      description: "Travaillez a plusieurs en temps réel ou a votre rythme. Permissions fines incluses.",
      type: "users" as FeatureType
    },
    {
      title: "Versionning intelligent",
      description: "Sauvegarde automatique, historique complet et restauration facile. Revenez en arrière a tout moment.",
      type: "history" as FeatureType
    },
    {
      title: "Traduction facilitées",
      description: "Traduisez sans réécrire gardez l'original intact, collaborer avec des traducteurs.",
      type: "globe" as FeatureType
    },
    {
      title: "Hors ligne & PWA",
      description: "Avion, train, métro, bus, bateau. Ecrivez partout, même sans connexion internet. Mythrart synchronise automatiquement quand vous serez de nouveau en ligne.",
      type: "globe-off" as FeatureType 
    },
    {
      title: "IA Silencieuse",
      description: "L'IA est là pour vous aider, pas pour vous remplacer. Elle ne prend pas de décisions à votre place.",
      type: "wand-sparkles" as FeatureType
    }
  ]

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

      <div  className="
        grid
        gap-6
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-6
        w-full
      ">
        {features.map(feature => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>

    </Container>
  )
}