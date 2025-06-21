import { tv } from "tailwind-variants"

export const radioInputVariants = tv({
  base: [
    "peer",
    "relative",
    "h-6",
    "w-6",
    "cursor-pointer",
    "appearance-none",
    "rounded-full",
    "border-2",
    "transition-all",
    "border-input-border",
    "before:absolute",
    "before:block",
    "before:rounded-full",
    "before:opacity-0",
    "before:transition-opacity",
    "hover:ring-8",
    "bg-surface",
    "data-[disabled=true]:border-disabled",
    "data-[disabled=true]:cursor-default",
    "data-[disabled=true]:hover:ring-0 data-[disabled=true]:focus:ring-3",
    "focus:outline-0 focus:ring-3 focus:ring-focus-ring focus:ring-offset-2",
    "before:content-['']",
    "before:absolute",
    "before:inset-[-12px]",
    "before:rounded-full",
    "before:bg-transparent",
    "before:pointer-events-auto"
  ],
  variants: {
    color: {
      primary: "checked:border-primary hover:border-primary hover:ring-primary-highlight",
      secondary: "checked:border-secondary hover:border-secondary hover:ring-secondary-highlight",
      gray: "checked:border-gray hover:border-gray hover:ring-highlight"
    }
  },
  defaultVariants: {
    color: "primary"
  }
})

export const radioSpanVariants = tv({
  base: [
    "h-3",
    "w-3",
    "absolute",
    "rounded-full",
    "transition-opacity",
    "opacity-0",
    "pointer-events-none",
    "top-1/2",
    "left-1/2",
    "-translate-y-1/2",
    "-translate-x-1/2",
    "peer-checked:opacity-100",
    "peer-data-[disabled=true]:bg-disabled"
  ],
  variants: {
    color: {
      primary: "bg-primary peer-hover:bg-primary",
      secondary: "bg-secondary peer-hover:bg-secondary",
      gray: "bg-gray peer-hover:bg-gray"
    }
  },
  defaultVariants: {
    color: "primary"
  }
})
