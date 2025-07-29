import { cn } from "@utils"
import type { BgColor } from "../types"

export function getOptionsListStyles() {
  return cn(
    "bg-surface",
    "absolute z-20 shadow-level3 overflow-hidden",
    "max-h-40 overflow-y-auto scrollbar"
  )
}

export function getOptionsListPositionStyles(
  autoPosition: boolean,
  shouldOpenAbove: boolean,
  label?: string,
  errorText?: string,
  helperText?: string,
  successText?: string
) {
  if (autoPosition && shouldOpenAbove) {
    if (label) {
      return "top-[unset] bottom-[calc(100%-1.5rem)]"
    }
    return "top-[unset] bottom-full"
  }

  const helperMessagesCount = (helperText ? 1 : 0) + (successText ? 1 : 0) + (errorText ? 1 : 0)

  if (errorText || successText || helperText) {
    if (helperMessagesCount === 1) {
      return cn("top-[calc(100%-1.75rem)] bottom-[unset]")
    }
    if (helperMessagesCount === 2) {
      return cn("top-[calc(100%-3rem)] bottom-[unset]")
    }
    if (helperMessagesCount >= 3) {
      return cn("top-[calc(100%-4.375rem)] bottom-[unset]")
    }
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
