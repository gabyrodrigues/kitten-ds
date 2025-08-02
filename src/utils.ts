import { type ClassValue, clsx } from "clsx"
import { type DefaultClassGroupIds, extendTailwindMerge } from "tailwind-merge"
import { type TV, tv as tvBase } from "tailwind-variants"

const borderWidthTokens = ["thin", "medium", "thick", "bold", "heavy"]

const twMergeConfig = {
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
    ...Object.fromEntries(
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
}

export const CUSTOM_TW_MERGE = extendTailwindMerge({
  extend: {
    classGroups: {
      ...twMergeConfig.classGroups
    }
  },
  override: {
    conflictingClassGroups: {}
  }
})

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        ...twMergeConfig.classGroups
      }
    }
  })

export function cn(...inputs: ClassValue[]) {
  return CUSTOM_TW_MERGE(clsx(inputs))
}

export function sanitizeHtml(input: string): string {
  const allowedTags = ["b", "i", "u", "em", "strong", "p", "s", "small", "br", "a"]
  const allowedAttributes = ["href", "class"]
  const selfClosingTags = ["br"]

  return input.replace(
    /<(\/)?([a-z0-9]+)([^>]*)>/gi,
    // biome-ignore lint/style/useNamingConvention: unused param
    (_, closingSlash, tagName, attributes) => {
      const formattedTagName = tagName.toLowerCase()

      if (!allowedTags.includes(formattedTagName)) return ""

      if (closingSlash) {
        return `</${formattedTagName}>`
      }

      if (!attributes) {
        return selfClosingTags.includes(formattedTagName)
          ? `<${formattedTagName} />`
          : `<${formattedTagName}>`
      }

      // Check if tag is self-closing with a trailing slash in attributes
      const isSelfClosing = /\s*\/\s*$/.test(attributes)

      // Remove trailing slash if present
      const cleanedAttributes = attributes.replace(/\s*\/\s*$/, "")

      // Filter allowed attributes
      const attrsMatches = [
        ...cleanedAttributes.matchAll(/([a-z0-9\-]+)\s*=\s*("[^"]*"|'[^']*'|[^\s'">]+)/gi)
      ]

      const filteredAttrs = attrsMatches
        .filter(([, attributeName]) => allowedAttributes.includes(attributeName.toLowerCase()))
        .map(([full]) => full)
        .join(" ")

      // Build tag with filtered attributes and add self-closing slash if needed
      if (selfClosingTags.includes(formattedTagName) && isSelfClosing) {
        return `<${formattedTagName}${filteredAttrs ? ` ${filteredAttrs}` : ""} />`
      }

      return `<${formattedTagName}${filteredAttrs ? ` ${filteredAttrs}` : ""}>`
    }
  )
}

export function generateRandomId(prefix?: string) {
  const id = Math.random().toString(36).slice(2, 10)
  return prefix ? `${prefix}-${id}` : id
}
