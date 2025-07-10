import { cn } from "@utils"
import type { BgColor, BorderColor } from "../types"

export const INPUT_STYLE = cn(
  "border-0",
  "outline-0",
  "flex-1",
  "bg-transparent",
  "text-typography-primary"
)
export const INPUT_CONTAINER_STYLE = cn("flex", "gap-2", "min-h-12", "relative")

export function handleBorderColor(
  borderColor: BorderColor,
  errorText: boolean,
  successText: boolean
) {
  if (errorText) return "border-error"
  if (successText) return "border-success"
  return borderColor
}

export function handleBgColor(disabled: boolean, bgColor: BgColor) {
  if (disabled) return "bg-disabled"
  return bgColor
}
