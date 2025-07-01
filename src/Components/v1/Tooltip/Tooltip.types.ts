import type { ReactNode } from "react"
import type { BgColor } from "../types"

export type TooltipPosition =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-right"
  | "bottom-left"
  | "left"
  | "right"

/**
 * Represents the props for the Tooltip component.
 */
export interface TooltipProps {
  /**
   * The content to be displayed inside the tooltip.
   */
  children?: ReactNode

  /**
   * The text content of the tooltip.
   */
  content?: string | ReactNode

  /**
   * The position of the tooltip relative to its target.
   * @default "bottom"
   */
  position?: TooltipPosition

  /**
   * Option to control the optional arrow on tooltip
   * @default false
   */
  hasArrow?: boolean

  /**
   * The CSS class name to be applied to the Tooltip component root.
   * @default "bg-default-black"
   */
  bgColor?: BgColor

  /**
   * The CSS class name to be applied to the Tooltip component root.
   * @default "bg-default-black"
   */
  arrowColor?: BgColor

  /**
   * The CSS class name to be applied to the Tooltip component root.
   */
  className?: string

  /**
   * The CSS class name to be applied to the Tooltip component content container.
   */
  contentClassName?: string

  /**
   * The CSS class name to be applied to the Tooltip component arrow when it is visible.
   */
  arrowClassName?: string

  /**
   * Specifies whether the Tooltip hover content displays or not.
   */
  disabled?: boolean
}
