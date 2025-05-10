import { cn } from "@utils"
import type { IconProps } from "./Icon.types"

export default function Icon({
  type,
  variant = "outlined",
  disabled = false,
  color = "text-typography-primary",
  color_disabled = "text-typography-disabled",
  font_size = "text-xl",
  weight = 400,
  className,
  ...props
}: IconProps) {
  const merged_classes = cn(
    "material-symbols-icons",
    "leading-none",
    font_size,
    getWeightClass(),
    disabled ? color_disabled : color,
    className
  )

  function getWeightClass() {
    const weight_class = {
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
    return weight_class[variant]?.[weight] ?? "icon-outlined-weight-400"
  }

  return (
    <span
      className={merged_classes}
      translate="no"
      aria-hidden={props["aria-label"] ? undefined : "true"}
      role={props["aria-label"] ? "img" : undefined}
      {...props}
    >
      {type}
    </span>
  )
}
