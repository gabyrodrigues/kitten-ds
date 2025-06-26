import { cn } from "@utils"
import React, { type ChangeEvent, type ReactElement } from "react"
import { Flex } from "../Flex"
import { Text } from "../Text"
import Radio from "./Radio"
import type { RadioGroupProps, RadioProps } from "./Radio.types"

export default function RadioGroup({
  children,
  name,
  value,
  onChange,
  color = "primary",
  disabled = false,
  label,
  helperText,
  errorText,
  successText,
  className,
  listClassName,
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

  return (
    <Flex
      component="fieldset"
      className={mergedClasses}
    >
      {label && (
        <Text
          component="legend"
          variant="body2"
          color={disabled ? "text-typography-disabled" : "text-typography-primary"}
          className="mb-2"
        >
          {label}
        </Text>
      )}

      <Flex
        direction="flex-col"
        rowGap="gap-y-3"
        className={cn(listClassName)}
      >
        {flattenedChildren.map((child, index) => {
          if (!React.isValidElement(child) || child.type !== Radio) {
            console.warn("RadioGroup only accepts Radio components as children.")
            return null
          }

          const childProps = child.props as RadioProps
          const isDisabled = Boolean(disabled) || Boolean(childProps.disabled)

          return (
            <Radio
              key={childProps.value ?? `radio-${index}`}
              {...props}
              {...childProps}
              name={name}
              checked={childProps.value === value}
              onChange={handleRadioChange}
              color={color}
              disabled={isDisabled}
            />
          )
        })}
      </Flex>

      {(helperText || errorText || successText) && (
        <Flex
          direction="flex-col"
          gap="gap-1"
          className="mt-2"
        >
          {helperText && <Text variant="body3">{helperText}</Text>}
          {errorText && (
            <Text
              variant="body3"
              color="text-error"
            >
              {errorText}
            </Text>
          )}
          {successText && (
            <Text
              variant="body3"
              color="text-success"
            >
              {successText}
            </Text>
          )}
        </Flex>
      )}
    </Flex>
  )
}
