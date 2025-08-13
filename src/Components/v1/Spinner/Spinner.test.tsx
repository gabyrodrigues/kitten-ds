import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Spinner from "./Spinner"

const colors = ["primary", "secondary", "neutral", "disabled"] as const

describe("Spinner", () => {
  it("renders with all color combinations and passes a11y", async () => {
    for (const color of colors) {
      const { container, unmount } = render(
        <Spinner
          color={color}
          aria-label={`Spinner ${color}`}
        >
          {color}
        </Spinner>
      )

      const spinner = screen.getByRole("status", {
        name: `Spinner ${color}`
      })

      expect(spinner).toBeInTheDocument()

      const results = await axe(container)
      expect(results.violations).toEqual([])

      unmount()
    }
  })

  it("renders with role status", () => {
    render(<Spinner />)
    const spinner = screen.getByRole("status")
    expect(spinner).toBeInTheDocument()
  })

  it("accepts and applies custom aria-label", () => {
    render(<Spinner aria-label="Loading data" />)
    expect(screen.getByRole("status", { name: "Loading data" })).toBeInTheDocument()
  })

  it("passes through custom props", () => {
    render(
      <Spinner
        data-testid="my-spinner"
        data-foo="bar"
      />
    )
    const spinner = screen.getByTestId("my-spinner")
    expect(spinner).toHaveAttribute("data-foo", "bar")
  })
})
