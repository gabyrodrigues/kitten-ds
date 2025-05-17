import type { ReactNode } from "react"
import type {
  FontStyle,
  FontWeight,
  LetterSpacing,
  LineClamp,
  LineHeight,
  MarginBottom,
  MarginTop,
  TextAlign,
  TextColor,
  TextDecoration,
  TextTransform,
  TextWrap,
  WhiteSpace,
  WordBreak
} from "../types"

export type TextComponent =
  | "p"
  | "span"
  | "label"
  | "strong"
  | "em"
  | "b"
  | "i"
  | "small"
  | "mark"
  | "abbr"
  | "cite"
  | "time"
  | "code"
  | "s"
  | "sub"
  | "sup"
  | "kbd"
  | "var"
  | "q"
  | "blockquote"
  | "pre"
  | "li"
  | "dt"
  | "dd"
  | "legend"
  | "summary"
  | "figcaption"
  | "address"
  | "ins"
  | "del"
  | "dfn"
  | "samp"
export type TextVariant = "body1" | "body2" | "body3" | "body4"
export type TextSize =
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
  | "text-body1"
  | "text-body2"
  | "text-body3"
  | "text-body4"
  | "text-inherit"
  | `text-(length:${string})`
  | `text-[${string}]`

/**
 * Represents the properties for the Text component.
 */
export interface TextProps {
  /**
   * The content inside the Text component. If a string is provided, it will be sanitized and rendered as HTML.
   */
  children?: string | ReactNode

  /**
   * Equivalent to the htmlFor attribute. Only used when component="label"
   */
  htmlFor?: string

  /**
   * Controls extra CSS class names in the Text component.
   */
  className?: string

  /**
   * The HTML element used to render the title (e.g., for SEO or accessibility).
   * This affects the semantics, not the visual style.
   * @default "p"
   */
  component?: TextComponent

  /**
   * The text color for the Text component.
   */
  color?: TextColor

  /**
   * The font weight for the Text component.
   * Overrides the font weight set by `variant` if both are provided.
   * Possible values: "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black", "font-(<custom-property>)" or "font-[<value>]".
   */
  weight?: FontWeight

  /**
   * Option to control the Text font-size.
   * Overrides the font size set by `variant` if both are provided.
   */
  fontSize?: TextSize

  /**
   * The margin applied at the bottom of Text component.
   * This corresponds to Tailwind's `mb-*` classes.
   */
  marginBottom?: MarginBottom

  /**
   * The margin applied at the top of Text component.
   * This corresponds to Tailwind's `mt-*` classes.
   */
  marginTop?: MarginTop

  /**
   * Defines the visual style of the text using typographic variants.
   * Possible values: "body1", "body2", "body3", "body4".
   * @default "body1"
   */
  variant?: TextVariant

  /**
   * The letter spacing of the Text component.
   * This corresponds to Tailwind's `tracking-*` classes.
   * Possible values: "tracking-tighter", "tracking-tight", "tracking-normal", "tracking-wide", "tracking-wider" or "tracking-widest", "tracking-(<custom-property>)" or "tracking-[<value>]".
   */
  letterSpacing?: LetterSpacing

  /**
   * The line clamp of the Text component.
   * This corresponds to Tailwind's `line-clamp-*` classes.
   */
  lineClamp?: LineClamp

  /**
   * The line height of the Text component.
   * Overrides the line height set by `variant` if both are provided.
   * This corresponds to Tailwind's `leading-*` classes.
   */
  lineHeight?: LineHeight

  /**
   * Controls the alignment of text.
   * Possible values: "left", "center", "right", "justify", "start" or "end".
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
