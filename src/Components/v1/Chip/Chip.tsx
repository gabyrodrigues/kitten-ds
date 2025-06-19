import { cn } from "@utils"
import type { KeyboardEvent, MouseEvent } from "react"
import { Icon } from "../Icon"
import type { ChipProps } from "./Chip.types"
import { chipDeleteVariants, chipVariants } from "./Styles"

export default function Chip({
  align = "items-center",
  bgColor,
  borderColor,
  children,
  className,
  color = "gray",
  component = "div",
  disabled,
  fontSize,
  justify = "justify-center",
  letterSpacing,
  lineHeight,
  radius = "rounded-full",
  transform,
  textColor,
  variant = "outlined",
  weight,
  whitespace,
  deleteButtonProps,
  onClick = undefined,
  onDelete = undefined,
  ...props
}: ChipProps) {
  const variantClasses = chipVariants({ variant, color, clickable: Boolean(onClick) && !onDelete })
  const deleteVariantClasses = chipDeleteVariants({ variant, color })
  const mergedClasses = cn(
    variantClasses,
    "text-chip",
    (onClick || onDelete) &&
      "focus:outline-0 focus:ring-3 focus:ring-focus-ring focus:ring-offset-2",
    align,
    bgColor,
    borderColor,
    className,
    fontSize,
    justify,
    letterSpacing,
    lineHeight,
    radius,
    textColor,
    transform,
    weight,
    whitespace
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

  function handleKeyDownDelete(event: KeyboardEvent<HTMLElement>) {
    if (!disabled && (event.key === " " || event.key === "Enter" || event.key === "Delete")) {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  function handleClickDelete(event: MouseEvent<HTMLElement>) {
    if (disabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }
    onDelete?.(event)
  }

  const COMPONENT = onClick && !onDelete ? "button" : component

  return (
    <COMPONENT
      aria-disabled={onClick || onDelete ? disabled : undefined}
      data-disabled={onClick || onDelete ? disabled : undefined}
      tabIndex={(onClick || onDelete) && disabled ? 0 : undefined}
      className={mergedClasses}
      onClick={onClick && !onDelete ? handleClick : undefined}
      onKeyDown={onClick && !onDelete ? handleKeyDown : undefined}
      {...props}
    >
      {children}

      {onDelete && (
        <button
          type="button"
          className={cn(deleteVariantClasses, deleteButtonProps?.className)}
          {...deleteButtonProps}
          disabled={disabled}
          aria-disabled={disabled}
          data-disabled={disabled}
          aria-label={deleteButtonProps?.["aria-label"] || "delete chip"}
          onClick={handleClickDelete}
          onKeyDown={handleKeyDownDelete}
        >
          <Icon
            color="inherit"
            type="close"
            fontSize="text-base"
          />
        </button>
      )}
    </COMPONENT>
  )
}
