export const WEIGHT_CLASS = {
  outlined: {
    400: "icon-outlined-weight-400",
    500: "icon-outlined-weight-500",
    700: "icon-outlined-weight-700"
  },
  filled: {
    400: "icon-filled-weight-400",
    500: "icon-filled-weight-500",
    700: "icon-filled-weight-700"
  }
}

export function getWeightClass(variant: "outlined" | "filled", weight: 400 | 500 | 700) {
  return WEIGHT_CLASS[variant]?.[weight] ?? "icon-outlined-weight-400"
}
