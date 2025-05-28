import type { Meta, StoryObj } from "@storybook/react"
import { IconButton } from "."
import Flex from "../Flex/Flex"

const meta = {
  component: IconButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An accessible icon-only button for triggering actions, customizable in style and size. Supports proper ARIA labels and keyboard interaction."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    ariaLabel: {
      control: { type: "text" },
      description: "Accessible label for screen readers. Describes the button's purpose."
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "gray"],
      description: "The color of the icon button."
    },
    className: {
      control: { type: "text" },
      description: "Optional additional CSS classes to apply to the icon button component.."
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled."
    },
    icon: {
      control: { type: "text" },
      description:
        "The icon name to render in the Icon Button Component. It matches a Material Symbols icon name."
    },
    iconClassName: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Icon."
    },
    iconVariant: {
      control: { type: "select" },
      options: ["filled", "outlined"],
      description: "Style variant of the icon inside the button."
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "default"],
      description: "Style variant of the icon button component."
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size variant of the icon button."
    }
  },
  args: {
    icon: "settings",
    iconVariant: "outlined",
    weight: 400,
    variant: "default",
    color: "gray",
    size: "large",
    ariaLabel: "Settings",
    onClick: () => {
      console.info("Icon Button clicked")
    }
  }
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

const IconButtonTemplate = (args) => (
  <Flex
    gap="gap-4"
    wrap="flex-wrap"
  >
    <IconButton
      {...args}
      color="primary"
    />
    <IconButton
      {...args}
      color="secondary"
    />
    <IconButton
      {...args}
      color="gray"
    />
  </Flex>
)

export const Default: Story = {
  args: {
    variant: "default",
    color: "primary"
  },
  render: (args) => <IconButtonTemplate {...args} />
}

export const Filled: Story = {
  args: {
    variant: "filled"
  },
  render: (args) => <IconButtonTemplate {...args} />
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "primary"
  },
  render: (args) => <IconButtonTemplate {...args} />
}
