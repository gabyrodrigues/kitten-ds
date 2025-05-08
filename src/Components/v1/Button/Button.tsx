import type { ReactElement } from "react"
import type { ButtonProps } from "./Button.types"

export default function Button({
  children,
  className,
  type = "button",
  ...props
}: ButtonProps): ReactElement {
  return (
    <button
      className={className}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
