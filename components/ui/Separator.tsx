"use client";

import { Separator as RadixSeparator } from "radix-ui"

export function Separator({
  decorative = true,
  orientation = "vertical",
  className,
}: {
  decorative?: boolean
  orientation?: "horizontal" | "vertical"
  className?: string
}) {

  return (
    <RadixSeparator.Root
      className={`SeaparatorRoot`}
      decorative={decorative}
      orientation={orientation}
    />
  )
}