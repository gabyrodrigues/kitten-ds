import { cn, sanitizeHtml } from "@utils"
import type { TextProps } from "./Text.types"

export default function Text({
  children,
  color = "text-typography-primary",
  component = "p",
  variant = "body1",
  font_size,
  margin_bottom,
  margin_top,
  weight,
  letter_spacing,
  line_clamp,
  line_height,
  transform,
  align,
  wrap,
  whitespace,
  word_break,
  font_style,
  decoration,
  html_for,
  className,
  ...props
}: TextProps) {
  const VARIANTS = {
    body1: "text-body1",
    body2: "text-body2",
    body3: "text-body3",
    body4: "text-body4"
  }

  const merged_classes = cn(
    "block",
    VARIANTS[variant],
    font_size,
    margin_bottom,
    margin_top,
    color,
    weight,
    letter_spacing,
    line_clamp,
    line_height,
    align,
    transform,
    wrap,
    whitespace,
    word_break,
    font_style,
    decoration,
    className
  )

  const COMPONENT = component
  // biome-ignore lint/style/useNamingConvention: React prop
  const label_props = component === "label" && html_for ? { htmlFor: html_for } : {}

  if (typeof children === "string") {
    return (
      <COMPONENT
        {...props}
        {...label_props}
        className={merged_classes}
        // biome-ignore lint/style/useNamingConvention: prop attribute
        // biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized content
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(children) }}
      />
    )
  }

  return (
    <COMPONENT
      {...props}
      {...label_props}
      className={merged_classes}
    >
      {children}
    </COMPONENT>
  )
}
