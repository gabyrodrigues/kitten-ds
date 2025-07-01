import type { Meta, StoryObj } from "@storybook/react"

import { Tooltip } from "."
import { Flex } from "../Flex"
import { Icon } from "../Icon"
import { Text } from "../Text"

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
    children: (
      <Icon
        color="text-primary"
        type="info"
        className="cursor-default"
      />
    )
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
        <Text
          variant="body3"
          align="text-left"
          color="text-typography-secondary"
          marginBottom="mb-3"
        >
          A tag é um identificador personalizado usado para criar os links exclusivos de admin e
          autoatendimento:
        </Text>
        <Text
          variant="body3"
          align="text-left"
          color="text-typography-secondary"
          className="inline"
        >
          <Text
            variant="body3"
            component="span"
            weight="font-bold"
            color="inherit"
            className="inline mr-1"
          >
            Admin:
          </Text>
          sua-tag.admin.economia.sunne.com.br
        </Text>
        <Text
          variant="body3"
          align="text-left"
          color="text-typography-secondary"
          className="inline"
        >
          <Text
            variant="body3"
            component="span"
            weight="font-bold"
            color="inherit"
            className="inline mr-1"
          >
            Autoatendimento:
          </Text>
          sua-tag.economia.sunne.com.br
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
