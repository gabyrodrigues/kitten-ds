import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Grid from "./Grid"

describe("Grid", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(<Grid>Item</Grid>)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("should be accessible when rendered as a semantic HTML element", async () => {
    const { container } = render(<Grid component="section">Content</Grid>)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("should be accessible with aria attributes", async () => {
    const { container } = render(
      <Grid
        // biome-ignore lint/a11y/useSemanticElements: testing
        role="region"
        aria-label="Test Region"
      >
        Accessible Content
      </Grid>
    )
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })
})
