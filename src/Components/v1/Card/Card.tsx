import { cn } from "@utils"
import { type KeyboardEvent, type MouseEvent, useId } from "react"
import { Flex } from "../Flex"
import { Text } from "../Text"
import { Title } from "../Title"
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
      !disabled &&
      "bg-primary-highlight border border-primary hover:border-default-border",
    hasShadow && "shadow-variant1",
    isLoading && "h-full w-full rounded-lg animate-pulse bg-neutral-gray-200 min-h-32",
    onClick && !isLoading && !disabled ? "cursor-pointer hover:bg-highlight" : "cursor-default",
    disabled && "cursor-default bg-disabled",
    onClick &&
      !isLoading &&
      "focus-visible:outline-0 focus-visible:ring-3 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
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
    onClick?.(event)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!disabled && (event.key === " " || event.key === "Enter")) {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  const reactId = useId()
  const headingId = heading ? `card-heading-${reactId}` : undefined

  return (
    <Flex
      radius={radius}
      align={align}
      justify={justify}
      direction={direction}
      {...props}
      className={mergedClasses}
      tabIndex={onClick ? 0 : undefined}
      aria-disabled={disabled}
      data-disabled={disabled ? "true" : "false"}
      aria-busy={isLoading}
      data-loading={isLoading ? "true" : "false"}
      aria-labelledby={heading ? headingId : undefined}
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
              id={typeof heading !== "string" ? headingId : undefined}
            >
              {typeof heading === "string" ? (
                <Title
                  variant="h5"
                  component="h1"
                  color="text-typography-primary"
                  id={headingId}
                >
                  {heading}
                </Title>
              ) : (
                heading
              )}
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
              {typeof footer === "string" ? (
                <Text
                  variant="body2"
                  color="text-typography-primary"
                >
                  {footer}
                </Text>
              ) : (
                footer
              )}
            </Flex>
          )}
        </>
      )}
    </Flex>
  )
}
