import { cn, sanitizeHtml } from "@utils"
import type { TitleComponent, TitleProps } from "./Title.types"

export default function Title({
  children,
  color = "text-typography-primary",
  variant = "h1",
  component,
  font_size,
  margin_bottom,
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
  className,
  ...props
}: TitleProps) {
  const VARIANT_CLASSES = {
    display1: "text-display1",
    display2: "text-display2",
    display3: "text-display3",
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
    h5: "text-h5",
    h6: "text-h6"
  }

  const merged_classes = cn(
    "block",
    VARIANT_CLASSES[variant],
    font_size,
    margin_bottom,
    weight,
    letter_spacing,
    line_clamp,
    line_height,
    align,
    transform,
    wrap,
    whitespace,
    word_break,
    color,
    font_style,
    className
  )

  const default_tag = ["display1", "display2", "display3"].includes(variant) ? "h1" : variant
  const COMPONENT = component || (default_tag as TitleComponent)

  if (typeof children === "string") {
    return (
      <COMPONENT
        {...props}
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
      className={merged_classes}
    >
      {children}
    </COMPONENT>
  )
}
