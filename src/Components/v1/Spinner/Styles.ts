import { tv } from "@utils"

export const spinnerVariants = tv({
  base: [
    "animate-spin rounded-full align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
  ],
  variants: {
    color: {
      primary: "border-solid border-primary border-e-transparent",
      secondary: "border-solid border-secondary border-e-transparent",
      neutral: "border-solid border-neutral border-e-transparent",
      disabled: "border-solid border-typography-disabled border-e-transparent"
    },
    size: {
      xs: "h-4 w-4 border-medium",
      sm: "h-8 w-8 border-bold",
      md: "h-11 w-11 border-bold",
      lg: "h-18 w-18 border-bold"
    }
  },
  defaultVariants: {
    color: "primary",
    size: "xs"
  }
})
