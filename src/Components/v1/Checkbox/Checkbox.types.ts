import type { ChangeEvent, InputHTMLAttributes, MouseEvent, ReactNode } from "react"

export type CheckboxColor = "primary" | "secondary" | "gray"

/**
 * Props for the accessible Checkbox component.
 *
 * Renders a custom checkbox input with a label and optional helper, error, and success texts.
 * This component is designed to be accessible and customizable,
 * allowing for different colors, states, and interactions.
 *
 */

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "checked"> {
  /**
   * The id of the Checkbox element.
   */
  id?: string

  /**
   * The label text for the Checkbox component.
   */
  label?: string

  /**
   * Specifies whether the Checkbox component is checked or not.
   */
  checked?: boolean

  /**
   * Specifies whether the Checkbox component is indeterminate or not.
   */
  indeterminate?: boolean

  /**
   * Specifies whether the Checkbox component is disabled or not.
   */
  disabled?: boolean

  /**
   * The value associated with the Checkbox component.
   */
  value: string | number

  /**
   * The callback function to be called when the Checkbox button is changed.
   */
  onChange?(checked: boolean, event?: ChangeEvent<HTMLInputElement>): void

  /**
   * Specifies the callback function to be called when the checkbox is clicked.
   * This is an additional option for handling specific click behaviors.
   */
  onClick?(event: MouseEvent<HTMLInputElement>): void

  /**
   * The CSS class name to be applied to the Checkbox component root.
   * This is the outermost container of the Checkbox component.
   */
  className?: string

  /**
   * The CSS class name to be applied to the Checkbox component Input.
   * This is the actual checkbox input element.
   * It is useful for styling the Checkbox input itself.
   */
  inputClassName?: string

  /**
   * The CSS class name to be applied to the Checkbox component content container.
   * This is the container that holds the Checkbox input.
   */
  contentClassName?: string

  /**
   * The CSS class name to be applied to the Checkbox component Label.
   * This is the text label that appears next to the Checkbox component.
   */
  labelClassName?: string

  /**
   * The Checkbox component variant.
   * Possible values: "primary", "secondary" or "gray".
   */
  color?: CheckboxColor

  /**
   * The helper text for the Checkbox component.
   */
  helperText?: string

  /**
   * The error text to be displayed below the Checkbox in case of an error.
   */
  errorText?: string

  /**
   * The success text to be displayed below the Checkbox in case of success.
   */
  successText?: string
}

export interface CheckboxGroupProps
  extends Pick<
    CheckboxProps,
    | "color"
    | "disabled"
    | "name"
    | "value"
    | "onChange"
    | "label"
    | "helperText"
    | "errorText"
    | "successText"
  > {
  /**
   * The CSS class name to be applied to the CheckboxGroup root.
   */
  className?: string

  /**
   * The list of Checkbox components to be rendered inside the CheckboxGroup.
   * It only accepts Checkbox components as children.
   */
  children: ReactNode

  /**
   * The CSS class name to be applied to the Checkbox Group list container.
   * This is useful for styling the list of checkbox buttons.
   */
  listClassName?: string
}
