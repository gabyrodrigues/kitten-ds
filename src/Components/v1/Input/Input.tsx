import {
  type ChangeEvent,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  useId
} from "react"

import { cn } from "@utils"
import { Flex } from "../Flex"
import { Text } from "../Text"
import type { InputProps } from "./Input.types"
import { INPUT_CONTAINER_STYLE, INPUT_STYLE, handleBgColor, handleBorderColor } from "./Styles"

export default function Input({
  bgColor = "bg-surface",
  borderColor = "border-input-border",
  className,
  componentProps,
  contentClassName,
  disabled = false,
  errorText,
  helperText,
  id,
  inputClassName,
  label,
  labelProps,
  type = "text",
  fontSize = "text-body2",
  full = false,
  leftSection,
  multiline = false,
  radius = "rounded-lg",
  readOnly = false,
  required = false,
  resize = false,
  rightSection,
  paddingL = "pl-3",
  paddingR = rightSection ? "pr-8" : "pr-3",
  paddingY = "py-2",
  rows = 4,
  successText,
  value,
  withAsterisk = false,
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
    handleBorderColor(borderColor, !!errorText, !!successText),
    handleBgColor(disabled, bgColor),
    full && "w-full",
    !disabled &&
      !readOnly &&
      "focus-within:outline-0 focus-within:ring-2 focus-within:ring-focus-ring focus-within:border-transparent",
    contentClassName
  )

  const mergedInputClasses = cn(
    INPUT_STYLE,
    fontSize,
    readOnly && "cursor-default",
    full && "w-full",
    multiline && "overflow-hidden text-ellipsis line-clamp-1",
    multiline && !resize && "resize-none",
    !disabled && "cursor-pointer",
    inputClassName
  )

  const reactId = useId()
  const baseId = id ?? `input-${reactId}`
  const describedByIds =
    [
      errorText ? `${baseId}_error` : null,
      successText ? `${baseId}_success` : null,
      helperText ? `${baseId}_help` : null
    ]
      .filter(Boolean)
      .join(" ") || undefined

  const commonProps = {
    id: baseId,
    value,
    required,
    disabled,
    readOnly: readOnly,
    onChange: handleChange,
    className: mergedInputClasses,
    "aria-required": required || undefined,
    "aria-invalid": !!errorText || undefined,
    "aria-describedby": describedByIds || undefined,
    "aria-disabled": disabled || undefined,
    "aria-readonly": readOnly || undefined,
    "data-disabled": disabled || undefined,
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
          marginBottom="mb-2"
          color={disabled ? "text-disabled" : "text-typography-primary"}
          {...labelProps}
          htmlFor={baseId}
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
      <Flex
        direction="flex-col"
        className="mt-2"
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
      </Flex>
    </Flex>
  )
}
