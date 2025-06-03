import type { Meta, StoryObj } from "@storybook/react"
import { IconButton } from "."
import Flex from "../Flex/Flex"

const meta = {
  component: IconButton,
  title: "Componentes/IconButton",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Botão com ícone único, acessível e focado em usabilidade. Usado para acionar funções, permite personalização de estilo e tamanho, e oferece suporte à navegação por teclado e descrição para leitores de tela."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    ariaLabel: {
      control: { type: "text" },
      description: "Rótulo acessível para leitores de tela, descreve a função do botão."
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "gray"],
      description: "Cor do Icon Button."
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais opcionais para aplicar ao IconButton."
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Define se o botão está desabilitado. Quando desabilitado, o botão não pode ser clicado e não responde a eventos de interação."
    },
    icon: {
      control: { type: "text" },
      description:
        "Nome do ícone a ser exibido no botão, corresponde ao nome de um ícone Material Symbols (ex.: 'home', 'search')."
    },
    iconClassName: {
      control: { type: "text" },
      description: "Nome da classe CSS para aplicar ao ícone dentro do botão."
    },
    iconVariant: {
      control: { type: "select" },
      options: ["filled", "outlined"],
      description: "Variante visual do ícone dentro do botão."
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "default"],
      description: "Variante visual do Icon Button."
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Tamanho do componente."
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
      console.info("clicked")
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
  name: "Versão Padrão",
  args: {
    variant: "default",
    color: "primary"
  },
  render: (args) => <IconButtonTemplate {...args} />
}

export const Filled: Story = {
  name: "Variante Filled",
  args: {
    variant: "filled"
  },
  render: (args) => <IconButtonTemplate {...args} />
}

export const Outlined: Story = {
  name: "Variante Outlined",
  args: {
    variant: "outlined",
    color: "primary"
  },
  render: (args) => <IconButtonTemplate {...args} />
}
