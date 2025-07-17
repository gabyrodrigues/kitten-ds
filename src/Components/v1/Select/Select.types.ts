import type { ChangeEvent, FocusEvent, ReactNode } from "react"
import type { IconButtonProps } from "../IconButton/IconButton.types"
import type { InputProps } from "../Input/Input.types"
import type { TextSize } from "../Text/Text.types"
import type {
  BgColor,
  BorderColor,
  BorderRadius,
  PaddingLeft,
  PaddingRight,
  PaddingY
} from "../types"

export type OptionObject = { value: string | number; label: string }
export type OptionType = number | string | OptionObject
export type OptionItem = OptionType[]
export type SelectedStyleType = "LIST" | "COUNT"
/**
 * Defines the props available for the Select component.
 * The Select component is an acessible and customizable dropdown selector that allows users to choose from a list of options.
 * It supports features such as multiple selections, searchability, and custom styling.
 */
export interface SelectProps extends Omit<InputProps, "value" | "onChange" | "autoComplete"> {
  /**
   * If true, makes the select take full width of its container.
   *  @default false
   */
  full?: boolean

  /**
   * The label for the Select.
   */
  label?: string

  /**
   * Extra CSS classes passed down to the input label.
   */
  labelClassName?: string

  /**
   * The placeholder for the Select.
   */
  placeholder?: string

  /**
   * The id of the select element.
   */
  id: string

  /**
   * Sets required attribute on the select element.
   * @default false
   */
  required?: boolean

  /**
   * Sets readOnly attribute on the select element.
   * @default false
   */
  readOnly?: boolean

  /**
   * Determines whether the required asterisk should be displayed.
   * This is useful for indicating that the Select is required in a form.
   * It also depends on required property to be displayed.
   *
   * @default false
   */
  withAsterisk?: boolean

  /**
   * The helper text to be displayed below the selected for additional information.
   */
  helperText?: string

  /**
   * The error text to be displayed below the select in case of an error.
   */
  errorText?: string

  /**
   * The success text to be displayed below the select in case of success.
   */
  successText?: string

  /**
   * Specifies whether the select is disabled or not.
   */
  disabled?: boolean

  /**
   * Content displayed on the left side of the select
   */
  leftSection?: ReactNode

  /**
   * The value of the Select.
   */
  value: OptionType | Array<OptionType> | undefined

  /**
   * Controls the Select border radius.
   * This corresponds to Tailwind's `rounded-*` classes.
   * @default "rounded-lg"
   */
  radius?: BorderRadius

  /**
   * Option to control the Input font-size.
   */
  fontSize?: TextSize

  /**
   * The left padding of the Input component.
   * This corresponds to Tailwind's `pl-*` classes.
   */
  paddingL?: PaddingLeft

  /**
   * The right padding of the Input component.
   * This corresponds to Tailwind's `pr-*` classes.
   */
  paddingR?: PaddingRight

  /**
   * The vertical padding of the Input component.
   * This corresponds to Tailwind's `py-*` classes.
   */
  paddingY?: PaddingY

  /**
   * Controls the Input background color.
   * This corresponds to Tailwind's `bg-*` classes.
   * @default "bg-surface"
   */
  bgColor?: BgColor

  /**
   * Controls the Input border color.
   * This corresponds to Tailwind's `border-*` classes.
   * @default "border-input-border"
   */
  borderColor?: BorderColor

  /**
   * Controls the selected item background color.
   * This corresponds to Tailwind's `bg-*` classes.
   */
  selectedOptionColor?: BgColor

  /**
   * The CSS class name to be applied to the root of Select component.
   */
  className?: string

  /**
   * The CSS class name to be applied to the select content root.
   */
  contentClassName?: string

  /**
   * The CSS class name to be applied to the select option list item.
   */
  optionClassName?: string

  /**
   * The options to be displayed in the Select.
   */
  options: OptionItem

  /**
   * Option to control if the Select has an autocomplete.
   * This allows Select filtering options based on user input.
   * When set to true, the Select will allow users to type and filter options dynamically.
   * The `onChangeInput` prop can be used to handle the input changes.
   * @default false
   */
  autoComplete?: boolean

  /**
   * Option to control if the Select shows the clear button when it has a value.
   * @default false
   */
  clearable?: boolean

  /**
   * Option to control clear button properties.
   * This is used when clearable is true.
   */
  clearButtonProps?: IconButtonProps

  /**
   * Option to control the Autocomplete label when no items are found.
   */
  notFoundLabel?: string

  /**
   * The CSS class name to be applied to the input of the component.
   */
  inputClassName?: string

  /**
   * The CSS class name to be applied to the list of options container.
   */
  optionsListClassName?: string

  /**
   * Option to control if the Select can handle multiple selections.
   * This allows users to select more than one option at a time.
   * When set to true, the value prop should be an array of selected options.
   * @default false
   */
  multiple?: boolean

  /**
   * Enables dynamic positioning of the dropdown list.
   * This allows the dropdown to adjust its position based on available space in the viewport.
   * This is useful for ensuring that the dropdown is always visible and does not overflow the viewport.
   * It is particularly important for mobile devices where screen space is limited.
   * @default false
   */
  autoPosition?: boolean

  /**
   * Option to control the clearable onClear function when clearable is true.
   */
  onClear?(): void

  /**
   * The callback function to be called when the value of the Select changes.
   * @param value - The new value of the Select.
   */
  onChange?(value: OptionType | Array<OptionType> | undefined): void

  /**
   * The callback function to be called when the input inside the Select changes.
   * @param value - The typed value.
   * @param event - The input change event.
   */
  onChangeInput?(value: string, event?: ChangeEvent<HTMLInputElement>): void

  /**
   * The callback function to be called on Select Input onBlur.
   */
  onBlur?(event: FocusEvent<HTMLInputElement>): void
}
