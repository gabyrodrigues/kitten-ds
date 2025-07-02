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
          "O componente Tooltip fornece informações ou contexto adicional sobre um elemento da interface, apresentando dicas ou instruções sem sobrecarregar a tela."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    arrowClassName: {
      control: { type: "text" },
      description:
        "Classe CSS adicional aplicada ao elemento da seta do tooltip (visível apenas se 'hasArrow' for verdadeiro)."
    },
    body: {
      control: { type: "text" },
      description:
        "O conteúdo principal exibido dentro do tooltip. Pode ser um texto simples ou qualquer elemento React."
    },
    bodyClassName: {
      control: { type: "text" },
      description:
        "Classe CSS adicional aplicada à área interna de conteúdo do tooltip (envolve o conteúdo passado em 'body')."
    },
    children: {
      description:
        "O elemento alvo do Tooltip. O tooltip será exibido ao passar o mouse ou focar neste elemento."
    },
    className: {
      control: { type: "text" },
      description:
        "Classe CSS adicional aplicada ao wrapper externo do Tooltip (envolve o elemento alvo)."
    },
    containerClassName: {
      control: { type: "text" },
      description:
        "Classe CSS adicional aplicada à caixa do tooltip (elemento flutuante que aparece ao passar o mouse/focar, contendo o conteúdo e a seta)."
    },
    disabled: {
      control: { type: "boolean" },
      description: "Se verdadeiro, o tooltip não será exibido ao passar o mouse ou focar."
    },
    hasArrow: {
      control: { type: "boolean" },
      description: "Controla se o tooltip exibe uma seta apontando para o elemento alvo."
    },
    position: {
      control: {
        type: "select",
        options: [
          "bottom",
          "bottom-left",
          "bottom-right",
          "left",
          "right",
          "top",
          "top-left",
          "top-right"
        ]
      },
      description: "A posição do tooltip em relação ao elemento alvo."
    }
  },
  args: {
    body: "Texto descritivo do tooltip",
    position: "bottom",
    hasArrow: false,
    disabled: false,
    children: <Button onClick={() => console.log("clicked")}>Botão com tooltip</Button>
  }
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: "Versão padrão" }
export const WithText: Story = {
  name: "Versão de Card com Tooltip",
  args: {
    hasArrow: true,
    children: (
      <Flex className="bg-secondary-highlight px-4 py-8 rounded-lg shadow-variant2">
        <Text
          variant="body3"
          align="text-left"
          color="text-typography-primary"
        >
          Card com tooltip
        </Text>
      </Flex>
    )
  }
}
export const WithHtmlContent: Story = {
  name: "Versão com conteúdo HTML",
  args: {
    hasArrow: true,
    bodyClassName: "p-2 min-w-72",
    body: (
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
