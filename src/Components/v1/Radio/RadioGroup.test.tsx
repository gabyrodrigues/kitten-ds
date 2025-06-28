import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"

import userEvent from "@testing-library/user-event"
import Radio from "./Radio"
import RadioGroup from "./RadioGroup"

describe("RadioGroup", () => {
  it("renders correctly with legend and radios", async () => {
    const { container } = render(
      <RadioGroup
        label="Choose food"
        name="food"
        value="pizza"
      >
        <Radio
          value="cupcake"
          label="Cupcake"
        />
        <Radio
          value="pizza"
          label="Pizza"
        />
      </RadioGroup>
    )

    const group = screen.getByRole("group")
    expect(group).toBeInTheDocument()
    expect(screen.getByText("Choose food")).toBeInTheDocument()

    const pizza = screen.getByRole("radio", { name: "Pizza" })
    expect(pizza).toBeChecked()

    const cupcake = screen.getByRole("radio", { name: "Cupcake" })
    expect(cupcake).not.toBeChecked()

    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("updates selection when clicked", () => {
    const handleChange = vi.fn()

    render(
      <RadioGroup
        label="Select food"
        name="food"
        value="cupcake"
        onChange={handleChange}
      >
        <Radio
          value="cupcake"
          label="Cupcake"
        />
        <Radio
          value="pizza"
          label="Pizza"
        />
      </RadioGroup>
    )

    const pizza = screen.getByRole("radio", { name: "Pizza" })
    fireEvent.click(pizza)
    expect(handleChange).toHaveBeenCalled()
  })

  it("should navigate radios with keyboard", async () => {
    const user = userEvent.setup()

    render(
      <RadioGroup
        label="Choose food"
        name="food"
        value="cupcake"
      >
        <Radio
          value="cupcake"
          label="Cupcake"
        />
        <Radio
          value="pizza"
          label="Pizza"
        />
        <Radio
          value="sushi"
          label="Sushi"
        />
      </RadioGroup>
    )

    const radios = screen.getAllByRole("radio")
    expect(radios.length).toBe(3)

    await user.tab() // focus first radio
    expect(radios[0]).toHaveFocus()

    await user.keyboard("[ArrowDown]")
    expect(radios[1]).toHaveFocus()

    await user.keyboard("[ArrowDown]")
    expect(radios[2]).toHaveFocus()

    await user.keyboard("[ArrowUp]")
    expect(radios[1]).toHaveFocus()
  })

  it("renders disabled radios and blocks onChange", () => {
    const handleChange = vi.fn()

    render(
      <RadioGroup
        label="Choose disabled food"
        name="food"
        value="pizza"
        disabled
        onChange={handleChange}
      >
        <Radio
          value="cupcake"
          label="Cupcake"
        />
        <Radio
          value="pizza"
          label="Pizza"
        />
      </RadioGroup>
    )

    const pizza = screen.getByRole("radio", { name: "Pizza" })
    expect(pizza).not.toBeDisabled()
    expect(pizza).toHaveAttribute("aria-disabled", "true")
    expect(pizza).toHaveAttribute("data-disabled", "true") // not natively disabled

    fireEvent.click(pizza)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it("renders helper, error and success text correctly in RadioGroup Radio", () => {
    render(
      <RadioGroup
        label="Select food"
        name="food"
        value="cake"
      >
        <Radio
          value="cake"
          label="Cake"
          helperText="Helpful info"
          errorText="Error message"
          successText="Success message"
        />
      </RadioGroup>
    )

    expect(screen.getByText("Helpful info")).toBeInTheDocument()
    expect(screen.getByText("Error message")).toBeInTheDocument()
    expect(screen.getByText("Success message")).toBeInTheDocument()
  })

  it("applies custom classNames and colors to RadioGroup Radio", () => {
    render(
      <RadioGroup
        label="Select food"
        name="food"
        value="cake"
      >
        <Radio
          value="cake"
          label="Cake"
          color="secondary"
          className="custom-class"
          inputClassName="input-class"
          labelClassName="label-class"
        />
      </RadioGroup>
    )

    expect(screen.getByRole("radio", { name: "Cake" })).toHaveClass("input-class")
    expect(screen.getByText("Cake").closest("label")).toHaveClass("label-class")
    expect(screen.getByRole("radio", { name: "Cake" }).parentElement?.parentElement).toHaveClass(
      "custom-class"
    )
  })

  it("flattens children inside React.Fragment", () => {
    render(
      <RadioGroup
        label="Fragment test"
        name="food"
        value="pizza"
      >
        <>
          <Radio
            value="pizza"
            label="Pizza"
          />
          <Radio
            value="sushi"
            label="Sushi"
          />
        </>
      </RadioGroup>
    )

    expect(screen.getByRole("radio", { name: "Pizza" })).toBeInTheDocument()
    expect(screen.getByRole("radio", { name: "Sushi" })).toBeInTheDocument()
  })

  it("warns and ignores invalid children", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => null)

    render(
      <RadioGroup
        label="Invalid child test"
        name="food"
        value="pizza"
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
        <div>Invalid child</div>
        {"Just a string"}
        {42}
      </RadioGroup>
    )

    expect(consoleWarnSpy).toHaveBeenCalledTimes(3)
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "RadioGroup only accepts Radio components as children."
    )

    expect(screen.getByRole("radio", { name: "Pizza" })).toBeInTheDocument()

    expect(screen.queryByText("Invalid child")).toBeNull()
    expect(screen.queryByText("Just a string")).toBeNull()
    expect(screen.queryByText("42")).toBeNull()
    expect(screen.queryByText("null")).toBeNull()
    expect(screen.queryByText("false")).toBeNull()

    consoleWarnSpy.mockRestore()
  })

  it("does not call onChange when disabled", () => {
    const onChange = vi.fn()

    render(
      <RadioGroup
        label="Disabled test"
        name="food"
        value="pizza"
        onChange={onChange}
        disabled
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
      </RadioGroup>
    )

    const pizza = screen.getByRole("radio", { name: "Pizza" })

    fireEvent.click(pizza)

    expect(onChange).not.toHaveBeenCalled()

    expect(pizza).toHaveAttribute("aria-disabled", "true")
    expect(pizza).toHaveAttribute("data-disabled", "true")
  })

  it("renders label with correct color depending on disabled", () => {
    const { rerender } = render(
      <RadioGroup
        label="Label test"
        name="food"
        value="pizza"
        disabled={false}
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
      </RadioGroup>
    )

    const label = screen.getByText("Label test")
    expect(label).toHaveClass("text-typography-primary")

    rerender(
      <RadioGroup
        label="Label test"
        name="food"
        value="pizza"
        disabled
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
      </RadioGroup>
    )

    expect(screen.getByText("Label test")).toHaveClass("text-typography-disabled")
  })

  it("renders RadioGroup helper, error and success text together", () => {
    render(
      <RadioGroup
        name="food"
        value="pizza"
        helperText="Helpful"
        errorText="Error"
        successText="Success"
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
      </RadioGroup>
    )

    expect(screen.getByText("Helpful")).toBeInTheDocument()
    expect(screen.getByText("Error")).toBeInTheDocument()
    expect(screen.getByText("Success")).toBeInTheDocument()
  })

  it("disables only the disabled radio when group is enabled", () => {
    render(
      <RadioGroup
        name="food"
        value="pizza"
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
        <Radio
          value="sushi"
          label="Sushi"
          disabled
        />
      </RadioGroup>
    )
    const pizza = screen.getByRole("radio", { name: "Pizza" })
    const sushi = screen.getByRole("radio", { name: "Sushi" })
    expect(pizza).toHaveAttribute("aria-disabled", "false")
    expect(pizza).toHaveAttribute("data-disabled", "false")
    expect(pizza).not.toBeDisabled()

    expect(sushi).toHaveAttribute("aria-disabled", "true")
    expect(sushi).toHaveAttribute("data-disabled", "true")
    expect(sushi).not.toBeDisabled()
  })

  it("renders defaultA11yLabel in a visually hidden legend when label is missing", () => {
    render(
      <RadioGroup
        name="food"
        value="pizza"
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
        <Radio
          value="sushi"
          label="Sushi"
          disabled
        />
      </RadioGroup>
    )

    const legend = screen.getByText("Radio Group")
    expect(legend).toBeInTheDocument()
    expect(legend).toHaveClass("sr-only")
  })

  it("renders custom defaultA11yLabel when provided and label is missing", () => {
    render(
      <RadioGroup
        name="food"
        value="pizza"
        defaultA11yLabel="Custom a11y label"
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
        <Radio
          value="sushi"
          label="Sushi"
          disabled
        />
      </RadioGroup>
    )
    const legend = screen.getByText("Custom a11y label")
    expect(legend).toBeInTheDocument()
    expect(legend).toHaveClass("sr-only")
  })

  it("shows asterisk only when withAsterisk and required are true", () => {
    const { rerender } = render(
      <RadioGroup
        name="food"
        value="pizza"
        required
        withAsterisk
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
        <Radio
          value="sushi"
          label="Sushi"
        />
      </RadioGroup>
    )
    expect(screen.getByText("*")).toBeInTheDocument()

    rerender(
      <RadioGroup
        name="food"
        value="pizza"
        required
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
        <Radio
          value="sushi"
          label="Sushi"
        />
      </RadioGroup>
    )
    expect(screen.queryByText("*")).not.toBeInTheDocument()
  })

  it("ignores children required props if RadioGroup required is true", () => {
    render(
      <RadioGroup
        name="food"
        value="pizza"
        required
      >
        <Radio
          value="pizza"
          label="Pizza"
        />
        <Radio
          value="sushi"
          label="Sushi"
          required={false}
        />
      </RadioGroup>
    )
    const radios = screen.getAllByRole("radio")
    expect(radios[0]).toBeRequired()
    expect(radios[1]).toBeRequired()
  })
})
