import type { Meta, StoryObj } from "@storybook/react"

import { Tooltip } from "."
import { Button } from "../Button"
import { Flex } from "../Flex"
import { Text } from "../Text"
import { Title } from "../Title"

const meta = {
  component: Tooltip,
  title: "Componentes/Tooltip",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The tooltip component is used to display contextual help or additional information about an element on the screen."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content of the tooltip"
    },
    content: {
      control: { type: "text" },
      description: "The content of the tooltip"
    },
    position: {
      control: {
        type: "select",
        options: [
          "top",
          "top-left",
          "top-right",
          "bottom",
          "bottom-right",
          "bottom-left",
          "left",
          "right"
        ]
      },
      description: "The position of the tooltip"
    },
    hasArrow: {
      control: { type: "boolean" },
      description: "Option to control the optional arrow on tooltip"
    },
    className: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Tooltip component root."
    },
    contentClassName: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Tooltip component content container."
    },
    arrowClassName: {
      control: { type: "text" },
      description:
        "The CSS class name to be applied to the Tooltip component arrow when it is visible."
    },
    disabled: {
      control: { type: "boolean" },
      description: "Specifies whether the Tooltip hover content displays or not."
    }
  },
  args: {
    content: "Tooltip content",
    position: "bottom",
    hasArrow: false,
    disabled: false,
    children: <Button>Botão com tooltip</Button>
  }
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const ReactNodeText: Story = {
  args: {
    hasArrow: true,
    contentClassName: "p-2 min-w-72",
    content: (
      <Flex direction="flex-col">
        <Title
          variant="h5"
          component="h1"
          align="text-left"
          color="text-typography-inverted"
          marginBottom="mb-3"
        >
          Tooltip com título
        </Title>
        <Text
          variant="body3"
          align="text-left"
          color="text-typography-inverted"
          className="inline"
        >
          Descrição da Tooltip
        </Text>
      </Flex>
    )
  }
}
export const Disabled: Story = {
  args: {
    hasArrow: true,
    disabled: true
  }
}
