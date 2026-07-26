import { Text } from "@/components/ui/Typography/text"
import { Title } from "@/components/ui/Typography/title"
import {
  PencilSparklesIcon,
  UsersIcon,
  HistoryIcon,
  GlobeIcon,
  GlobeOffIcon,
  WandSparklesIcon
} from "lucide-react"

export type FeatureType =  "pencil" | "users" | "history" | "globe" | "globe-off" | "wand-sparkles"

export function Feature({
  title,
  description,
  type
}: {
  title: string
  description: string,
  type: FeatureType
}) {
  return (
    <div className="
      rounded-lg
      border border-border
      bg-card
      p-4
      flex
      items-center
      gap-4
    ">

      <div className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-md
        bg-muted/5
      ">
        {type === "pencil" && <PencilSparklesIcon className="h-5 w-5 text-accent" />}
        {type === "users" && <UsersIcon className="h-5 w-5 text-accent" />}
        {type === "history" && <HistoryIcon className="h-5 w-5 text-accent" />}
        {type === "globe" && <GlobeIcon className="h-5 w-5 text-accent" />}
        {type === "globe-off" && <GlobeOffIcon className="h-5 w-5 text-accent" />}
        {type === "wand-sparkles" && <WandSparklesIcon className="h-5 w-5 text-accent" />}
      </div>

      <div className="min-w-0">
        <Title variant="default" className="line-clamp-1">
          {title}
        </Title>

      <Text
        className="
          mt-2
          line-clamp-3
          text-xs
        "
        variant="muted"
      >
        {description}
      </Text>
    </div>
  </div>
  )
}