import { cn } from "@utils"
import type { BgColor } from "../types"

export function getListPositionStyles(hasTextMessage?: string) {
  if (hasTextMessage) {
    return cn("top-[calc(100%-0.875rem)] bottom-[unset]")
  }

  return cn("top-full")
}

export function getOptionStyles(
  selected: boolean,
  selectedOptionColor: BgColor,
  optionClassName?: string
) {
  return cn(
    "cursor-pointer [&+&]:border-t [&+&]:border-t-default-border hover:bg-highlight",
    "focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring focus-visible:rounded-lg",
    selected && selectedOptionColor,
    optionClassName
  )
}
