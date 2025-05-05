import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Button from "./Button"

describe("Button", () => {
  it("renders correctly and is accessible", async () => {
    const { container } = render(<Button aria-label="Click me">Submit</Button>)

    // check the button is in the document
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()

    // a11y test using axe
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })
})
