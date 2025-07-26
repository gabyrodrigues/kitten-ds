import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Input from "./Input"

describe("Input", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Input
        value=""
        label="Label"
      />
    )
    const results = await axe(container)
    expect(results.violations).toEqual([])

    const input = screen.getByLabelText("Label")
    expect(input).toBeInTheDocument()
  })
  it("should have accessibility violations when neither label or aria-label are not passed", async () => {
    window.getComputedStyle = (() => ({
      getPropertyValue: () => ""
    })) as unknown as typeof window.getComputedStyle
    const { container } = render(<Input value="" />)
    const results = await axe(container)
    expect(results.violations.length).toBeGreaterThan(0)
  })
  it("should have no accessibility violations when label is not passed but aria-label is passed", async () => {
    const { container } = render(
      <Input
        value=""
        aria-label="my-test-input"
      />
    )
    const results = await axe(container)
    expect(results.violations).toEqual([])

    const input = screen.getByLabelText("my-test-input")
    expect(input).toBeInTheDocument()
  })

  it("should have no accessibility violations with aria-labelledby", () => {
    render(
      <>
        <span id="custom-label">Custom Label</span>
        <Input
          value=""
          aria-labelledby="custom-label"
        />
      </>
    )
    const input = screen.getByLabelText("Custom Label")
    expect(input).toBeInTheDocument()
  })

  it("should render required asterisk and set aria-required", () => {
    render(
      <Input
        value=""
        label="Label"
        required
        withAsterisk
      />
    )
    const input = screen.getByLabelText(/Label/i)
    expect(input).toHaveAttribute("aria-required", "true")
    const asterisk = screen.getByText("*")
    expect(asterisk).toBeInTheDocument()
    expect(asterisk).toHaveClass("text-error")
  })

  it("renders asterisk with text-typography-disabled color when disabled", () => {
    render(
      <Input
        value=""
        label="Label"
        required
        withAsterisk
        disabled
      />
    )
    const asterisk = screen.getByText("*")
    expect(asterisk).toHaveClass("text-typography-disabled")
  })

  it("renders errorText with aria-describedby, aria-invalid, and correct border color", () => {
    render(
      <Input
        value=""
        label="Label"
        errorText="Error message"
        helperText="Help"
      />
    )
    const input = screen.getByLabelText("Label")
    const contentContainer = input.parentElement
    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(input).toHaveAttribute("aria-describedby")
    expect(screen.getByText("Error message")).toBeInTheDocument()
    expect(screen.getByText("Error message")).toHaveClass("text-error")
    expect(contentContainer).toHaveClass("border-error")
  })

  it("renders successText with aria-describedby and correct border color", () => {
    render(
      <Input
        value=""
        label="Label"
        successText="Success message"
        helperText="Help"
      />
    )
    const input = screen.getByLabelText("Label")
    const contentContainer = input.parentElement
    expect(input).not.toHaveAttribute("aria-invalid", "true")
    expect(input).toHaveAttribute("aria-describedby")
    expect(screen.getByText("Success message")).toBeInTheDocument()
    expect(screen.getByText("Success message")).toHaveClass("text-success")
    expect(contentContainer).toHaveClass("border-success")
  })

  it("renders helperText with text-typography-secondary color when enabled", () => {
    render(
      <Input
        value=""
        label="Label"
        helperText="Help"
      />
    )
    const help = screen.getByText("Help")
    expect(help).toHaveClass("text-typography-secondary")
  })

  it("renders helperText with text-disabled color when disabled", () => {
    render(
      <Input
        value=""
        label="Label"
        helperText="Help"
        disabled
      />
    )
    const help = screen.getByText("Help")
    expect(help).toHaveClass("text-disabled")
  })

  it("should set aria-disabled and aria-readonly when disabled/readOnly", () => {
    render(
      <Input
        value=""
        label="Label"
        disabled
        readOnly
      />
    )
    const input = screen.getByLabelText("Label")
    expect(input).toHaveAttribute("aria-disabled", "true")
    expect(input).toHaveAttribute("aria-readonly", "true")
  })

  it("renders a textarea when multiline is true", () => {
    render(
      <Input
        value="test"
        label="Label"
        multiline
        rows={5}
      />
    )
    const textarea = screen.getByLabelText("Label")
    expect(textarea.tagName).toBe("TEXTAREA")
    expect(textarea).toHaveAttribute("rows", "5")
    expect(textarea).toHaveValue("test")
  })

  it("renders leftSection and rightSection", () => {
    render(
      <Input
        value=""
        label="Label"
        leftSection={<span data-testid="left">L</span>}
        rightSection={<span data-testid="right">R</span>}
      />
    )
    expect(screen.getByTestId("left")).toBeInTheDocument()
    expect(screen.getByTestId("right")).toBeInTheDocument()
  })

  it("applies custom className and inputClassName", () => {
    render(
      <Input
        value=""
        label="Label"
        className="custom-class"
        inputClassName="input-custom"
      />
    )
    const input = screen.getByLabelText("Label")
    expect(input).toHaveClass("input-custom")
    const inputRoot = screen.getByTestId("input-root")
    expect(inputRoot).toHaveClass("custom-class")
  })

  it("is not editable when readOnly", () => {
    render(
      <Input
        value="readonly"
        label="Label"
        readOnly
      />
    )
    const input = screen.getByLabelText("Label")
    expect(input).toHaveAttribute("readOnly")
  })

  it("is disabled when disabled", () => {
    render(
      <Input
        value="disabled"
        label="Label"
        disabled
      />
    )
    const input = screen.getByLabelText("Label")
    expect(input).toBeDisabled()
  })

  it("calls onChange with the new value and event when input changes", () => {
    const handleChange = vi.fn()
    render(
      <Input
        value=""
        label="Label"
        onChange={handleChange}
      />
    )
    const input = screen.getByLabelText("Label") as HTMLInputElement
    fireEvent.change(input, { target: { value: "abc" } })
    expect(handleChange).toHaveBeenCalledWith("abc", expect.anything())
  })

  it("applies w-full class to the content container when full is true", () => {
    render(
      <Input
        value=""
        label="Label"
        full
      />
    )
    const input = screen.getByLabelText("Label")
    const contentContainer = input.parentElement
    expect(contentContainer).toHaveClass("w-full")
  })
})
