import { cn } from "@utils"
import type { FlexProps } from "./Flex.types"

export default function Flex({
  flex,
  component = "div",
  gap,
  row_gap,
  col_gap,
  radius,
  align = "items-start",
  justify = "justify-start",
  direction = "flex-row",
  wrap,
  order,
  height,
  width,
  padding_x,
  padding_y,
  ref,
  className,
  children,
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
      ref={ref}
      {...props}
    >
      {children}
    </COMPONENT>
  )
}
