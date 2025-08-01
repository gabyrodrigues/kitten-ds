import { tv } from "@utils"

export const buttonVariants = tv({
  base: [
    "px-sm py-xs min-h-11",
    "focus-visible:outline-0 focus-visible:ring-3 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
    "flex rounded-lg data-[disabled=true]:text-typography-disabled data-[disabled=true]:cursor-default relative"
  ],
  variants: {
    variant: {
      filled:
        "border-none data-[disabled=true]:bg-disabled data-[disabled=true]:text-typography-disabled data-[disabled=true]:hover:bg-disabled",
      outlined:
        "border-medium bg-transparent data-[disabled=true]:border-disabled data-[disabled=true]:hover:bg-transparent data-[disabled=true]:hover:text-typography-disabled data-[disabled=true]:text-typography-disabled",
      text: "bg-transparent data-[disabled=true]:text-typography-disabled data-[disabled=true]:hover:bg-transparent"
    },
    color: {
      primary: "",
      secondary: "",
      error: "",
      success: "",
      neutral: ""
    }
  },
  compoundVariants: [
    {
      variant: "filled",
      color: "primary",
      class: "bg-primary text-typography-inverted hover:bg-primary-hover"
    },
    {
      variant: "filled",
      color: "secondary",
      class: "bg-secondary text-typography-inverted hover:bg-secondary-hover"
    },
    {
      variant: "filled",
      color: "error",
      class: "bg-error text-typography-inverted hover:bg-error-hover"
    },
    {
      variant: "filled",
      color: "success",
      class: "bg-success text-typography-inverted hover:bg-success-hover"
    },
    {
      variant: "filled",
      color: "neutral",
      class: "bg-neutral text-typography-inverted hover:bg-neutral-hover"
    },

    {
      variant: "outlined",
      color: "primary",
      class: "border-primary text-primary hover:bg-primary-highlight"
    },
    {
      variant: "outlined",
      color: "secondary",
      class: "border-secondary text-secondary hover:bg-secondary-highlight"
    },
    {
      variant: "outlined",
      color: "error",
      class: "border-error text-error hover:bg-error-highlight"
    },
    {
      variant: "outlined",
      color: "success",
      class: "border-success text-success hover:bg-success-highlight"
    },
    {
      variant: "outlined",
      color: "neutral",
      class: "border-neutral text-neutral hover:bg-highlight"
    },

    {
      variant: "text",
      color: "primary",
      class: "text-primary hover:bg-primary-highlight"
    },
    {
      variant: "text",
      color: "secondary",
      class: "text-secondary hover:bg-secondary-highlight"
    },
    {
      variant: "text",
      color: "error",
      class: "text-error hover:bg-error-highlight"
    },
    {
      variant: "text",
      color: "success",
      class: "text-success hover:bg-success-highlight"
    },
    {
      variant: "text",
      color: "neutral",
      class: "text-neutral hover:bg-highlight"
    }
  ],
  defaultVariants: {
    variant: "filled",
    color: "primary"
  }
})
