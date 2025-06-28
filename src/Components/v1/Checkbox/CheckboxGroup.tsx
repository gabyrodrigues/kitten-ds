import { cn, generateRandomId } from "@utils"
import React, { type ReactElement } from "react"
import { Flex } from "../Flex"
import { Text } from "../Text"
import Checkbox from "./Checkbox"
import type { CheckboxGroupProps, CheckboxProps } from "./Checkbox.types"

export default function CheckboxGroup({
  children,
  color = "primary",
  defaultA11yLabel = "Checkbox Group",
  disabled = false,
  label,
  labelClassName,
  helperText,
  errorText,
  successText,
  className,
  listClassName,
  ...props
}: CheckboxGroupProps): ReactElement {
  const flattenedChildren = React.Children.toArray(children).flatMap((child) => {
    if (React.isValidElement<CheckboxGroupProps>(child) && child.type === React.Fragment) {
      return React.Children.toArray(child.props.children)
    }
    return child
  })

  const mergedClasses = cn("flex flex-col", className)

  const baseId = generateRandomId("checkboxgroup")

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
      component="fieldset"
      className={mergedClasses}
      aria-describedby={describedByIds}
      aria-invalid={!!errorText}
      {...props}
    >
      <Text
        component="legend"
        variant="body2"
        color={disabled ? "text-typography-disabled" : "text-typography-primary"}
        className={cn(labelClassName, label ? "mb-2" : "sr-only")}
      >
        {label || defaultA11yLabel}
      </Text>

      <Flex
        direction="flex-col"
        rowGap="gap-y-3"
        className={cn(listClassName)}
      >
        {flattenedChildren.map((child, index) => {
          if (!React.isValidElement(child)) {
            console.warn("CheckboxGroup only accepts Checkbox, Flex, or div elements as children.")
            return null
          }
          if (child.type === Checkbox) {
            const childProps = child.props as CheckboxProps
            const isDisabled = Boolean(disabled) || Boolean(childProps.disabled)
            return (
              <Checkbox
                key={childProps?.name ?? `checkbox-${index}`}
                {...childProps}
                color={color}
                disabled={isDisabled}
              />
            )
          }
          // Allow for indentation/nesting
          if (child.type === Flex || child.type === "div") {
            return child
          }

          // If it's a valid element but not an allowed type
          console.warn("CheckboxGroup only accepts Checkbox, Flex, or div elements as children.")
          return null
        })}
      </Flex>

      {(helperText || errorText || successText) && (
        <Flex
          direction="flex-col"
          gap="gap-1"
          className="mt-2"
        >
          {helperText && (
            <Text
              variant="body3"
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
            >
              {errorText}
            </Text>
          )}
          {successText && (
            <Text
              variant="body3"
              color="text-success"
              id={`${baseId}_success`}
              aria-live="polite"
            >
              {successText}
            </Text>
          )}
        </Flex>
      )}
    </Flex>
  )
}
