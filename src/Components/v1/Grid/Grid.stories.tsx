import type { Meta, StoryObj } from "@storybook/react"

import Grid from "./Grid"

const meta: Meta<typeof Grid> = {
  component: Grid,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A utility component for building responsive layouts using CSS Grid. It provides props for defining columns, rows, spacing, alignment, and placement of items. Supports Tailwind CSS utility classes and includes full compatibility with standard HTML and accessibility attributes."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The children of the Grid component."
    },
    className: {
      control: { type: "text" },
      description: "Optional additional CSS classes to apply to the Grid."
    },
    component: {
      control: { type: "text" },
      description: "Defines the HTML element to render as."
    },
    cols: {
      control: { type: "text" },
      description: "Specifies the columns in a grid layout."
    },
    colSpan: {
      control: { type: "text" },
      description: "Controls how many columns a grid item should span."
    },
    colStart: {
      control: { type: "text" },
      description: "Specifies the starting column position for a grid item."
    },
    colEnd: {
      control: { type: "text" },
      description: "Specifies the ending column position for a grid item."
    },
    rows: {
      control: { type: "text" },
      description: "Specifies the rows in a grid layout."
    },
    rowSpan: {
      control: { type: "text" },
      description: "Controls how many rows a grid item should span."
    },
    rowStart: {
      control: { type: "text" },
      description: "Specifies the starting row position for a grid item."
    },
    rowEnd: {
      control: { type: "text" },
      description: "Specifies the ending row position for a grid item."
    },
    gap: {
      control: { type: "text" },
      description: "The gap between items in the Grid component."
    },
    rowGap: {
      control: { type: "text" },
      description: "Sets the row gap between children."
    },
    colGap: {
      control: { type: "text" },
      description: "Sets the column gap between children."
    },
    flow: {
      control: { type: "text" },
      description: "Controls how the grid auto-places items along rows or columns."
    },
    autoCols: {
      control: { type: "text" },
      description: "Controls the size of implicitly-created grid columns."
    },
    autoRows: {
      control: { type: "text" },
      description: "Controls the size of implicitly-created grid rows."
    },
    justifyItems: {
      control: { type: "text" },
      description: "Controls how Grid component items are aligned along their inline axis."
    },
    align: {
      control: { type: "text" },
      description: "Aligns items on the cross axis."
    },
    order: {
      control: { type: "text" },
      description: "Controls the order in the Grid component."
    }
  },
  args: {
    cols: "grid-cols-2",
    rows: "grid-rows-2",
    rowGap: "gap-y-2",
    colGap: "gap-x-3",
    flow: "grid-flow-row",
    autoCols: "auto-cols-min",
    autoRows: "auto-rows-auto",
    justifyItems: "justify-items-center",
    align: "items-center"
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: "h-86 w-86"
  },
  render: (args) => (
    <Grid {...args}>
      <div className="bg-primary p-6 rounded-lg w-full h-full text-typography-inverted font-semibold">
        Item 1
      </div>
      <div className="bg-primary p-6 rounded-lg w-full h-full text-typography-inverted font-semibold">
        Item 2
      </div>
      <div className="bg-primary p-6 rounded-lg w-full h-full text-typography-inverted font-semibold">
        Item 3
      </div>
      <div className="bg-primary p-6 rounded-lg w-full h-full text-typography-inverted font-semibold">
        Item 4
      </div>
    </Grid>
  )
}
