import { cn } from "@utils"
import type { KeyboardEvent, MouseEvent } from "react"
import { Icon } from "../Icon"
import type { IconButtonProps } from "./IconButton.types"
import { icon_button_variants } from "./Styles"

export default function IconButton({
  aria_label,
  className,
  color = "primary",
  disabled,
  icon,
  icon_class_name,
  icon_variant = "outlined",
  size = "large",
  variant = "default",
  weight = 400,
  onClick,
  ...props
}: IconButtonProps) {
  const variant_classes = icon_button_variants({
    color,
    variant,
    size
  })

  const merged_classes = cn(
    disabled ? "cursor-default" : "cursor-pointer",
    variant_classes,
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
      aria-label={aria_label}
      className={merged_classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <Icon
        color="inherit"
        type={icon}
        font_size="text-inherit"
        variant={icon_variant}
        weight={weight}
        className={cn(icon_class_name)}
      />
    </button>
  )
}
