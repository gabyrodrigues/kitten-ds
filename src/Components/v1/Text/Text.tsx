import { cn, sanitizeHtml } from "@utils"
import type { TextProps } from "./Text.types"

export default function Text({
  children,
  color = "text-typography-primary",
  component = "p",
  variant = "body1",
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
  htmlFor,
  className,
  ...props
}: TextProps) {
  const VARIANTS = {
    body1: "text-body1",
    body2: "text-body2",
    body3: "text-body3",
    body4: "text-body4"
  }

  const mergedClasses = cn(
    "block",
    VARIANTS[variant],
    fontSize,
    marginBottom,
    marginTop,
    color,
    weight,
    letterSpacing,
    lineClamp,
    lineHeight,
    align,
    transform,
    wrap,
    whitespace,
    wordBreak,
    fontStyle,
    decoration,
    className
  )

  const COMPONENT = component
  const labelProps = component === "label" && htmlFor ? { htmlFor: htmlFor } : {}

  if (typeof children === "string") {
    return (
      <COMPONENT
        {...props}
        {...labelProps}
        className={mergedClasses}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized content
        // biome-ignore lint/style/useNamingConvention: prop name
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(children) }}
      />
    )
  }

  return (
    <COMPONENT
      {...props}
      {...labelProps}
      className={mergedClasses}
    >
      {children}
    </COMPONENT>
  )
}
