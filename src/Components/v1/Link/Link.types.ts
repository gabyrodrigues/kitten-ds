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

/**
 * Props for the Link component, which wraps an anchor (<a>) element with extended styling and behavior.
 * Inherits all standard <a> tag attributes.
 */
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The content of the link.
   */
  children?: ReactNode

  /**
   * The color for the Link component.
   * This corresponds to Tailwind's `text-*` classes.
   * @default "text-link"
   */
  color?: TextColor

  /**
   * The bottom border color of the link.
   * This corresponds to Tailwind's `border-*` classes.
   * @default "border-b-link"
   */
  borderColor?: BorderColor

  /**
   * Controls extra CSS class names in the Link component.
   */
  className?: string

  /**
   * Link target URL.
   */
  href: string

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
  onClick?: MouseEventHandler<HTMLElement>

  /**
   * Option to control the Link font-size.
   */
  fontSize?: TextSize

  /**
   *  The font weight for the Link component.
   * @default "font-normal"
   */
  weight?: FontWeight

  /**
   * Controls an element's white-space property.
   */
  whitespace?: WhiteSpace

  /**
   * Controls the transformation of link.
   */
  transform?: TextTransform

  /**
   * The line height of the Link component.
   * This corresponds to Tailwind's `leading-*` classes.
   */
  lineHeight?: LineHeight

  /**
   * The letter spacing of the Link component.
   */
  letterSpacing?: LetterSpacing
}
