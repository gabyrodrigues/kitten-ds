import { tv } from "@utils"

export const spinnerVariants = tv({
  base: [
    "animate-spin rounded-full align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
  ],
  variants: {
    color: {
      primary: "border-medium border-solid border-primary border-e-transparent",
      secondary: "border-medium border-solid border-secondary border-e-transparent",
      neutral: "border-medium border-solid border-neutral border-e-transparent",
      disabled: "border-medium border-solid border-typography-disabled border-e-transparent"
    },
    size: {
      xs: "h-4 w-4",
      sm: "h-8 w-8",
      md: "h-11 w-11",
      lg: "h-18 w-18"
    }
  },
  defaultVariants: {
    color: "primary",
    size: "xs"
  }
})
