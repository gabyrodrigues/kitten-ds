import { cn } from "@utils"
import type { KeyboardEvent, MouseEvent } from "react"
import { Icon } from "../Icon"
import type { IconButtonProps } from "./IconButton.types"
import { iconButtonVariants } from "./Styles"

export default function IconButton({
  ariaLabel,
  className,
  color = "primary",
  disabled,
  icon,
  iconClassName,
  iconVariant = "outlined",
  size = "large",
  variant = "default",
  weight = 400,
  onClick,
  ...props
}: IconButtonProps) {
  const variantClasses = iconButtonVariants({
    color,
    variant,
    size
  })

  const mergedClasses = cn(
    disabled ? "cursor-default" : "cursor-pointer",
    variantClasses,
    className
  )

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
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
    <button
      type="button"
      aria-disabled={disabled}
      tabIndex={disabled ? 0 : undefined}
      data-disabled={disabled}
      aria-label={ariaLabel}
      className={mergedClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <Icon
        color="inherit"
        type={icon}
        fontSize="text-inherit"
        variant={iconVariant}
        weight={weight}
        className={cn(iconClassName)}
      />
    </button>
  )
}
