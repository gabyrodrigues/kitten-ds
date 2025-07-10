import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Input from "./Input"

describe("Input", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Input
        value=""
        label="Label"
      />
    )
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })
  it("should have accessibility violations when neither label or aria-label are not passed", async () => {
    window.getComputedStyle = (() => ({
      getPropertyValue: () => ""
    })) as unknown as typeof window.getComputedStyle
    const { container } = render(<Input value="" />)
    const results = await axe(container)
    expect(results.violations.length).toBeGreaterThan(0)
  })
  it("should have no accessibility violations when label is not passed but aria-label is passed", async () => {
    const { container } = render(
      <Input
        value=""
        aria-label="my-test-input"
      />
    )
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })
})
