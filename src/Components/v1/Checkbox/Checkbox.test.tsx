import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"

import Checkbox from "./Checkbox"

const colors = ["primary", "secondary", "gray"] as const

describe("Checkbox", () => {
  it("renders with all variant/color combinations and passes a11y", async () => {
    for (const color of colors) {
      const { container, unmount } = render(
        <Checkbox
          label="Cupcake"
          value="cupcake"
          color={color}
          checked
        />
      )

      const checkbox = screen.getByRole("checkbox", { name: "Cupcake" })

      expect(checkbox).toBeInTheDocument()

      const results = await axe(container)
      expect(results.violations).toEqual([])

      unmount()
    }
  })

  it("should render with label and be accessible", async () => {
    const { container } = render(
      <Checkbox
        label="Cupcake"
        value="cupcake"
        checked
      />
    )

    const checkbox = screen.getByRole("checkbox", { name: "Cupcake" })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()

    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("should fire onChange when clicked", () => {
    const handleChange = vi.fn()
    render(
      <Checkbox
        label="Pizza"
        value="pizza"
        onChange={handleChange}
      />
    )

    const checkbox = screen.getByRole("checkbox", { name: "Pizza" })
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it("renders label and associated helper, error, success texts with aria-describedby", () => {
    render(
      <Checkbox
        label="Label"
        value="test"
        helperText="Helper"
        errorText="Error"
        successText="Success"
        id="test-checkbox"
      />
    )
    const input = screen.getByRole("checkbox")
    expect(screen.getByLabelText("Label")).toBeInTheDocument()
    expect(screen.getByText("Helper")).toHaveAttribute("id", "test-checkbox_help")
    expect(screen.getByText("Error")).toHaveAttribute("id", "test-checkbox_error")
    expect(screen.getByText("Success")).toHaveAttribute("id", "test-checkbox_success")
    expect(input).toHaveAttribute(
      "aria-describedby",
      "test-checkbox_error test-checkbox_success test-checkbox_help"
    )
  })

  it("successfully disables input", () => {
    render(
      <Checkbox
        label="Disabled"
        value="test"
        disabled
      />
    )
    const input = screen.getByRole("checkbox")
    expect(input).toHaveAttribute("aria-disabled", "true")
    expect(input).toHaveAttribute("data-disabled", "true")
    expect(input).not.toBeDisabled() // not natively disabled
  })

  it("does not call onChange when disabled", () => {
    const onChange = vi.fn()
    render(
      <Checkbox
        label="NoClick"
        value="test"
        onChange={onChange}
        disabled
      />
    )
    fireEvent.click(screen.getByRole("checkbox"))
    expect(onChange).not.toHaveBeenCalled()
  })

  it("calls onChange when clicked and not disabled", () => {
    const onChange = vi.fn()
    render(
      <Checkbox
        label="Click"
        value="test"
        onChange={onChange}
      />
    )
    fireEvent.click(screen.getByRole("checkbox"))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it("shows correct message colors when enabled", () => {
    render(
      <Checkbox
        value="test"
        label="Label"
        helperText="Helper text"
        errorText="Error text"
        successText="Success text"
        disabled={false}
      />
    )

    expect(screen.getByText("Helper text")).toHaveClass("text-typography-secondary")
    expect(screen.getByText("Error text")).toHaveClass("text-error")
    expect(screen.getByText("Success text")).toHaveClass("text-success")
  })

  it("shows correct message colors when disabled", () => {
    render(
      <Checkbox
        value="test"
        label="Label"
        helperText="Helper text"
        errorText="Error text"
        successText="Success text"
        disabled={true}
      />
    )

    expect(screen.getByText("Helper text")).toHaveClass("text-disabled")
    expect(screen.getByText("Error text")).toHaveClass("text-error")
    expect(screen.getByText("Success text")).toHaveClass("text-success")
  })

  it("adds aria-invalid and aria-describedby when errorText is present", () => {
    const errorMessage = "This field is required"
    const id = "test-checkbox"

    render(
      <Checkbox
        label="Test Checkbox"
        value="test"
        id={id}
        errorText={errorMessage}
      />
    )

    const input = screen.getByRole("checkbox", { name: /test checkbox/i })

    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(input).toHaveAttribute("aria-describedby", `${id}_error`)

    const errorTextElement = screen.getByText(errorMessage)
    expect(errorTextElement).toBeInTheDocument()
    expect(errorTextElement).toHaveAttribute("id", `${id}_error`)
  })

  it("renders with indeterminate state", async () => {
    const { container } = render(
      <Checkbox
        label="Indeterminate"
        value="indeterminate"
        indeterminate
      />
    )

    const checkbox = screen.getByRole("checkbox", { name: "Indeterminate" }) as HTMLInputElement
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute("aria-checked", "mixed")
    expect(checkbox.indeterminate).toBe(true)

    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("updates indeterminate state when prop changes", () => {
    const { rerender } = render(
      <Checkbox
        label="Indeterminate"
        value="indeterminate"
        indeterminate
      />
    )
    const checkbox = screen.getByRole("checkbox", { name: "Indeterminate" }) as HTMLInputElement
    expect(checkbox.indeterminate).toBe(true)

    rerender(
      <Checkbox
        label="Indeterminate"
        value="indeterminate"
        indeterminate={false}
      />
    )
    expect(checkbox.indeterminate).toBe(false)
  })

  it("updates indeterminate state when prop changes", () => {
    const { rerender } = render(
      <Checkbox
        label="Indeterminate"
        value="indeterminate"
        indeterminate
      />
    )
    const checkbox = screen.getByRole("checkbox", { name: "Indeterminate" }) as HTMLInputElement
    expect(checkbox.indeterminate).toBe(true)

    rerender(
      <Checkbox
        label="Indeterminate"
        value="indeterminate"
        indeterminate={false}
      />
    )
    expect(checkbox.indeterminate).toBe(false)
  })

  it("clears indeterminate state on user interaction and prop update", () => {
    // This test simulates a real-world scenario:
    // 1. Checkbox is rendered indeterminate
    // 2. User clicks (should clear indeterminate in DOM)
    // 3. Parent updates indeterminate prop to false
    //
    // Note: This is the most robust way to cover the code path that clears indeterminate,
    // since React does not re-run the ref callback on prop change, and internal state wrappers are unreliable.
    const { rerender } = render(
      <Checkbox
        label="Indeterminate"
        value="indeterminate"
        indeterminate
      />
    )
    const checkbox = screen.getByRole("checkbox", { name: "Indeterminate" }) as HTMLInputElement
    expect(checkbox.indeterminate).toBe(true)

    // Simulate user click (should clear indeterminate in DOM)
    fireEvent.click(checkbox)
    // After click, indeterminate should be cleared by the component's onChange handler
    expect(checkbox.indeterminate).toBe(false)

    // Now parent updates indeterminate prop to false (explicitly)
    rerender(
      <Checkbox
        label="Indeterminate"
        value="indeterminate"
        indeterminate={false}
      />
    )
    expect(checkbox.indeterminate).toBe(false)
  })
  it("does not try to clear indeterminate if not set", () => {
    const onChange = vi.fn()
    render(
      <Checkbox
        label="Normal"
        value="normal"
        indeterminate={false}
        onChange={onChange}
      />
    )
    const checkbox = screen.getByRole("checkbox", { name: "Normal" }) as HTMLInputElement
    expect(checkbox.indeterminate).toBe(false)
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalled()
  })
})
