import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Chip from "./Chip"

const variants = ["filled", "outlined"] as const
const colors = ["primary", "secondary", "error", "success", "warning", "neutral"] as const

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
    const handleClick = vi.fn()

    render(
      <Chip
        disabled
        onClick={handleClick}
      >
        Can't click
      </Chip>
    )

    const chip = screen.getByRole("button", { name: "Can't click" })
    expect(chip).toHaveAttribute("aria-disabled", "true")

    fireEvent.click(chip)

    expect(handleClick).not.toHaveBeenCalled()
  })

  it("is not deletable when disabled", () => {
    const handleDelete = vi.fn()

    render(
      <Chip
        disabled
        onDelete={handleDelete}
        deleteButtonProps={{ "aria-label": "delete option" }}
      >
        Can't delete
      </Chip>
    )

    const deleteButton = screen.getByRole("button", { name: /delete option/i })

    fireEvent.click(deleteButton)

    expect(handleDelete).not.toHaveBeenCalled()
  })

  it("is not clickable when onDelete is passed with onClick", () => {
    const handleDelete = vi.fn()
    const handleClick = vi.fn()

    render(
      <Chip
        onClick={handleClick}
        onDelete={handleDelete}
      >
        Can't click with delete
      </Chip>
    )

    const chip = screen.getByText("Can't click with delete")
    fireEvent.click(chip)

    expect(handleClick).not.toHaveBeenCalled()
  })

  it("calls delete action when clicking delete button", () => {
    const handleClick = vi.fn()
    const handleDelete = vi.fn()

    render(
      <Chip
        onClick={handleClick}
        onDelete={handleDelete}
        deleteButtonProps={{ "aria-label": "delete option" }}
      >
        Delete button
      </Chip>
    )

    const deleteButton = screen.getByRole("button", { name: /delete option/i })
    fireEvent.click(deleteButton)

    expect(handleDelete).toHaveBeenCalled()
  })

  it("handles keyboard interaction when clicking chip with Enter key", () => {
    const handleClick = vi.fn()

    render(<Chip onClick={handleClick}>Press me</Chip>)

    const chip = screen.getByRole("button", { name: "Press me" }) as HTMLElement

    // Focus the element manually
    chip.focus()
    expect(chip).toHaveFocus()

    // Simulate Enter key
    fireEvent.keyDown(chip, { key: "Enter" })
    expect(handleClick).toHaveBeenCalled()
  })

  it("handles keyboard interaction when clicking chip with Space key", () => {
    const handleClick = vi.fn()

    render(<Chip onClick={handleClick}>Press me</Chip>)

    const chip = screen.getByRole("button", { name: "Press me" }) as HTMLElement

    // Focus the element manually
    chip.focus()
    expect(chip).toHaveFocus()

    // Simulate Space key
    fireEvent.keyDown(chip, { key: " " })
    expect(handleClick).toHaveBeenCalled()
  })

  it("handles keyboard interaction when deleting chip with Delete key", async () => {
    const handleDelete = vi.fn()

    render(
      <Chip
        onDelete={handleDelete}
        deleteButtonProps={{ "aria-label": "delete option" }}
      >
        Deletable option
      </Chip>
    )

    const deleteButton = screen.getByRole("button", { name: /delete option/i })

    // Focus the element manually
    deleteButton.focus()
    expect(deleteButton).toHaveFocus()

    // Simulate Delete key
    fireEvent.keyDown(deleteButton, { key: "Delete" })
    expect(handleDelete).toHaveBeenCalled()

    // Check accessibility with axe
    const results = await axe(deleteButton)
    expect(results.violations).toEqual([])
  })

  it("handles keyboard interaction when deleting chip with Enter key", () => {
    const handleDelete = vi.fn()

    render(
      <Chip
        onDelete={handleDelete}
        deleteButtonProps={{ "aria-label": "delete option" }}
      >
        Deletable option
      </Chip>
    )

    const deleteButton = screen.getByRole("button", { name: /delete option/i })

    // Focus the element manually
    deleteButton.focus()
    expect(deleteButton).toHaveFocus()

    // Simulate Delete key
    fireEvent.keyDown(deleteButton, { key: "Enter" })
    expect(handleDelete).toHaveBeenCalled()
  })

  it("handles keyboard interaction when deleting chip with space key", () => {
    const handleDelete = vi.fn()

    render(
      <Chip
        onDelete={handleDelete}
        deleteButtonProps={{ "aria-label": "delete option" }}
      >
        Deletable option
      </Chip>
    )

    const deleteButton = screen.getByRole("button", { name: /delete option/i })

    // Focus the element manually
    deleteButton.focus()
    expect(deleteButton).toHaveFocus()

    // Simulate Space key
    fireEvent.keyDown(deleteButton, { key: " " })
    expect(handleDelete).toHaveBeenCalled()
  })

  it("renders delete button with accessible touch target", async () => {
    const handleDelete = vi.fn()

    const { container } = render(
      <Chip
        onDelete={handleDelete}
        aria-label="Chip with delete"
      >
        Chip
      </Chip>
    )

    const deleteButton = screen.getByRole("button", { name: /delete/i })
    expect(deleteButton).toBeInTheDocument()

    expect(deleteButton.className).toMatch(/before:-inset-1/)

    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("is focusable when disabled and has onClick", () => {
    const handleClick = vi.fn()

    render(
      <Chip
        disabled
        onClick={handleClick}
      >
        Disabled chip
      </Chip>
    )
    const chip = screen.getByText("Disabled chip")
    chip.focus()
    expect(chip).toHaveFocus()
  })

  it("delete button is focusable when disabled", () => {
    const handleDelete = vi.fn()
    render(
      <Chip
        disabled
        onDelete={handleDelete}
        deleteButtonProps={{ "aria-label": "delete option" }}
      >
        Disabled chip
      </Chip>
    )
    const deleteButton = screen.getByRole("button", { name: /delete option/i })
    deleteButton.focus()
    expect(deleteButton).toHaveFocus()
  })

  it("applies hover:bg-inherit to delete button when readOnly is true", () => {
    render(
      <Chip
        onDelete={() => {
          console.info("Delete action")
        }}
        readOnly
      >
        Test
      </Chip>
    )
    const deleteBtn = screen.getByRole("button", { name: /delete chip/i })
    expect(deleteBtn.className).toMatch(/hover:bg-inherit/)
  })
})
