import { type ClassValue, clsx } from "clsx"
import { type DefaultClassGroupIds, extendTailwindMerge } from "tailwind-merge"

const borderWidthTokens = [
  "border-thin",
  "border-medium",
  "border-thick",
  "border-bold",
  "border-heavy"
]

export const CUSTOM_TW_MERGE = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-display1",
        "text-display2",
        "text-display3",
        "text-h1",
        "text-h2",
        "text-h3",
        "text-h4",
        "text-h5",
        "text-h6",
        "text-body1",
        "text-body2",
        "text-body3",
        "text-body4",
        "text-body5",
        "text-button",
        "text-chip",
        "text-label"
      ],
      // "border-w": [...borderWidthTokens]
      // "border-w": [{ border: borderWidthTokens }],
      // "border-w-x": [{ "border-x": borderWidthTokens }],
      // "border-w-y": [{ "border-y": borderWidthTokens }],
      // "border-w-t": [{ "border-t": borderWidthTokens }],
      // "border-w-r": [{ "border-r": borderWidthTokens }],
      // "border-w-b": [{ "border-b": borderWidthTokens }],
      // "border-w-l": [{ "border-l": borderWidthTokens }],
      // "border-w-s": [{ "border-s": borderWidthTokens }],
      // "border-w-e": [{ "border-e": borderWidthTokens }]
      ...Object.fromEntries(
        // https://github.com/dcastil/tailwind-merge/discussions/393#discussioncomment-12287055
        (
          [
            ["border-w", "border"],
            ["border-w-x", "border-x"],
            ["border-w-y", "border-y"],
            ["border-w-t", "border-t"],
            ["border-w-r", "border-r"],
            ["border-w-b", "border-b"],
            ["border-w-l", "border-l"],
            ["border-w-s", "border-s"],
            ["border-w-e", "border-e"]
          ] satisfies Array<[DefaultClassGroupIds, string]>
        ).map(([key, value]) => [key, { [value]: borderWidthTokens }])
      )
    }
  },
  override: {
    conflictingClassGroups: {}
  }
})

export function cn(...inputs: ClassValue[]) {
  return CUSTOM_TW_MERGE(clsx(inputs))
}

export function sanitizeHtml(input: string): string {
  const allowedTags = ["b", "i", "u", "em", "strong", "p", "s", "small", "br", "a"]
  const allowedAttributes = ["href", "class"]

  // Create a temporary DOM element to parse the HTML
  const container = document.createElement("div")
  container.innerHTML = input

  for (const node of container.querySelectorAll("*")) {
    const tagName = node.tagName.toLowerCase()

    if (!allowedTags.includes(tagName)) {
      node.remove()
      continue
    }

    for (const attr of [...node.attributes]) {
      if (!allowedAttributes.includes(attr.name.toLowerCase())) {
        node.removeAttribute(attr.name)
      }
    }
  }

  return container.innerHTML
}

export function generateRandomId(prefix?: string) {
  const id = Math.random().toString(36).slice(2, 10)
  return prefix ? `${prefix}-${id}` : id
}
