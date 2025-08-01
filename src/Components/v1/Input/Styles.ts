import { cn } from "@utils"
import type { BgColor, BorderColor } from "../types"

export const INPUT_STYLE = cn(
  "border-none",
  "outline-0",
  "flex-1",
  "bg-transparent",
  "text-typography-primary"
)
export const INPUT_CONTAINER_STYLE = cn("flex flex-wrap", "gap-x-2 gap-y-1", "min-h-11", "relative")

export function handleBorderColor(
  borderColor: BorderColor,
  disabled: boolean,
  errorText: boolean,
  successText: boolean
) {
  if (disabled) return "border-input-border"
  if (errorText) return "border-error"
  if (successText) return "border-success"
  return borderColor
}

export function handleBgColor(disabled: boolean, bgColor: BgColor) {
  if (disabled) return "bg-disabled"
  return bgColor
}
