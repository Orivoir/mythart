import { Button } from "@/components/ui/button"
import { ButtonWithIcon } from "@/components/ui/button-with-icon"
import { CirclePlay } from "lucide-react"

export function ActionButtonHome() {

  return (
    <div className="
      flex
      flex-row
      gap-4
    ">
      <Button variant="primary" size="lg">
        Commencer gratuitement
      </Button>

      <ButtonWithIcon
        variant="outline"
        icon={CirclePlay}
        iconPosition="right"
        size="lg"
      >
        Voir la démo
      </ButtonWithIcon>
  </div>
  )
}