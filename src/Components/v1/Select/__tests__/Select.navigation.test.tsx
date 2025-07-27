import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { useState } from "react"
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

describe("Select keyboard navigation", () => {
  it("should select option with Enter and space and update value", () => {
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

  it("should select option with Space and space and update value", () => {
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
    fireEvent.keyDown(options[0], { key: " " })
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

  it("should wrap focus with ArrowUp/ArrowDown", () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    let options = screen.getAllByRole("option")
    // ArrowUp on first should wrap to last
    fireEvent.keyDown(options[0], { key: "ArrowUp" })
    options = screen.getAllByRole("option")
    expect(options[options.length - 1]).toHaveAttribute("data-tabindex", "0")
    // ArrowDown on last should wrap to first
    fireEvent.keyDown(options[options.length - 1], { key: "ArrowDown" })
    options = screen.getAllByRole("option")
    expect(options[0]).toHaveAttribute("data-tabindex", "0")
  })

  it("should keep focus on input when Tab is pressed", () => {
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
    fireEvent.keyDown(input, { key: "Tab" })
    expect(input).toHaveFocus()
  })

  it("should close listbox on focusout and Escape key", () => {
    render(
      <Select
        value=""
        {...defaultProps}
        label="Focusout/Escape"
      />
    )
    const input = screen.getByLabelText("Focusout/Escape")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    const listbox = screen.getByRole("listbox")
    expect(listbox).toBeInTheDocument()

    // Simulate focusout (blur to outside)
    fireEvent.blur(input, { relatedTarget: document.body })
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()

    // Open again
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    expect(screen.getByRole("listbox")).toBeInTheDocument()

    // Simulate Escape key
    fireEvent.keyDown(document.activeElement || input, { key: "Escape" })
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    // check focus is on combobox wrapper
    const combobox = input.closest('[role="combobox"]')
    expect(combobox).toHaveFocus()
  })

  it("should close listbox when clicking outside (handleClickOutside)", () => {
    render(
      <Select
        value=""
        {...defaultProps}
        label="OutsideClick"
      />
    )
    const input = screen.getByLabelText("OutsideClick")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    expect(screen.getByRole("listbox")).toBeInTheDocument()

    // Simulate click outside
    fireEvent.pointerDown(document.body)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })

  it("should close listbox and return focus to combobox when Escape is pressed on an option", () => {
    render(
      <Select
        value=""
        {...defaultProps}
        label="EscapeOption"
      />
    )
    const input = screen.getByLabelText("EscapeOption")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    const options = screen.getAllByRole("option")
    options[0].focus()
    fireEvent.keyDown(options[0], { key: "Escape" })
    // The listbox should be closed
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    // The combobox wrapper should have focus
    const combobox = input.closest('[role="combobox"]')
    expect(combobox).toHaveFocus()
  })

  it("wraps focus to last option with ArrowUp on first, and moves to previous option with ArrowUp", async () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    let options = screen.getAllByRole("option")
    // ArrowUp on first option: should wrap to last
    fireEvent.keyDown(options[0], { key: "ArrowUp" })
    await waitFor(() => {
      options = screen.getAllByRole("option")
      expect(options[options.length - 1]).toHaveAttribute("data-tabindex", "0")
    })
    // ArrowUp on last option: should move to previous
    fireEvent.keyDown(options[options.length - 1], { key: "ArrowUp" })
    await waitFor(() => {
      options = screen.getAllByRole("option")
      expect(options[options.length - 2]).toHaveAttribute("data-tabindex", "0")
    })
  })

  it("wraps focus to first option with ArrowDown on last, and moves to next option with ArrowDown", async () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    input.focus()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    let options = screen.getAllByRole("option")

    // ArrowDown on first option: should wrap to second
    fireEvent.keyDown(options[0], { key: "ArrowDown" })
    await waitFor(() => {
      options = screen.getAllByRole("option")
      expect(options[1]).toHaveAttribute("data-tabindex", "0")
    })

    // ArrowDown on last option: should move to first
    for (let i = 1; i < options.length; i++) {
      fireEvent.keyDown(options[i], { key: "ArrowDown" })
      await waitFor(() => {
        options = screen.getAllByRole("option")
        expect(options[(i + 1) % options.length]).toHaveAttribute("data-tabindex", "0")
      })
    }
  })

  it("toggles the listbox when input is clicked", () => {
    render(
      <Select
        value=""
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    // First click: open
    fireEvent.click(input)
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    // Second click: close
    fireEvent.click(input)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })
})
