import { cn } from "@utils"
import { TOOLTIP_BASE, TOOLTIP_POSITION, TRIANGLE_BASE, getTrianglePosition } from "./Styles"
import type { TooltipProps } from "./Tooltip.types"

export default function Tooltip({
  children,
  content,
  position = "bottom",
  className,
  contentClassName,
  arrowClassName,
  disabled = false,
  hasArrow = false
}: TooltipProps) {
  const positionClasses = TOOLTIP_POSITION[position]
  const triangleClasses = getTrianglePosition(position, hasArrow)
  const contentClasses = cn(
    TOOLTIP_BASE,
    positionClasses,
    disabled && "group-hover:opacity-0",
    disabled ? "cursor-default" : "cursor-text",
    contentClassName
  )
  const arrowClasses = cn(
    TRIANGLE_BASE,
    triangleClasses,
    disabled && "group-hover:opacity-0",
    arrowClassName
  )

  return (
    <div className={cn("relative flex items-center group", className)}>
      {children && children}
      {content && (
        <div
          id="tooltip"
          role="tooltip"
          className={contentClasses}
        >
          {content}
          {hasArrow && <div className={arrowClasses} />}
        </div>
      )}
    </div>
  )
}
