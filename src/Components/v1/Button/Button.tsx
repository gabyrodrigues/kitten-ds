import type { ReactElement } from "react"
import type { ButtonProps } from "./Button.types"

export default function Button({
  children,
  class_name,
  type = "button",
  ...props
}: ButtonProps): ReactElement {
  return (
    <button
      className={class_name}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
