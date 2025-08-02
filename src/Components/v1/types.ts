export type BgColor = `bg-${string}`
export type BgOpacity = `bg-${string}`
export type BorderColor = `border-${string}`
export type TextColor = `text-${string}` | "inherit"
export type Opacity = `opacity-${string}`
export type LineClamp = `line-clamp-${string}`
export type Height = `h-${string}` | `size-${string}`
export type Width = `w-${string}` | `size-${string}`
export type TextAlign =
  | "text-left"
  | "text-center"
  | "text-right"
  | "text-justify"
  | "text-start"
  | "text-end"
export type TextWrap = "text-wrap" | "text-nowrap" | "text-balance" | "text-pretty"
export type WhiteSpace =
  | "whitespace-normal"
  | "whitespace-nowrap"
  | "whitespace-pre"
  | "whitespace-pre-line"
  | "whitespace-pre-wrap"
  | "whitespace-break-spaces"
export type WordBreak = "break-normal" | "break-all" | "break-keep"
export type TextTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case"
export type FontStyle = "italic" | "not-italic"
export type TextDecoration = "underline" | "overline" | "line-through" | "no-underline"

export type Gap =
  | "gap-quark"
  | "gap-nano"
  | "gap-xs"
  | "gap-sm"
  | "gap-md"
  | "gap-lg"
  | "gap-xl"
  | "gap-2xl"
  | "gap-3xl"
  | "gap-4xl"
  | "gap-5xl"
  | "gap-6xl"
  | `gap-${string}`

export type GapX =
  | "gap-x-quark"
  | "gap-x-nano"
  | "gap-x-xs"
  | "gap-x-sm"
  | "gap-x-md"
  | "gap-x-lg"
  | "gap-x-xl"
  | "gap-x-2xl"
  | "gap-x-3xl"
  | "gap-x-4xl"
  | "gap-x-5xl"
  | "gap-x-6xl"
  | `gap-x-${string}`

export type GapY =
  | "gap-y-quark"
  | "gap-y-nano"
  | "gap-y-xs"
  | "gap-y-sm"
  | "gap-y-md"
  | "gap-y-lg"
  | "gap-y-xl"
  | "gap-y-2xl"
  | "gap-y-3xl"
  | "gap-y-4xl"
  | "gap-y-5xl"
  | "gap-y-6xl"
  | `gap-y-${string}`

export type MarginLeft =
  | "ml-quark"
  | "ml-nano"
  | "ml-xs"
  | "ml-sm"
  | "ml-md"
  | "ml-lg"
  | "ml-xl"
  | "ml-2xl"
  | "ml-3xl"
  | "ml-4xl"
  | "ml-5xl"
  | "ml-6xl"
  | `ml-${string}`
  | "-ml-quark"
  | "-ml-nano"
  | "-ml-xs"
  | "-ml-sm"
  | "-ml-md"
  | "-ml-lg"
  | "-ml-xl"
  | "-ml-2xl"
  | "-ml-3xl"
  | "-ml-4xl"
  | "-ml-5xl"
  | "-ml-6xl"
  | `-ml-${string}`

export type MarginRight =
  | "mr-quark"
  | "mr-nano"
  | "mr-xs"
  | "mr-sm"
  | "mr-md"
  | "mr-lg"
  | "mr-xl"
  | "mr-2xl"
  | "mr-3xl"
  | "mr-4xl"
  | "mr-5xl"
  | "mr-6xl"
  | `mr-${string}`
  | "-mr-quark"
  | "-mr-nano"
  | "-mr-xs"
  | "-mr-sm"
  | "-mr-md"
  | "-mr-lg"
  | "-mr-xl"
  | "-mr-2xl"
  | "-mr-3xl"
  | "-mr-4xl"
  | "-mr-5xl"
  | "-mr-6xl"
  | `-mr-${string}`

export type MarginTop =
  | "mt-quark"
  | "mt-nano"
  | "mt-xs"
  | "mt-sm"
  | "mt-md"
  | "mt-lg"
  | "mt-xl"
  | "mt-2xl"
  | "mt-3xl"
  | "mt-4xl"
  | "mt-5xl"
  | "mt-6xl"
  | `mt-${string}`
  | "-mt-quark"
  | "-mt-nano"
  | "-mt-xs"
  | "-mt-sm"
  | "-mt-md"
  | "-mt-lg"
  | "-mt-xl"
  | "-mt-2xl"
  | "-mt-3xl"
  | "-mt-4xl"
  | "-mt-5xl"
  | "-mt-6xl"
  | `-mt-${string}`

