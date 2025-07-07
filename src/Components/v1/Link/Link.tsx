import { type KeyboardEvent, type MouseEvent, type ReactElement, forwardRef } from "react"
import type { LinkProps } from "./Link.types"

import { cn } from "@utils"

// biome-ignore lint/style/useNamingConvention: component name is Link
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      borderColor = "border-b-link",
      children,
      color = "text-link",
      href,
      target = "_self",
      fontSize = "text-body2",
      weight = "font-normal",
      whitespace,
      transform,
      lineHeight,
      letterSpacing,
      disabled,
      onClick,
      className,
      ...props
    },
    ref
  ): ReactElement => {
    const linkStyles = cn(
      "cursor-pointer",
      "hover:text-link-hover hover:border-b-link-hover",
      "visited:text-link-visited visited:border-b-link-visited",
      "active:text-link-active active:border-b-link-active",
      "focus-visible:outline-0 focus-visible:ring-3 focus-visible:ring-focus-ring focus-visible:ring-offset-0"
    )
    const mergedClasses = cn(
      !disabled && linkStyles,
      color,
      borderColor && ["border-b", borderColor],
      disabled && "text-disabled border-b-disabled",
      fontSize,
      weight,
      whitespace,
      transform,
      lineHeight,
      letterSpacing,
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

    function handleKeyDown(event: KeyboardEvent<HTMLAnchorElement>) {
      if (!disabled && event.key === "Enter") {
        event.preventDefault()
        event.currentTarget.click()
      }
    }

    return (
      <a
        href={href}
        ref={ref}
        target={target}
        aria-disabled={disabled}
        data-disabled={disabled}
        className={mergedClasses}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </a>
    )
  }
)

Link.displayName = "Link"
export default Link
