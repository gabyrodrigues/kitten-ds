import { cn } from "@utils"
import React, { useId, type ReactNode } from "react"
import { Text } from "../Text"
import { tooltipArrowVariants, tooltipContainerVariants } from "./Styles"
import type { TooltipProps } from "./Tooltip.types"

export default function Tooltip({
  arrowClassName,
  body,
  bodyClassName,
  children,
  className,
  containerClassName,
  disabled = false,
  hasArrow = false,
  id,
  position = "bottom",
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
    disabled && "peer-hover:opacity-0 peer-focus-visible:opacity-0",
    disabled ? "cursor-default" : "cursor-text",
    containerClassName
  )
  const bodyClasses = cn(bodyClassName)
  const arrowClasses = cn(
    tooltipArrowClasses,
    disabled && "peer-hover:opacity-0 peer-focus-visible:opacity-0",
    arrowClassName
  )

  const reactId = useId()
  const baseId = id ?? `tooltip-${reactId}`

  let trigger: ReactNode
  if (
    typeof children === "string" ||
    typeof children === "number" ||
    !React.isValidElement(children)
  ) {
    trigger = (
      <span
        className="peer"
        aria-describedby={baseId}
      >
        {children}
      </span>
    )
  } else {
    type ChildWithClassName = React.ReactElement<{ className?: string }>
    const childEl = children as ChildWithClassName
    trigger = React.cloneElement(childEl, {
      ...childEl.props,
      className: cn(childEl.props.className, "peer"),
      ...{ "aria-describedby": baseId }
    })
  }

  return (
    <div className={cn("relative flex items-center", className)}>
      {trigger}
      {body && (
        <div
          id={baseId}
          role="tooltip"
          aria-hidden={disabled}
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
