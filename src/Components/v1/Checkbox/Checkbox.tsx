import { cn } from "@utils"
import type { ChangeEvent, MouseEvent } from "react"
import { Flex } from "../Flex"
import { Icon } from "../Icon"
import { Text } from "../Text"
import type { CheckboxProps } from "./Checkbox.types"
import { CHECKBOX_INPUT_CONTAINER, SPAN_STYLE, checkboxInputVariants } from "./Styles"

export default function Checkbox({
  id = "checkbox",
  checked = false,
  indeterminate = false,
  disabled,
  label,
  labelClassName,
  className,
  contentClassName,
  inputClassName,
  color,
  errorText,
  helperText,
  successText,
  onChange,
  onClick,
  ...props
}: CheckboxProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.stopPropagation()
    onChange?.(Boolean(checked), event)
  }

  function handleClick(event: MouseEvent<HTMLInputElement>) {
    event.stopPropagation()
    onClick?.(event)
  }

  const iconClasses = cn(SPAN_STYLE)
  const iconType = indeterminate ? "check_indeterminate_small" : "check"
  const checkboxInputClasses = checkboxInputVariants({
    color
  })

  const mergedRootClasses = cn("flex-wrap", className)
  const mergedContentClasses = cn(CHECKBOX_INPUT_CONTAINER, contentClassName)
  const mergedInputClasses = cn(checkboxInputClasses, inputClassName)
  const mergedLabelClasses = cn("cursor-pointer", disabled && "cursor-default", labelClassName)

  const baseId = id ?? `checkbox-${label || "default"}`
  const describedByIds =
    [
      errorText ? `${baseId}_error` : null,
      successText ? `${baseId}_success` : null,
      helperText ? `${baseId}_help` : null
    ]
      .filter(Boolean)
      .join(" ") || undefined

  return (
    <Flex
      align="items-start"
      colGap="gap-x-3"
      className={mergedRootClasses}
    >
      <Flex
        align="items-center"
        justify="justify-center"
        className={mergedContentClasses}
      >
        <input
          id={baseId}
          aria-describedby={describedByIds}
          aria-invalid={!!errorText}
          type="checkbox"
          checked={checked}
          aria-disabled={disabled}
          data-disabled={disabled}
          tabIndex={disabled ? 0 : undefined}
          onChange={(event) => !disabled && handleChange?.(event)}
          onClick={(event) => !disabled && handleClick?.(event)}
          {...props}
          className={mergedInputClasses}
        />
        {(checked || indeterminate) && (
          <div className={iconClasses}>
            <Icon
              color={disabled ? "text-typography-disabled" : "text-typography-inverted"}
              type={iconType}
            />
          </div>
        )}
      </Flex>

      <Flex direction="flex-col">
        {label && (
          <Text
            htmlFor={baseId}
            variant="body2"
            component="label"
            color={disabled ? "text-typography-disabled" : "text-typography-primary"}
            className={mergedLabelClasses}
          >
            {label}
          </Text>
        )}

        {helperText && (
          <Text
            variant="body3"
            color={disabled ? "text-disabled" : "text-typography-secondary"}
            id={`${baseId}_help`}
          >
            {helperText}
          </Text>
        )}

        {successText && (
          <Text
            variant="body3"
            color="text-success"
            id={`${baseId}_success`}
          >
            {successText}
          </Text>
        )}

        {errorText && (
          <Text
            variant="body3"
            color="text-error"
            id={`${baseId}_error`}
          >
            {errorText}
          </Text>
        )}
      </Flex>
    </Flex>
  )
}
