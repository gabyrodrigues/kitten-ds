import type { ElementType, HTMLAttributes, ReactNode } from "react"
import type { BorderRadius, Gap, GapX, GapY, Height, PaddingX, PaddingY, Width } from "../types"

type Flex =
  | "flex-auto"
  | "flex-initial"
  | "flex-none"
  | `flex-${string}`
  | `flex-(${string})`
  | `flex-[${string}]`
type FlexWrap = "flex-nowrap" | "flex-wrap" | "flex-wrap-reverse"
export type FlexAlign =
  | "items-start"
  | "items-end"
  | "items-end-safe"
  | "items-center"
  | "items-center-safe"
  | "items-baseline"
  | "items-baseline-last"
  | "items-stretch"
export type FlexJustify =
  | "justify-start"
  | "justify-end"
  | "justify-end-safe"
  | "justify-center"
  | "justify-center-safe"
  | "justify-between"
  | "justify-around"
  | "justify-evenly"
  | "justify-stretch"
  | "justify-baseline"
  | "justify-normal"
type FlexDirection = "flex-row" | "flex-col" | "flex-row-reverse" | "flex-col-reverse"
type FlexOrder =
  | "order-first"
  | "order-last"
  | "order-none"
  | `order-${string}`
  | `-order-${string}`

/**
 * Defines the props available for the Flex component,
 * including layout controls (direction, gap, alignment, etc.)
 * and all standard HTML and accessibility attributes.
 */
export interface FlexProps extends HTMLAttributes<HTMLElement> {
  /**
   * The children of the Flex component.
   */
  children?: ReactNode

  /**
   * Optional additional CSS classes to apply to the Flex.
   */
  className?: string

  /**
   * Controls how the Flex container's items grow and shrink.
   * Matches Tailwind's `flex-*` utility classes.
   */
  flex?: Flex

  /**
   * Controls the Flex border radius.
   * This corresponds to Tailwind's `rounded-*` classes.
   */
  radius?: BorderRadius

  /**
   * Applies horizontal padding.
   * This corresponds to Tailwind's `px-*` classes.
   */
  paddingX?: PaddingX

  /**
   * Applies vertical padding.
   * This corresponds to Tailwind's `py-*` classes.
   */
  paddingY?: PaddingY

  /**
   * Sets the direction of flex items.
   * Possible values: "flex-row", "flex-column", "flex-row-reverse" or "flex-col-reverse".
   * @default "flex-row"
   */
  direction?: FlexDirection

  /**
   * Justifies items on the main axis. Matches Tailwind `justify-*` classes.
   * @default "justify-start"
   */
  justify?: FlexJustify

  /**
   * Aligns items on the cross axis. Matches Tailwind `items-*` classes.
   * @default "items-start"
   */
  align?: FlexAlign

  /**
   * Defines the HTML element to render as.
   * @default "div"
   */
  component?: ElementType

  /**
   * The wrapping behavior of the Flex component.
   * Possible values: "flex-nowrap", "flex-wrap", or "flex-wrap-reverse".
   */
  wrap?: FlexWrap

  /**
   * The gap between items in the Flex component.
   * This corresponds to Tailwind's `gap-*` classes.
   */
  gap?: Gap

  /**
   * Controls the order in the Flex component.
   * This corresponds to Tailwind's `order-*` classes.
   */
  order?: FlexOrder

  /**
   * Sets the column gap between children.
   * This corresponds to Tailwind's `gap-x-*` classes.
   */
  colGap?: GapX

  /**
   * Sets the row gap between children.
   * This corresponds to Tailwind's `gap-y-*` classes.
   */
  rowGap?: GapY

  /**
   * The Flex component height.
   * This corresponds to Tailwind's `h-*` classes.
   */
  height?: Height

  /**
   * The Flex component width.
   * This corresponds to Tailwind's `w-*` classes.
   */
  width?: Width
}
