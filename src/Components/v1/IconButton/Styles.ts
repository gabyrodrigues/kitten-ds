import { tv } from "tailwind-variants"

export const icon_button_variants = tv({
  base: [
    "flex justify-center items-center rounded-full shrink-0 data-[disabled=true]:text-typography-disabled",
    "focus:outline-0 focus:ring-3 focus:ring-focus-ring focus:ring-offset-2"
  ],
  variants: {
    variant: {
      filled:
        "border-none data-[disabled=true]:bg-disabled data-[disabled=true]:text-typography-inverted data-[disabled=true]:hover:bg-disabled",
      outlined:
        "border-2 bg-transparent data-[disabled=true]:border-disabled data-[disabled=true]:hover:bg-transparent data-[disabled=true]:hover:text-typography-disabled data-[disabled=true]:text-typography-disabled",
      default:
        "bg-transparent data-[disabled=true]:text-typography-disabled data-[disabled=true]:hover:bg-transparent"
    },
    color: {
      primary: "",
      secondary: "",
      gray: ""
    },
    size: {
      small: "p-1 h-6 w-6 text-base leading-none",
      medium: "p-2 h-8 w-8 text-xl leading-none",
      large: "p-3 h-11 w-11 text-xl leading-none"
    }
  },
  // biome-ignore lint/style/useNamingConvention: lib prop
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
      color: "gray",
      class: "bg-gray text-typography-inverted hover:bg-gray-hover"
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
      color: "gray",
      class: "border-gray text-gray hover:bg-highlight"
    },

    {
      variant: "default",
      color: "primary",
      class: "text-primary hover:bg-primary-highlight"
    },
    {
      variant: "default",
      color: "secondary",
      class: "text-secondary hover:bg-secondary-highlight"
    },
    {
      variant: "default",
      color: "gray",
      class: "text-gray hover:bg-highlight"
    }
  ],
  // biome-ignore lint/style/useNamingConvention: lib prop
  defaultVariants: {
    variant: "default",
    color: "primary"
  }
})
