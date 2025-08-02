import type { ButtonHTMLAttributes, MouseEventHandler } from "react"
import type { IconVariant, IconWeight } from "../Icon/Icon.types"

export type IconButtonVariant = "filled" | "outlined" | "default"
export type IconButtonColor = "primary" | "secondary" | "neutral"
export type IconButtonSize = "sm" | "md" | "lg"

/**
 * Props for the accessible Icon Button component.
 *
 * Renders a native <button> with proper ARIA roles and states (e.g., `aria-disabled`) for accessibility.
 * Handles keyboard and mouse interactions to ensure usability for all users.
 *
 * Customize styles, layout, and icon content via these props.
 */
export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> {
  /**
   * The icon name to render in the Icon Button Component.
   * It matches a Material Symbols icon name.
   */
  icon: string

  /**
   * Optional additional CSS classes to apply to the icon button component.
   */
  className?: string

  /**
   * Optional additional CSS classes to apply to the icon element inside the button.
   */
  iconClassName?: string

  /**
   * Font weight of the icon.
   */
  weight?: IconWeight

  /**
   * Style variant of the icon inside the button ("filled" | "outlined").
   * @default "default"
   */
  iconVariant?: IconVariant

  /**
   * Size variant of the icon button ("small" | "medium" | "large").
   * @default "default"
   */
  size?: IconButtonSize

  /**
   * Whether the button is disabled.
   */
  disabled?: boolean

  /**
   * Style variant of the icon button component ("filled" | "outlined" | "default").
   * @default "default"
   */
  variant?: IconButtonVariant

  /**
   * Color scheme ("primary" | "secondary" | "neutral").
   * @default "primary"
   */
  color?: IconButtonColor

  /**
   * Accessible label for screen readers.
   * Describes the button's purpose.
   */
  ariaLabel: string

  /**
   * The click event handler for the button.
   * @returns The result of the click event handler.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>
}
