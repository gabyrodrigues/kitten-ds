import { cn } from "@utils"
import type { GridProps } from "./Grid.types"

export default function Grid({
  align,
  auto_cols,
  auto_rows,
  children,
  className,
  component = "div",
  cols,
  col_end,
  col_gap,
  col_span,
  col_start,
  flow,
  gap,
  justify_items,
  order,
  rows,
  row_end,
  row_gap,
  row_span,
  row_start,
  ...props
}: GridProps) {
  const merged_classes = cn(
    "grid",
    cols,
    col_span,
    col_start,
    col_end,
    rows,
    row_span,
    row_start,
    row_end,
    gap,
    row_gap,
    col_gap,
    flow,
    auto_cols,
    auto_rows,
    justify_items,
    align,
    order,
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
