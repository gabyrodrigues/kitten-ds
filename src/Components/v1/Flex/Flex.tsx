import { cn } from "@utils"
import { type ReactElement, forwardRef } from "react"
import type { FlexProps } from "./Flex.types"

// biome-ignore lint/style/useNamingConvention: component name is Flex
const Flex = forwardRef<HTMLElement, FlexProps>(function Flex(
  {
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
  }: FlexProps,
  ref
): ReactElement {
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
      ref={ref}
      className={mergedClasses}
      {...props}
    >
      {children}
    </COMPONENT>
  )
})

Flex.displayName = "Flex"

export default Flex
