import { cn } from "@utils"
import type { FlexProps } from "./Flex.types"

export default function Flex({
  flex,
  align = "items-start",
  direction = "flex-row",
  component = "div",
  justify = "justify-start",
  className,
  children,
  colGap,
  gap,
  height,
  order,
  paddingX,
  paddingY,
  radius,
  rowGap,
  width,
  wrap,
  ...props
}: FlexProps) {
  const mergedClasses = cn(
    "flex",
    flex,
    radius,
    gap,
    rowGap,
    colGap,
    height,
    width,
    align,
    justify,
    wrap,
    direction,
    order,
    paddingX,
    paddingY,
    className
  )

  const COMPONENT = component

  return (
    <COMPONENT
      className={mergedClasses}
      {...props}
    >
      {children}
    </COMPONENT>
  )
}
