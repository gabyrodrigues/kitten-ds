import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import Select from "../Select"
import type { OptionObject } from "../Select.types"
import { getOptionsListPositionStyles } from "../Styles"

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

describe("Select positioning", () => {
  it("should open listbox above when space below is insufficient and autoPosition is true", async () => {
    window.innerHeight = 200 // Force limited space

    const selectRectMock = {
      top: 150,
      bottom: 180,
      height: 30,
      left: 0,
      right: 100,
      width: 100,
      x: 0,
      y: 150,
      // biome-ignore lint/suspicious/noEmptyBlockStatements: this is a mock
      // biome-ignore lint/style/useNamingConvention: this is a mock function
      toJSON: () => {}
    }

    const listboxRectMock = {
      top: 180,
      bottom: 280,
      height: 100,
      left: 0,
      right: 100,
      width: 100,
      x: 0,
      y: 180,
      // biome-ignore lint/suspicious/noEmptyBlockStatements: this is a mock
      // biome-ignore lint/style/useNamingConvention: this is a mock function
      toJSON: () => {}
    }

    // Fake the getBoundingClientRect before render
    const mockGetBoundingClientRect = vi.fn(() => selectRectMock)
    const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect
    Element.prototype.getBoundingClientRect = mockGetBoundingClientRect

    // Render the component
    render(
      <Select
        value=""
        autoPosition
        {...defaultProps}
        label="AutoPosition"
      />
    )

    const input = screen.getByLabelText("AutoPosition")

    // Open the listbox
    await act(() => {
      input.focus()
      fireEvent.keyDown(input, { key: "ArrowDown" })
    })

    // Update getBoundingClientRect for listbox
    screen.getByRole("listbox")
    mockGetBoundingClientRect.mockImplementation(
      (function () {
        let call = 0
        return () => {
          call++
          // First call = select, second call = listbox
          return call === 1 ? selectRectMock : listboxRectMock
        }
      })()
    )

    // Re-open to trigger the effect with new rects
    await act(() => {
      fireEvent.keyDown(input, { key: "Escape" }) // close
      fireEvent.keyDown(input, { key: "ArrowDown" }) // open again
    })

    const newListbox = screen.getByRole("listbox")

    await waitFor(() => {
      expect(newListbox).toBeInTheDocument()
      expect(newListbox.className).toMatch(/bottom-\[calc\(100%-1\.5rem\)\]/)
    })

    // Clean up the mock to avoid affecting other tests
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect
  })

  it("returns correct class when label and shouldOpenAbove is true", () => {
    expect(getOptionsListPositionStyles(true, true, "label")).toMatch(
      /bottom-\[calc\(100%-1\.5rem\)\]/
    )
  })

  it("returns correct class when no label and shouldOpenAbove is true", () => {
    expect(getOptionsListPositionStyles(true, true, "")).toMatch(/bottom-full/)
  })

  it("returns correct class when it has error message", () => {
    expect(getOptionsListPositionStyles(true, false, "", "error message")).toMatch(
      /top-\[calc\(100%-1\.75rem\)\]/
    )
  })

  it("returns correct class when it has 2 helper messages", () => {
    expect(
      getOptionsListPositionStyles(true, false, "", "error message", "helper message")
    ).toMatch(/top-\[calc\(100%-3rem\)\]/)
  })

  it("returns correct class when it has 3 helper messages", () => {
    expect(
      getOptionsListPositionStyles(
        true,
        false,
        "",
        "error message",
        "helper message",
        "success message"
      )
    ).toMatch(/top-\[calc\(100%-4\.375rem\)\]/)
  })
})
