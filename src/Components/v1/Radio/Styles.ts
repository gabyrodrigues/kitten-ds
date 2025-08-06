import { tv } from "@utils"

export const radioInputVariants = tv({
  base: [
    "peer",
    "relative",
    "h-6",
    "w-6",
    "cursor-pointer",
    "appearance-none",
    "rounded-full",
    "border-medium",
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
    "data-[readOnly=true]:hover:border-input-border",
    "data-[disabled=true]:cursor-default",
    "data-[readOnly=true]:cursor-default",
    "data-[disabled=true]:hover:ring-0 data-[disabled=true]:focus-visible:ring-3",
    "data-[readOnly=true]:hover:ring-0 data-[readOnly=true]:focus-visible:ring-3",
    "focus-visible:outline-0 focus-visible:ring-3 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
    "before:content-['']",
    "before:absolute",
    "before:inset-[-12px]",
    "before:rounded-full",
    "before:bg-transparent",
    "before:pointer-events-auto"
  ],
  variants: {
    color: {
      primary:
        "checked:border-primary hover:border-primary hover:ring-primary-highlight data-[readOnly=true]:checked:hover:border-primary",
      secondary:
        "checked:border-secondary hover:border-secondary hover:ring-secondary-highlight data-[readOnly=true]:checked:hover:border-secondary",
      neutral:
        "checked:border-neutral hover:border-neutral hover:ring-highlight data-[readOnly=true]:checked:hover:border-neutral"
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
      neutral: "bg-neutral peer-hover:bg-neutral"
    }
  },
  defaultVariants: {
    color: "primary"
  }
})
