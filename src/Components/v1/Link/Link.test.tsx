import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Link from "./Link"

describe("Link", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(<Link href="https://www.google.com">Link Text</Link>)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it("should render with aria-disabled when disabled", () => {
    const { getByRole } = render(
      <Link
        href="https://example.com"
        disabled
      >
        Disabled Link
      </Link>
    )
    const link = getByRole("link")
    expect(link).toHaveAttribute("aria-disabled", "true")
  })

  it("should be focusable when not disabled", () => {
    const { getByRole } = render(<Link href="#">Focusable Link</Link>)
    const link = getByRole("link")

    link.focus()
    expect(link).toHaveFocus()
  })

  it("should not be focusable when disabled", () => {
    const { getByRole } = render(
      <Link
        href="#"
        disabled
      >
        Disabled
      </Link>
    )
    const link = getByRole("link")
    expect(link).toHaveAttribute("aria-disabled", "true")
  })

  it("should prevent default on click when disabled", () => {
    const handleClick = vi.fn()
    const { getByRole } = render(
      <Link
        href="#"
        onClick={handleClick}
        disabled
      >
        Disabled
      </Link>
    )

    getByRole("link").click()
    expect(handleClick).not.toHaveBeenCalled()
  })

  it("should activate the link on Enter key press", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(
      <Link
        href="#"
        onClick={handleClick}
      >
        Clickable Link
      </Link>
    )

    const link = screen.getByRole("link")
    await user.tab()
    expect(link).toHaveFocus()

    await user.keyboard("{Enter}")
    expect(handleClick).toHaveBeenCalled()
  })
})
