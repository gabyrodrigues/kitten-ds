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

describe("Select clearable", () => {
  it("applies clearButtonProps iconClassName and className to the clear button", () => {
    render(
      <Select
        value="banana"
        clearable
        clearButtonProps={{
          iconClassName: "test-icon-class",
          className: "test-btn-class"
        }}
        options={["banana", "sushi"]}
        label="Testing"
      />
    )
    const clearBtn = screen.getByLabelText(/clear/i)
    // The iconClassName is applied to the icon inside the button
    expect(clearBtn.querySelector(".test-icon-class")).toBeInTheDocument()
    // The className is applied to the button itself
    expect(clearBtn).toHaveClass("test-btn-class")
  })

  it("calls onClear when clear button is clicked", () => {
    const handleClear = vi.fn()
    render(
      <Select
        value="banana"
        clearable
        onClear={handleClear}
        options={[{ value: "banana", label: "Banana" }]}
        label="Test"
      />
    )
    const clearBtn = screen.getByLabelText(/clear/i)
    fireEvent.click(clearBtn)
    expect(handleClear).toHaveBeenCalled()
  })

  it("calls handleClear on clear button keydown (space, enter, delete)", () => {
    const onClear = vi.fn()
    const { getByLabelText } = render(
      <Select
        clearable
        value="foo"
        options={["foo", "bar"]}
        onClear={onClear}
      />
    )
    const clearBtn = getByLabelText(/clear/i)

    // Space
    fireEvent.keyDown(clearBtn, { key: " " })
    expect(onClear).toHaveBeenCalledTimes(1)

    // Enter
    fireEvent.keyDown(clearBtn, { key: "Enter" })
    expect(onClear).toHaveBeenCalledTimes(2)

    // Delete
    fireEvent.keyDown(clearBtn, { key: "Delete" })
    expect(onClear).toHaveBeenCalledTimes(3)
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

  it("should clear selection when clear button is activated by keyboard", () => {
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
    clearBtn.focus()
    fireEvent.keyDown(clearBtn, { key: "Enter" })
    expect(screen.getByLabelText("Selecione um alimento")).toHaveValue("")
  })

  it("should not render clear button when clearable is false", () => {
    render(
      <Select
        value="banana"
        clearable={false}
        {...defaultProps}
      />
    )
    expect(screen.queryByLabelText(/clear/i)).not.toBeInTheDocument()
  })

  it("should clear all chips with clear button", () => {
    function WrapperMultiple() {
      const [value, setValue] = useState<OptionType[]>(["banana", "cupcake"])
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
    const clearBtn = screen.getByLabelText(/clear/i)
    fireEvent.click(clearBtn)
    expect(screen.queryByRole("button", { name: /Remove/ })).not.toBeInTheDocument()
  })
})
