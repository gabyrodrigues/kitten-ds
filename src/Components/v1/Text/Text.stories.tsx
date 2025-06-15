import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "."

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Componentes/Text",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente Text oferece diversas variantes de estilo (por exemplo, 'body1', 'body2') que controlam o tamanho da fonte, peso e altura da linha. Totalmente responsivo e personalizável com classes utilitárias do Tailwind CSS, o componente permite ajustes fáceis no alinhamento, cor e outras propriedades."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: "select" },
      options: ["text-left", "text-center", "text-right", "text-justify", "text-start", "text-end"],
      description: "Classe Tailwind para controlar o alinhamento do texto."
    },
    component: {
      control: { type: "select" },
      options: [
        "p",
        "span",
        "label",
        "strong",
        "em",
        "b",
        "i",
        "small",
        "mark",
        "abbr",
        "cite",
        "time",
        "code",
        "s",
        "sub",
        "sup",
        "kbd",
        "var",
        "q",
        "blockquote",
        "pre",
        "li",
        "dt",
        "dd",
        "legend",
        "summary",
        "figcaption",
        "address",
        "ins",
        "del",
        "dfn",
        "samp"
      ],
      description: "Elemento HTML usado para renderizar o componente Text."
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais opcionais para o componente Text."
    },
    children: {
      control: { type: "text" },
      description: "Conteúdo a ser exibido dentro do componente Text."
    },

    color: {
      control: { type: "text" },
      description: "Cor do texto para o componente Text."
    },
    decoration: {
      control: { type: "select" },
      options: ["underline", "overline", "line-through", "no-underline"],
      description: "Classe Tailwind para controlar a decoração do texto do componente Text."
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
      description: "Tamanho da fonte do componente Text."
    },
    fontStyle: {
      control: { type: "select" },
      options: ["italic", "not-italic"],
      description: "Classe Tailwind para controlar o estilo da fonte do componente Text."
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
      description: "Classe Tailwind para controlar o espaçamento entre letras do componente Text."
    },
    marginBottom: {
      control: { type: "text" },
      description: "Margem aplicada na parte inferior do componente Text."
    },
    marginTop: {
      control: { type: "text" },
      description: "Margem aplicada na parte superior do componente Text."
    },
    lineClamp: {
      control: { type: "text" },
      description: "Classe Tailwind para controlar o número de linhas antes de truncar o texto."
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
      description: "Classe Tailwind para controlar a altura da linha do componente Text."
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "Classe Tailwind para controlar a transformação do texto."
    },
    variant: {
      control: { type: "select" },
      options: ["body1", "body2", "body3", "body4"],
      description: "Variante do componente Text."
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
      description: "Classe Tailwind para controlar o peso da fonte do componente Text."
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
      description: "Classe Tailwind para controlar a propriedade white-space do elemento."
    },
    wrap: {
      control: { type: "select" },
      options: ["text-wrap", "text-nowrap", "text-balance", "text-pretty"],
      description: "Classe Tailwind para controlar a quebra de linha do texto."
    },
    wordBreak: {
      control: { type: "select" },
      options: ["break-normal", "break-all", "break-keep"],
      description: "Classe Tailwind para controlar como o texto quebra dentro do elemento."
    }
  },
  args: {
    children: "Componente de Texto",
    color: "text-typography-primary",
    variant: "body1",
    weight: "font-normal",
    align: "text-left",
    component: "p"
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Versão comum de exemplo",
  args: {
    align: "text-center",
    className: "w-full"
  }
}

export const WithHtmlChildren: Story = {
  name: "Versão com tag HTML",
  args: {
    align: "text-center",
    children: "<b>Texto com tag</b>"
  }
}

export const WithHtmlContent: Story = {
  name: "Versão com conteúdo HTML interno",
  args: {
    align: "text-center",
    children: "<b>Texto</b> com conteúdo <i>HTML</i>"
  }
}

export const WithResponsiveSize: Story = {
  name: "Versão responsiva",
  render: (args) => {
    return (
      <Text
        {...args}
        variant="body2"
        color="text-typography-primary"
        className="md:text-body3 xl:text-body1"
      >
        Componente de Texto com tamanho responsivo
      </Text>
    )
  }
}
