import { cn } from "@utils"
import { Text } from "../Text"
import { tooltipArrowVariants, tooltipContainerVariants } from "./Styles"
import type { TooltipProps } from "./Tooltip.types"

export default function Tooltip({
  children,
  body,
  position = "bottom",
  className,
  bodyClassName,
  arrowClassName,
  containerClassName,
  disabled = false,
  hasArrow = false,
  ...props
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
    disabled && "group-hover:opacity-0",
    disabled ? "cursor-default" : "cursor-text",
    containerClassName
  )
  const bodyClasses = cn(bodyClassName)
  const arrowClasses = cn(tooltipArrowClasses, disabled && "group-hover:opacity-0", arrowClassName)

  return (
    <div className={cn("relative flex items-center group", className)}>
      {children}
      {body && (
        <div
          id="tooltip"
          role="tooltip"
          {...props}
          className={containerClasses}
        >
          {typeof body === "string" ? (
            <Text
              variant="body3"
              color="text-typography-inverted"
              align="text-center"
              className={bodyClasses}
            >
              {body}
            </Text>
          ) : (
            body
          )}
          {hasArrow && <div className={arrowClasses} />}
        </div>
      )}
    </div>
  )
}
