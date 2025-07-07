import type { HTMLAttributes, ReactNode } from "react"

export type TooltipPosition =
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right"
  | "top"
  | "top-left"
  | "top-right"

/**
 * Props for the Tooltip component.
 *
 * The Tooltip component is used to display contextual help or additional information about an element on the screen.
 * The Tooltip can be positioned relative to its target element and can include an optional arrow for better visibility.
 */
export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The element(s) that the tooltip will be attached to.
   * The tooltip will appear when the user hovers over this element.
   */
  children?: ReactNode

  /**
   * The main content displayed inside the tooltip container.
   * If a string is provided, it will be rendered as styled text.
   * If a ReactNode is provided, it will be rendered as-is inside the tooltip.
   */
  body?: string | ReactNode

  /**
   * The position of the tooltip relative to its target.
   * @default "bottom"
   */
  position?: TooltipPosition

  /**
   * Controls whether the tooltip has an arrow pointing to the target element.
   * @default false
   */
  hasArrow?: boolean

  /**
   * Additional CSS class name for the outermost wrapper of the Tooltip component (the element that wraps the trigger/children).
   */
  className?: string

  /**
   * Additional CSS class name for the tooltip box (the floating element that appears on hover/focus and contains the body and arrow).
   */
  containerClassName?: string

  /**
   * Additional CSS class name for the inner content area of the tooltip box (the element wrapping the body content).
   */
  bodyClassName?: string

  /**
   * Additional CSS class name for the tooltip arrow element (only rendered if hasArrow is true).
   */
  arrowClassName?: string

  /**
   * If true, the tooltip will not display on hover or focus.
   */
  disabled?: boolean
}
