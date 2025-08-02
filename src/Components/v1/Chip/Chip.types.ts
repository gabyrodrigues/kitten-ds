import type {
  ButtonHTMLAttributes,
  ElementType,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode
} from "react"
import type { FlexAlign, FlexJustify } from "../Flex/Flex.types"
import type { TextSize } from "../Text/Text.types"
import type {
  BgColor,
  BorderColor,
  BorderRadius,
  FontWeight,
  LetterSpacing,
  LineHeight,
  TextColor,
  TextTransform,
  WhiteSpace
} from "../types"

export type ChipVariant = "filled" | "outlined"
export type ChipColor =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "warning"
  | "info"
  | "neutral"
export type ChipComponent = "button" | "div" | "span" | "a"

/**
 * Props for the accessible Chip component.
 *
 * Renders a div by default or a button if `onClick` is provided.
 * Supports various styles and behaviors for a flexible UI component.
 * This component is designed to be accessible and customizable,
 * allowing for different content, colors, and interactions.
 */
export interface ChipProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the chip.
   */
  children?: ReactNode

  /**
   * Style variant of the chip ("filled" | "outlined").
   * @default "filled"
   */
  variant?: ChipVariant

  /**
   * Color scheme ("primary" | "secondary" | "error" | "success" | "warning" | "info" | "neutral").
   * @default "primary"
   */
  color?: ChipColor

  /**
   * Background color of the chip.
   * Overrides the background color set by `variant` if both are provided.
   * This corresponds to Tailwind's `bg-*` classes.
   * @default "bg-primary"
   */
  bgColor?: BgColor

  /**
   * Text color of the chip.
   * Overrides the text color set by `variant` if both are provided.
   * This corresponds to Tailwind's `text-*` classes.
   * @default "text-typography-secondary"
   */
  textColor?: TextColor

  /**
   * Border color of the chip.
   * Overrides the border color set by `variant` if both are provided.
   * This corresponds to Tailwind's `border-*` classes.
   * @default "border-hover-primary"
   */
  borderColor?: BorderColor

  /**
   * Whether the chip is disabled.
   * It applies styles and accessibility attributes to indicate the chip is not interactive.
   * This property depends on the `onClick` or `onDelete` prop to be effective.
   */
  disabled?: boolean

  /**
   * Whether the chip is read-only.
   * It applies styles to indicate the chip delete button is not interactive.
   * It depends on the `onDelete` prop to be effective.
   */
  readOnly?: boolean

  /**
   * Adding the onClick prop will make the chip clickable.
   *
   * Will not be called if the disabled prop is true.
   * @returns The result of the click event handler.
   */
  onClick?: MouseEventHandler<HTMLElement>

  /**
   * The delete icon button will be rendered only if this prop is provided.
   * The onClick prop will be ignored on main component if this prop is provided.
   * This is useful for chips that can be removed, such as tags or filters.
   *
   * Will not be called if the disabled prop is true.
   * @returns The result of the click event handler.
   */
  onDelete?: MouseEventHandler<HTMLElement>

  /**
   * Justification of content inside chip.
   */
  justify?: FlexJustify

  /**
   * Alignment of content inside chip.
   */
  align?: FlexAlign

  /**
   * Border radius of the chip.
   * Overrides the border radius set by `variant` if both are provided.
   * This corresponds to Tailwind's `rounded-*` classes.
   * @default "rounded-full"
   */
  radius?: BorderRadius

  /**
   * Font size of the chip.
   * Overrides the font size set by `variant` if both are provided.
   */
  fontSize?: TextSize

  /**
   * Font weight of the chip.
   * Overrides the font size set by `variant` if both are provided.
   */
  weight?: FontWeight

  /**
   * White-space CSS property.
   * Possible values: "whitespace-normal", "whitespace-nowrap", "whitespace-pre", "whitespace-pre-line", "whitespace-pre-wrap" or "whitespace-break-spaces".
   */
  whitespace?: WhiteSpace

  /**
   * Text transform CSS property.
   * Possible values: "uppercase", "lowercase", "capitalize", "normal-case".
   */
  transform?: TextTransform

  /**
   * Line height of the chip.
   * This corresponds to Tailwind's `leading-*` classes.
   */
  lineHeight?: LineHeight

  /**
   * Letter spacing of the chip.
   * This corresponds to Tailwind's `tracking-*` classes.
   * Possible values: "tracking-tighter", "tracking-tight", "tracking-normal", "tracking-wide", "tracking-wider" or "tracking-widest".
   */
  letterSpacing?: LetterSpacing

  /**
   * Optional additional CSS classes to apply to the chip.
   */
  className?: string

  /**
   * The underlying element or component to render.
   *
   * This allows you to use different HTML elements or custom components
   * The default is "div", but it turns into a button when `onClick` is provided.
   *
   */
  component?: ElementType

  /**
   * Apply properties to the delete button.
   * This is useful for customizing the delete button's appearance and behavior.
   * It will be rendered only if `onDelete` is provided.
   *
   */
  deleteButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>
}
