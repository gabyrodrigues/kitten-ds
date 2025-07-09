import clsx from "clsx"
import type { ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes } from "react"

import { cn } from "@utils"
import { Flex } from "../Flex"
import { Text } from "../Text"
import type { InputProps } from "./Input.types"
import { INPUT_CONTAINER_STYLE, INPUT_STYLE, handleBgColor, handleBorderColor } from "./Styles"

export default function Input({
  label,
  labelProps,
  componentProps,
  type = "text",
  id = "input",
  value,
  required = false,
  readOnly = false,
  disabled = false,
  fontSize = "text-body2",
  radius = "rounded-lg",
  leftSection,
  rightSection,
  paddingL = "pl-3",
  paddingR = rightSection ? "pr-8" : "pr-3",
  paddingY = "py-2",
  helperText,
  errorText,
  successText,
  className,
  inputClassName,
  contentClassName,
  multiline = false,
  rows = 4,
  borderColor = "border-input-border",
  bgColor = "bg-surface",
  withAsterisk = false,
  full = false,
  onChange,
  ...props
}: InputProps) {
  const mergedContentClasses = cn(
    INPUT_CONTAINER_STYLE,
    radius,
    paddingL,
    paddingR,
    paddingY,
    borderColor && [borderColor, "border"],
    handleBorderColor(disabled, borderColor, !!errorText, !!successText),
    handleBgColor(disabled, bgColor),
    full && "w-full",
    {
      "hover:shadow-variant1 focus-within:shadow-variant1": !disabled && !readOnly
    },
    contentClassName
  )

  const mergedInputClasses = cn(
    INPUT_STYLE,
    fontSize,
    readOnly && "cursor-default",
    full && "w-full",
    multiline ? "resize-none" : "overflow-hidden text-ellipsis line-clamp-1",
    !disabled && "cursor-pointer",
    inputClassName
  )

  const ariaDescribedby = clsx(
    helperText && `${id}-help`,
    successText && `${id}-success`,
    errorText && `${id}-error`
  )
  const commonProps = {
    id,
    value,
    required,
    disabled,
    readOnly: readOnly,
    onChange: handleChange,
    className: mergedInputClasses,
    "aria-required": required || undefined,
    "aria-invalid": !!errorText || undefined,
    "aria-describedby": ariaDescribedby || undefined,
    ...props
  }

  function handleChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    onChange?.(event.target.value, event)
  }

  return (
    <Flex
      direction="flex-col"
      justify="justify-start"
      width={full ? "w-full" : "w-auto"}
      className={cn(className)}
      {...componentProps}
    >
      {label && (
        <Text
          component="label"
          variant="body2"
          marginBottom="mb-1"
          color={disabled ? "text-disabled" : "text-typography-primary"}
          {...labelProps}
          htmlFor={id}
        >
          {label}{" "}
          {withAsterisk && required && (
            <Text
              component="span"
              variant="body2"
              color={disabled ? "text-typography-disabled" : "text-error"}
              className="inline"
            >
              *
            </Text>
          )}
        </Text>
      )}
      <Flex
        align="items-center"
        width="w-full"
        className={mergedContentClasses}
      >
        {leftSection && (
          <Flex
            align="items-center"
            gap="gap-1"
            className="shrink-0 max-w-fit"
          >
            {leftSection}
          </Flex>
        )}

        {multiline ? (
          <textarea
            {...(commonProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            rows={rows}
          />
        ) : (
          <input
            {...(commonProps as InputHTMLAttributes<HTMLInputElement>)}
            type={type}
          />
        )}

        {rightSection && (
          <Flex
            align="items-center"
            className="absolute top-1/2 -translate-y-1/2 right-3"
          >
            {rightSection}
          </Flex>
        )}
      </Flex>
      {helperText && (
        <Text
          variant="body3"
          color={disabled ? "text-disabled" : "text-gray"}
          marginTop="mt-1"
          id={`${id}_help`}
        >
          {helperText}
        </Text>
      )}
      {successText && (
        <Text
          variant="body3"
          color="text-positive"
          marginTop="mt-1"
          id={`${id}_success`}
        >
          {successText}
        </Text>
      )}
      {errorText && (
        <Text
          variant="body3"
          color="text-negative"
          marginTop="mt-1"
          id={`${id}_error`}
        >
          {errorText}
        </Text>
      )}
    </Flex>
  )
}