export type MarginBottom =
  | "mb-quark"
  | "mb-nano"
  | "mb-xs"
  | "mb-sm"
  | "mb-md"
  | "mb-lg"
  | "mb-xl"
  | "mb-2xl"
  | "mb-3xl"
  | "mb-4xl"
  | "mb-5xl"
  | "mb-6xl"
  | `mb-${string}`
  | "-mb-quark"
  | "-mb-nano"
  | "-mb-xs"
  | "-mb-sm"
  | "-mb-md"
  | "-mb-lg"
  | "-mb-xl"
  | "-mb-2xl"
  | "-mb-3xl"
  | "-mb-4xl"
  | "-mb-5xl"
  | "-mb-6xl"
  | `-mb-${string}`

export type PaddingLeft =
  | "pl-quark"
  | "pl-nano"
  | "pl-xs"
  | "pl-sm"
  | "pl-md"
  | "pl-lg"
  | "pl-xl"
  | "pl-2xl"
  | "pl-3xl"
  | "pl-4xl"
  | "pl-5xl"
  | "pl-6xl"
  | `pl-${string}`

export type PaddingRight =
  | "pr-quark"
  | "pr-nano"
  | "pr-xs"
  | "pr-sm"
  | "pr-md"
  | "pr-lg"
  | "pr-xl"
  | "pr-2xl"
  | "pr-3xl"
  | "pr-4xl"
  | "pr-5xl"
  | "pr-6xl"
  | `pr-${string}`

export type PaddingBottom =
  | "pb-quark"
  | "pb-nano"
  | "pb-xs"
  | "pb-sm"
  | "pb-md"
  | "pb-lg"
  | "pb-xl"
  | "pb-2xl"
  | "pb-3xl"
  | "pb-4xl"
  | "pb-5xl"
  | "pb-6xl"
  | `pb-${string}`

export type PaddingTop =
  | "pt-quark"
  | "pt-nano"
  | "pt-xs"
  | "pt-sm"
  | "pt-md"
  | "pt-lg"
  | "pt-xl"
  | "pt-2xl"
  | "pt-3xl"
  | "pt-4xl"
  | "pt-5xl"
  | "pt-6xl"
  | `pt-${string}`

export type PaddingX =
  | "px-quark"
  | "px-nano"
  | "px-xs"
  | "px-sm"
  | "px-md"
  | "px-lg"
  | "px-xl"
  | "px-2xl"
  | "px-3xl"
  | "px-4xl"
  | "px-5xl"
  | "px-6xl"
  | `px-${string}`

export type PaddingY =
  | "py-quark"
  | "py-nano"
  | "py-xs"
  | "py-sm"
  | "py-md"
  | "py-lg"
  | "py-xl"
  | "py-2xl"
  | "py-3xl"
  | "py-4xl"
  | "py-5xl"
  | "py-6xl"
  | `py-${string}`

export type BorderWidth =
  | "border-thin"
  | "border-medium"
  | "border-thick"
  | "border-bold"
  | "border-heavy"
  | `border-${string}`

export type BorderRadius =
  | "rounded-xs"
  | "rounded-sm"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-xl"
  | "rounded-2xl"
  | "rounded-3xl"
  | "rounded-4xl"
  | "rounded-full"
  | "rounded-none"
  | `rounded-${string}`

export type FontWeight =
  | "font-thin"
  | "font-extralight"
  | "font-light"
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-extrabold"
  | "font-black"
  | `font-(${string})`
  | `font-[${string}]`

export type LineHeight =
  | "leading-none"
  | "leading-tight"
  | "leading-snug"
  | "leading-normal"
  | "leading-relaxed"
  | "leading-loose"
  | `leading-(${string})`
  | `leading-[${string}]`

export type LetterSpacing =
  | "tracking-tighter"
  | "tracking-tight"
  | "tracking-normal"
  | "tracking-wide"
  | "tracking-wider"
  | "tracking-widest"
  | `tracking-[${string}]`
  | `tracking-(${string})`
