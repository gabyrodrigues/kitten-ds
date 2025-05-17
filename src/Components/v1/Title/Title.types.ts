import type { ReactNode } from "react"
import type { MarginTop } from "tests/build/types"
import type {
  FontStyle,
  FontWeight,
  LetterSpacing,
  LineClamp,
  LineHeight,
  MarginBottom,
  TextAlign,
  TextColor,
  TextDecoration,
  TextTransform,
  TextWrap,
  WhiteSpace,
  WordBreak
} from "../types"

export type TitleComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "display1" | "display2" | "display3"
export type TitleSize =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl"
  | "text-display1"
  | "text-display2"
  | "text-display3"
  | "text-h1"
  | "text-h2"
  | "text-h3"
  | "text-h4"
  | "text-h5"
  | "text-h6"
  | `text-(length:${string})`
  | `text-[${string}]`

/**
 * Represents the properties for the Title component.
 */
export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * The content inside the Title component. If a string is provided, it will be sanitized and rendered as HTML.
   */
  children?: string | ReactNode

  /**
   * Defines the visual style of the title using typographic variants.
   *
   * Variants "h1"–"h6" follow standard heading styles, while "display1"–"display3" are larger, more prominent styles.
   * By default, the HTML tag matches the variant (e.g., "h1" renders `<h1>`), but this can be overridden with the `component` prop.
   *
   * Example: A `variant="display1"` will apply `display1` styles, and by default render an `<h1>` tag,
   * unless you specify `component="h2"` to render it as an `<h2>` element instead.
   *
   * @default "h1"
   */
  variant?: TitleVariant

  /**
   * The HTML element used to render the title (e.g., for SEO or accessibility).
   * Only heading elements ("h1"–"h6") are supported.
   * This affects the semantics, not the visual style.
   */
  component?: TitleComponent

  /**
   * Controls extra CSS class names in the Title component.
   */
  className?: string

  /**
   * The text color for the Title component.
   */
  color?: TextColor

  /**
   * The font weight for the Title component.
   * Overrides the font weight set by `variant` if both are provided.
   * Possible values: "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black", "font-(<custom-property>)" or "font-[<value>]".
   */
  weight?: FontWeight

  /**
   * Option to control the Title font-size.
   * Overrides the font size set by `variant` if both are provided.
   */
  fontSize?: TitleSize

  /**
   * The margin applied at the bottom of Title component.
   * This corresponds to Tailwind's `mb-*` classes.
   */
  marginBottom?: MarginBottom

  /**
   * The margin applied at the bottom of Title component.
   * This corresponds to Tailwind's `mt-*` classes.
   */
  marginTop?: MarginTop

  /**
   * The letter spacing of the Title component.
   * This corresponds to Tailwind's `tracking-*` classes.
   * Possible values: "tracking-tighter", "tracking-tight", "tracking-normal", "tracking-wide", "tracking-wider" or "tracking-widest", "tracking-(<custom-property>)" or "tracking-[<value>]".
   */
  letterSpacing?: LetterSpacing

  /**
   * The line clamp of the Title component.
   * This corresponds to Tailwind's `line-clamp-*` classes.
   */
  lineClamp?: LineClamp

  /**
   * The line height of the Title component.
   * Overrides the line height set by `variant` if both are provided.
   * This corresponds to Tailwind's `leading-*` classes.
   */
  lineHeight?: LineHeight

  /**
   * Controls the alignment of text.
   * Possible values: "text-left", "text-center", "text-right", "text-justify", "text-start" or "text-end".
   */
  align?: TextAlign

  /**
   * Controls how text wraps within an element.
   * Possible values: "text-wrap", "text-nowrap", "text-balance" or "text-pretty".
   */
  wrap?: TextWrap

  /**
   * Controls an element's white-space property.
   * Possible values: "whitespace-normal", "whitespace-nowrap", "whitespace-pre", "whitespace-pre-line", "whitespace-pre-wrap" or "whitespace-break-spaces".
   */
  whitespace?: WhiteSpace

  /**
   * Controls how text wraps within an element.
   * Possible values: "break-normal", "break-words", "break-all" or "break-keep".
   */
  wordBreak?: WordBreak

  /**
   * Controls the transformation of text.
   * Possible values: "uppercase", "lowercase", "capitalize", "normal-case".
   */
  transform?: TextTransform

  /**
   * Controls the decoration of text.
   * Possible values: "underline", "overline", "line-through", "no-underline".
   */
  decoration?: TextDecoration

  /**
   * Controls the font style.
   * Possible values: "italic" or "not-italic".
   */
  fontStyle?: FontStyle
}
