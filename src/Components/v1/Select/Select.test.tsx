import { fireEvent, render, screen } from "@testing-library/react"
import { useState } from "react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Select from "./Select"
import type { OptionType } from "./Select.types"

const defaultProps = {
  label: "Selecione um alimento",
  options: [
    { value: "banana", label: "Banana" },
    { value: "cupcake", label: "Cupcake" },
    { value: "mousse", label: "Mousse" },
    { value: "pizza", label: "Pizza" },
    { value: "sushi", label: "Sushi" }
  ] as { value: string | number; label: string }[]
}

describe("Select", () => {
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
    const input = screen.getByLabelText("Selecione um alimento")
    expect(input.id).toBeTruthy()
    const label = screen.getByText("Selecione um alimento")
    expect(label).toBeInTheDocument()
  })

  it("should select option with Enter and update value", () => {
    function Wrapper() {
      const [value, setValue] = useState<OptionType>("")
      return (
        <Select
          value={value}
          name="select-input"
          onChange={(newValue: OptionType) => setValue(newValue)}
          {...defaultProps}
        />
      )
    }
    render(<Wrapper />)
    const input = screen.getByLabelText("Selecione um alimento")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    const options = screen.getAllByRole("option")
    fireEvent.keyDown(options[0], { key: "Enter" })
    expect(input).toHaveValue("Banana")
  })

  it("should open listbox and focus first option with keyboard", () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    const listbox = screen.getByRole("listbox")
    expect(listbox).toBeVisible()
    const options = screen.getAllByRole("option")
    expect(options[0]).toHaveAttribute("aria-selected", "false")
  })

  it("should close listbox with Escape and return focus to input", () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    const inputContentWrapper = input.closest('[role="combobox"]')
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    const listbox = screen.getByRole("listbox")
    expect(listbox).toBeVisible()
    fireEvent.keyDown(document.activeElement || input, { key: "Escape" })
    expect(listbox).not.toBeVisible()
    expect(inputContentWrapper).toHaveFocus()
  })

  it("should update aria-expanded when listbox opens and closes", () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    const inputContentWrapper = input.closest('[role="combobox"]')
    expect(inputContentWrapper).toHaveAttribute("aria-expanded", "false")
    fireEvent.keyDown(input, { key: "ArrowDown" })
    expect(inputContentWrapper).toHaveAttribute("aria-expanded", "true")
    fireEvent.keyDown(document.activeElement || input, { key: "Escape" })
    expect(inputContentWrapper).toHaveAttribute("aria-expanded", "false")
  })

  it("should clear selection when clear button is clicked", () => {
    function Wrapper() {
      const [value, setValue] = useState<OptionType>("banana")
      return (
        <Select
          value={value}
          onChange={(newValue: OptionType) => setValue(newValue)}
          clearable
          {...defaultProps}
        />
      )
    }
    render(<Wrapper />)
    const clearBtn = screen.getByLabelText(/clear/i)
    fireEvent.click(clearBtn)
    expect(screen.getByLabelText("Selecione um alimento")).toHaveValue("")
  })

  it("should not open when disabled", () => {
    render(
      <Select
        value=""
        disabled
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    fireEvent.click(input)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
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

  it("should focus first and last option with Home and End keys", () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    const options = screen.getAllByRole("option")
    fireEvent.keyDown(options[0], { key: "End" })
    expect(options[options.length - 1]).toHaveAttribute("data-tabindex", "0")
    fireEvent.keyDown(options[options.length - 1], { key: "Home" })
    expect(options[0]).toHaveAttribute("data-tabindex", "0")
  })

  it("should navigate options with ArrowDown and ArrowUp", () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    const options = screen.getAllByRole("option")
    expect(options[0]).toHaveAttribute("data-tabindex", "0")
    fireEvent.keyDown(options[0], { key: "ArrowDown" })
    expect(options[1]).toHaveAttribute("data-tabindex", "0")
    fireEvent.keyDown(options[1], { key: "ArrowUp" })
    expect(options[0]).toHaveAttribute("data-tabindex", "0")
  })

  it("should add and remove chips with keyboard in multiple mode", () => {
    function WrapperMultiple() {
      const [value, setValue] = useState<OptionType[]>([])
      return (
        <Select
          multiple
          value={value}
          onChange={(newValue: OptionType[]) => setValue(newValue)}
          clearable
          {...defaultProps}
          label="Selecione seus alimentos favoritos"
        />
      )
    }
    render(<WrapperMultiple />)
    const input = screen.getByLabelText("Selecione seus alimentos favoritos")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    const options = screen.getAllByRole("option")
    fireEvent.keyDown(options[0], { key: "Enter" }) // select Banana
    const chipBtn = screen.getByRole("button", { name: "Remove Banana" })
    expect(chipBtn).toBeInTheDocument()
    // Remove chip with Backspace
    chipBtn.focus()
    fireEvent.keyDown(chipBtn, { key: "Delete" })
    expect(chipBtn).not.toBeInTheDocument()
  })
})
