import { cn } from "@utils"
import type { IconProps } from "./Icon.types"
import { getWeightClass } from "./Styles"

export default function Icon({
  type,
  variant = "outlined",
  color = "text-typography-primary",
  fontSize = "text-xl",
  weight = 400,
  className,
  ...props
}: IconProps) {
  const mergedClasses = cn(
    "material-symbols-icons",
    "leading-none",
    color,
    fontSize,
    getWeightClass(variant, weight),
    className
  )

  return (
    <span
      className={mergedClasses}
      translate="no"
      aria-hidden={props["aria-label"] ? undefined : "true"}
      role={props["aria-label"] ? "img" : undefined}
      {...props}
    >
      {type}
    </span>
  )
}
