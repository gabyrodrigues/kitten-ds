import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"

import Radio from "./Radio"

const colors = ["primary", "secondary", "neutral"] as const

describe("Radio", () => {
  it("renders with all variant/color combinations and passes a11y", async () => {
    for (const color of colors) {
      const { container, unmount } = render(
        <Radio
          label="Cupcake"
          value="cupcake"
          name="food"
          color={color}
          checked
        />
      )

      const radio = screen.getByRole("radio", { name: "Cupcake" })

      expect(radio).toBeInTheDocument()

      const results = await axe(container)
      expect(results.violations).toEqual([])

      unmount()
    }
  })

  it("should render with label and be accessible", async () => {
    const { container } = render(
      <Radio
        label="Cupcake"
        value="cupcake"
        name="food"
        checked
      />
    )

    const radio = screen.getByRole("radio", { name: "Cupcake" })
    expect(radio).toBeInTheDocument()
    expect(radio).toBeChecked()

    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("should fire onChange when clicked", () => {
    const handleChange = vi.fn()
    render(
      <Radio
        label="Pizza"
        value="pizza"
        name="food"
        onChange={handleChange}
      />
    )

    const radio = screen.getByRole("radio", { name: "Pizza" })
    fireEvent.click(radio)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it("renders label and associated helper, error, success texts with aria-describedby", () => {
    render(
      <Radio
        label="Label"
        value="test"
        helperText="Helper"
        errorText="Error"
        successText="Success"
        id="test-radio"
      />
    )
    const input = screen.getByRole("radio")
    expect(screen.getByLabelText("Label")).toBeInTheDocument()
    expect(screen.getByText("Helper")).toHaveAttribute("id", "test-radio_help")
    expect(screen.getByText("Error")).toHaveAttribute("id", "test-radio_error")
    expect(screen.getByText("Success")).toHaveAttribute("id", "test-radio_success")
    expect(input).toHaveAttribute(
      "aria-describedby",
      "test-radio_error test-radio_success test-radio_help"
    )
  })

  it("successfully disables input", () => {
    render(
      <Radio
        label="Disabled"
        value="test"
        disabled
      />
    )
    const input = screen.getByRole("radio")
    expect(input).toHaveAttribute("aria-disabled", "true")
    expect(input).toHaveAttribute("data-disabled", "true")
    expect(input).not.toBeDisabled() // not natively disabled
  })

  it("does not call onChange when disabled", () => {
    const onChange = vi.fn()
    render(
      <Radio
        label="NoClick"
        value="test"
        onChange={onChange}
        disabled
      />
    )
    fireEvent.click(screen.getByRole("radio"))
    expect(onChange).not.toHaveBeenCalled()
  })

  it("calls onChange when clicked and not disabled", () => {
    const onChange = vi.fn()
    render(
      <Radio
        label="Click"
        value="test"
        onChange={onChange}
      />
    )
    fireEvent.click(screen.getByRole("radio"))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it("shows correct message colors when enabled", () => {
    render(
      <Radio
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
      <Radio
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
    const id = "test-radio"

    render(
      <Radio
        label="Test Radio"
        value="test"
        id={id}
        errorText={errorMessage}
      />
    )

    const input = screen.getByRole("radio", { name: /test radio/i })

    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(input).toHaveAttribute("aria-describedby", `${id}_error`)

    const errorTextElement = screen.getByText(errorMessage)
    expect(errorTextElement).toBeInTheDocument()
    expect(errorTextElement).toHaveAttribute("id", `${id}_error`)
  })
})
