import { cn } from "@utils"
import type { SpinnerProps } from "./Spinner.types"
import { spinnerVariants } from "./Styles"

export default function Spinner({
  color = "primary",
  size = "xs",
  className,
  ...props
}: SpinnerProps) {
  const variantClasses = spinnerVariants({
    color,
    size
  })

  return (
    <div
      className={cn(variantClasses, className)}
      role="status"
      {...props}
    />
  )
}
