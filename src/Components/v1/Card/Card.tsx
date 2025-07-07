import { cn } from "@utils"
import type { KeyboardEvent, MouseEvent } from "react"
import { Flex } from "../Flex"
import type { CardProps } from "./Card.types"

export default function Card({
  active = false,
  align = "items-start",
  children,
  className,
  contentClassName,
  direction = "flex-col",
  disabled = false,
  hasBorder = false,
  hasShadow = true,
  heading,
  headingClassName,
  isLoading,
  justify = "justify-start",
  footer,
  footerClassName,
  paddingX,
  paddingY,
  radius = "rounded-lg",
  onClick,
  ...props
}: CardProps) {
  const mergedClasses = cn(
    "w-auto relative",
    "overflow-hidden",
    hasBorder && "border border-default-border",
    "bg-surface",
    active &&
      !isLoading &&
      "bg-primary-highlight border border-primary hover:border-default-border",
    hasShadow && "shadow-variant1",
    isLoading && "h-full w-full rounded-lg animate-pulse bg-neutral-gray-200 min-h-32",
    onClick && !isLoading && !disabled
      ? [
          "cursor-pointer hover:bg-highlight",
          "focus-visible:outline-0 focus-visible:ring-3 focus-visible:ring-focus-ring focus-visible:ring-offset-2"
        ]
      : "cursor-default",
    disabled && "cursor-default bg-disabled",
    className
  )

  const mergedHeadingClasses = cn(
    "px-4 py-4 border-b border-b-default-border",
    disabled && "opacity-50",
    headingClassName
  )
  const mergedContentClasses = cn("px-4 py-4 grow", disabled && "opacity-50", contentClassName)
  const mergedFooterClasses = cn(
    "px-4 py-4 border-t border-t-default-border",
    disabled && "opacity-50",
    footerClassName
  )

  function handleClick(event: MouseEvent<HTMLElement>) {
    if (disabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }
    onClick?.(event)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!disabled && (event.key === " " || event.key === "Enter")) {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  return (
    <Flex
      radius={radius}
      paddingX={paddingX}
      paddingY={paddingY}
      align={align}
      justify={justify}
      direction={direction}
      {...props}
      className={mergedClasses}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-disabled={disabled}
      data-disabled={disabled ? "true" : "false"}
      aria-busy={isLoading}
      data-loading={isLoading ? "true" : "false"}
      data-active={active ? "true" : "false"}
      role={onClick && !disabled ? "button" : "region"}
      {...(onClick && !disabled ? { onClick: handleClick } : {})}
      {...(onClick && !disabled ? { onKeyDown: handleKeyDown } : {})}
    >
      {!isLoading && (
        <>
          {heading && (
            <Flex
              width="w-full"
              className={mergedHeadingClasses}
            >
              {heading}
            </Flex>
          )}

          <Flex
            direction="flex-col"
            width="w-full"
            className={mergedContentClasses}
          >
            {children}
          </Flex>

          {footer && (
            <Flex
              width="w-full"
              className={mergedFooterClasses}
            >
              {footer}
            </Flex>
          )}
        </>
      )}
    </Flex>
  )
}
