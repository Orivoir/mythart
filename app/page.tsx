import { getTranslations } from "next-intl/server"
import { Button } from "@/components/ui/button"

export default async function Home() {
  const t = await getTranslations("Brand")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <section className="flex max-w-3xl flex-col items-center gap-8 text-center">
        
        <h1 className="font-brand text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {t("Name")}
        </h1>

        <p className="max-w-xl text-lg text-muted-foreground">
          {t("Slogan")}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg">
            Commencer à écrire
          </Button>

          <Button 
            size="lg" 
            variant="outline"
          >
            Découvrir Mythrart
          </Button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
          <Button 
            size="lg" 
            variant="accent"
          >
            Voir les offres
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
          <Feature
            title="Organisation"
            description="Structurez vos histoires avec chapitres et scènes."
          />

          <Feature
            title="Collaboration"
            description="Travaillez avec vos lecteurs et collaborateurs."
          />

          <Feature
            title="Publication"
            description="Préparez vos ebooks pour leur diffusion."
          />
        </div>

      </section>
    </main>
  )
}


function Feature({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <h2 className="font-medium text-foreground">
        {title}
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  )
}