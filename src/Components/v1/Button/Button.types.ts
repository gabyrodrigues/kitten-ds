import type { ButtonHTMLAttributes, ReactNode } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of the button element.
   * @default "button"
   */
  type?: "submit" | "reset" | "button" | undefined

  /**
   * The content of the button.
   */
  children?: ReactNode

  /**
   * Specifies whether the button is disabled or not.
   */
  disabled?: boolean

  /**
   * The CSS class name to be applied to the Container component.
   */
  class_name?: string
}
