import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Chip from "./Chip"

const variants = ["filled", "outlined"] as const
const colors = ["primary", "secondary", "error", "success", "warning", "gray"] as const

describe("Chip", () => {
  it("renders with all variant/color combinations and passes a11y", async () => {
    for (const variant of variants) {
      for (const color of colors) {
        const { container, unmount } = render(
          <Chip
            variant={variant}
            color={color}
            aria-label={`Chip ${variant} ${color}`}
          >
            {variant}-{color}
          </Chip>
        )

        const chip = screen.getByText(`${variant}-${color}`)

        expect(chip).toBeInTheDocument()

        const results = await axe(container)
        expect(results.violations).toEqual([])

        unmount()
      }
    }
  })

  it("is not clickable when disabled", () => {
    const onClick = vi.fn()

    render(
      <Chip
        disabled
        onClick={onClick}
      >
        Can't click
      </Chip>
    )

    const chip = screen.getByRole("button", { name: "Can't click" })
    expect(chip).toHaveAttribute("aria-disabled", "true")

    fireEvent.click(chip)

    expect(onClick).not.toHaveBeenCalled()
  })

  it("renders delete button with accessible touch target", async () => {
    const onDelete = vi.fn()

    const { container } = render(
      <Chip
        onDelete={onDelete}
        aria-label="Chip with delete"
      >
        Chip
      </Chip>
    )

    const deleteButton = screen.getByRole("button", { name: /delete/i })
    expect(deleteButton).toBeInTheDocument()

    // ✅ Check that it has the necessary classes for hit target
    expect(deleteButton.className).toMatch(/before:-inset-1/)

    // ✅ Or if you're using ring trick:
    // expect(deleteButton.className).toMatch(/ring-8/)

    // ✅ Run axe for general accessibility
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })
})
