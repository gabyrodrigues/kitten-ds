import type { StoryObj } from "@storybook/react"

import Grid from "./Grid"

const meta = {
  component: Grid,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The grid component provides a flexible, responsive layout system based on CSS Grid. It allows precise control over columns, rows, spacing, and alignment to create complex designs efficiently."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    component: {
      control: { type: "text" },
      description: "The component used for the root node."
    },
    cols: {
      control: { type: "text" },
      description: "Specifies the columns in a grid layout"
    },
    rows: {
      control: { type: "text" },
      description: "Specifies the rows in a grid layout"
    },
    gap: {
      control: { type: "text" },
      description: "The gap between grid items"
    },
    row_gap: {
      control: { type: "text" },
      description: "The row gap between items"
    },
    col_gap: {
      control: { type: "text" },
      description: "The column gap between items"
    },
    flow: {
      control: { type: "radio" },
      description: "Controls how elements in a grid are auto-placed"
    },
    auto_cols: {
      control: { type: "radio" },
      description: "Controls the size of implicitly-created grid columns"
    },
    auto_rows: {
      control: { type: "object" },
      description: "Controls the size of implicitly-created grid rows"
    },
    justify_items: {
      control: { type: "radio" },
      description: "Controls how grid items are aligned along their inline axis"
    },
    align: {
      control: { type: "object" },
      description: "The alignment of the grid items"
    },
    order: {
      control: { type: "text" },
      description: "Controls the order of the Grid component"
    },
    class_name: {
      control: { type: "text" },
      description: "Additional class name"
    },
    children: {
      control: { type: "text" },
      description: "Content to display"
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cols: "grid-cols-2",
    rows: "grid-rows-2",
    gap: undefined,
    order: undefined,
    row_gap: "gap-x-2",
    col_gap: "gap-y-3",
    flow: "grid-flow-row",
    auto_cols: "auto-cols-min",
    auto_rows: "auto-rows-auto",
    justify_items: "justify-items-center",
    align: "items-center",
    class_name: "h-344 w-344 bg-neutral-gray-200",
    children: [
      <div
        key="without-breakpoint-1"
        className="bg-neutral-gray-500 p-4 rounded-sm h-full w-full"
      >
        Item 1
      </div>,
      <div
        key="without-breakpoint-2"
        className="bg-neutral-gray-500 p-4 rounded-sm h-full w-full"
      >
        Item 2
      </div>,
      <div
        key="without-breakpoint-3"
        className="bg-neutral-gray-500 p-4 rounded-sm h-full w-full"
      >
        Item 3
      </div>,
      <div
        key="without-breakpoint-4"
        className="bg-neutral-gray-500 p-4 rounded-sm h-full w-full"
      >
        Item 4
      </div>
    ]
  },
  name: "Default"
}
