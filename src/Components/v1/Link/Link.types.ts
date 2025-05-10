import type { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from "react"
import type { TextSize } from "../Text/Text.types"
import type {
  BorderColor,
  FontWeight,
  LetterSpacing,
  LineHeight,
  TextColor,
  TextTransform,
  WhiteSpace
} from "../types"

export type LinkTarget = "_self" | "_blank" | "_parent" | "_top"

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The content of the link.
   */
  children?: ReactNode

  /**
   * Tailwind text color class.
   * @default "text-link"
   */
  color?: TextColor

  /**
   * Tailwind border-bottom color class.
   * @default "border-b-link"
   */
  border_color?: BorderColor

  /**
   * Controls extra CSS class names in the Title component.
   */
  // biome-ignore lint/style/useNamingConvention: default className prop
  className?: string

  /**
   * Link target URL.
   */
  href?: string

  /**
   * Target behavior for the link.
   * @default "_self"
   */
  target?: LinkTarget

  /**
   * Disables the link.
   */
  disabled?: boolean

  /**
   * Click handler.
   */

  // biome-ignore lint/style/useNamingConvention: prop name is not camelCase
  onClick?: MouseEventHandler<HTMLElement>

  /**
   * Tailwind font size.
   */
  font_size?: TextSize

  /**
   * Tailwind font weight.
   * @default "font-normal"
   */
  weight?: FontWeight

  /**
   * Tailwind white-space class.
   */
  whitespace?: WhiteSpace

  /**
   * Tailwind text transform class.
   */
  transform?: TextTransform

  /**
   * Tailwind line-height class.
   */
  line_height?: LineHeight

  /**
   * Tailwind letter-spacing class.
   */
  letter_spacing?: LetterSpacing
}
