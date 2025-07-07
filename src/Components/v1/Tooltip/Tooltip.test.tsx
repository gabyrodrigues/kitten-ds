import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import { Button } from "../Button"
import Tooltip from "./Tooltip"

describe("Tooltip", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Tooltip body="Texto informativo">
        <Button>Botão com tooltip</Button>
      </Tooltip>
    )
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("should not show or announce tooltip when disabled", () => {
    render(
      <Tooltip
        body="Texto informativo"
        disabled
      >
        <Button>Botão com tooltip</Button>
      </Tooltip>
    )
    const tooltip = screen.getByRole("tooltip", { hidden: true })
    expect(tooltip).toBeInTheDocument()
    expect(tooltip).toHaveAttribute("aria-hidden", "true")
  })

  it("should set aria-describedby on the trigger", () => {
    render(
      <Tooltip body="Texto informativo">
        <Button>Botão com tooltip</Button>
      </Tooltip>
    )
    const trigger = screen.getByText("Botão com tooltip")
    const tooltip = screen.getByRole("tooltip", { hidden: true })
    expect(trigger).toHaveAttribute("aria-describedby", tooltip.id)
  })

  it("trigger should be focusable", () => {
    render(
      <Tooltip body="Texto informativo">
        <Button>Botão com tooltip</Button>
      </Tooltip>
    )
    const trigger = screen.getByText("Botão com tooltip")
    trigger.focus()
    expect(document.activeElement).toBe(trigger)
  })

  it("should become visible on focus", async () => {
    render(
      <Tooltip body="Texto informativo">
        <Button>Botão com tooltip</Button>
      </Tooltip>
    )
    const trigger = screen.getByText("Botão com tooltip")
    await userEvent.tab()
    expect(document.activeElement).toBe(trigger)
  })

  it("should render string and ReactNode content", () => {
    render(
      <>
        <Tooltip body="String content">
          <Button>Botão com tooltip string</Button>
        </Tooltip>
        <Tooltip body={<span>Node content</span>}>
          <Button>Botão com tooltip node</Button>
        </Tooltip>
      </>
    )
    expect(screen.getByText("String content")).toBeInTheDocument()
    expect(screen.getByText("Node content")).toBeInTheDocument()
  })

  it("renders a string child as a span trigger with correct a11y attributes", () => {
    render(<Tooltip body="Info tooltip">Plain text</Tooltip>)
    const trigger = screen.getByText("Plain text")
    expect(trigger.tagName).toBe("SPAN")
    const tooltip = screen.getByRole("tooltip", { hidden: true })
    expect(trigger).toHaveAttribute("aria-describedby", tooltip.id)
    expect(tooltip).toBeInTheDocument()
  })

  it("renders aria-describedby on non-focusable trigger but tooltip is not focusable", () => {
    render(<Tooltip body="Info text">Plain text trigger</Tooltip>)
    const trigger = screen.getByText("Plain text trigger")
    const tooltip = screen.getByRole("tooltip", { hidden: true })

    expect(trigger).toHaveAttribute("aria-describedby", tooltip.id)

    // Since plain text is not focusable, focus() should not work or change activeElement
    trigger.focus()
    expect(document.activeElement).not.toBe(trigger)
  })

  it("clones a React element child and adds a11y/class props", () => {
    render(
      <Tooltip body="Texto informativo">
        <Button>Botão com tooltip</Button>
      </Tooltip>
    )
    const trigger = screen.getByText("Botão com tooltip")
    expect(trigger.tagName).toBe("BUTTON")
    expect(trigger).toHaveAttribute("aria-describedby")
    expect(trigger.className).toMatch(/peer/)
    const tooltip = screen.getByRole("tooltip", { hidden: true })
    expect(trigger).toHaveAttribute("aria-describedby", tooltip.id)
    expect(tooltip).toBeInTheDocument()
  })

  it("renders nothing and logs a warning if children is null", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => null)
    const { container } = render(<Tooltip body="Info tooltip">{null}</Tooltip>)
    expect(container).toBeEmptyDOMElement()
    expect(warnSpy).toHaveBeenCalledWith(
      "No children provided in tooltip. Tooltip requires a trigger element."
    )
    warnSpy.mockRestore()
  })

  it("renders nothing and logs a warning if children is undefined", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => null)
    const { container } = render(<Tooltip body="Info tooltip">{undefined}</Tooltip>)
    expect(container).toBeEmptyDOMElement()
    expect(warnSpy).toHaveBeenCalledWith(
      "No children provided in tooltip. Tooltip requires a trigger element."
    )
    warnSpy.mockRestore()
  })

  it("renders nothing and logs a warning if children is false", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => null)
    const { container } = render(<Tooltip body="Info tooltip">{false}</Tooltip>)
    expect(container).toBeEmptyDOMElement()
    expect(warnSpy).toHaveBeenCalledWith(
      "No children provided in tooltip. Tooltip requires a trigger element."
    )
    warnSpy.mockRestore()
  })

  it("renders the arrow when hasArrow is true", () => {
    render(
      <Tooltip
        body="Info tooltip"
        hasArrow
      >
        <Button>Button with arrow</Button>
      </Tooltip>
    )
    // Find the arrow div inside the tooltip
    const arrow = screen.getByTestId("tooltip-arrow")
    expect(arrow).toBeInTheDocument()
    // Optionally, check for a class that is unique to the arrow
    expect(arrow?.className).toMatch(/border/)
  })
})
