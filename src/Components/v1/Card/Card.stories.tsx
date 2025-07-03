import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "."
import { Title } from "../Title"

const meta = {
  component: Card,
  title: "Componentes/Card",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O card fornece um elemento de superfície para agrupar informações relacionadas, como texto, imagens e ações, em um único bloco visual."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    bgColor: {
      control: { type: "text" },
      description: "The background color of the Card."
    },
    borderColor: {
      control: { type: "text" },
      description: "The border color of the Card."
    },
    className: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Card component."
    },
    contentClassName: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Card component content wrapper."
    },
    hasBorder: {
      control: { type: "boolean" },
      description: "Controls if Card has border styles."
    },
    headingClassName: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Card component heading container."
    },
    isLoading: {
      control: { type: "boolean" },
      description: "Controls Card loading state animation."
    },
    paddingX: {
      control: { type: "text" },
      description: "The horizontal padding of the component."
    },
    paddingY: {
      control: { type: "text" },
      description: "The vertical padding of the component."
    },
    title: {
      control: { type: "text" },
      description: "The main title of the Card component."
    },
    titleClassName: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Card component title."
    }
  },
  args: {
    title: undefined,
    isLoading: false,
    hasBorder: false,
    hasShadow: false,
    className: "max-w-64"
  }
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Title
        variant="h5"
        weight="font-bold"
        color="text-typography-primary"
      >
        Título do Card
      </Title>
    )
  }
}
