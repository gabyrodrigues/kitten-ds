import type { ChangeEvent, InputHTMLAttributes } from "react"

export type RadioColor = "primary" | "secondary" | "gray"

/**
 * Props for the accessible Radio component.
 *
 * Renders a radio input with a label and optional helper, error, and success texts.
 * Supports various styles and behaviors for a flexible UI component.
 * This component is designed to be accessible and customizable,
 * allowing for different colors, states, and interactions.
 *
 */

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "checked"> {
  /**
   * The id of the Radio element.
   */
  id?: string

  /**
   * The label text for the Radio Button.
   */
  label?: string

  /**
   * Specifies whether the Radio Button is checked or not.
   */
  checked?: boolean

  /**
   * Specifies whether the Radio Button is disabled or not.
   */
  disabled?: boolean

  /**
   * The value associated with the Radio Button.
   */
  value: string | number

  /**
   * The callback function to be called when the Radio button is changed.
   */
  onChange?(event: ChangeEvent<HTMLInputElement>): void

  /**
   * The CSS class name to be applied to the Radio component root.
   */
  rootClassName?: string

  /**
   * The CSS class name to be applied to the Radio component Input.
   */
  inputClassName?: string

  /**
   * The CSS class name to be applied to the Radio component content container.
   */
  contentClassName?: string

  /**
   * The CSS class name to be applied to the Radio component Label.
   */
  labelClassName?: string

  /**
   * The CSS class name to be applied to the Radio component checked input indicator.
   */
  checkedClassName?: string

  /**
   * The radio button variant.
   * Possible values: "primary", "secondary" or "gray".
   */
  color?: RadioColor

  /**
   * The helper text for the radio file.
   */
  helperText?: string

  /**
   * The error text to be displayed below the radio in case of an error.
   */
  errorText?: string

  /**
   * The success text to be displayed below the radio in case of success.
   */
  successText?: string
}
