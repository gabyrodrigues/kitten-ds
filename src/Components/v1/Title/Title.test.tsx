import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Title from "./Title"

describe("Title", () => {
  it("uses default html tag when no 'component' prop is provided", () => {
    render(<Title variant="h2">Default Title</Title>)
    const heading = screen.getByRole("heading", { name: /default title/i })
    expect(heading.tagName).toBe("H2")
  })

  it("defaults to h1 if no variant is provided", () => {
    render(<Title>Default Title</Title>)
    const heading = screen.getByRole("heading", { name: /default title/i })
    expect(heading.tagName).toBe("H1")
  })

  it("renders correct HTML element based on variant", () => {
    render(<Title variant="h2">Subheading</Title>)
    const heading = screen.getByRole("heading", { name: /subheading/i })
    expect(heading.tagName).toBe("H2")
  })

  it("uses custom component when 'component' prop is passed", () => {
    render(
      <Title
        variant="h2"
        component="h1"
      >
        Hello, World!
      </Title>
    )
    const heading = screen.getByText(/hello, world!/i)
    expect(heading.tagName).toBe("H1")
  })

  it("uses h1 tag for display1 variant", () => {
    render(<Title variant="display1">Display Variant</Title>)
    const heading = screen.getByRole("heading", { name: /display variant/i })
    expect(heading.tagName).toBe("H1")
  })

  it("applies additional Tailwind classes from props", () => {
    render(
      <Title
        color="text-blue-500"
        font_size="text-3xl"
        className="border-red-500"
      >
        Styled Title
      </Title>
    )
    const heading = screen.getByText(/styled title/i)
    expect(heading).toHaveClass("border-red-500", "text-blue-500", "text-3xl")
  })

  it("renders JSX children correctly", () => {
    render(
      <Title>
        Normal JSX <span>Text</span>
      </Title>
    )
    const span = screen.getByText(/text/i)
    expect(span.tagName).toBe("SPAN")
  })

  it("renders HTML content safely when children is a string", () => {
    const raw_html = "this is a <b>html</b> text"
    render(<Title>{raw_html}</Title>)

    const bold_text = screen.getByText(/html/i)

    expect(bold_text).toBeInTheDocument()
    expect(bold_text.tagName).toBe("B")

    const text = screen.getByText(/this is a/i)
    expect(text).toBeInTheDocument()

    // Ensure that no raw HTML tag is visible in the DOM
    expect(screen.queryByText("<b>html</b>")).toBeNull()
  })

  it("should have no accessibility violations", async () => {
    const { container } = render(<Title>Hello, World!</Title>)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })
})
