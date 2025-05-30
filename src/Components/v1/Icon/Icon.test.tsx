import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Icon from "./Icon"

describe("Icon", () => {
  it("renders with minimal props", () => {
    render(<Icon type="person" />)
    expect(screen.getByText("person")).toBeInTheDocument()
  })

  it("falls back to default class when variant is missing", () => {
    render(
      <Icon
        type="alert"
        weight={500}
      />
    )
    const icon = screen.getByText("alert")
    expect(icon).toHaveClass("icon-outlined-weight-500")
  })

  it("applies the correct Tailwind classes based on props", () => {
    render(
      <Icon
        type="person"
        color="text-red-500"
        fontSize="text-xl"
        weight={700}
      />
    )

    const icon = screen.getByText("person")
    expect(icon).toHaveClass("text-red-500", "text-xl", "icon-outlined-weight-700")
  })

  it("applies correct font weight classes for different font weights", () => {
    render(
      <Icon
        type="check"
        weight={500}
      />
    )
    const icon = screen.getByText("check")
    expect(icon).toHaveClass("icon-outlined-weight-500")
  })

  it("should have no accessibility violations", async () => {
    const { container } = render(<Icon type="home" />)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("applies correct aria-label and role attributes for screen reader accessibility", () => {
    render(
      <Icon
        type="search"
        aria-label="Search icon"
      />
    )
    const icon = screen.getByLabelText("Search icon")
    expect(icon).toHaveAttribute("role", "img")
    expect(icon).toHaveAttribute("aria-label", "Search icon")
  })

  it("applies aria-hidden when no aria-label is provided", () => {
    render(<Icon type="home" />)
    const icon = screen.getByText("home")
    expect(icon).toHaveAttribute("aria-hidden", "true")
  })
})
