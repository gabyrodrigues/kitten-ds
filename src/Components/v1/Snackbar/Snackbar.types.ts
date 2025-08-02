import type { ButtonHTMLAttributes, ReactNode } from "react"

export type SnackbarVariant = "filled" | "outlined"
export type SnackbarColor = "success" | "error" | "info" | "warning" | "neutral"
export type SnackbarPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left"

/**
 * Props for the Snackbar component.
 * The Snackbar component is used to display brief messages or alerts to the user.
 * It can be used to inform users about the status of an operation, provide feedback, or
 * display notifications.
 * It includes options for customization such as color, variant, position, and more.
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
   * @default "filled"
   */
  variant?: SnackbarVariant

  /**
   * Specifies whether the modal is open or not.
   */
  isOpen: boolean

  /**
   * Callback function to be called when the modal is closed.
   * If not provided, the modal will not be closable and will not display the close button
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

  /**
   * Apply properties to the close button.
   * This is useful for customizing the close button's appearance and behavior.
   * It will be rendered only if `onClose` prop is provided.
   *
   */
  closeButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>
}
