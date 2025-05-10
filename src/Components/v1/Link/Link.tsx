import { type MouseEvent, type ReactElement, forwardRef } from "react"
import type { LinkProps } from "./Link.types"

import { cn } from "@utils"

// biome-ignore lint/style/useNamingConvention: component name is Link
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      border_color = "border-b-link",
      children,
      color = "text-link",
      href,
      target = "_self",
      font_size,
      weight = "font-normal",
      whitespace,
      transform,
      line_height,
      letter_spacing,
      disabled,
      onClick,
      className,
      ...props
    },
    ref
  ): ReactElement => {
    const link_styles = cn(
      "hover:text-link-hover hover:border-b-link-hover",
      "visited:text-link-visited visited:border-b-link-visited",
      "active:text-link-active active:border-b-link-active",
      "focus:ring-3 focus:ring-focus-ring focus:ring-offset-0",
      "focus-visible:outline-0 focus-visible:ring-3 focus-visible:ring-focus-ring focus-visible:ring-offset-0"
    )
    const merged_classes = cn(
      "text-body2",
      !disabled && link_styles,
      color,
      border_color && ["border-b", border_color],
      disabled && "text-disabled border-b-disabled",
      font_size,
      weight,
      whitespace,
      transform,
      line_height,
      letter_spacing,
      className
    )

    function handleClick(event: MouseEvent<HTMLElement>) {
      if (disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      onClick?.(event)
    }

    return (
      <a
        href={href}
        ref={ref}
        target={target}
        aria-disabled={disabled}
        data-disabled={disabled}
        className={merged_classes}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    )
  }
)

Link.displayName = "Link"
export default Link
