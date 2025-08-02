import type { Meta, StoryObj } from "@storybook/react"

import Flex from "../Flex/Flex"
import Chip from "./Chip"

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: "Componentes/Chip",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de chip acessível, compatível com elementos nativos e personalizados. Oferece suporte a leitores de tela, navegação por teclado e outros recursos de acessibilidade."
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
      description: "Alinhamento do conteúdo dentro do chip."
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
      description: "Conteúdo exibido dentro do chip. Pode ser texto, ícones ou outros componentes."
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais (opcional)."
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "success", "warning", "info", "neutral"],
      description: "Esquema de cores do chip."
    },
    component: {
      control: { type: "text" },
      description: "Elemento ou componente HTML usado para renderizar o chip."
    },
    deleteButtonProps: {
      control: { type: "object" },
      description:
        "Adiciona propriedades ao botão de exclusão do chip. Se `onDelete` não for fornecido, o botão de exclusão não será exibido."
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Define se o chip está desabilitado. Quando desabilitado, o chip não pode ser clicado e não dispara eventos de clique. Essa propriedade depende da aplicação da propriedade `onClick` ou `onDelete`."
    },
    fontSize: {
      control: { type: "text" },
      description: "Tamanho da fonte do texto no chip."
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
      description: "Justificação do conteúdo dentro do chip."
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
      description: "Espaçamento entre letras no texto do chip."
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
        "Altura da linha do texto no chip. Define o espaçamento vertical entre linhas de texto."
    },
    onClick: {
      action: "clicked",
      description:
        "Função chamada ao clicar no chip (não é chamada se estiver desabilitado ou se a função `onDelete` estiver presente)."
    },
    onDelete: {
      action: "clicked",
      description:
        "Essa função exibe o botão de exclusão no chip e é chamada ao clicar nele (não é chamada se estiver desabilitado)."
    },
    radius: {
      control: { type: "text" },
      description: "Raio de borda (arredondamento) do chip."
    },
    readOnly: {
      control: { type: "boolean" },
      description:
        "Define a opção de deletar do chip como somente leitura, exibindo apenas o ícone de exclusão sem permitir a interação. Isso é útil quando o chip não deve ser removido, mas ainda deve exibir o ícone de exclusão."
    },
    textColor: {
      control: { type: "text" },
      description: "Cor do texto do chip."
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "Transformação do texto do chip."
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined"],
      description: "Estilo visual do chip (variante)."
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
      description: "Peso da fonte usada no chip."
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
      description: "Tratamento de espaços em branco no conteúdo do chip."
    }
  },
  args: {
    variant: "filled",
    color: "primary",
    children: "Label",
    align: "items-center",
    justify: "justify-center",
    disabled: false,
    onClick: undefined,
    onDelete: undefined
  }
}

export default meta

type Story = StoryObj<typeof meta>

const CHIP_TEMPLATE = (args) => (
  <Flex
    gap="gap-sm"
    wrap="flex-wrap"
  >
    <Chip
      {...args}
      color="primary"
    />
    <Chip
      {...args}
      color="secondary"
    />
    <Chip
      {...args}
      color="error"
    />
    <Chip
      {...args}
      color="success"
    />
    <Chip
      {...args}
      color="warning"
    />
    <Chip
      {...args}
      color="info"
    />
    <Chip
      {...args}
      color="neutral"
    />
  </Flex>
)

export const Filled: Story = {
  name: "Variante Filled",
  args: {
    variant: "filled"
  },
  render: (args) => <CHIP_TEMPLATE {...args} />
}

export const Outlined: Story = {
  name: "Variante Outlined",
  args: {
    variant: "outlined",
    color: "primary"
  },
  render: (args) => <CHIP_TEMPLATE {...args} />
}

export const Clickable: Story = {
  name: "Versão clicável",
  args: {
    variant: "filled",
    onClick: () => {
      console.info("clicked")
    }
  },
  render: (args) => <CHIP_TEMPLATE {...args} />
}

export const Deletable: Story = {
  name: "Versão deletável",
  args: {
    variant: "filled",
    onDelete: () => {
      console.info("clicked delete")
    }
  },
  render: (args) => <CHIP_TEMPLATE {...args} />
}
