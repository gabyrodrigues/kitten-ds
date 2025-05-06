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
    color_disabled: {
      control: { type: "text" },
      description:
        "Tailwind text color class applied when `disabled` is true. This corresponds to Tailwind's `text-*` classes."
    },
    type: {
      control: { type: "text" },
      description:
        "The icon name to render. Usually corresponds to a Material Symbols icon name (e.g., 'home', 'search')."
    },
    font_size: {
      control: { type: "text" },
      description: "Tailwind text size class to control the icon's size."
    },
    disabled: {
      control: { type: "boolean" },
      options: [true, false],
      description: "If true, applies the disabled state to the icon."
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled"],
      description:
        "Determines the visual variant of the icon. Either 'outlined' (hollow) or 'filled' (solid)."
    },
    font_weight: {
      control: { type: "select" },
      options: [400, 500, 700],
      description: "Font weight to apply when rendering the icon."
    },
    class_name: {
      control: { type: "text" },
      description: "Optional additional CSS classes to apply to the icon."
    }
  },
  args: {
    variant: "outlined",
    font_size: "text-xl",
    font_weight: 400,
    color: "text-typography-primary",
    color_disabled: "text-typography-disabled",
    disabled: false
  }
} satisfies Meta<typeof Icon>
export default meta

type Story = StoryObj<typeof meta>

export const Enable: Story = {
  args: {
    type: "person"
  }
}

export const Disable: Story = {
  args: {
    type: "person",
    disabled: true
  }
}
