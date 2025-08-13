import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Snackbar from "./Snackbar"

const variants = ["filled", "outlined"] as const
const colors = ["error", "info", "neutral", "success", "warning"] as const

describe("Snackbar", () => {
  it("renders with all variant/color combinations and passes a11y", async () => {
    for (const variant of variants) {
      for (const color of colors) {
        const { container, unmount } = render(
          <Snackbar
            variant={variant}
            color={color}
            aria-label={`Snackbar ${variant} ${color}`}
            title="Title"
            description="Description"
            isOpen
          />
        )

        const snackbar = screen.getByRole(
          ["error", "warning", "success"].includes(color) ? "alert" : "status",
          {
            name: `Snackbar ${variant} ${color}`
          }
        )

        expect(snackbar).toBeInTheDocument()

        const results = await axe(container)
        expect(results.violations).toEqual([])

        unmount()
      }
    }
  })

  it("renders title and description", () => {
    render(
      <Snackbar
        isOpen
        title="My Title"
        description="My Desc"
      />
    )
    expect(screen.getByText("My Title")).toBeInTheDocument()
    expect(screen.getByText("My Desc")).toBeInTheDocument()
  })

  it("renders close button with correct aria-label", () => {
    const onClose = vi.fn()
    render(
      <Snackbar
        isOpen
        title="Title"
        description="Desc"
        onClose={onClose}
        closeButtonProps={{ "aria-label": "Dismiss" }}
      />
    )
    const closeButton = screen.getByRole("button", { name: "Dismiss" })
    expect(closeButton).toBeInTheDocument()
    closeButton.focus()
    expect(closeButton).toHaveFocus()
  })

  it("closes on Enter or Space key", () => {
    const onClose = vi.fn()
    render(
      <Snackbar
        isOpen
        title="Title"
        description="Desc"
        onClose={onClose}
      />
    )
    const closeButton = screen.getByRole("button")
    closeButton.focus()
    fireEvent.keyDown(closeButton, { key: "Enter" })
    expect(onClose).toHaveBeenCalled()
  })

  it("auto-dismisses after timeout", () => {
    vi.useFakeTimers()
    const onClose = vi.fn()
    render(
      <Snackbar
        isOpen
        title="Title"
        description="Desc"
        onClose={onClose}
        timeToClose={1000}
      />
    )
    vi.advanceTimersByTime(1000)
    expect(onClose).toHaveBeenCalled()
    vi.useRealTimers()
  })

  it("renders string title and description as Title and Text components", () => {
    render(
      <Snackbar
        isOpen
        title="Test Title"
        description="Test Description"
      />
    )

    expect(screen.getByText("Test Title")).toBeInTheDocument()
    expect(screen.getByText("Test Description")).toBeInTheDocument()
  })

  it("renders ReactNode title and description directly", () => {
    render(
      <Snackbar
        isOpen
        title={<span data-testid="custom-title">Custom Title</span>}
        description={<span data-testid="custom-desc">Custom Desc</span>}
      />
    )
    expect(screen.getByTestId("custom-title")).toBeInTheDocument()
    expect(screen.getByTestId("custom-desc")).toBeInTheDocument()
  })

  it("calls onClose when close button receives Enter, Space, or Delete key", () => {
    const onClose = vi.fn()
    render(
      <Snackbar
        isOpen
        title="Title"
        description="Desc"
        onClose={onClose}
      />
    )
    const closeButton = screen.getByRole("button")
    closeButton.focus()

    // Test Enter key
    fireEvent.keyDown(closeButton, { key: "Enter" })
    expect(onClose).toHaveBeenCalledTimes(1)

    // Test Space key
    fireEvent.keyDown(closeButton, { key: " " })
    expect(onClose).toHaveBeenCalledTimes(2)

    // Test Delete key
    fireEvent.keyDown(closeButton, { key: "Delete" })
    expect(onClose).toHaveBeenCalledTimes(3)
  })
})
