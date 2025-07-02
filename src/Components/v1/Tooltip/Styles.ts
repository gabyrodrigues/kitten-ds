import { tv } from "tailwind-variants"

export const tooltipContainerVariants = tv({
  base: [
    "absolute z-50 px-2 py-2 w-max rounded-lg bg-background-inverted shadow-variant1 opacity-0",
    "opacity-0 pointer-events-none",
    "transition-opacity duration-300 delay-500",
    "peer-focus-visible:opacity-100 peer-focus-visible:pointer-events-auto peer-focus-visible:delay-500",
    "group-hover:pointer-events-auto group-hover:delay-500 group-hover:opacity-100"
  ],
  variants: {
    position: {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
      "top-left": "bottom-full -left-1 mb-1",
      "top-right": "bottom-full -right-2 mb-1",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
      "bottom-left": "top-full -left-1 mt-1",
      "bottom-right": "top-full -right-1 mt-1",
      left: "right-full top-1/2 -translate-y-1/2 mr-1",
      right: "left-full top-1/2 -translate-y-1/2 ml-1"
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
      top: "-bottom-1 left-1/2 -translate-x-1/2",
      "top-left": "-bottom-1 left-2",
      "top-right": "-bottom-1 right-2",
      bottom: "-top-1 left-1/2 -translate-x-1/2",
      "bottom-right": "-top-1 right-2",
      "bottom-left": "-top-1 left-2",
      left: "-right-1 top-1/2 -translate-y-1/2",
      right: "-left-1 top-1/2 -translate-y-1/2"
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
      class: "border-t-4 border-t-background-inverted border-x-4 border-b-0"
    },
    {
      position: "top-left",
      hasArrow: true,
      class: "border-t-4 border-t-background-inverted border-x-4 border-b-0"
    },
    {
      position: "top-right",
      hasArrow: true,
      class: "border-t-4 border-t-background-inverted border-x-4 border-b-0"
    },
    {
      position: "bottom",
      hasArrow: true,
      class: "border-b-4 border-b-background-inverted border-x-4 border-t-0"
    },
    {
      position: "bottom-right",
      hasArrow: true,
      class: "border-b-4 border-b-background-inverted border-x-4 border-t-0"
    },
    {
      position: "bottom-left",
      hasArrow: true,
      class: "border-b-4 border-b-background-inverted border-x-4 border-t-0"
    },
    {
      position: "left",
      hasArrow: true,
      class: "border-l-4 border-l-background-inverted border-y-4 border-r-0"
    },
    {
      position: "right",
      hasArrow: true,
      class: "border-r-4 border-r-background-inverted border-y-4 border-l-0"
    }
  ],
  defaultVariants: {
    hasArrow: false,
    position: "bottom"
  }
})

export const tooltipBufferVariants = tv({
  base: ["absolute pointer-events-auto bg-transparent"],
  variants: {
    position: {
      top: "bottom-full left-1/2 -translate-x-1/2 h-2 w-full",
      "top-left": "bottom-full -left-1 h-2 w-full",
      "top-right": "bottom-full -right-2 w-full",
      bottom: "top-full left-1/2 -translate-x-1/2 h-2 w-full",
      "bottom-left": "top-full -left-2 h-2 w-full",
      "bottom-right": "top-full -right-1 h-2 w-full",
      left: "right-full top-1/2 -translate-y-1/2 w-2",
      right: "left-full top-1/2 -translate-y-1/2 w-2"
    }
  },
  defaultVariants: {
    position: "bottom"
  }
})
