import { tv } from "tailwind-variants"

export const tooltipContainerVariants = tv({
  base: [
    "absolute z-50 px-2 py-2 w-max rounded-lg bg-background-inverted shadow-variant1 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 pointer-events-none"
  ],
  variants: {
    position: {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      "top-left": "bottom-full -left-1 mb-2",
      "top-right": "bottom-full -right-2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      "bottom-right": "top-full -right-1 mt-2",
      "bottom-left": "top-full -left-2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2"
    },
    hasArrow: {
      true: "",
      false: ""
    }
  },
  defaultVariants: {
    position: "bottom",
    hasArrow: false
  }
})

export const tooltipArrowVariants = tv({
  base: ["w-0 h-0 border-solid border-transparent absolute"],
  variants: {
    position: {
      top: "-bottom-2 left-1/2 -translate-x-1/2",
      "top-left": "-bottom-2 left-2",
      "top-right": "-bottom-2 right-2",
      bottom: "-top-2 left-1/2 -translate-x-1/2",
      "bottom-right": "-top-2 right-2",
      "bottom-left": "-top-2 left-2",
      left: "-right-2 top-1/2 -translate-y-1/2",
      right: "-left-2 top-1/2 -translate-y-1/2"
    },
    hasArrow: {
      true: "",
      false: "hidden"
    }
  },
  compoundVariants: [
    {
      position: "top",
      hasArrow: true,
      class: "border-t-8 border-t-background-inverted border-x-8 border-b-0"
    },
    {
      position: "top-left",
      hasArrow: true,
      class: "border-t-8 border-t-background-inverted border-x-8 border-b-0"
    },
    {
      position: "top-right",
      hasArrow: true,
      class: "border-t-8 border-t-background-inverted border-x-8 border-b-0"
    },
    {
      position: "bottom",
      hasArrow: true,
      class: "border-b-8 border-b-background-inverted border-x-8 border-t-0"
    },
    {
      position: "bottom-right",
      hasArrow: true,
      class: "border-b-8 border-b-background-inverted border-x-8 border-t-0"
    },
    {
      position: "bottom-left",
      hasArrow: true,
      class: "border-b-8 border-b-background-inverted border-x-8 border-t-0"
    },
    {
      position: "left",
      hasArrow: true,
      class: "border-l-8 border-l-background-inverted border-y-8 border-r-0"
    },
    {
      position: "right",
      hasArrow: true,
      class: "border-r-8 border-r-background-inverted border-y-8 border-l-0"
    }
  ],
  defaultVariants: {
    hasArrow: false,
    position: "bottom"
  }
})
