import { cn } from "@utils"
import { useCallback, useEffect } from "react"
import { Flex } from "../Flex"
import { Icon } from "../Icon"
import { IconButton } from "../IconButton"
import { Text } from "../Text"
import { Title } from "../Title"
import type { TextColor } from "../types"
import type { SnackbarProps } from "./Snackbar.types"
import { handleSnackbarColorVariants, snackbarVariants } from "./Styles"

export default function Snackbar({
  isOpen,
  onClose,
  timeToClose = 6000,
  className,
  title,
  description,
  color = "success",
  variant = "outlined",
  position = "top-right",
  ...props
}: SnackbarProps) {
  const variantClasses = snackbarVariants({
    color,
    variant,
    position
  })
  const mergedClasses = cn(variantClasses, className)

  const closeModal = useCallback(() => {
    onClose?.()
  }, [onClose])

  const autoClose = useCallback(() => {
    const timer = setTimeout(() => {
      closeModal()
    }, timeToClose)

    return () => clearTimeout(timer)
  }, [closeModal, timeToClose])

  useEffect(() => {
    if (isOpen) {
      const cleanup = autoClose()
      return cleanup
    }
  }, [isOpen, autoClose])

  return (
    <>
      {isOpen && (
        <Flex
          id="toast-default"
          radius="rounded-sm"
          align="items-start"
          justify="justify-center"
          colGap="gap-x-2xl"
          wrap="flex-nowrap"
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

          {!!onClose && (
            <IconButton
              icon="close"
              className="bg-transparent"
              ariaLabel="Close"
              size="sm"
              iconClassName={cn(
                "text-base",
                handleSnackbarColorVariants(color, variant)?.textColor
              )}
              onKeyUp={closeModal}
              onClick={closeModal}
            />
          )}
        </Flex>
      )}
    </>
  )
}
