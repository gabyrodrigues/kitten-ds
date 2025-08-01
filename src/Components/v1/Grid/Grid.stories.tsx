import type { Meta, StoryObj } from "@storybook/react"

import Grid from "./Grid"

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "Componentes/Grid",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de layout com suporte a acessibilidade, baseado em CSS Grid. Compatível com diferentes tamanhos de tela e personalizável com utilitários do Tailwind. Permite definir colunas, linhas, espaçamento, alinhamento e posicionamento dos itens internos."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: "text" },
      description: "Alinha os itens do Grid ao longo do eixo vertical."
    },
    autoCols: {
      control: { type: "text" },
      description: "Define o tamanho das colunas criadas implicitamente."
    },
    autoRows: {
      control: { type: "text" },
      description: "Define o tamanho das linhas criadas implicitamente."
    },
    children: {
      control: { type: "text" },
      description: "Conteúdo interno do componente Grid."
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais opcionais para o Grid."
    },
    component: {
      control: { type: "text" },
      description: "Define o elemento HTML que será renderizado."
    },
    cols: {
      control: { type: "text" },
      description: "Define as colunas do layout grid."
    },
    colSpan: {
      control: { type: "text" },
      description: "Define quantas colunas um item do grid deve ocupar."
    },
    colStart: {
      control: { type: "text" },
      description: "Define a posição inicial da coluna para um item do grid."
    },
    colEnd: {
      control: { type: "text" },
      description: "Define a posição final da coluna para um item do grid."
    },
    colGap: {
      control: { type: "text" },
      description: "Espaçamento entre as colunas."
    },
    flow: {
      control: { type: "text" },
      description: "Controla como os itens são posicionados automaticamente em linhas ou colunas."
    },
    gap: {
      control: { type: "text" },
      description: "Espaçamento entre os itens do Grid."
    },
    justifyItems: {
      control: { type: "text" },
      description: "Alinha os itens do Grid ao longo do eixo horizontal."
    },
    rows: {
      control: { type: "text" },
      description: "Define as linhas do layout grid."
    },
    rowEnd: {
      control: { type: "text" },
      description: "Define a posição final da linha para um item do grid."
    },
    rowGap: {
      control: { type: "text" },
      description: "Espaçamento entre as linhas."
    },
    rowSpan: {
      control: { type: "text" },
      description: "Define quantas linhas um item do grid deve ocupar."
    },
    rowStart: {
      control: { type: "text" },
      description: "Define a posição inicial da linha para um item do grid."
    },
    order: {
      control: { type: "text" },
      description: "Define a ordem dos itens no Grid."
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
  name: "Versão de exemplo",
  args: {
    className: "h-86 w-86"
  },
  render: (args) => (
    <Grid {...args}>
      <div className="bg-primary p-lg rounded-lg w-full h-full text-typography-inverted font-semibold">
        Item 1
      </div>
      <div className="bg-primary p-lg rounded-lg w-full h-full text-typography-inverted font-semibold">
        Item 2
      </div>
      <div className="bg-primary p-lg rounded-lg w-full h-full text-typography-inverted font-semibold">
        Item 3
      </div>
      <div className="bg-primary p-lg rounded-lg w-full h-full text-typography-inverted font-semibold">
        Item 4
      </div>
    </Grid>
  )
}
