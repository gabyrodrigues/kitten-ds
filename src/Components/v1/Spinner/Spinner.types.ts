import type { HTMLAttributes } from "react"

export type SpinnerColor = "primary" | "secondary" | "neutral" | "disabled"
export type SpinnerSize = "xs" | "sm" | "md" | "lg"

/**
 * Props for the Spinner component.
 * This component is used to indicate loading or processing states in the UI.
 * It supports different colors and sizes, and can be easily integrated into other components.
 */
export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The CSS class name to be applied to the Spinner component.
   */
  className?: string

  /**
   * The variant of the spinner.
   * Possible values: "primary", "secondary", "negative", "positive", "warning" or "gray".
   * @default "primary"
   */
  color?: SpinnerColor
  /**
   * The size of the spinner.
   * Possible values: "xs", "sm", "md", "lg".
   * @default "xs"
   */
  size?: SpinnerSize
}
