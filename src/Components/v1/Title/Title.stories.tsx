import type { Meta, StoryObj } from "@storybook/react"

import React from "react"
import { Title } from "."

const meta: Meta<typeof Title> = {
  component: Title,
  title: "Componentes/Title",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente Title oferece estilos tipográficos padronizados para títulos e cabeçalhos de página. Suporta variantes visuais pré-definidas (por exemplo, 'h1' a 'h6', 'display1' a 'display3') para atender a diferentes casos de uso. O componente permite escolher o elemento HTML usado para renderizar o título a partir da propriedade `component`."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: "select" },
      options: ["text-left", "text-center", "text-right", "text-justify", "text-start", "text-end"],
      description: "Classe do Tailwind para controlar o alinhamento do título."
    },
    children: {
      control: { type: "text" },
      description: "Conteúdo a ser exibido dentro do componente Title."
    },
    component: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Elemento HTML usado para renderizar o componente Title."
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS extras aplicadas ao componente Title."
    },
    color: {
      control: { type: "text" },
      description: "Classe do Tailwind para controlar a cor do título."
    },
    decoration: {
      control: { type: "select" },
      options: ["underline", "overline", "line-through", "no-underline"],
      description: "Classe do Tailwind para controlar a decoração do título."
    },
    fontSize: {
      control: { type: "select" },
      options: [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
        "text-6xl",
        "text-7xl",
        "text-8xl",
        "text-9xl"
      ],
      description: "Tamanho da fonte do componente Title."
    },
    fontStyle: {
      control: { type: "select" },
      options: ["italic", "not-italic"],
      description: "Classe do Tailwind para controlar o estilo da fonte."
    },
    letterSpacing: {
      control: { type: "select" },
      options: [
        "tracking-tighter",
        "tracking-tight",
        "tracking-normal",
        "tracking-wide",
        "tracking-wider",
        "tracking-widest"
      ],
      description: "Classe do Tailwind para controlar o espaçamento entre letras."
    },
    lineClamp: {
      control: { type: "text" },
      description: "Classe do Tailwind para limitar o número de linhas antes de truncar."
    },
    lineHeight: {
      control: { type: "select" },
      options: [
        "leading-none",
        "leading-tight",
        "leading-snug",
        "leading-normal",
        "leading-relaxed",
        "leading-loose"
      ],
      description: "Classe do Tailwind para controlar a altura da linha."
    },
    marginBottom: {
      control: { type: "text" },
      description: "Margem aplicada na parte inferior do componente Title."
    },
    marginTop: {
      control: { type: "text" },
      description: "Margem aplicada na parte superior do componente Title."
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "Classe do Tailwind para controlar a transformação do título."
    },
    variant: {
      control: { type: "select" },
      options: ["display1", "display2", "display3", "h1", "h2", "h3", "h4", "h5", "h6"],
      description:
        "Estilo visual do título. 'h1' a 'h6' são estilos de cabeçalho; 'display1' a 'display3' são variantes maiores. O elemento HTML pode ser alterado a partir da propriedade `component`."
    },
    weight: {
      control: { type: "select" },
      options: [
        "font-thin",
        "font-extralight",
        "font-light",
        "font-normal",
        "font-medium",
        "font-semibold",
        "font-bold",
        "font-extrabold",
        "font-black"
      ],
      description: "Classe do Tailwind para controlar o peso da fonte."
    },
    whitespace: {
      control: { type: "select" },
      options: [
        "whitespace-normal",
        "whitespace-nowrap",
        "whitespace-pre",
        "whitespace-pre-line",
        "whitespace-pre-wrap",
        "whitespace-break-spaces"
      ],
      description: "Classe do Tailwind para controlar a propriedade white-space do títuo."
    },
    wordBreak: {
      control: { type: "select" },
      options: ["break-normal", "break-all", "break-keep"],
      description: "Classe do Tailwind para controlar como o título quebra dentro do elemento."
    },
    wrap: {
      control: { type: "select" },
      options: ["text-wrap", "text-nowrap", "text-balance", "text-pretty"],
      description: "Classe do Tailwind para controlar a quebra de linha do título."
    }
  },
  args: {
    children: "Componente de Título",
    color: "text-typography-primary",
    variant: "h1",
    align: "text-left"
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Padrão",
  args: {
    color: "text-typography-primary",
    align: "text-center"
  }
}

export const WithHtmlChildren: Story = {
  name: "Com Tag HTML",
  args: {
    align: "text-center",
    children: "<b>Título com tag</b>"
  }
}

export const WithHtmlContent: Story = {
  name: "Com Conteúdo HTML Interno",
  args: {
    align: "text-center",
    children: "<b>Título</b> com conteúdo <i>HTML</i>"
  }
}

export const WithResponsiveSize: Story = {
  render: (args) => {
    return (
      <Title
        {...args}
        variant="display2"
        color="text-typography-primary"
        className="md:text-display2 xl:text-display1"
      >
        Componente de título responsivo
      </Title>
    )
  }
}
