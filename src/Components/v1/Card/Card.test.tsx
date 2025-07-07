import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Card from "./Card"

describe("Card", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(<Card>Card Text</Card>)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("renders with role=region by default", () => {
    render(<Card>content</Card>)
    const card = screen.getByRole("region")
    expect(card).toBeInTheDocument()
  })

  it("renders with role=button and tabIndex when onClick", () => {
    const handleClick = vi.fn()
    render(<Card onClick={handleClick}>content</Card>)
    const card = screen.getByRole("button")
    expect(card).toHaveAttribute("tabIndex", "0")
    fireEvent.click(card)
    expect(handleClick).toHaveBeenCalled()
  })

  it("is focusable and responds to keyboard", () => {
    const handleClick = vi.fn()
    render(<Card onClick={handleClick}>content</Card>)
    const card = screen.getByRole("button")
    card.focus()
    fireEvent.keyDown(card, { key: "Enter" })
    expect(handleClick).toHaveBeenCalled()
    fireEvent.keyDown(card, { key: " " })
    expect(handleClick).toHaveBeenCalledTimes(2)
  })

  it("sets aria-labelledby to the heading id when heading is a string", () => {
    render(<Card heading="Título">content</Card>)
    const card = screen.getByRole("region")
    const heading = screen.getByText("Título")
    expect(card).toHaveAttribute("aria-labelledby", heading.id)
  })

  it("sets aria-labelledby when heading is a React node", () => {
    const CUSTOM_HEADING = () => <span>Custom Heading</span>
    render(<Card heading={<CUSTOM_HEADING />}>content</Card>)
    const card = screen.getByRole("region")
    // Find the Flex with id starting with 'card-heading-'
    const flexHeading = screen
      .getByText("Custom Heading")
      .closest("[id^='card-heading-']") as Element
    expect(card).toHaveAttribute("aria-labelledby", flexHeading.id)
  })

  it("does not set aria-labelledby when heading is not present", () => {
    render(<Card>content</Card>)
    const card = screen.getByRole("region")
    expect(card).not.toHaveAttribute("aria-labelledby")
  })

  it("applies aria-busy when loading", () => {
    render(<Card isLoading>content</Card>)
    const card = screen.getByRole("region")
    expect(card).toHaveAttribute("aria-busy", "true")
  })

  it("is not clickable when disabled", () => {
    const handleClick = vi.fn()
    render(
      <Card
        onClick={handleClick}
        disabled
      >
        content
      </Card>
    )
    const card = screen.getByRole("region")
    expect(card).toHaveAttribute("aria-disabled", "true")
    fireEvent.click(card)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it("applies active styles and data-active when active is true and not loading/disabled", () => {
    render(<Card active>content</Card>)
    const card = screen.getByRole("region")
    expect(card).toHaveAttribute("data-active", "true")
    expect(card.className).toMatch(/bg-primary-highlight|border-primary/)
  })

  it("applies border classes when hasBorder is true", () => {
    render(<Card hasBorder>content</Card>)
    const card = screen.getByRole("region")
    expect(card.className).toMatch(/border border-default-border/)
  })

  it("does not apply active styles when loading", () => {
    render(
      <Card
        active
        isLoading
      >
        content
      </Card>
    )
    const loadingCard = screen.getByRole("region")
    expect(loadingCard.className).not.toMatch(/bg-primary-highlight|border-primary/)
  })

  it("does not apply active styles when disabled", () => {
    render(
      <Card
        active
        disabled
      >
        content
      </Card>
    )
    const disabledCard = screen.getByRole("region")
    expect(disabledCard.className).not.toMatch(/bg-primary-highlight|border-primary/)
  })

  it("renders footer as string inside Text", () => {
    render(<Card footer="Rodapé">content</Card>)
    expect(screen.getByText("Rodapé")).toBeInTheDocument()
  })

  it("renders footer as ReactNode", () => {
    render(<Card footer={<span data-testid="custom-footer">Custom Footer</span>}>content</Card>)
    expect(screen.getByTestId("custom-footer")).toBeInTheDocument()
  })
})
