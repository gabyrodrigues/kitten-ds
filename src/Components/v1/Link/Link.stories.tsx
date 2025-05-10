import type { Meta, StoryObj } from "@storybook/react"

import { Icon } from "../Icon"
import Link from "./Link"

const meta: Meta<typeof Link> = {
  component: Link,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible Link component that supports custom styling, polymorphic rendering, and accessibility features. It supports Tailwind utility classes for typography and layout, and allows rendering as any HTML element via the `component` prop."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The content of the button."
    },

    disabled: {
      control: { type: "boolean" },
      description: "Specifies whether the button is disabled or not."
    },
    onClick: {
      action: "clicked",
      description: "The click event handler for the button."
    },
    font_size: {
      control: { type: "text" },
      description: "Option to control the Link font-size."
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
      description: "The link font weight."
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
      description: "Controls white-space property."
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "Controls the Link text transformation."
    },
    line_height: {
      control: { type: "select" },
      options: [
        "leading-none",
        "leading-tight",
        "leading-snug",
        "leading-normal",
        "leading-relaxed",
        "leading-loose"
      ],
      description: "The line height of the Text component."
    },
    letter_spacing: {
      control: { type: "select" },
      options: [
        "tracking-tighter",
        "tracking-tight",
        "tracking-normal",
        "tracking-wide",
        "tracking-wider",
        "tracking-widest"
      ],
      description: "Controls the letter spacing of the Link text."
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
    children: "Default Link"
  }
}
