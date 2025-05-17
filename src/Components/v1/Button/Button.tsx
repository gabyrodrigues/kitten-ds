import { cn } from "@utils"
import type { KeyboardEvent, MouseEvent, ReactElement } from "react"
import type { ButtonProps } from "./Button.types"
import { button_variants } from "./Styles"

export default function Button({
  align = "items-center",
  bg_color,
  border_color,
  children,
  className,
  color = "primary",
  component = "button",
  disabled,
  font_size,
  full = false,
  justify = "justify-center",
  left_section,
  letter_spacing,
  line_height,
  radius,
  right_section,
  transform,
  text_color,
  type = "button",
  variant = "filled",
  weight,
  whitespace,
  onClick,
  ...props
}: ButtonProps): ReactElement {
  const variant_classes = button_variants({
    variant,
    color
  })
  const merged_classes = cn(
    variant_classes,
    "text-button",
    align,
    bg_color,
    border_color,
    className,
    font_size,
    full && "w-full",
    justify,
    letter_spacing,
    line_height,
    radius,
    text_color,
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

  function handleKeyDown(event: KeyboardEvent<HTMLAnchorElement>) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  const COMPONENT = component
  const is_native_button = COMPONENT === "button"

  return (
    <COMPONENT
      type={is_native_button ? type : undefined}
      role={is_native_button ? undefined : "button"}
      aria-disabled={disabled}
      data-disabled={disabled}
      disabled={is_native_button ? disabled : undefined}
      tabIndex={!is_native_button && disabled ? 0 : undefined}
      onKeyDown={is_native_button ? undefined : handleKeyDown}
      className={merged_classes}
      onClick={handleClick}
      {...props}
    >
      {left_section && left_section}
      {children}
      {right_section && right_section}
    </COMPONENT>
  )
}
