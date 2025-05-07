import type { ReactNode } from "react"
import type { LineClamp, MarginBottom, TextColor } from "../types"

export type TitleComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "display1" | "display2" | "display3"
type TitleWeight =
  | "font-thin"
  | "font-extralight"
  | "font-light"
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-extrabold"
  | "font-black"
type TitleLineHeight =
  | "leading-none"
  | "leading-tight"
  | "leading-snug"
  | "leading-normal"
  | "leading-relaxed"
  | "leading-loose"
type TitleLetterSpacing =
  | "tracking-tighter"
  | "tracking-tight"
  | "tracking-normal"
  | "tracking-wide"
  | "tracking-wider"
  | "tracking-widest"
type TitleAlign =
  | "text-left"
  | "text-center"
  | "text-right"
  | "text-justify"
  | "text-start"
  | "text-end"
type TitleWrap = "text-wrap" | "text-nowrap" | "text-balance" | "text-pretty"
type TitleWhitespace =
  | "whitespace-normal"
  | "whitespace-nowrap"
  | "whitespace-pre"
  | "whitespace-pre-line"
  | "whitespace-pre-wrap"
  | "whitespace-break-spaces"
type TitleWordBreak = "break-normal" | "break-words" | "break-all" | "break-keep"
type TitleTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case"
type TitleSize =
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
export type TitleFontStyle = "italic" | "not-italic"

/**
 * Represents the properties for the Title component.
 */
export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * The content to be displayed inside the Title component.
   */
  children?: string | ReactNode

  /**
   * The variant of the Title component.
   * Possible values: "h1", "h2", "h3", "h4", "h5" or "h6".
   * @default "h1"
   */
  variant?: TitleVariant

  /**
   * The component used for the root node.
   */
  component?: TitleComponent

  /**
   * The CSS class name for the Title component.
   */
  class_name?: string

  /**
   * The text color for the Title component.
   */
  color?: TextColor

  /**
   * The font weight for the Title component.
   * Possible values: "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold" or "font-black".
   */
  weight?: TitleWeight

  /**
   * Option to control the Title font-size.
   */
  font_size?: TitleSize

  /**
   * The margin applied in the bottom of Title component.
   * This corresponds to Tailwind's `mb-*` classes.
   */
  gutter_bottom?: MarginBottom

  /**
   * The letter spacing of the Title component.
   * This corresponds to Tailwind's `tracking-*` classes.
   * Possible values: "tracking-tighter", "tracking-tight", "tracking-normal", "tracking-wide", "tracking-wider" or "tracking-widest".
   */
  letter_spacing?: TitleLetterSpacing

  /**
   * The line clamp of the Title component.
   * This corresponds to Tailwind's `line-clamp-*` classes.
   */
  line_clamp?: LineClamp

  /**
   * The line height of the Title component.
   * This corresponds to Tailwind's `leading-*` classes.
   */
  line_height?: TitleLineHeight

  /**
   * Controls the alignment of text.
   * Possible values: "text-left", "text-center", "text-right", "text-justify", "text-start" or "text-end".
   */
  align?: TitleAlign

  /**
   * Controls how text wraps within an element.
   * Possible values: "text-wrap", "text-nowrap", "text-balance" or "text-pretty".
   */
  wrap?: TitleWrap

  /**
   * Controls an element's white-space property.
   * Possible values: "whitespace-normal", "whitespace-nowrap", "whitespace-pre", "whitespace-pre-line", "whitespace-pre-wrap" or "whitespace-break-spaces".
   */
  whitespace?: TitleWhitespace

  /**
   * Controls how text wraps within an element.
   * Possible values: "break-normal", "break-words", "break-all" or "break-keep".
   */
  word_break?: TitleWordBreak

  /**
   * Controls the transformation of text.
   * Possible values: "uppercase", "lowercase", "capitalize", "normal-case".
   */
  transform?: TitleTransform

  /**
   * Controls the font style.
   * Possible values: "italic" or "not-italic".
   */
  font_style?: TitleFontStyle
}
