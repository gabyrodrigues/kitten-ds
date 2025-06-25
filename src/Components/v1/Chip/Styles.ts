import { tv } from "tailwind-variants"

export const chipVariants = tv({
  base: [
    "px-3 py-1 min-h-8",
    "flex items-center justify-center rounded-full gap-x-1",
    "relative",
    "data-[disabled=true]:text-typography-disabled",
    "data-[disabled=true]:cursor-default"
  ],
  variants: {
    variant: {
      filled: [
        "border-none",
        "data-[disabled=true]:bg-disabled",
        "data-[disabled=true]:text-typography-disabled",
        "data-[disabled=true]:hover:bg-disabled"
      ],
      outlined: [
        "border-2",
        "bg-transparent",
        "data-[disabled=true]:border-disabled",
        "data-[disabled=true]:bg-typography-inverted",
        "data-[disabled=true]:hover:bg-typography-inverted",
        "data-[disabled=true]:hover:text-typography-disabled",
        "data-[disabled=true]:text-typography-disabled"
      ]
    },
    color: {
      primary: "",
      secondary: "",
      error: "",
      success: "",
      warning: "",
      gray: ""
    },
    clickable: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      variant: "filled",
      color: "primary",
      class: "bg-primary text-typography-inverted"
    },
    {
      variant: "filled",
      color: "primary",
      clickable: true,
      class: "hover:bg-primary-hover"
    },
    {
      variant: "filled",
      color: "secondary",
      class: "bg-secondary text-typography-inverted"
    },
    {
      variant: "filled",
      color: "secondary",
      clickable: true,
      class: "hover:bg-secondary-hover"
    },
    {
      variant: "filled",
      color: "error",
      class: "bg-error text-typography-inverted"
    },
    {
      variant: "filled",
      color: "error",
      clickable: true,
      class: "hover:bg-error-hover"
    },
    {
      variant: "filled",
      color: "success",
      class: "bg-success text-typography-inverted"
    },
    {
      variant: "filled",
      color: "success",
      clickable: true,
      class: "hover:bg-success-hover"
    },
    {
      variant: "filled",
      color: "warning",
      class: "bg-warning text-typography-primary"
    },
    {
      variant: "filled",
      color: "warning",
      clickable: true,
      class: "hover:bg-warning-hover"
    },
    {
      variant: "filled",
      color: "gray",
      class: "bg-gray text-typography-inverted"
    },
    {
      variant: "filled",
      color: "gray",
      clickable: true,
      class: "hover:bg-gray-hover"
    },

    {
      variant: "outlined",
      color: "primary",
      class: "border-primary text-primary bg-primary-highlight"
    },
    {
      variant: "outlined",
      color: "primary",
      clickable: true,
      class: "hover:bg-primary-highlight"
    },
    {
      variant: "outlined",
      color: "secondary",
      class: "border-secondary text-secondary bg-secondary-highlight"
    },
    {
      variant: "outlined",
      color: "secondary",
      clickable: true,
      class: "hover:bg-secondary-highlight"
    },
    {
      variant: "outlined",
      color: "error",
      class: "border-error text-error bg-error-highlight"
    },
    {
      variant: "outlined",
      color: "error",
      clickable: true,
      class: "hover:bg-error-highlight"
    },
    {
      variant: "outlined",
      color: "success",
      class: "border-success text-success bg-success-highlight"
    },
    {
      variant: "outlined",
      color: "success",
      clickable: true,
      class: "hover:bg-success-highlight"
    },
    {
      variant: "outlined",
      color: "warning",
      class: "border-warning text-typography-primary bg-warning-highlight"
    },
    {
      variant: "outlined",
      color: "warning",
      clickable: true,
      class: "hover:bg-warning-highlight"
    },
    {
      variant: "outlined",
      color: "gray",
      class: "border-gray text-gray bg-highlight"
    },
    {
      variant: "outlined",
      color: "gray",
      clickable: true,
      class: "hover:bg-highlight"
    }
  ],
  defaultVariants: {
    variant: "filled",
    color: "primary",
    clickable: false
  }
})

export const chipDeleteVariants = tv({
  base: [
    "rounded-full shrink-0 data-[disabled=true]:text-typography-disabled",
    "relative inline-flex items-center justify-center",
    "before:content-[''] before:absolute before:-inset-1",
    "before:pointer-events-none",
    "focus-visible:outline-0 focus-visible:ring-3 focus-visible:ring-focus-ring focus-visible:ring-offset-2"
  ],
  variants: {
    variant: {
      filled:
        "data-[disabled=true]:bg-typography-disabled data-[disabled=true]:text-disabled data-[disabled=true]:hover:bg-typography-disabled",
      outlined:
        "bg-transparent data-[disabled=true]:bg-typography-disabled data-[disabled=true]:hover:bg-typography-disabled data-[disabled=true]:hover:text-typography-inverted data-[disabled=true]:text-typography-inverted"
    },
    color: {
      primary: "",
      secondary: "",
      error: "",
      success: "",
      warning: "",
      gray: ""
    }
  },
  compoundVariants: [
    {
      variant: "filled",
      color: "primary",
      class: "text-typography-inverted hover:text-primary hover:bg-typography-inverted"
    },
    {
      variant: "filled",
      color: "secondary",
      class: "text-typography-inverted hover:text-secondary hover:bg-typography-inverted"
    },
    {
      variant: "filled",
      color: "error",
      class: "text-typography-inverted hover:text-error hover:bg-typography-inverted"
    },
    {
      variant: "filled",
      color: "success",
      class: "text-typography-inverted hover:text-success hover:bg-typography-inverted"
    },
    {
      variant: "filled",
      color: "warning",
      class: "text-typography-primary hover:text-warning hover:bg-typography-primary"
    },
    {
      variant: "filled",
      color: "gray",
      class: "text-typography-inverted hover:text-gray hover:bg-typography-inverted"
    },

    {
      variant: "outlined",
      color: "primary",
      class: "text-primary hover:text-primary-highlight hover:bg-primary"
    },
    {
      variant: "outlined",
      color: "secondary",
      class: "text-secondary hover:text-secondary-highlight hover:bg-secondary"
    },
    {
      variant: "outlined",
      color: "error",
      class: "text-error hover:text-error-highlight hover:bg-error"
    },
    {
      variant: "outlined",
      color: "success",
      class: "text-success hover:text-success-highlight hover:bg-success"
    },
    {
      variant: "outlined",
      color: "warning",
      class: "text-typography-primary hover:text-warning-highlight hover:bg-typography-primary"
    },
    {
      variant: "outlined",
      color: "gray",
      class: "text-gray hover:text-highlight hover:bg-gray"
    }
  ]
})
