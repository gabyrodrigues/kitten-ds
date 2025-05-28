import { cn } from "@utils"
import { type KeyboardEvent, type MouseEvent, type ReactElement, forwardRef } from "react"
import type { ButtonProps } from "./Button.types"
import { buttonVariants } from "./Styles"

// biome-ignore lint/style/useNamingConvention: component name is Button
const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  {
    align = "items-center",
    bgColor,
    borderColor,
    children,
    className,
    color = "primary",
    component = "button",
    disabled,
    fontSize,
    full = false,
    justify = "justify-center",
    leftSection,
    letterSpacing,
    lineHeight,
    radius,
    rightSection,
    transform,
    textColor,
    type = "button",
    variant = "filled",
    weight,
    whitespace,
    onClick,
    ...props
  }: ButtonProps,
  ref
): ReactElement {
  const variantClasses = buttonVariants({ variant, color })
  const mergedClasses = cn(
    variantClasses,
    "text-button",
    align,
    bgColor,
    borderColor,
    className,
    fontSize,
    full && "w-full",
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

  const COMPONENT = component
  const isNativeButton = COMPONENT === "button"

  return (
    <COMPONENT
      ref={ref}
      type={isNativeButton ? type : undefined}
      role={isNativeButton ? undefined : "button"}
      aria-disabled={disabled}
      data-disabled={disabled}
      tabIndex={disabled ? 0 : undefined}
      className={mergedClasses}
      onClick={handleClick}
      onKeyDown={isNativeButton ? undefined : handleKeyDown}
      {...props}
    >
      {leftSection && leftSection}
      {children}
      {rightSection && rightSection}
    </COMPONENT>
  )
})

Button.displayName = "Button"

export default Button
