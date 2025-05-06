import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Icon from "./Icon"

describe("Icon", () => {
  it("renders with minimal props", () => {
    render(<Icon type="person" />)
    expect(screen.getByText("person")).toBeInTheDocument()
  })
})
