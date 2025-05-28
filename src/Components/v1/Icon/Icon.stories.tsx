import type { Meta, StoryObj } from "@storybook/react"

import Icon from "./Icon"

const meta = {
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The icon component is used to represent visual indicators, such as labels or actions, and can be styled in various ways."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "text" },
      description:
        "Option to control the icon's color. This corresponds to Tailwind's `text-*` classes."
    },
    type: {
      control: { type: "text" },
      description:
        "The icon name to render. It corresponds to a Material Symbols icon name (e.g., 'home', 'search')."
    },
    fontSize: {
      control: { type: "text" },
      description: "Tailwind text size class to control the icon's size."
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled"],
      description:
        "Determines the visual variant of the icon. Either 'outlined' (hollow) or 'filled' (solid)."
    },
    weight: {
      control: { type: "select" },
      options: [400, 500, 700],
      description: "Font weight to apply when rendering the icon."
    },
    className: {
      control: { type: "text" },
      description: "Optional additional CSS classes to apply to the icon."
    }
  },
  args: {
    variant: "outlined",
    fontSize: "text-xl",
    weight: 400,
    color: "text-typography-primary",
    "aria-label": "Settings"
  }
} satisfies Meta<typeof Icon>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: "settings"
  }
}
