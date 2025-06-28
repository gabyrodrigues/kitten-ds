import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react"
import type { FlexProps } from "../Flex/Flex.types"

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
   * The label text for the Radio component.
   */
  label?: string

  /**
   * Specifies whether the Radio component is checked or not.
   */
  checked?: boolean

  /**
   * Specifies whether the Radio component is disabled or not.
   */
  disabled?: boolean

  /**
   * The value associated with the Radio component.
   */
  value: string | number

  /**
   * The callback function to be called when the Radio button is changed.
   */
  onChange?(event: ChangeEvent<HTMLInputElement>): void

  /**
   * The CSS class name to be applied to the Radio component root.
   * This is the outermost container of the Radio component.
   */
  className?: string

  /**
   * The CSS class name to be applied to the Radio component Input.
   * This is the actual radio input element.
   * It is useful for styling the Radio input itself.
   */
  inputClassName?: string

  /**
   * The CSS class name to be applied to the Radio component content container.
   * This is the container that holds the Radio input.
   */
  contentClassName?: string

  /**
   * The CSS class name to be applied to the Radio component Label.
   * This is the text label that appears next to the Radio component.
   */
  labelClassName?: string

  /**
   * The CSS class name to be applied to the Radio component checked input indicator.
   * This is the visual indicator that appears when the Radio component is checked.
   */
  checkedClassName?: string

  /**
   * The Radio component variant.
   * Possible values: "primary", "secondary" or "gray".
   */
  color?: RadioColor

  /**
   * The helper text for the Radio component.
   */
  helperText?: string

  /**
   * The error text to be displayed below the Radio in case of an error.
   */
  errorText?: string

  /**
   * The success text to be displayed below the Radio in case of success.
   */
  successText?: string
}

export interface RadioGroupProps
  extends Pick<
      RadioProps,
      | "color"
      | "disabled"
      | "helperText"
      | "errorText"
      | "id"
      | "label"
      | "labelClassName"
      | "name"
      | "onChange"
      | "successText"
      | "value"
    >,
    Omit<FlexProps, "color" | "onChange" | "value"> {
  /**
   * The CSS class name to be applied to the RadioGroup root.
   */
  className?: string

  /**
   * The list of Radio components to be rendered inside the RadioGroup.
   * It only accepts Radio components as children.
   */
  children: ReactNode

  /**
   * The CSS class name to be applied to the Radio Group list container.
   * This is useful for styling the list of radio buttons.
   */
  listClassName?: string

  /**
   * The default accessible label for the Radio Group.
   * This label is used for screen readers when no label is provided.
   * It helps users understand the purpose of the Radio Group.
   *
   * @default "Radio Group"
   */
  defaultA11yLabel?: string
}
