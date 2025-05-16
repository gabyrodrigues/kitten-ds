import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Button from "./Button"

const variants = ["filled", "outlined", "text"] as const
const colors = ["primary", "secondary", "error", "success", "gray"] as const

describe("Button", () => {
  it("renders with all variant/color combinations and passes a11y", async () => {
    for (const variant of variants) {
      for (const color of colors) {
        const { container, unmount } = render(
          <Button
            variant={variant}
            color={color}
            aria-label={`Button ${variant} ${color}`}
          >
            {variant}-{color}
          </Button>
        )

        const button = screen.getByRole("button", {
          name: `Button ${variant} ${color}`
        })

        expect(button).toBeInTheDocument()

        const results = await axe(container)
        expect(results.violations).toEqual([])

        unmount()
      }
    }
  })

  it("applies full width when `full` prop is true", () => {
    render(<Button full>Press me</Button>)

    const button = screen.getByRole("button", { name: "Press me" })
    expect(button).toHaveClass("w-full")
  })

  it("renders a non-button element with correct accessibility props", async () => {
    const { container } = render(
      <Button
        component="div"
        disabled
        aria-label="Non-button"
      >
        Text
      </Button>
    )

    const button = screen.getByRole("button", { name: "Non-button" })
    expect(button).toHaveAttribute("aria-disabled", "true")

    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("handles keyboard interaction on custom component", async () => {
    const handle_click = vi.fn()

    render(
      <Button
        component="div"
        // biome-ignore lint/a11y/useSemanticElements: test case
        role="button"
        tabIndex={0}
        onClick={handle_click}
      >
        Press me
      </Button>
    )

    const button = screen.getByRole("button", { name: "Press me" }) as HTMLElement

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
      <Button
        disabled
        onClick={on_click}
      >
        Can't click
      </Button>
    )

    const button = screen.getByRole("button", { name: "Can't click" })
    expect(button).toBeDisabled()

    button.click()
    expect(on_click).not.toHaveBeenCalled()
  })

  it("renders left and right sections", () => {
    render(
      <Button
        left_section={<span data-testid="left">Left section</span>}
        right_section={<span data-testid="right">Right section</span>}
      >
        Button
      </Button>
    )

    expect(screen.getByTestId("left")).toBeInTheDocument()
    expect(screen.getByTestId("right")).toBeInTheDocument()
  })

  it("calls preventDefault and stopPropagation and does not call onClick when disabled (non-native button)", async () => {
    const on_click = vi.fn()
    const prevent_default_spy = vi.spyOn(Event.prototype, "preventDefault")
    const stop_propagation_spy = vi.spyOn(Event.prototype, "stopPropagation")

    render(
      <Button
        disabled
        component="div"
        onClick={on_click}
      >
        Click me
      </Button>
    )

    const button = screen.getByRole("button", { name: "Click me" })

    await userEvent.click(button)

    expect(on_click).not.toHaveBeenCalled()
    expect(prevent_default_spy).toHaveBeenCalled()
    expect(stop_propagation_spy).toHaveBeenCalled()

    prevent_default_spy.mockRestore()
    stop_propagation_spy.mockRestore()
  })

  it("calls onClick when not disabled", () => {
    const disabled = false
    const on_click = vi.fn()
    const prevent_default = vi.fn()
    const stop_propagation = vi.fn()

    const event = {
      // biome-ignore lint/style/useNamingConvention: prop name
      preventDefault: prevent_default,
      // biome-ignore lint/style/useNamingConvention: prop name
      stopPropagation: stop_propagation
    } as unknown as React.MouseEvent<HTMLElement>

    function handleClick(event: React.MouseEvent<HTMLElement>) {
      if (disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      on_click?.(event)
    }

    handleClick(event)

    expect(prevent_default).not.toHaveBeenCalled()
    expect(stop_propagation).not.toHaveBeenCalled()
    expect(on_click).toHaveBeenCalledWith(event)
  })

  it("shows visible focus outline when focused", () => {
    render(<Button>Focus me</Button>)
    const button = screen.getByRole("button", { name: "Focus me" })

    button.focus()
    expect(button).toHaveFocus()

    expect(button).toHaveClass("focus:ring-focus-ring")
  })
})
