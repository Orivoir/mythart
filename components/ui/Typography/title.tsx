import { cn } from "@/lib/utils"
import React from "react"

export function Title({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "success" | "warning" | "muted" | "accent",
}) {

  return (
    <h2
      className={cn(
        "font-medium text-foreground",
        className,
        variant === "success" && "text-success",
        variant === "warning" && "text-warning",
        variant === "muted" && "text-muted-foreground",
        variant === "accent" && "text-accent"
      )}
    >
      {children}
    </h2>
  )
}