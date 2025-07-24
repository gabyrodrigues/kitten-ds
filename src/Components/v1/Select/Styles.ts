import { cn } from "@utils"
import type { BgColor } from "../types"

export function getOptionsListStyles() {
  return cn(
    "bg-surface",
    "absolute z-20 shadow-variant3 overflow-hidden",
    "max-h-40 overflow-y-auto scrollbar"
  )
}

export function getOptionsListPositionStyles(
  autoPosition: boolean,
  shouldOpenAbove: boolean,
  label?: string,
  hasHelperMessages?: string
) {
  if (autoPosition && shouldOpenAbove) {
    if (label) {
      return "top-[unset] bottom-[calc(100%-1.5rem)]"
    }
    return "top-[unset] bottom-full"
  }

  if (hasHelperMessages) {
    return cn("top-[calc(100%-1.875rem)] bottom-[unset]")
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
