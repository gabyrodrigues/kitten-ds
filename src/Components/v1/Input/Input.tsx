import {
  type ChangeEvent,
  type InputHTMLAttributes,
  type Ref,
  type TextareaHTMLAttributes,
  forwardRef,
  useId
} from "react"

import { cn } from "@utils"
import { Flex } from "../Flex"
import { Icon } from "../Icon"
import { Text } from "../Text"
import type { InputProps } from "./Input.types"
import { INPUT_CONTAINER_STYLE, INPUT_STYLE, handleBgColor, handleBorderColor } from "./Styles"

// biome-ignore lint/style/useNamingConvention: component name is Input
const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(function Input(
  {
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
    labelClassName,
    type = "text",
    fontSize = "text-body3",
    full = false,
    inputContentProps,
    leftSection,
    multiline = false,
    radius = "rounded-lg",
    readOnly = false,
    required = false,
    resize = false,
    rightSection,
    paddingL = "pl-3",
    paddingR = rightSection ? "pr-8" : "pr-3",
    paddingY = "py-nano",
    rows = 4,
    successText,
    value,
    withAsterisk = false,
    onChange,
    ...props
  }: InputProps,
  ref: Ref<HTMLInputElement | HTMLTextAreaElement>
) {
  const mergedContentClasses = cn(
    INPUT_CONTAINER_STYLE,
    radius,
    paddingL,
    paddingR,
    paddingY,
    borderColor && [borderColor, "border"],
    handleBorderColor(borderColor, disabled, !!errorText, !!successText),
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
    !disabled && !readOnly && "cursor-pointer",
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
      data-testid="input-root"
      className={cn(className)}
      {...componentProps}
    >
      {label && (
        <Text
          component="label"
          variant="label"
          marginBottom="mb-nano"
          color={disabled ? "text-disabled" : "text-typography-primary"}
          className={cn(labelClassName)}
          htmlFor={baseId}
        >
          {label}{" "}
          {withAsterisk && required && (
            <Text
              component="span"
              variant="label"
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
        tabIndex={-1}
        {...inputContentProps}
      >
        {leftSection && (
          <Flex
            align="items-center"
            gap="gap-quark"
            wrap="flex-wrap"
            className="shrink-0 max-w-fit"
          >
            {leftSection}
          </Flex>
        )}

        {multiline ? (
          <textarea
            ref={ref as Ref<HTMLTextAreaElement>}
            {...(commonProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            rows={rows}
          />
        ) : (
          <input
            ref={ref as Ref<HTMLInputElement>}
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
      {(helperText || successText || errorText) && (
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
        </Flex>
      )}
    </Flex>
  )
})

Input.displayName = "Input"

export default Input
