import type { Meta, StoryObj } from "@storybook/react"
import Link from "./Link"

const meta: Meta<typeof Link> = {
  component: Link,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A styled anchor (`<a>`) component with Tailwind support and accessibility features like keyboard focus and proper disabled handling."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The content of the link."
    },
    disabled: {
      control: { type: "boolean" },
      description: "Specifies whether the link is disabled or not."
    },
    href: {
      control: { type: "text" },
      description: "Link target URL."
    },
    onClick: {
      action: "clicked",
      description: "The click event handler for the link."
    },
    target: {
      control: { type: "select" },
      options: ["_self", "_blank", "_parent", "_top"],
      description: "Target behavior for the link."
    },
    fontSize: {
      control: { type: "text" },
      description: "Option to control the Link font-size."
    },
    color: {
      control: { type: "text" },
      description: "The color for the Link component."
    },
    borderColor: {
      control: { type: "text" },
      description: "The bottom border color of the link."
    },
    weight: {
      control: { type: "select" },
      options: [
        "font-thin",
        "font-extralight",
        "font-light",
        "font-normal",
        "font-medium",
        "font-semibold",
        "font-bold",
        "font-extrabold",
        "font-black"
      ],
      description: "The font weight for the Link component."
    },
    whitespace: {
      control: { type: "select" },
      options: [
        "whitespace-normal",
        "whitespace-nowrap",
        "whitespace-pre",
        "whitespace-pre-line",
        "whitespace-pre-wrap",
        "whitespace-break-spaces"
      ],
      description: "Controls an element's white-space property."
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "Controls the transformation of link."
    },
    lineHeight: {
      control: { type: "select" },
      options: [
        "leading-none",
        "leading-tight",
        "leading-snug",
        "leading-normal",
        "leading-relaxed",
        "leading-loose"
      ],
      description: "The line height of the Link component."
    },
    letterSpacing: {
      control: { type: "select" },
      options: [
        "tracking-tighter",
        "tracking-tight",
        "tracking-normal",
        "tracking-wide",
        "tracking-wider",
        "tracking-widest"
      ],
      description: "The letter spacing of the Link component.."
    },
    className: {
      control: { type: "text" },
      description: "Optional additional CSS classes to apply to the Link."
    }
  },
  args: {
    children: "Link",
    target: "_blank",
    href: "https://www.google.com"
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Default Link",
    onClick: () => {
      console.info("Link clicked")
    }
  }
}
