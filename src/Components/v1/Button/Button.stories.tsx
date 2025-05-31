import type { Meta, StoryObj } from "@storybook/react"

import Flex from "../Flex/Flex"
import { Icon } from "../Icon"
import Button from "./Button"

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Componentes/Button",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de botão acessível, compatível com elementos nativos e personalizados. Oferece suporte a leitores de tela, navegação por teclado e outros recursos de acessibilidade."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: "select" },
      options: [
        "items-start",
        "items-end",
        "items-end-safe",
        "items-center",
        "items-center-safe",
        "items-baseline",
        "items-baseline-last",
        "items-stretch"
      ],
      description: "Alinhamento do conteúdo dentro do botão."
    },
    bgColor: {
      control: { type: "text" },
      description: "Cor de fundo do botão."
    },
    borderColor: {
      control: { type: "text" },
      description: "Cor da borda do botão."
    },
    children: {
      control: { type: "text" },
      description: "Conteúdo exibido dentro do botão. Pode ser texto, ícones ou outros componentes."
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais (opcional)."
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "success", "gray"],
      description: "Esquema de cores do botão."
    },
    component: {
      control: { type: "text" },
      description: "Elemento ou componente HTML usado para renderizar o botão."
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Define se o botão está desabilitado. Quando desabilitado, o botão não pode ser clicado e não dispara eventos de clique."
    },
    fontSize: {
      control: { type: "text" },
      description: "Tamanho da fonte do texto no botão."
    },
    justify: {
      control: { type: "select" },
      options: [
        "justify-start",
        "justify-end",
        "justify-end-safe",
        "justify-center",
        "justify-center-safe",
        "justify-between",
        "justify-around",
        "justify-evenly",
        "justify-stretch",
        "justify-baseline",
        "justify-normal"
      ],
      description: "Justificação do conteúdo dentro do botão."
    },
    leftSection: {
      control: { type: "text" },
      description: "Conteúdo exibido à esquerda do texto principal do botão."
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
      description:
        "Altura da linha do texto no botão. Define o espaçamento vertical entre linhas de texto."
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
      description: "Espaçamento entre letras no texto do botão."
    },
    onClick: {
      action: "clicked",
      description: "Função chamada ao clicar no botão (não é chamada se estiver desabilitado)."
    },
    radius: {
      control: { type: "text" },
      description: "Raio de borda (arredondamento) do botão."
    },
    rightSection: {
      control: { type: "text" },
      description: "Conteúdo exibido à direita do texto principal do botão."
    },
    textColor: {
      control: { type: "text" },
      description: "Cor do texto do botão."
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "Transformação do texto do botão."
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "text"],
      description: "Estilo visual do botão (variante)."
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
      description: "Peso da fonte usada no botão."
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
      description: "Tratamento de espaços em branco no conteúdo do botão."
    }
  },
  args: {
    variant: "filled",
    color: "primary",
    children: "Button",
    align: "items-center",
    justify: "justify-center",
    disabled: false,
    full: false,
    onClick: () => {
      console.info("clicked")
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

const ButtonTemplate = (args) => (
  <Flex
    gap="gap-4"
    wrap="flex-wrap"
  >
    <Button
      {...args}
      color="primary"
    />
    <Button
      {...args}
      color="secondary"
    />
    <Button
      {...args}
      color="error"
    />
    <Button
      {...args}
      color="success"
    />
    <Button
      {...args}
      color="gray"
    />
  </Flex>
)

export const Filled: Story = {
  name: "Variante Filled",
  args: {
    variant: "filled",
    children: "Button"
  },
  render: (args) => <ButtonTemplate {...args} />
}

export const Outlined: Story = {
  name: "Variante Outlined",
  args: {
    variant: "outlined",
    color: "primary",
    children: "Button"
  },
  render: (args) => <ButtonTemplate {...args} />
}

export const Text: Story = {
  name: "Variante Text",
  args: {
    variant: "text",
    color: "primary",
    children: "Button"
  },
  render: (args) => <ButtonTemplate {...args} />
}
