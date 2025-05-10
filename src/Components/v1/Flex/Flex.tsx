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
  col_gap,
  gap,
  height,
  order,
  padding_x,
  padding_y,
  radius,
  row_gap,
  width,
  wrap,
  ...props
}: FlexProps) {
  const merged_classes = cn(
    "flex",
    flex,
    radius,
    gap,
    row_gap,
    col_gap,
    height,
    width,
    align,
    justify,
    wrap,
    direction,
    order,
    padding_x,
    padding_y,
    className
  )

  const COMPONENT = component

  return (
    <COMPONENT
      className={merged_classes}
      {...props}
    >
      {children}
    </COMPONENT>
  )
}
