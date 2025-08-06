import { cn } from "@utils"
import React, { useId, type ChangeEvent, type ReactElement } from "react"
import { Flex } from "../Flex"
import { Icon } from "../Icon"
import { Text } from "../Text"
import Radio from "./Radio"
import type { RadioGroupProps, RadioProps } from "./Radio.types"

export default function RadioGroup({
  children,
  name,
  value,
  onChange,
  color = "primary",
  defaultA11yLabel = "Radio Group",
  direction = "vertical",
  disabled = false,
  id,
  label,
  labelClassName,
  helperText,
  errorText,
  successText,
  className,
  listClassName,
  required = false,
  withAsterisk = false,
  ...props
}: RadioGroupProps): ReactElement {
  const flattenedChildren = React.Children.toArray(children).flatMap((child) => {
    if (React.isValidElement<RadioGroupProps>(child) && child.type === React.Fragment) {
      return React.Children.toArray(child.props.children)
    }
    return child
  })

  const mergedClasses = cn("flex flex-col", className)

  function handleRadioChange(event: ChangeEvent<HTMLInputElement>) {
    if (!disabled) {
      onChange?.(event)
    }
  }

  const reactId = useId()
  const baseId = id ?? `radiogroup-${reactId}`
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
      id={baseId}
      component="fieldset"
      className={mergedClasses}
      aria-describedby={describedByIds}
      aria-invalid={!!errorText}
      {...props}
    >
      <Text
        component="legend"
        variant="label"
        color={disabled ? "text-typography-disabled" : "text-typography-primary"}
        className={cn(labelClassName, label ? "mb-nano" : "sr-only")}
      >
        {label || defaultA11yLabel}

        {withAsterisk && required && (
          <Text
            component="span"
            variant="body2"
            color={disabled ? "text-typography-disabled" : "text-error"}
            className="ml-quark inline"
            aria-hidden="true"
          >
            *
          </Text>
        )}
      </Text>

      <Flex
        direction={direction === "horizontal" ? "flex-row" : "flex-col"}
        gap="gap-xs"
        className={cn(listClassName)}
        data-testid="radio-group-list"
      >
        {flattenedChildren.map((child, index) => {
          if (!React.isValidElement(child) || child.type !== Radio) {
            console.warn("RadioGroup only accepts Radio components as children.")
            return null
          }

          const childProps = child.props as RadioProps
          const isDisabled = Boolean(disabled) || Boolean(childProps.disabled)
          const isRequired = Boolean(required) || Boolean(childProps.required)

          return (
            <Radio
              key={childProps.value ?? `radio-${index}`}
              {...childProps}
              name={name}
              checked={childProps.value === value}
              onChange={handleRadioChange}
              color={color}
              disabled={isDisabled}
              required={isRequired}
            />
          )
        })}
      </Flex>

      {(helperText || errorText || successText) && (
        <Flex
          direction="flex-col"
          gap="gap-quark"
          className="mt-nano"
        >
          {helperText && (
            <Text
              variant="body3"
              color={disabled ? "text-disabled" : "text-typography-secondary"}
              id={`${baseId}_help`}
            >
              {helperText}
            </Text>
          )}
          {errorText && (
            <Text
              variant="body3"
              color="text-error"
              id={`${baseId}_error`}
              aria-live="polite"
              className="flex items-center gap-1"
            >
              <Icon
                type="error"
                variant="outlined"
                color="text-error"
                fontSize="text-sm"
                aria-hidden="true"
              />
              {errorText}
            </Text>
          )}
          {successText && (
            <Text
              variant="body3"
              color="text-success"
              id={`${baseId}_success`}
              aria-live="polite"
              className="flex items-center gap-1"
            >
              <Icon
                type="check_circle"
                variant="outlined"
                color="text-success"
                fontSize="text-sm"
                aria-hidden="true"
              />
              {successText}
            </Text>
          )}
        </Flex>
      )}
    </Flex>
  )
}
