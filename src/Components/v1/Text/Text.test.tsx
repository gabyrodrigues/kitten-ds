import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Text from "./Text"

describe("Text", () => {
  it("uses default html <p> tag when no 'component' prop is provided", () => {
    render(<Text variant="body1">Default Text</Text>)
    const text = screen.getByText(/default text/i)
    expect(text.tagName).toBe("P")
  })

  it("defaults to body1 styles if no variant is provided", () => {
    render(<Text>Default Text</Text>)
    const text = screen.getByText(/Default text/i)
    expect(text).toHaveClass("text-body1")
  })

  it("uses custom component when 'component' prop is passed", () => {
    render(
      <Text
        variant="body2"
        component="span"
      >
        Hello, World!
      </Text>
    )
    const text = screen.getByText(/hello, world!/i)
    expect(text.tagName).toBe("SPAN")
  })

  it("uses custom variant classes when 'variant' prop is passed", () => {
    render(
      <Text
        variant="body2"
        component="span"
      >
        Hello, World!
      </Text>
    )
    const text = screen.getByText(/hello, world!/i)
    expect(text).toHaveClass("text-body2")
  })

  it("uses label tag when 'component' label is passed", () => {
    render(<Text component="label">Label</Text>)
    const text = screen.getByText(/label/i)
    expect(text.tagName).toBe("LABEL")
  })

  it("applies additional Tailwind classes from props", () => {
    render(
      <Text
        color="text-blue-500"
        font_size="text-3xl"
        className="border-red-500"
      >
        Styled Text
      </Text>
    )
    const text = screen.getByText(/styled text/i)
    expect(text).toHaveClass("border-red-500", "text-blue-500", "text-3xl")
  })

  it("renders JSX children correctly", () => {
    render(
      <Text>
        Normal JSX <span>Text</span>
      </Text>
    )
    const span = screen.getByText(/text/i)
    expect(span.tagName).toBe("SPAN")
  })

  it("renders HTML content safely when children is a string", () => {
    const raw_html = "this is a <b>html</b> text"
    render(<Text>{raw_html}</Text>)

    const bold_text = screen.getByText(/html/i)

    expect(bold_text).toBeInTheDocument()
    expect(bold_text.tagName).toBe("B")

    const text = screen.getByText(/this is a/i)
    expect(text).toBeInTheDocument()

    // Ensure that no raw HTML tag is visible in the DOM
    expect(screen.queryByText("<b>html</b>")).toBeNull()
  })

  it("should have no accessibility violations", async () => {
    const { container } = render(<Text>Hello, World!</Text>)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })
})
