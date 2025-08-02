import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Button from "./Button"

const variants = ["filled", "outlined", "text"] as const
const colors = ["primary", "secondary", "error", "success", "neutral"] as const

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
    const handleClick = vi.fn()

    render(
      <Button
        component="div"
        // biome-ignore lint/a11y/useSemanticElements: test case
        role="button"
        tabIndex={0}
        onClick={handleClick}
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
    expect(handleClick).toHaveBeenCalled()

    // Check accessibility with axe
    const results = await axe(button)
    expect(results.violations).toEqual([])
  })

  it("is not clickable when disabled", () => {
    const onClick = vi.fn()

    render(
      <Button
        disabled
        onClick={onClick}
      >
        Can't click
      </Button>
    )

    const button = screen.getByRole("button", { name: "Can't click" })
    expect(button).toHaveAttribute("aria-disabled", "true")

    fireEvent.click(button)

    expect(onClick).not.toHaveBeenCalled()
  })

  it("renders left and right sections", () => {
    render(
      <Button
        leftSection={<span data-testid="left">Left section</span>}
        rightSection={<span data-testid="right">Right section</span>}
      >
        Button
      </Button>
    )

    expect(screen.getByTestId("left")).toBeInTheDocument()
    expect(screen.getByTestId("right")).toBeInTheDocument()
  })

  it("calls preventDefault and stopPropagation and does not call onClick when disabled (non-native button)", async () => {
    const onClick = vi.fn()
    const preventDefaultSpy = vi.spyOn(Event.prototype, "preventDefault")
    const stopPropagationSpy = vi.spyOn(Event.prototype, "stopPropagation")

    render(
      <Button
        disabled
        component="div"
        onClick={onClick}
      >
        Click me
      </Button>
    )

    const button = screen.getByRole("button", { name: "Click me" })

    await userEvent.click(button)

    expect(onClick).not.toHaveBeenCalled()
    expect(preventDefaultSpy).toHaveBeenCalled()
    expect(stopPropagationSpy).toHaveBeenCalled()

    preventDefaultSpy.mockRestore()
    stopPropagationSpy.mockRestore()
  })

  it("shows visible focus outline when focused", () => {
    render(<Button>Focus me</Button>)
    const button = screen.getByRole("button", { name: "Focus me" })

    button.focus()
    expect(button).toHaveFocus()

    expect(button).toHaveClass("focus-visible:ring-focus-ring")
  })

  it("applies correct attributes and prevents interaction when loading", () => {
    const handleClick = vi.fn()
    render(
      <Button
        isLoading
        onClick={handleClick}
      >
        Loading
      </Button>
    )
    const button = screen.getByRole("button", { name: "Loading" })

    expect(button).toHaveAttribute("aria-disabled", "true")
    expect(button).toHaveAttribute("data-disabled", "true")
    expect(button).toHaveAttribute("aria-busy", "true")
    expect(button).toHaveAttribute("data-loading", "true")
    expect(button).toHaveAttribute("tabindex", "0")

    // Prevents click
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it("shows spinner when loading", () => {
    render(<Button isLoading>Loading</Button>)
    expect(screen.getByRole("status")).toBeInTheDocument()
  })
})
