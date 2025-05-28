import { cn, sanitizeHtml } from "@utils"
import type { TitleComponent, TitleProps } from "./Title.types"

export default function Title({
  children,
  color = "text-typography-primary",
  variant = "h1",
  component,
  fontSize,
  marginBottom,
  marginTop,
  weight,
  letterSpacing,
  lineClamp,
  lineHeight,
  transform,
  align,
  wrap,
  whitespace,
  wordBreak,
  fontStyle,
  decoration,
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

  const mergedClasses = cn(
    "block",
    VARIANT_CLASSES[variant],
    fontSize,
    marginBottom,
    marginTop,
    weight,
    letterSpacing,
    lineClamp,
    lineHeight,
    align,
    transform,
    wrap,
    whitespace,
    wordBreak,
    color,
    fontStyle,
    decoration,
    className
  )

  const defaultTag = ["display1", "display2", "display3"].includes(variant) ? "h1" : variant
  const COMPONENT = component || (defaultTag as TitleComponent)

  if (typeof children === "string") {
    return (
      <COMPONENT
        {...props}
        className={mergedClasses}
        // biome-ignore lint/style/useNamingConvention: prop attribute
        // biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized content
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(children) }}
      />
    )
  }

  return (
    <COMPONENT
      {...props}
      className={mergedClasses}
    >
      {children}
    </COMPONENT>
  )
}
