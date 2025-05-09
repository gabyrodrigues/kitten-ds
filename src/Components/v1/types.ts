export type BgColor = `bg-${string}`
export type BgOpacity = `bg-${string}`
export type BorderColor = `border-${string}`
export type TextColor = `text-${string}` | "inherit"
export type PaddingLeft = `pl-${string}`
export type PaddingRight = `pr-${string}`
export type PaddingX = `px-${string}`
export type PaddingY = `py-${string}`
export type BorderRadius = `rounded-${string}`
export type MarginBottom = `mb-${string}` | `-mb-${string}`
export type MarginTop = `mt-${string}`
export type Opacity = `opacity-${string}`
export type LineClamp = `line-clamp-${string}`
export type Gap = `gap-${string}`
export type GapX = `gap-x-${string}`
export type GapY = `gap-y-${string}`
export type Height = `h-${string}`
export type Width = `w-${string}`

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
