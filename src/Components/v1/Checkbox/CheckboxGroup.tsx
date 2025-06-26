import { cn } from "@utils"
import React, { type ReactElement } from "react"
import { Flex } from "../Flex"
import { Text } from "../Text"
import Checkbox from "./Checkbox"
import type { CheckboxGroupProps, CheckboxProps } from "./Checkbox.types"

export default function CheckboxGroup({
  children,
  color = "primary",
  disabled = false,
  label,
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
          if (!React.isValidElement(child) || child.type !== Checkbox) {
            console.warn("CheckboxGroup only accepts Checkbox components as children.")
            return null
          }

          const childProps = child.props as CheckboxProps
          const isDisabled = Boolean(disabled) || Boolean(childProps.disabled)

          return (
            <Checkbox
              key={childProps?.name ?? `checkbox-${index}`}
              {...props}
              {...childProps}
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
