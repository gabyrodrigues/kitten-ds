import { cn } from "@utils"
import React, { useId, type ReactNode } from "react"
import { Text } from "../Text"
import { tooltipArrowVariants, tooltipBufferVariants, tooltipContainerVariants } from "./Styles"
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
  const tooltipBufferClasses = tooltipBufferVariants({
    position
  })

  const containerClasses = cn(
    tooltipContainerClasses,
    disabled && [
      "group-hover:opacity-0 group-focus-visible:opacity-0",
      "peer-hover:opacity-0 peer-focus-visible:opacity-0"
    ],
    disabled ? "cursor-default" : "cursor-text",
    containerClassName
  )
  const bodyClasses = cn(bodyClassName)
  const arrowClasses = cn(
    tooltipArrowClasses,
    disabled && [
      "group-hover:opacity-0 group-focus-visible:opacity-0",
      "peer-hover:opacity-0 peer-focus-visible:opacity-0"
    ],
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

  if (!children) {
    console.warn("No children provided in tooltip. Tooltip requires a trigger element.")
    return null
  }

  return (
    <div className={cn("relative flex items-center group", className)}>
      {trigger}
      {body && (
        <>
          <div
            aria-hidden="true"
            className={tooltipBufferClasses}
          />
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
            {hasArrow && (
              <div
                className={arrowClasses}
                data-testid="tooltip-arrow"
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}
