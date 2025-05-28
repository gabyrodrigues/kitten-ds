import type { Meta, StoryObj } from "@storybook/react"

import Flex from "../Flex/Flex"
import { Icon } from "../Icon"
import Button from "./Button"

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Accessible button component for performing actions. Supports native and custom elements with proper ARIA roles, states, and keyboard interaction."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: "select" },
      options: [
        "items-start",
        "items-end",
        "items-end-safe",
        "items-center",
        "items-center-safe",
        "items-baseline",
        "items-baseline-last",
        "items-stretch"
      ],
      description: "Alignment of content inside button."
    },
    bgColor: {
      control: { type: "text" },
      description: "Background color of the button."
    },
    borderColor: {
      control: { type: "text" },
      description: "Border color of the button."
    },
    children: {
      control: { type: "text" },
      description: "The content of the button."
    },
    className: {
      control: { type: "text" },
      description: "Optional additional CSS classes to apply to the icon."
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "success", "gray"],
      description: "Color scheme of the button."
    },
    component: {
      control: { type: "text" },
      description: "The underlying element or component to render."
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled."
    },
    fontSize: {
      control: { type: "text" },
      description: "Font size of the button."
    },
    justify: {
      control: { type: "select" },
      options: [
        "justify-start",
        "justify-end",
        "justify-end-safe",
        "justify-center",
        "justify-center-safe",
        "justify-between",
        "justify-around",
        "justify-evenly",
        "justify-stretch",
        "justify-baseline",
        "justify-normal"
      ],
      description: "Justification of content inside button."
    },
    leftSection: {
      control: { type: "text" },
      description: "Content displayed on the left side of the button content."
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
      description: "Line height of the button."
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
      description: "Letter spacing of the button."
    },
    onClick: {
      action: "clicked",
      description: "Click event handler. Will not be called if the button is disabled."
    },
    radius: {
      control: { type: "text" },
      description: "Border radius of the button."
    },
    rightSection: {
      control: { type: "text" },
      description: "Content displayed on the left side of the button content."
    },
    textColor: {
      control: { type: "text" },
      description: "Text color of the button."
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "Text transform CSS property."
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "text"],
      description: "Style variant of the button."
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
      description: "Font weight of the button."
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
      description: "White-space CSS property."
    }
  },
  args: {
    variant: "filled",
    color: "primary",
    children: "Button",
    align: "items-center",
    justify: "justify-center",
    disabled: false,
    full: false,
    onClick: () => {
      console.info("Button clicked")
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

const ButtonTemplate = (args) => (
  <Flex
    gap="gap-4"
    wrap="flex-wrap"
  >
    <Button
      {...args}
      color="primary"
    />
    <Button
      {...args}
      color="secondary"
    />
    <Button
      {...args}
      color="error"
    />
    <Button
      {...args}
      color="success"
    />
    <Button
      {...args}
      color="gray"
    />
  </Flex>
)

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "Filled Button"
  },
  render: (args) => <ButtonTemplate {...args} />
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "primary",
    children: "Outlined Button"
  },
  render: (args) => <ButtonTemplate {...args} />
}

export const Text: Story = {
  args: {
    variant: "text",
    color: "primary",
    children: "Text Button"
  },
  render: (args) => <ButtonTemplate {...args} />
}
