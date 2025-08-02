import { tv } from "@utils"
import type { SnackbarColor, SnackbarVariant } from "./Snackbar.types"

export const snackbarVariants = tv({
  base: ["fixed w-auto max-w-[90vw] rounded-lg", "px-nano py-nano"],
  variants: {
    color: {
      error: "",
      info: "",
      neutral: "",
      success: "",
      warning: ""
    },
    variant: {
      filled: "border-none",
      outlined: "border-thin"
    },
    position: {
      "top-right": "top-28 right-6 animate-slide-in-right-to-left",
      "top-left": "top-28 left-6 animate-slide-in-left-to-right",
      "bottom-right": "bottom-8 right-6 animate-slide-in-right-to-left",
      "bottom-left": "bottom-8 left-6 animate-slide-in-left-to-right"
    }
  },
  compoundVariants: [
    {
      variant: "filled",
      color: "error",
      class: "bg-error"
    },
    {
      variant: "filled",
      color: "info",
      class: "bg-info"
    },
    {
      variant: "filled",
      color: "neutral",
      class: "bg-neutral"
    },
    {
      variant: "filled",
      color: "success",
      class: "bg-success"
    },
    {
      variant: "filled",
      color: "warning",
      class: "bg-warning"
    },

    {
      variant: "outlined",
      color: "error",
      class: "bg-error-highlight border-error"
    },
    {
      variant: "outlined",
      color: "info",
      class: "bg-info-highlight border-info"
    },
    {
      variant: "outlined",
      color: "neutral",
      class: "bg-highlight border-neutral"
    },
    {
      variant: "outlined",
      color: "success",
      class: "bg-success-highlight border-success"
    },
    {
      variant: "outlined",
      color: "warning",
      class: "bg-warning-highlight border-warning"
    }
  ],
  defaultVariants: {
    color: "success"
  }
})

export function handleSnackbarColorVariants(color: SnackbarColor, variant: SnackbarVariant) {
  const config = {
    error: {
      filled: {
        icon: "error",
        iconColor: "text-typography-inverted",
        textColor: "text-typography-inverted"
      },
      outlined: {
        icon: "error",
        iconColor: "text-error",
        textColor: "text-typography-primary"
      }
    },
    info: {
      filled: {
        icon: "info",
        iconColor: "text-typography-primary",
        textColor: "text-typography-primary"
      },
      outlined: {
        icon: "info",
        iconColor: "text-typography-primary",
        textColor: "text-typography-primary"
      }
    },
    neutral: {
      filled: {
        icon: "lightbulb",
        iconColor: "text-typography-inverted",
        textColor: "text-typography-inverted"
      },
      outlined: {
        icon: "lightbulb",
        iconColor: "text-typography-primary",
        textColor: "text-typography-primary"
      }
    },
    success: {
      filled: {
        icon: "check_circle",
        iconColor: "text-typography-inverted",
        textColor: "text-typography-inverted"
      },
      outlined: {
        icon: "check_circle",
        iconColor: "text-success",
        textColor: "text-typography-primary"
      }
    },
    warning: {
      filled: {
        icon: "warning",
        iconColor: "text-typography-primary",
        textColor: "text-typography-primary"
      },
      outlined: {
        icon: "warning",
        iconColor: "text-typography-primary",
        textColor: "text-typography-primary"
      }
    }
  } as const

  return config[color][variant]
}
