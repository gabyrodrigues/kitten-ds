import { cn } from "@utils"
import { Text } from "../Text"
import { tooltipArrowVariants, tooltipContainerVariants } from "./Styles"
import type { TooltipProps } from "./Tooltip.types"

export default function Tooltip({
  children,
  content,
  position = "bottom",
  bgColor = "bg-background-inverted",
  className,
  contentClassName,
  arrowClassName,
  containerClassName,
  disabled = false,
  hasArrow = false
}: TooltipProps) {
  const tooltipContainerClasses = tooltipContainerVariants({
    position,
    hasArrow
  })
  const tooltipArrowClasses = tooltipArrowVariants({
    position,
    hasArrow
  })

  const containerClasses = cn(
    tooltipContainerClasses,
    bgColor,
    disabled && "group-hover:opacity-0",
    disabled ? "cursor-default" : "cursor-text",
    containerClassName
  )
  const contentClasses = cn(contentClassName)
  const arrowClasses = cn(tooltipArrowClasses, disabled && "group-hover:opacity-0", arrowClassName)

  return (
    <div className={cn("relative flex items-center group", className)}>
      {children}
      {content && (
        <div
          id="tooltip"
          role="tooltip"
          className={containerClasses}
        >
          {typeof content === "string" ? (
            <Text
              variant="body3"
              color="text-typography-inverted"
              align="text-center"
              className={contentClasses}
            >
              {content}
            </Text>
          ) : (
            content
          )}
          {hasArrow && <div className={arrowClasses} />}
        </div>
      )}
    </div>
  )
}
