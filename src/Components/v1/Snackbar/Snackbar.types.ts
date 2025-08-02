import type { ReactNode } from "react"

export type SnackbarVariant = "filled" | "outlined"
export type SnackbarColor = "success" | "error" | "info" | "warning" | "neutral"
export type SnackbarPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left"

/**
 * Represents the properties for the Snackbar component.
 */
export interface SnackbarProps {
  /**
   * The CSS class name to be applied to the Snackbar component.
   */
  className?: string

  /**
   * The main title of the Snackbar component.
   */
  title: ReactNode | string

  /**
   * The description of the Snackbar component.
   */
  description?: ReactNode | string

  /**
   * The color of the Snackbar.
   * Possible values: "success", "error", "warning" or "neutral".
   * @default "success"
   */
  color?: SnackbarColor

  /**
   * The Snackbar variant options.
   * Possible values: "filled" or "outlined".
   * @default "outlined"
   */
  variant?: SnackbarVariant

  /**
   * Specifies whether the modal is open or not.
   */
  isOpen: boolean

  /**
   * Callback function to be called when the modal is closed.
   */
  onClose?: () => void

  /**
   * Time in milliseconds to automatically close the modal.
   * @default 6000
   */
  timeToClose?: number

  /**
   * Controls the Snackbar's position on the screen.
   * @default "top-right"
   */
  position?: SnackbarPosition
}
