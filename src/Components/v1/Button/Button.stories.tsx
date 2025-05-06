import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Buttons are used to perform actions and make decisions. They can be used on pages and also within other components."
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
    class_name: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Button component."
    },
    type: {
      control: { type: "select" },
      options: ["submit", "button"],
      description: "The type of the button."
    }
  },
  args: {
    children: "Button",
    disabled: false
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Default Button",
    class_name: "text-blue-900 font-bold border rounded-lg p-4"
  }
}
