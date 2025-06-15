import type { Meta, StoryObj } from "@storybook/react"

import Icon from "./Icon"

const meta = {
  component: Icon,
  title: "Componentes/Icon",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de ícone utilizado para representar elementos visuais, como indicadores, rótulos ou ações. Permite personalização e aplicação de diferentes estilos, além de oferecer suporte a práticas de acessibilidade para garantir que seja interpretado corretamente por leitores de tela e outras tecnologias assistivas."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    "aria-label": {
      control: { type: "text" },
      description:
        "Rótulo acessível para o ícone, usado por leitores de tela e tecnologias assistivas."
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais opcionais para aplicar ao ícone."
    },
    color: {
      control: { type: "text" },
      description: "Controla a cor do ícone."
    },
    fontSize: {
      control: { type: "text" },
      description: "Classe de tamanho de texto do Tailwind para controlar o tamanho do ícone."
    },
    type: {
      control: { type: "text" },
      description:
        "Nome do ícone a ser exibido, baseado nos nomes do Material Symbols (ex.: 'home', 'search')."
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled"],
      description:
        "Define a variação visual do ícone: 'outlined' (contorno) ou 'filled' (preenchido)."
    },
    weight: {
      control: { type: "select" },
      options: [400, 500, 700],
      description: "Define o peso da fonte usado para renderizar o ícone."
    }
  },
  args: {
    variant: "outlined",
    fontSize: "text-xl",
    weight: 400,
    color: "text-typography-primary",
    "aria-label": "Settings"
  }
} satisfies Meta<typeof Icon>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Versão de exemplo",
  args: {
    type: "settings"
  }
}
