import { fireEvent, render, screen } from "@testing-library/react"
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

describe("Select", () => {
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

  it("should not open or allow changes when readOnly", () => {
    render(
      <Select
        value=""
        readOnly
        {...defaultProps}
      />
    )
    const input = screen.getByLabelText("Selecione um alimento")
    fireEvent.click(input)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    fireEvent.keyDown(input, { key: "ArrowDown" })
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })

  it("should update when options prop changes asynchronously", async () => {
    function WrapperAsync() {
      const [options, setOptions] = useState(defaultProps.options)
      return (
        <>
          <button
            type="button"
            onClick={() => setOptions([{ value: "kiwi", label: "Kiwi" }])}
          >
            Change
          </button>
          <Select
            value=""
            {...defaultProps}
            options={options}
          />
        </>
      )
    }
    render(<WrapperAsync />)
    const input = screen.getByLabelText("Selecione um alimento")
    fireEvent.keyDown(input, { key: "ArrowDown" })
    expect(screen.getAllByRole("option").length).toBe(defaultProps.options.length)
    fireEvent.click(screen.getByText("Change"))
    fireEvent.keyDown(input, { key: "ArrowDown" })
    expect(screen.getAllByRole("option").length).toBe(1)
    expect(screen.getByText("Kiwi")).toBeInTheDocument()
  })

  it("should update when value changes asynchronously", async () => {
    function WrapperAsync() {
      const [value, setValue] = useState<OptionType>("")
      return (
        <>
          <button
            type="button"
            onClick={() => setValue("sushi")}
          >
            Change
          </button>
          <Select
            {...defaultProps}
            value={value}
          />
        </>
      )
    }
    render(<WrapperAsync />)
    const input = screen.getByLabelText("Selecione um alimento")
    fireEvent.click(screen.getByText("Change"))
    expect(input).toHaveValue("Sushi")
  })

  it("should update searchQuery when selectedLabel changes in single-select autocomplete", () => {
    function Wrapper() {
      const [value, setValue] = useState<OptionType>("banana")
      return (
        <>
          <button
            type="button"
            onClick={() => setValue("sushi")}
          >
            Change
          </button>
          <Select
            value={value}
            onChange={(newValue: OptionType) => setValue(newValue)}
            autoComplete
            {...defaultProps}
            label="Autocomplete"
          />
        </>
      )
    }
    render(<Wrapper />)
    const input = screen.getByLabelText("Autocomplete")
    expect(input).toHaveValue("Banana")
    fireEvent.click(screen.getByText("Change"))
    expect(input).toHaveValue("Sushi")
  })

  it("calls onChangeInput and updates search state when input changes (autoComplete)", () => {
    const handleChangeInput = vi.fn()
    function Wrapper() {
      const [value, setValue] = useState<OptionType>("")
      return (
        <Select
          value={value}
          onChange={(newValue: OptionType) => setValue(newValue)}
          onChangeInput={handleChangeInput}
          autoComplete
          options={["banana", "sushi"]}
          label="Test"
        />
      )
    }
    render(<Wrapper />)
    const input = screen.getByLabelText("Test")
    fireEvent.change(input, { target: { value: "ban" } })
    expect(handleChangeInput).toHaveBeenCalledWith("ban", expect.anything())
    // Optionally, check that the listbox opens (setIsListOpen)
    expect(screen.getByRole("listbox")).toBeInTheDocument()
  })

  it("wraps a primitive option as an object with value and string label when selected", () => {
    const options = ["banana", "sushi"]
    const handleChange = vi.fn()
    function Wrapper() {
      const [value, setValue] = useState<OptionType>("")
      return (
        <Select
          value={value}
          autoPosition
          {...defaultProps}
          label="PrimitiveSelect"
          onChange={(newValue: OptionType) => {
            setValue(newValue)
            handleChange(newValue)
          }}
          options={options}
        />
      )
    }
    render(<Wrapper />)
    const input = screen.getByLabelText("PrimitiveSelect")
    fireEvent.click(input)
    const option = screen.getByText("banana")
    fireEvent.click(option)
    // handleChange should be called with "banana" (the value)
    expect(handleChange).toHaveBeenCalledWith("banana")
    // The input value should be "banana" (the label)
    expect(input).toHaveValue("banana")
  })

  it("applies w full when full is true and w fit when false, and merges custom className", () => {
    // full = true
    const { rerender, container } = render(
      <Select
        value=""
        {...defaultProps}
        full
        className="custom-class"
      />
    )
    // The root div is the first child
    const root = container.firstChild
    expect(root).toHaveClass("w-full")
    expect(root).toHaveClass("custom-class")
    expect(root).not.toHaveClass("w-fit")

    // full = false
    rerender(
      <Select
        value=""
        {...defaultProps}
        full={false}
        className="custom-class"
      />
    )
    expect(root).toHaveClass("w-fit")
    expect(root).toHaveClass("custom-class")
    expect(root).not.toHaveClass("w-full")
  })
})
