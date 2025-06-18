import type { ButtonHTMLAttributes, ElementType, MouseEventHandler, ReactNode } from "react"
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

export type ButtonVariant = "filled" | "outlined" | "text"
export type ButtonColor = "primary" | "secondary" | "error" | "success" | "gray"

/**
 * Props for the accessible Button component.
 *
 * Renders a native <button> by default or a custom element,
 * applying appropriate ARIA roles and states (e.g., `aria-disabled`).
 * Handles keyboard and mouse interactions to ensure accessibility.
 * Forwards native button attributes and accessibility props.
 *
 * Customize styles, layout, and content via these props.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If true, makes the button take full width of its container.
   *  @default false
   */
  full?: boolean

  /**
   * Button type attribute (native buttons only).
   * @default "button"
   */
  type?: "submit" | "reset" | "button" | undefined

  /**
   * The content of the button.
   */
  children?: ReactNode

  /**
   * Style variant of the button ("filled" | "outlined" | "text").
   * @default "filled"
   */
  variant?: ButtonVariant

  /**
   * Color scheme ("primary" | "secondary" | "error" | "success" | "gray").
   * @default "primary"
   */
  color?: ButtonColor

  /**
   * Background color of the button.
   * Overrides the background color set by `variant` if both are provided.
   * This corresponds to Tailwind's `bg-*` classes.
   * @default "bg-primary"
   */
  bgColor?: BgColor

  /**
   * Text color of the button.
   * Overrides the text color set by `variant` if both are provided.
   * This corresponds to Tailwind's `text-*` classes.
   * @default "text-typography-secondary"
   */
  textColor?: TextColor

  /**
   * Border color of the button.
   * Overrides the border color set by `variant` if both are provided.
   * This corresponds to Tailwind's `border-*` classes.
   * @default "border-hover-primary"
   */
  borderColor?: BorderColor

  /**
   * Whether the button is disabled.
   * Adds `disabled` attribute for native buttons or
   * `aria-disabled` for custom components.
   */
  disabled?: boolean

  /**
   * Click event handler.
   *
   * Will not be called if the button is disabled.
   * @returns The result of the click event handler.
   */
  onClick?: MouseEventHandler<HTMLElement>

  /**
   * Content displayed on the left side of the button content.
   */
  leftSection?: ReactNode

  /**
   * Content displayed on the right side of the button content.
   */
  rightSection?: ReactNode

  /**
   * Justification of content inside button.
   */
  justify?: FlexJustify

  /**
   * Alignment of content inside button.
   */
  align?: FlexAlign

  /**
   * Border radius of the button.
   * Overrides the border radius set by `variant` if both are provided.
   * This corresponds to Tailwind's `rounded-*` classes.
   * @default "rounded-lg"
   */
  radius?: BorderRadius

  /**
   * Font size of the button.
   * Overrides the font size set by `variant` if both are provided.
   */
  fontSize?: TextSize

  /**
   * Font weight of the button.
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
   * Line height of the button.
   * This corresponds to Tailwind's `leading-*` classes.
   */
  lineHeight?: LineHeight

  /**
   * Letter spacing of the button.
   * This corresponds to Tailwind's `tracking-*` classes.
   * Possible values: "tracking-tighter", "tracking-tight", "tracking-normal", "tracking-wide", "tracking-wider" or "tracking-widest".
   */
  letterSpacing?: LetterSpacing

  /**
   * Optional additional CSS classes to apply to the button.
   */
  className?: string

  /**
   * The underlying element or component to render.
   *
   * Use "button" for native button element (recommended for best accessibility).
   * Use custom elements (e.g., "div", "a") only when necessary.
   * The component will automatically add appropriate roles, states, and keyboard handlers
   * to ensure accessibility compliance.
   *
   * @default "button"
   */
  component?: ElementType
}
