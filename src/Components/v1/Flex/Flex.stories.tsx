import type { Meta, StoryObj } from "@storybook/react"

import Flex from "./Flex"

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "Componentes/Flex",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de layout com suporte a acessibilidade, baseado em Flexbox. Compatível com diferentes tamanhos de tela e personalizável com utilitários do Tailwind. Permite ajustar direção, alinhamento, espaçamento e quebra de linha dos elementos internos."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: "select" },
      options: ["items-start", "items-center", "items-end", "items-baseline", "items-stretch"],
      description: "Alinha os itens no eixo cruzado do Flex."
    },

    children: {
      control: { type: "text" },
      description: "Conteúdo interno do componente Flex."
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais opcionais para o Flex."
    },
    colGap: {
      control: { type: "text" },
      description: "Espaçamento entre colunas dos itens."
    },
    component: {
      control: { type: "text" },
      description: "Define o elemento HTML que será renderizado."
    },
    direction: {
      control: { type: "select" },
      options: ["flex-row", "flex-col", "flex-row-reverse", "flex-col-reverse"],
      description: "Direção do Flex."
    },
    flex: {
      control: { type: "text" },
      description:
        "Define como os itens dentro do Flex crescem ou encolhem para ocupar o espaço disponível."
    },
    gap: {
      control: { type: "text" },
      description: "Espaçamento entre os itens do Flex."
    },
    height: {
      control: { type: "text" },
      description: "Altura do componente Flex."
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
      description: "Justifica os itens no eixo principal do Flex."
    },
    order: {
      control: { type: "text" },
      description: "Controla a ordem dos itens dentro do Flex."
    },
    paddingX: {
      control: { type: "text" },
      description: "Espaçamento interno horizontal."
    },
    paddingY: {
      control: { type: "text" },
      description: "Espaçamento interno vertical."
    },
    radius: {
      control: { type: "text" },
      description: "Controla o arredondamento das bordas do Flex."
    },
    rowGap: {
      control: { type: "text" },
      description: "Espaçamento entre linhas dos itens."
    },
    width: {
      control: { type: "text" },
      description: "Largura do componente Flex."
    },
    wrap: {
      control: { type: "select" },
      options: ["flex-nowrap", "flex-wrap", "flex-wrap-reverse"],
      description: "Define o comportamento de quebra de linha dos itens."
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
  name: "Padrão",
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
