import type { ReactNode } from "react"

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
export interface TooltipProps {
  /**
   * The element(s) that the tooltip will be attached to.
   * The tooltip will appear when the user hovers over this element.
   */
  children?: ReactNode

  /**
   * The body content of the tooltip.
   * If a string is provided, it will be rendered as plain text.
   * If a ReactNode is provided, it can include any valid React element.
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
   * Additional CSS class name to be applied to the Tooltip component root.
   */
  className?: string

  /**
   * Additional CSS class name to be applied to the Tooltip component container.
   * This is the wrapper of the Tooltip body.
   */
  containerClassName?: string

  /**
   * Additional CSS class name to be applied to the Tooltip content body.
   * This is useful for styling the text or content inside the tooltip.
   * It can include typography styles, colors, or any other custom styles.
   */
  bodyClassName?: string

  /**
   * Additional CSS class name to be applied to the Tooltip component arrow when it is visible.
   * It depends on the `hasArrow` prop being set to true.
   */
  arrowClassName?: string

  /**
   * Specifies whether the Tooltip hover content displays or not.
   */
  disabled?: boolean
}
