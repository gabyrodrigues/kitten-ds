import { cn } from "@utils"
import { tv } from "tailwind-variants"

export const checkboxInputVariants = tv({
  base: [
    "peer",
    "relative",
    "h-6",
    "w-6",
    "cursor-pointer",
    "appearance-none",
    "rounded-sm",
    "border-2",
    "border-input-border",
    "transition-all",
    "before:block before:w-6 before:h-6 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:opacity-0 before:transition-opacity",
    "bg-surface",
    "hover:ring-8",
    "data-[disabled=true]:border-disabled",
    "data-[disabled=true]:cursor-default",
    "data-[disabled=true]:hover:ring-0 data-[disabled=true]:focus-visible:ring-3",
    "focus-visible:outline-0 focus-visible:ring-3 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
    "checked:data-[disabled=true]:bg-disabled"
  ],
  variants: {
    color: {
      primary: [
        "checked:bg-primary checked:border-primary checked:before:bg-primary",
        "hover:ring-primary-highlight"
      ],
      secondary: [
        "checked:bg-secondary checked:border-secondary checked:before:bg-secondary",
        "hover:ring-secondary-highlight"
      ],
      gray: ["checked:bg-gray checked:border-gray checked:before:bg-gray", "hover:ring-highlight"]
    },
    indeterminate: { true: "" }
  },
  compoundVariants: [
    {
      indeterminate: true,
      color: "primary",
      class: "bg-primary border-primary before:bg-primary"
    },
    {
      indeterminate: true,
      color: "secondary",
      class: "bg-secondary border-secondary before:bg-secondary"
    },
    {
      indeterminate: true,
      color: "gray",
      class: "bg-gray border-gray before:bg-gray"
    }
  ],
  defaultVariants: {
    color: "primary"
  }
})

export const CHECKBOX_INPUT_CONTAINER = cn("relative h-6 w-6")

export const SPAN_STYLE = cn(
  "absolute flex items-center justify-center transition-opacity opacity-0 pointer-events-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
  "peer-checked:opacity-100"
)
