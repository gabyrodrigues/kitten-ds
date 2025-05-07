import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

export const CUSTOM_TW_MERGE = extendTailwindMerge({
  extend: {
    // biome-ignore lint/style/useNamingConvention: lib custom property
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
        "text-body5"
      ]
    }
  },
  override: {
    // biome-ignore lint/style/useNamingConvention: lib custom property
    conflictingClassGroups: {
      "font-size": []
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return CUSTOM_TW_MERGE(clsx(inputs))
}

export function sanitizeHtml(input: string): string {
  const allowed_tags = ["b", "i", "u", "em", "strong", "p", "s", "small", "br", "a"]
  const allowed_attributes = ["href", "class"]

  // Create a temporary DOM element to parse the HTML
  const container = document.createElement("div")
  container.innerHTML = input

  for (const node of container.querySelectorAll("*")) {
    const tag_name = node.tagName.toLowerCase()

    if (!allowed_tags.includes(tag_name)) {
      node.remove()
      continue
    }

    for (const attr of [...node.attributes]) {
      if (!allowed_attributes.includes(attr.name.toLowerCase())) {
        node.removeAttribute(attr.name)
      }
    }
  }

  return container.innerHTML
}
