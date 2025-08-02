import { cn } from "@utils"
import { type KeyboardEvent, useCallback, useEffect } from "react"
import { Flex } from "../Flex"
import { Icon } from "../Icon"
import { Text } from "../Text"
import { Title } from "../Title"
import type { TextColor } from "../types"
import type { SnackbarProps } from "./Snackbar.types"
import { handleSnackbarColorVariants, snackbarCloseVariants, snackbarVariants } from "./Styles"

export default function Snackbar({
  color = "success",
  className,
  closeButtonProps,
  description,
  isOpen,
  position = "top-right",
  timeToClose = 6000,
  title,
  variant = "outlined",
  onClose,
  ...props
}: SnackbarProps) {
  const variantClasses = snackbarVariants({
    color,
    variant,
    position
  })
  const mergedClasses = cn(variantClasses, className)
  const closeVariantClasses = snackbarCloseVariants({ variant, color })

  const handleCloseModal = useCallback(() => {
    onClose?.()
  }, [onClose])

  const autoClose = useCallback(() => {
    const timer = setTimeout(() => {
      handleCloseModal()
    }, timeToClose)

    return () => clearTimeout(timer)
  }, [handleCloseModal, timeToClose])

  function handleKeyDownClose(event: KeyboardEvent<HTMLElement>) {
    if (event.key === " " || event.key === "Enter" || event.key === "Delete") {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  useEffect(() => {
    if (isOpen) {
      const cleanup = autoClose()
      return cleanup
    }
  }, [isOpen, autoClose])

  return (
    isOpen && (
      <Flex
        id="toast-default"
        radius="rounded-sm"
        align="items-start"
        justify="justify-center"
        colGap="gap-x-2xl"
        wrap="flex-nowrap"
        role={["error", "warning", "success"].includes(color) ? "alert" : "status"}
        aria-live="polite"
        {...props}
        className={mergedClasses}
      >
        <Flex
          colGap="gap-x-sm"
          width="w-full"
          align="items-start"
        >
          <Icon
            type={handleSnackbarColorVariants(color, variant)?.icon}
            color={handleSnackbarColorVariants(color, variant)?.iconColor as TextColor}
            className="self-start"
            variant="outlined"
          />

          <Flex
            direction="flex-col"
            flex="flex-1"
            wrap="flex-nowrap"
            width="w-full"
          >
            {typeof title === "string" ? (
              <Title
                variant="h6"
                color={handleSnackbarColorVariants(color, variant)?.textColor as TextColor}
              >
                {title}
              </Title>
            ) : (
              title
            )}

            {typeof description === "string" ? (
              <Text
                variant="body3"
                color={handleSnackbarColorVariants(color, variant)?.textColor as TextColor}
              >
                {description}
              </Text>
            ) : (
              description
            )}
          </Flex>
        </Flex>

        {onClose && (
          <button
            type="button"
            className={cn(closeVariantClasses, closeButtonProps?.className)}
            {...closeButtonProps}
            aria-label={closeButtonProps?.["aria-label"] || "close snackbar"}
            onKeyDown={handleKeyDownClose}
            onClick={handleCloseModal}
          >
            <Icon
              color="inherit"
              type="close"
              fontSize="text-base"
            />
          </button>
        )}
      </Flex>
    )
  )
}
