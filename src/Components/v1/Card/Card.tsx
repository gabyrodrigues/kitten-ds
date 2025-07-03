import { cn } from "@utils"
import { Flex } from "../Flex"
import { Title } from "../Title"
import type { CardProps } from "./Card.types"

export default function Card({
  align = "items-start",
  bgColor = "bg-neutral-white",
  borderColor = "border-neutral-gray-200",
  children,
  className,
  contentClassName,
  direction = "flex-col",
  hasBorder = false,
  hasShadow = false,
  headingClassName,
  isLoading,
  justify = "justify-start",
  paddingX = "px-3",
  paddingY = "py-4",
  radius = "rounded-lg",
  title,
  titleClassName,
  onClick,
  ...props
}: CardProps) {
  const mergedClasses = cn(
    "w-full relative min-h-28",
    hasBorder && [borderColor, "border"],
    hasShadow && "shadow-variant1",
    isLoading ? "h-full w-full rounded-lg animate-pulse bg-surface" : [bgColor, "bg-surface"],
    onClick ? "cursor-pointer" : "cursor-default",
    className
  )

  return (
    <Flex
      radius={radius}
      paddingX={paddingX}
      paddingY={paddingY}
      align={align}
      justify={justify}
      direction={direction}
      {...props}
      className={mergedClasses}
      {...(onClick ? { onClick } : {})}
    >
      {!isLoading && (
        <Flex
          direction="flex-col"
          width="w-full"
          className={contentClassName}
        >
          {title &&
            (typeof title === "string" ? (
              <Title
                variant="h6"
                weight="font-medium"
                color="text-typography-primary"
                wordBreak="break-all"
                className={titleClassName}
              >
                {title}
              </Title>
            ) : (
              title
            ))}

          {children}
        </Flex>
      )}
    </Flex>
  )
}
