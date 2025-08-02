import type { Meta, StoryObj } from "@storybook/react"

import { Spinner } from "."
import Flex from "../Flex/Flex"

const meta = {
  component: Spinner,
  title: "Componentes/Spinner",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de spinner para indicar carregamento ou processamento. Suporta diferentes cores e tamanhos, e pode ser facilmente integrado em outros componentes."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais para personalização."
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "neutral"],
      description: "A cor do Spinner."
    }
  },
  args: { color: "primary" }
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

const SPINNER_TEMPLATE = (args) => (
  <Flex
    gap="gap-sm"
    wrap="flex-wrap"
  >
    <Spinner
      {...args}
      color="primary"
    />
    <Spinner
      {...args}
      color="secondary"
    />
    <Spinner
      {...args}
      color="neutral"
    />
    <Spinner
      {...args}
      color="disabled"
    />
  </Flex>
)

export const SizeXs: Story = {
  name: "Variante Tamanho XS",
  args: {
    size: "xs"
  },
  render: (args) => <SPINNER_TEMPLATE {...args} />
}

export const SizeSm: Story = {
  name: "Variante Tamanho SM",
  args: {
    size: "sm"
  },
  render: (args) => <SPINNER_TEMPLATE {...args} />
}

export const SizeMd: Story = {
  name: "Variante Tamanho MD",
  args: {
    size: "md"
  },
  render: (args) => <SPINNER_TEMPLATE {...args} />
}

export const SizeLg: Story = {
  name: "Variante Tamanho LG",
  args: {
    size: "lg"
  },
  render: (args) => <SPINNER_TEMPLATE {...args} />
}
