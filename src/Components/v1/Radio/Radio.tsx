import { cn, generateRandomId } from "@utils"
import { Flex } from "../Flex"
import { Text } from "../Text"
import type { RadioProps } from "./Radio.types"
import { radioInputVariants, radioSpanVariants } from "./Styles"

export default function Radio({
  checked,
  value,
  label,
  disabled = false,
  color = "primary",
  id,
  onChange,
  contentClassName,
  className,
  inputClassName,
  labelClassName,
  checkedClassName,
  errorText,
  helperText,
  successText,
  ...props
}: RadioProps) {
  const radioInputClasses = radioInputVariants({
    color
  })
  const radioSpanClasses = radioSpanVariants({
    color
  })

  const mergedRootClasses = cn("flex-wrap", className)
  const mergedContentClasses = cn("relative", "rounded-full", contentClassName)
  const mergedInputClasses = cn(radioInputClasses, inputClassName)
  const mergedLabelClasses = cn("cursor-pointer", disabled && "cursor-default", labelClassName)
  const mergedCheckedClasses = cn(radioSpanClasses, checkedClassName)

  const baseId = id ?? generateRandomId("radio")
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
          type="radio"
          value={value}
          checked={checked}
          aria-disabled={disabled}
          data-disabled={disabled}
          tabIndex={disabled ? 0 : undefined}
          onChange={(event) => !disabled && onChange?.(event)}
          {...props}
          className={mergedInputClasses}
        />
        <span className={mergedCheckedClasses} />
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
          >
            {errorText}
          </Text>
        )}
      </Flex>
    </Flex>
  )
}
