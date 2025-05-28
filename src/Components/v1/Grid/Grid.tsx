import { cn } from "@utils"
import type { GridProps } from "./Grid.types"

export default function Grid({
  align,
  autoCols,
  autoRows,
  children,
  className,
  component = "div",
  cols,
  colEnd,
  colGap,
  colSpan,
  colStart,
  flow,
  gap,
  justifyItems,
  order,
  rows,
  rowEnd,
  rowGap,
  rowSpan,
  rowStart,
  ...props
}: GridProps) {
  const mergedClasses = cn(
    "grid",
    cols,
    colSpan,
    colStart,
    colEnd,
    rows,
    rowSpan,
    rowStart,
    rowEnd,
    gap,
    rowGap,
    colGap,
    flow,
    autoCols,
    autoRows,
    justifyItems,
    align,
    order,
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
