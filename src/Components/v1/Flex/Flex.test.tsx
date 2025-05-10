import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Flex from "./Flex"

describe("Flex", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(<Flex>Hello, World!</Flex>)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("should be accessible when rendered as a semantic HTML element", async () => {
    const { container } = render(<Flex component="section">Content</Flex>)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("should be accessible with aria attributes", async () => {
    const { container } = render(
      <Flex
        // biome-ignore lint/a11y/useSemanticElements: testing
        role="region"
        aria-label="Test Region"
      >
        Accessible Content
      </Flex>
    )
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })
})
