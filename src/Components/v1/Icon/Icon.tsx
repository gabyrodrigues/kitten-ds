import { cn } from "@utils"
import type { IconProps } from "./Icon.types"

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
    getWeightClass(),
    className
  )

  function getWeightClass() {
    const weightClass = {
      outlined: {
        400: "icon-outlined-weight-400",
        500: "icon-outlined-weight-500",
        700: "icon-outlined-weight-700"
      },
      filled: {
        400: "icon-filled-weight-400",
        500: "icon-filled-weight-500",
        700: "icon-filled-weight-700"
      }
    }
    return weightClass[variant]?.[weight] ?? "icon-outlined-weight-400"
  }

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
