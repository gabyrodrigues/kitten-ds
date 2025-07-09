import { cn } from "@utils"
import type { BgColor, BorderColor } from "../types"

export const INPUT_STYLE = cn(
  "border-0",
  "outline-0",
  "flex-1",
  "bg-transparent",
  "focus:outline-hidden",
  "text-typography-primary"
)
export const INPUT_CONTAINER_STYLE = cn("flex", "gap-2", "min-h-10", "relative")

export function handleBorderColor(
  disabled: boolean,
  borderColor: BorderColor,
  errorText: boolean,
  successText: boolean
) {
  if (disabled) return "border-neutral-gray-400"
  if (errorText) return "border-negative"
  if (successText) return "border-success"
  return borderColor
}

export function handleBgColor(disabled: boolean, bgColor: BgColor) {
  if (disabled) return "bg-neutral-gray-50"
  return bgColor
}
