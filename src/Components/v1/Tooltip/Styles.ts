import { tv } from "@utils"

export const tooltipContainerVariants = tv({
  base: [
    "absolute z-50 px-nano py-nano w-max rounded-lg bg-background-inverted shadow-level1 opacity-0",
    "opacity-0 pointer-events-none",
    "transition-opacity duration-300 delay-300",
    "peer-focus-visible:opacity-100 peer-focus-visible:pointer-events-auto peer-focus-visible:delay-500",
    "group-hover:pointer-events-auto group-hover:delay-500 group-hover:opacity-100"
  ],
  variants: {
    position: {
      bottom: "top-full mt-quark left-1/2 -translate-x-1/2",
      "bottom-left": "top-full mt-quark left-0",
      "bottom-right": "top-full mt-quark right-0",
      left: "right-full mr-quark top-1/2 -translate-y-1/2",
      right: "left-full ml-quark top-1/2 -translate-y-1/2",
      top: "bottom-full mb-quark left-1/2 -translate-x-1/2",
      "top-left": "bottom-full mb-quark left-0",
      "top-right": "bottom-full mb-quark right-0"
    },
    hasArrow: {
      true: "",
      false: ""
    }
  },
  defaultVariants: {
    hasArrow: false,
    position: "bottom"
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
      class: "border-t-bold border-t-background-inverted border-x-bold border-b-none"
    },
    {
      position: "top-left",
      hasArrow: true,
      class: "border-t-bold border-t-background-inverted border-x-bold border-b-none"
    },
    {
      position: "top-right",
      hasArrow: true,
      class: "border-t-bold border-t-background-inverted border-x-bold border-b-none"
    },
    {
      position: "bottom",
      hasArrow: true,
      class: "border-b-bold border-b-background-inverted border-x-bold border-t-none"
    },
    {
      position: "bottom-right",
      hasArrow: true,
      class: "border-b-bold border-b-background-inverted border-x-bold border-t-none"
    },
    {
      position: "bottom-left",
      hasArrow: true,
      class: "border-b-bold border-b-background-inverted border-x-bold border-t-none"
    },
    {
      position: "left",
      hasArrow: true,
      class: "border-l-bold border-l-background-inverted border-y-bold border-r-none"
    },
    {
      position: "right",
      hasArrow: true,
      class: "border-r-bold border-r-background-inverted border-y-bold border-l-none"
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
      "top-left": "bottom-full h-2 w-full",
      "top-right": "bottom-full h-2 w-full",
      bottom: "top-full left-1/2 -translate-x-1/2 h-2 w-full",
      "bottom-left": "top-full h-2 w-full",
      "bottom-right": "top-full h-2 w-full",
      left: "right-full top-1/2 -translate-y-1/2 w-2 h-full",
      right: "left-full top-1/2 -translate-y-1/2 w-2 h-full"
    }
  },
  defaultVariants: {
    position: "bottom"
  }
})
