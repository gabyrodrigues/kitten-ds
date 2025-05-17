import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import IconButton from "./IconButton"

const variants = ["default", "filled", "outlined"] as const
const colors = ["primary", "secondary", "gray"] as const

describe("IconButton", () => {
  it("renders with all variant/color combinations and passes a11y", async () => {
    for (const variant of variants) {
      for (const color of colors) {
        const { container, unmount } = render(
          <IconButton
            icon="settings"
            variant={variant}
            color={color}
            aria_label={`IconButton ${variant} ${color}`}
          />
        )

        const button = screen.getByRole("button", {
          name: `IconButton ${variant} ${color}`
        })

        expect(button).toBeInTheDocument()

        const results = await axe(container)
        expect(results.violations).toEqual([])

        unmount()
      }
    }
  })

  it("handles keyboard interaction on custom component", async () => {
    const handle_click = vi.fn()

    render(
      <IconButton
        icon="settings"
        onClick={handle_click}
        aria_label="Settings"
      />
    )

    const button = screen.getByRole("button", { name: "Settings" })

    // Focus the element manually
    button.focus()
    expect(button).toHaveFocus()

    // Simulate Enter key
    fireEvent.keyDown(button, { key: "Enter" })
    expect(handle_click).toHaveBeenCalled()

    // Check accessibility with axe
    const results = await axe(button)
    expect(results.violations).toEqual([])
  })

  it("is not clickable when disabled", () => {
    const on_click = vi.fn()

    render(
      <IconButton
        icon="settings"
        disabled
        onClick={on_click}
        aria_label="Settings"
      />
    )

    const button = screen.getByRole("button", { name: "Settings" })
    expect(button).toHaveAttribute("aria-disabled", "true")

    fireEvent.click(button)

    expect(on_click).not.toHaveBeenCalled()
  })

  it("shows visible focus outline when focused", () => {
    render(
      <IconButton
        icon="settings"
        disabled
        aria_label="Settings"
      />
    )
    const button = screen.getByRole("button", { name: "Settings" })

    button.focus()
    expect(button).toHaveFocus()

    expect(button).toHaveClass("focus:ring-focus-ring")
  })
})
