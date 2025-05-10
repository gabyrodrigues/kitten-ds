import type { HTMLAttributes } from "react"
import type { TextSize } from "../Text/Text.types"
import type { TextColor } from "../types"

/**
 * The name of the icon, typically corresponding to a Material Symbols icon (e.g., "home", "search").
 */
export type IconType = string | undefined

/**
 * The visual style of the icon.
 * - "outlined" for hollow icons (default)
 * - "filled" for solid icons
 */
export type IconVariant = "outlined" | "filled"

/**
 * The font weight used to render the icon.
 * Accepted values: 400 (regular), 500 (medium), 700 (bold).
 */
export type IconWeight = 400 | 500 | 700

/**
 * Props for the Icon component.
 */
export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The icon name to render.
   * Usually matches a Material Symbols icon name.
   */
  type: IconType

  /**
   * Whether the icon should appear visually disabled.
   * If true, the `color_disabled` will be applied instead of `color`.
   * @default false
   */
  disabled?: boolean

  /**
   * Tailwind text color class applied when the icon is active.
   * This corresponds to Tailwind's `text-*` classes.
   * Use "inherit" to inherit color from parent.
   */
  color?: TextColor | "inherit"

  /**
   * Tailwind text color class applied when `disabled` is true.
   * This corresponds to Tailwind's `text-*` classes.
   * Use "inherit" to inherit color from parent.
   */
  color_disabled?: TextColor | "inherit"

  /**
   * Optional additional CSS classes to apply to the icon.
   */
  // biome-ignore lint/style/useNamingConvention: default className prop
  className?: string

  /**
   * Tailwind text size class to control the icon's size.
   * @default "text-base"
   */
  font_size?: TextSize

  /**
   * Font weight to apply when rendering the icon.
   * @default 400
   */
  weight?: IconWeight

  /**
   * Determines the visual variant of the icon.
   * Either "outlined" or "filled".
   * @default "outlined"
   */
  variant?: IconVariant
}
