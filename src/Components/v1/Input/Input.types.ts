import type {
  ChangeEvent,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode
} from "react"
import type { FlexProps } from "../Flex/Flex.types"
import type { TextSize } from "../Text/Text.types"
import type {
  BgColor,
  BorderColor,
  BorderRadius,
  PaddingLeft,
  PaddingRight,
  PaddingY
} from "../types"

/**
 * Defines the props available for the Input component.
 * The Input component is a versatile data entry field that can be used for single-line or multi-line text input.
 * It supports acessibility features and various features such as labels, sections, validation messages, and styling options.
 */
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  /**
   * If true, makes the input take full width of its container.
   *  @default false
   */
  full?: boolean

  /**
   * The type of input element.
   * This corresponds to the HTML input type attribute.
   * It can be any valid HTML input type such as "text", "email", "password", etc.
   *
   * @default "text"
   */
  type?: HTMLInputTypeAttribute | undefined

  /**
   * If true, a textarea element is rendered instead of an input.
   * @default "false"
   */
  multiline?: boolean

  /**
   * Number of rows to display when multiline option is set to true.
   * @default "2"
   */
  rows?: number

  /**
   * The id of the element.
   * This is used to associate the component with a label and for accessibility purposes.
   * It is also used to identify the component in forms and when submitting data.
   */
  id?: string

  /**
   * Sets required attribute on the input element.
   * @default false
   */
  required?: boolean

  /**
   * Sets readOnly attribute on the input element.
   * @default false
   */
  readOnly?: boolean

  /**
   * Determines whether the required asterisk should be displayed.
   * This is useful for indicating that the Input is required in a form.
   * It also depends on required property to be displayed.
   *
   * @default false
   */
  withAsterisk?: boolean

  /**
   * Content displayed on the left side of the input
   */
  leftSection?: ReactNode

  /**
   * Content displayed on the right side of the input
   */
  rightSection?: ReactNode

  /**
   * The label for the input.
   * It is attached to the input element via the `htmlFor` attribute.
   *
   */
  label?: string | ReactNode

  /**
   * The CSS class name to be applied to the component Label.
   */
  labelClassName?: string

  /**
   * It spreads the properties to the root element of the Input component.
   * The props are the same as the Flex component props.
   * It is applied to the root element of the Input component.
   * This can be used to control layout, spacing, and other visual aspects.
   */
  componentProps?: FlexProps

  /**
   * The placeholder text for the input.
   * This text is displayed when the input is empty and not focused.
   */
  placeholder?: string

  /**
   * Specifies whether the input is disabled or not.
   */
  disabled?: boolean

  /**
   * The helper text to be displayed below the input for additional information.
   */
  helperText?: string

  /**
   * The error text to be displayed below the input in case of an error.
   */
  errorText?: string

  /**
   * The success text to be displayed below the input in case of success.
   */
  successText?: string

  /**
   * The value of the input.
   */
  value: string | number | undefined

  /**
   * Controls the Input border radius.
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
   * The CSS class name to be applied to the input element content container.
   * This is the container that holds the input element.
   */
  contentClassName?: string

  /**
   * The CSS class name to be applied to the root of Input component.
   */
  className?: string

  /**
   * The CSS class name to be applied to the input of the component.
   */
  inputClassName?: string

  /**
   * If true, the input will be resizable.
   * This is applicable only when the input is multiline.
   * @default false
   */
  resize?: boolean

  /**
   * The name attribute of the input element.
   * This is used to identify the input when submitting a form.
   * It is also used for accessibility purposes.
   */
  name?: string

  /**
   * Defines the attribute autoComplete of the input, suggesting automatic filling by the browser.
   */
  autoComplete?: HTMLInputAutoCompleteAttribute

  /**
   * If true, the input will receive focus automatically when rendered.
   * This is useful for forms where the input should be focused by default.
   * @default false
   */
  autoFocus?: boolean

  /**
   * The callback function to be called when the value of the input changes.
   * This function receives the new value and the event as parameters.
   * @param value - The new value of the input. It is a required parameter.
   * @param event - The input change event.
   */
  onChange?(
    value: string | number,
    event?: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void
}
