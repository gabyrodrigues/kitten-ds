import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"

import userEvent from "@testing-library/user-event"
import { Flex } from "../Flex"
import Checkbox from "./Checkbox"
import CheckboxGroup from "./CheckboxGroup"

describe("CheckboxGroup", () => {
  it("renders correctly with legend and checkboxes", async () => {
    const { container } = render(
      <CheckboxGroup label="Select foods">
        <Checkbox
          value="cupcake"
          label="Cupcake"
        />
        <Checkbox
          value="pizza"
          label="Pizza"
          checked
        />
      </CheckboxGroup>
    )

    const group = screen.getByRole("group")
    expect(group).toBeInTheDocument()
    expect(screen.getByText("Select foods")).toBeInTheDocument()

    const pizza = screen.getByRole("checkbox", { name: "Pizza" })
    expect(pizza).toBeChecked()

    const cupcake = screen.getByRole("checkbox", { name: "Cupcake" })
    expect(cupcake).not.toBeChecked()

    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("updates selection when clicked", () => {
    const handleChange = vi.fn()

    render(
      <CheckboxGroup label="Select food">
        <Checkbox
          value="cupcake"
          label="Cupcake"
          onChange={handleChange}
        />
        <Checkbox
          value="pizza"
          label="Pizza"
          onChange={handleChange}
        />
      </CheckboxGroup>
    )

    const pizza = screen.getByRole("checkbox", { name: "Pizza" })
    fireEvent.click(pizza)
    expect(handleChange).toHaveBeenCalled()
  })

  it("should navigate checkboxes with keyboard", async () => {
    const user = userEvent.setup()

    render(
      <CheckboxGroup label="Select foods">
        <Checkbox
          value="cupcake"
          label="Cupcake"
        />
        <Checkbox
          value="pizza"
          label="Pizza"
        />
        <Checkbox
          value="sushi"
          label="Sushi"
        />
      </CheckboxGroup>
    )

    const checkboxes = screen.getAllByRole("checkbox")
    expect(checkboxes.length).toBe(3)

    await user.tab() // focus first checkbox
    expect(checkboxes[0]).toHaveFocus()

    await user.keyboard("[Tab]")
    expect(checkboxes[1]).toHaveFocus()

    await user.keyboard("[Tab]")
    expect(checkboxes[2]).toHaveFocus()

    await user.tab({ shift: true })
    expect(checkboxes[1]).toHaveFocus()
  })

  it("renders disabled checkboxes and blocks onChange", () => {
    const handleChange = vi.fn()

    render(
      <CheckboxGroup label="Choose disabled food">
        <Checkbox
          value="cupcake"
          label="Cupcake"
          onChange={handleChange}
        />
        <Checkbox
          value="pizza"
          label="Pizza"
          disabled
          onChange={handleChange}
        />
      </CheckboxGroup>
    )

    const pizza = screen.getByRole("checkbox", { name: "Pizza" })
    expect(pizza).not.toBeDisabled()
    expect(pizza).toHaveAttribute("aria-disabled", "true")
    expect(pizza).toHaveAttribute("data-disabled", "true") // not natively disabled

    fireEvent.click(pizza)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it("renders helper, error and success text correctly in CheckboxGroup Checkbox", () => {
    render(
      <CheckboxGroup label="Select food">
        <Checkbox
          label="Cake"
          helperText="Helpful info"
          errorText="Error message"
          successText="Success message"
        />
      </CheckboxGroup>
    )

    expect(screen.getByText("Helpful info")).toBeInTheDocument()
    expect(screen.getByText("Error message")).toBeInTheDocument()
    expect(screen.getByText("Success message")).toBeInTheDocument()
  })

  it("applies custom classNames and colors to CheckboxGroup Checkbox", () => {
    render(
      <CheckboxGroup label="Select food">
        <Checkbox
          label="Cake"
          color="secondary"
          className="custom-class"
          inputClassName="input-class"
          labelClassName="label-class"
        />
      </CheckboxGroup>
    )

    expect(screen.getByRole("checkbox", { name: "Cake" })).toHaveClass("input-class")
    expect(screen.getByText("Cake").closest("label")).toHaveClass("label-class")
    expect(screen.getByRole("checkbox", { name: "Cake" }).parentElement?.parentElement).toHaveClass(
      "custom-class"
    )
  })

  it("flattens children inside React.Fragment", () => {
    render(
      <CheckboxGroup label="Fragment test">
        <>
          <Checkbox
            value="pizza"
            label="Pizza"
          />
          <Checkbox
            value="sushi"
            label="Sushi"
          />
        </>
      </CheckboxGroup>
    )

    expect(screen.getByRole("checkbox", { name: "Pizza" })).toBeInTheDocument()
    expect(screen.getByRole("checkbox", { name: "Sushi" })).toBeInTheDocument()
  })

  it("warns and ignores invalid children", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => null)

    render(
      <CheckboxGroup label="Invalid child test">
        <Checkbox
          value="pizza"
          label="Pizza"
        />
        <span>Invalid child</span>
      </CheckboxGroup>
    )

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "CheckboxGroup only accepts Checkbox, Flex, or div elements as children."
    )
    expect(screen.getByRole("checkbox", { name: "Pizza" })).toBeInTheDocument()
    expect(screen.queryByText("Invalid child")).toBeNull()

    consoleWarnSpy.mockRestore()
  })

  it("renders div and Flex children without warning", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => null)

    render(
      <CheckboxGroup label="Test">
        <Checkbox
          value="pizza"
          label="Pizza"
        />
        <div data-testid="div-child">Div Child</div>
        <Flex data-testid="flex-child">Flex Child</Flex>
      </CheckboxGroup>
    )

    expect(screen.getByRole("checkbox", { name: "Pizza" })).toBeInTheDocument()
    expect(screen.getByTestId("div-child")).toBeInTheDocument()
    expect(screen.getByTestId("flex-child")).toBeInTheDocument()
    expect(consoleWarnSpy).not.toHaveBeenCalled()

    consoleWarnSpy.mockRestore()
  })

  it("warns and ignores multiple invalid children", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => null)

    render(
      <CheckboxGroup label="Invalids">
        <Checkbox
          value="pizza"
          label="Pizza"
        />
        <span>Invalid 1</span>
        <section>Invalid 2</section>
        {"Just a string"}
        {42}
        {null}
        {false}
      </CheckboxGroup>
    )

    expect(consoleWarnSpy).toHaveBeenCalledTimes(4)
    expect(screen.getByRole("checkbox", { name: "Pizza" })).toBeInTheDocument()
    expect(screen.queryByText("Invalid 1")).toBeNull()
    expect(screen.queryByText("Invalid 2")).toBeNull()
    expect(screen.queryByText("Just a string")).toBeNull()
    expect(screen.queryByText("42")).toBeNull()
    expect(screen.queryByText("null")).toBeNull()
    expect(screen.queryByText("false")).toBeNull()

    consoleWarnSpy.mockRestore()
  })

  it("renders valid nested children and ignores invalid nested children", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => null)

    render(
      <CheckboxGroup label="Nested">
        <Flex>
          <Checkbox
            value="pizza"
            label="Pizza"
          />
          <span>Invalid Nested</span>
        </Flex>
      </CheckboxGroup>
    )

    expect(screen.getByRole("checkbox", { name: "Pizza" })).toBeInTheDocument()
    expect(consoleWarnSpy).not.toHaveBeenCalled()

    consoleWarnSpy.mockRestore()
  })

  it("renders CheckboxGroup helperText, errorText, and successText", () => {
    render(
      <CheckboxGroup
        label="Text test"
        helperText="Helper info"
        errorText="Error info"
        successText="Success info"
      >
        <Checkbox label="Pizza" />
      </CheckboxGroup>
    )

    expect(screen.getByText("Helper info")).toBeInTheDocument()
    expect(screen.getByText("Error info")).toBeInTheDocument()
    expect(screen.getByText("Success info")).toBeInTheDocument()
  })

  it("does not call onChange when disabled", () => {
    const onChange = vi.fn()

    render(
      <CheckboxGroup
        label="Disabled test"
        disabled
      >
        <Checkbox
          value="pizza"
          label="Pizza"
        />
      </CheckboxGroup>
    )

    const pizzaCheckbox = screen.getByRole("checkbox", { name: "Pizza" })

    fireEvent.click(pizzaCheckbox)

    expect(onChange).not.toHaveBeenCalled()
  })

  it("renders label with correct color depending on disabled", () => {
    const { rerender } = render(
      <CheckboxGroup
        label="Label test"
        disabled={false}
      >
        <Checkbox
          value="pizza"
          label="Pizza"
        />
      </CheckboxGroup>
    )

    const label = screen.getByText("Label test")
    expect(label).toHaveClass("text-typography-primary")

    rerender(
      <CheckboxGroup
        label="Label test"
        disabled
      >
        <Checkbox
          value="pizza"
          label="Pizza"
        />
      </CheckboxGroup>
    )

    expect(screen.getByText("Label test")).toHaveClass("text-typography-disabled")
  })

  it("renders CheckboxGroup helper, error and success text together", () => {
    render(
      <CheckboxGroup
        helperText="Helpful"
        errorText="Error"
        successText="Success"
      >
        <Checkbox
          value="pizza"
          label="Pizza"
        />
      </CheckboxGroup>
    )

    expect(screen.getByText("Helpful")).toBeInTheDocument()
    expect(screen.getByText("Error")).toBeInTheDocument()
    expect(screen.getByText("Success")).toBeInTheDocument()
  })

  it("disables only the disabled checkbox when group is enabled", () => {
    render(
      <CheckboxGroup>
        <Checkbox
          value="pizza"
          label="Pizza"
        />
        <Checkbox
          value="sushi"
          label="Sushi"
          disabled
        />
      </CheckboxGroup>
    )
    const pizza = screen.getByRole("checkbox", { name: "Pizza" })
    const sushi = screen.getByRole("checkbox", { name: "Sushi" })
    expect(pizza).toHaveAttribute("aria-disabled", "false")
    expect(pizza).toHaveAttribute("data-disabled", "false")
    expect(pizza).not.toBeDisabled()

    expect(sushi).toHaveAttribute("aria-disabled", "true")
    expect(sushi).toHaveAttribute("data-disabled", "true")
    expect(sushi).not.toBeDisabled()
  })

  it("renders defaultA11yLabel in a visually hidden legend when label is missing", () => {
    render(
      <CheckboxGroup>
        <Checkbox
          value="pizza"
          label="Pizza"
        />
      </CheckboxGroup>
    )

    const legend = screen.getByText("Checkbox Group")
    expect(legend).toBeInTheDocument()
    expect(legend).toHaveClass("sr-only")
  })

  it("renders custom defaultA11yLabel when provided and label is missing", () => {
    render(
      <CheckboxGroup defaultA11yLabel="Custom a11y label">
        <Checkbox
          value="pizza"
          label="Pizza"
        />
      </CheckboxGroup>
    )
    const legend = screen.getByText("Custom a11y label")
    expect(legend).toBeInTheDocument()
    expect(legend).toHaveClass("sr-only")
  })
})
