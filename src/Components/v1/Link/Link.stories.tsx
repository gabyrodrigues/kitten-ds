import type { Meta, StoryObj } from "@storybook/react"
import Link from "./Link"

const meta: Meta<typeof Link> = {
  component: Link,
  title: "Componentes/Link",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de link estilizado, com suporte a utilitários do Tailwind. Suporta navegação por teclado, efeitos de foco e hover, além de tratamento correto do estado desabilitado."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    borderColor: {
      control: { type: "text" },
      description: "Cor da borda inferior do link."
    },
    children: {
      control: { type: "text" },
      description: "Conteúdo exibido dentro do link."
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais opcionais para o link."
    },
    color: {
      control: { type: "text" },
      description: "Cor do texto do link."
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Define se o link está desabilitado. Quando desabilitado, o link não pode ser clicado e não responde a eventos de interação."
    },
    fontSize: {
      control: { type: "text" },
      description: "Controla o tamanho da fonte do link."
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
      description: "Espaçamento entre as letras do link."
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
      description: "Altura da linha do texto do link."
    },
    href: {
      control: { type: "text" },
      description: "URL de destino do link."
    },
    onClick: {
      action: "clicked",
      description: "Função acionada ao clicar no link."
    },
    target: {
      control: { type: "select" },
      options: ["_self", "_blank", "_parent", "_top"],
      description: "Define como o link será aberto (na mesma aba, nova aba, etc)."
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "Transformação do texto."
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
      description: "Peso da fonte do link."
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
      description: "Controla o comportamento do espaço em branco do texto."
    }
  },
  args: {
    children: "Link",
    target: "_blank",
    href: "https://www.google.com"
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Versão Padrão",
  args: {
    children: "Link",
    onClick: () => {
      console.info("clicked")
    }
  }
}
