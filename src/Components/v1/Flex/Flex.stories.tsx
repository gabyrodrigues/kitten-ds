import type { Meta, StoryObj } from "@storybook/react"

import Flex from "./Flex"

const meta: Meta<typeof Flex> = {
  component: Flex,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A utility component for building responsive layouts using Flexbox. It provides props for controlling direction, alignment, spacing, and wrapping of child elements, with full support for Tailwind CSS utility classes and standard accessibility attributes."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The children of the Flex component."
    },
    flex: {
      control: { type: "text" },
      description: "Controls how the Flex container's items grow and shrink."
    },
    direction: {
      control: { type: "select" },
      options: ["flex-row", "flex-col", "flex-row-reverse", "flex-col-reverse"],
      description: "Flex direction"
    },
    radius: {
      control: { type: "text" },
      description: "Controls the Flex border radius."
    },
    justify: {
      control: { type: "select" },
      options: [
        "justify-start",
        "justify-center",
        "justify-end",
        "justify-between",
        "justify-around",
        "justify-evenly"
      ],
      description: "Justifies items on the main axis."
    },
    align: {
      control: { type: "select" },
      options: ["items-start", "items-center", "items-end", "items-baseline", "items-stretch"],
      description: "Aligns items on the cross axis."
    },
    gap: {
      control: { type: "text" },
      description: "The gap between items in the Flex component."
    },
    component: {
      control: { type: "text" },
      description: "Defines the HTML element to render as."
    },
    rowGap: {
      control: { type: "text" },
      description: "ets the row gap between children."
    },
    colGap: {
      control: { type: "text" },
      description: "ets the row gap between children."
    },
    height: {
      control: { type: "text" },
      description: "The Flex component height."
    },
    width: {
      control: { type: "text" },
      description: "The Flex component width."
    },
    className: {
      control: { type: "text" },
      description: "Optional additional CSS classes to apply to the Flex."
    },
    order: {
      control: { type: "text" },
      description: "Controls the order in the Flex component."
    },
    paddingX: {
      control: { type: "text" },
      description: "Applies horizontal padding."
    },
    paddingY: {
      control: { type: "text" },
      description: "Applies vertical padding."
    },
    wrap: {
      control: { type: "select" },
      options: ["flex-nowrap", "flex-wrap", "flex-wrap-reverse"],
      description: "The wrapping behavior of the Flex component."
    }
  },
  args: {
    flex: "flex-1",
    direction: "flex-col",
    justify: "justify-between",
    align: "items-center",
    wrap: "flex-wrap",
    gap: "gap-4"
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Flex {...args}>
      <div className="bg-primary p-6 rounded-lg w-full text-typography-inverted font-semibold">
        Item 1
      </div>
      <div className="bg-primary p-6 rounded-lg w-full text-typography-inverted font-semibold">
        Item 2
      </div>
      <div className="bg-primary p-6 rounded-lg w-full text-typography-inverted font-semibold">
        Item 3
      </div>
    </Flex>
  )
}
