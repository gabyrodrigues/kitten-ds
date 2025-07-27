import { fireEvent, render, screen } from "@testing-library/react"
import { useState } from "react"
import { axe } from "vitest-axe"
import Select from "../Select"
import type { OptionObject, OptionType } from "../Select.types"

const defaultProps = {
  label: "Selecione um alimento",
  options: [
    { value: "banana", label: "Banana" },
    { value: "cupcake", label: "Cupcake" },
    { value: "mousse", label: "Mousse" },
    { value: "pizza", label: "Pizza" },
    { value: "sushi", label: "Sushi" }
  ] as OptionObject[]
}

describe("Select accessibility", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const results = await axe(container)
    expect(results.violations).toEqual([])

    const input = screen.getByLabelText("Selecione um alimento")
    expect(input).toBeInTheDocument()
  })

  it("should associate input with label", () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText(defaultProps.label)
    expect(input.id).toBeTruthy()
    const label = screen.getByText(defaultProps.label)
    expect(label).toBeInTheDocument()
  })

  it("should show helper text and set aria-describedby", () => {
    render(
      <Select
        value=""
        helperText="Ajuda"
        {...defaultProps}
      />
    )
    expect(screen.getByText("Ajuda")).toBeInTheDocument()
    const input = screen.getByLabelText("Selecione um alimento")
    expect(input).toHaveAttribute("aria-describedby")
  })

  it("should accept custom ARIA props and set them on input", () => {
    render(
      <Select
        value=""
        aria-label="Custom label"
        aria-describedby="custom-desc"
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Custom label")
    expect(input).toHaveAttribute("aria-describedby", "custom-desc")
  })

  it("should show helper text and set aria-describedby", () => {
    render(
      <Select
        value=""
        helperText="Help"
        {...defaultProps}
      />
    )
    expect(screen.getByText("Help")).toBeInTheDocument()
    const input = screen.getByLabelText("Selecione um alimento")
    expect(input).toHaveAttribute("aria-describedby")
  })

  it("should show success text and set aria-describedby", () => {
    render(
      <Select
        value=""
        successText="Sucesso"
        {...defaultProps}
      />
    )
    expect(screen.getByText("Sucesso")).toBeInTheDocument()
    const input = screen.getByLabelText("Selecione um alimento")
    expect(input).toHaveAttribute("aria-describedby")
  })

  it("should show error text and set aria-describedby", () => {
    render(
      <Select
        value=""
        errorText="Erro"
        {...defaultProps}
      />
    )
    expect(screen.getByText("Erro")).toBeInTheDocument()
    const input = screen.getByLabelText("Selecione um alimento")
    expect(input).toHaveAttribute("aria-describedby")
  })

  it("should associate input with label", () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    expect(input.id).toBeTruthy()
    const label = screen.getByText("Selecione um alimento")
    expect(label).toBeInTheDocument()
  })

  it("shows notFoundLabel when no options match (OptionsList empty)", () => {
    function Wrapper() {
      const [value, setValue] = useState<OptionType>("")
      return (
        <Select
          value={value}
          onChange={(newValue: OptionType) => setValue(newValue)}
          autoComplete
          options={["banana", "sushi"]}
          notFoundLabel="No results found"
          label="Selecione um alimento"
        />
      )
    }
    render(<Wrapper />)
    const input = screen.getByLabelText("Selecione um alimento")
    fireEvent.change(input, { target: { value: "xyz" } })
    expect(screen.getByText("No results found")).toBeInTheDocument()
  })
})
