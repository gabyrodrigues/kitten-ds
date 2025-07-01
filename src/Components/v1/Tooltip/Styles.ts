import { cn } from "@utils"
import type { TooltipPosition } from "./Tooltip.types"

export const TOOLTIP_BASE = cn(
  "absolute",
  "transform",
  "hidden",
  "px-2",
  "py-1",
  "text-xs",
  "text-white",
  "bg-background-inverted",
  "rounded-sm",
  "opacity-0",
  "group-hover:opacity-100",
  "group-hover:block",
  "transition-opacity",
  "duration-300",
  "text-center",
  "z-10"
)

export const TOOLTIP_POSITION = {
  top: cn("bottom-full left-1/2 -translate-x-1/2 mb-2"),
  "top-left": cn("bottom-full left-1/2 -translate-x-1/2 mb-2"),
  "top-right": cn("bottom-full left-1/2 -translate-x-1/2 mb-2"),
  bottom: cn("top-full left-1/2 -translate-x-1/2 mt-2"),
  "bottom-right": cn("top-full left-1/2 -translate-x-1/2 mt-2"),
  "bottom-left": cn("top-full left-1/2 -translate-x-1/2 mt-2"),
  left: cn("right-full top-1/2 -translate-y-1/2 mr-2"),
  right: cn("left-full top-1/2 -translate-y-1/2 ml-2")
}

export function getTrianglePosition(position: TooltipPosition, hasArrow: boolean) {
  switch (position) {
    case "top":
      return cn(
        "-bottom-1 left-1/2 -translate-x-1/2",
        hasArrow && "border-t-4 border-t-background-inverted",
        hasArrow && "border-l-4 border-r-4 border-b-0"
      )
    case "top-left":
      return cn(
        "-bottom-1 left-1",
        hasArrow && "border-t-4 border-t-background-inverted",
        hasArrow && "border-l-4 border-r-4 border-b-0"
      )
    case "top-right":
      return cn(
        "-bottom-1 right-1",
        hasArrow && "border-t-4 border-t-background-inverted",
        hasArrow && "border-l-4 border-r-4 border-b-0"
      )
    case "bottom":
      return cn(
        "-top-1 left-1/2 -translate-x-1/2",
        hasArrow && "border-b-4 border-b-background-inverted",
        hasArrow && "border-l-4 border-r-4 border-t-0"
      )
    case "bottom-right":
      return cn(
        "-top-1 right-2",
        hasArrow && "border-b-4 border-b-background-inverted",
        hasArrow && "border-l-4 border-r-4 border-t-0"
      )
    case "bottom-left":
      return cn(
        "-top-1 left-1",
        hasArrow && "border-b-4 border-b-background-inverted",
        hasArrow && "border-l-4 border-r-4 border-t-0"
      )
    case "left":
      return cn(
        "-right-1 top-1/2 -translate-y-1/2",
        hasArrow && "border-l-4 border-l-background-inverted",
        hasArrow && "border-t-4 border-b-4 border-r-0"
      )
    case "right":
      return cn(
        "-left-1 top-1/2 -translate-y-1/2",
        hasArrow && "border-r-4 border-r-background-inverted",
        hasArrow && "border-t-4 border-b-4 border-l-0"
      )
  }
}

export const TRIANGLE_BASE = cn(
  "w-0",
  "h-0",
  "border-solid",
  "border-transparent",
  "absolute",
  "opacity-0",
  "hidden",
  "group-hover:opacity-100",
  "group-hover:block",
  "transition-opacity",
  "duration-300"
)
