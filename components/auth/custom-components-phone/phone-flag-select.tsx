"use client"

import flags from "react-phone-number-input/flags"
import type { FlagProps } from "react-phone-number-input"

import { cn } from "@/lib/utils"

interface PhoneFlagProps extends FlagProps {
  className?: string
}

export function PhoneFlag({
  country,
  countryName,
  flags: customFlags,
  flagUrl,
  className,
}: PhoneFlagProps) {
  const Flag = customFlags?.[country] ?? flags[country]

  if (Flag) {
    return (
      <span
        className={cn(
          "inline-flex",
          "h-4 w-6",
          "overflow-hidden",
          "rounded-sm",
          className,
        )}
      >
        <Flag title={countryName} />
      </span>
    )
  }

  if (flagUrl) {
    const src = flagUrl
      .replace("{XX}", country)
      .replace("{xx}", country.toLowerCase())

    return (
      <img
        src={src}
        alt={countryName}
        className={cn(
          "inline-flex",
          "h-4 w-6",
          "overflow-hidden",
          "rounded-sm",
          className,
        )}
      />
    )
  }

  return <span className={cn("inline-flex h-4 w-6", className)} />
}