import { getTranslations } from "next-intl/server";
import { Title } from "@/components/ui/Typography/title"
import { Text } from "@/components/ui/Typography/text"
import { CircleCheck } from "lucide-react"

export async function ListMarketing() {

  const t = await getTranslations("CTA.MarketingList")

  const items = [
    {
      title: t("FreePlanTitle"),
      description: t("FreePlanDescription"),
    },
    {
      title: t("NoInstallTitle"),
      description: t("NoInstallDescription"),
    },
    {
      title: t("TrialPeriodTitle"),
      description: t("TrialPeriodDescription"),
    }
  ]

  return (
    <div className="">
      <ul className="
        flex
        flex-row
        gap-8
      ">
        {items.map(item => (
          <li key={item.title}>
            <div className="
              flex
              flex-row
              gap-2
              items-center
            ">
              <CircleCheck className="text-accent" />
              <Title variant="accent" className="line-clamp-1 text-md">
                {item.title}
              </Title>
            </div>
            <Text variant="muted" className="line-clamp-2 text-sm">
              {item.description}
            </Text>
          </li>
        ))}

      </ul>
    </div>
  )
}