import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Card } from "."
import { Button } from "../Button"
import { Chip } from "../Chip"
import { Flex } from "../Flex"
import { Text } from "../Text"
import { Title } from "../Title"

const meta = {
  component: Card,
  title: "Componentes/Card",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O card fornece um elemento de superfície para agrupar informações relacionadas, como texto, imagens e ações, em um único bloco visual."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    active: {
      control: { type: "boolean" },
      description: "Opção para definir o Card como ativo, alterando seu estilo visual."
    },
    className: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS à raíz do Card. Útil para personalizar o estilo da parte externa do componente."
    },
    contentClassName: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS ao conteúdo do Card. Útil para personalizar o estilo da parte interna do componente."
    },
    footer: {
      control: { type: "text" },
      description: "Adiciona um rodapé ao Card. Pode ser uma string ou um componente React."
    },
    hasBorder: {
      control: { type: "boolean" },
      description: "Controla se o Card exibe borda."
    },
    hasShadow: {
      control: { type: "boolean" },
      description: "Controla se o Card exibe sombra."
    },
    heading: {
      control: { type: "text" },
      description: "Adiciona um cabeçalho ao Card. Pode ser uma string ou um componente React."
    },
    isLoading: {
      control: { type: "boolean" },
      description: "Exibe o Card em um estado de carregamento, com animação de pulsação."
    },
    radius: {
      control: { type: "text" },
      description: "Controla o arredondamento das bordas do Card."
    }
  },
  args: {
    isLoading: false,
    hasBorder: false,
    hasShadow: true,
    className: "max-w-84"
  }
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Versão padrão",
  args: {
    className: "min-h-28",
    children: (
      <Title
        variant="h5"
        component="h1"
        color="text-typography-primary"
      >
        Título do Card
      </Title>
    )
  }
}

export const WithLoading: Story = {
  name: "Versão em estado de carregamento",
  args: {
    isLoading: true
  }
}

export const WithBorder: Story = {
  name: "Versão com borda",
  args: {
    hasBorder: true,
    children: (
      <Flex direction="flex-col">
        <Title
          variant="h5"
          component="h1"
          color="text-typography-primary"
        >
          Título do Card
        </Title>
        <Text
          variant="body2"
          color="text-typography-secondary"
        >
          subtítulo descritivo
        </Text>

        <Text
          variant="body2"
          marginTop="mt-4"
        >
          Este é um exemplo de conteúdo de texto dentro do card. Ele pode conter informações
          adicionais, descrições ou qualquer outro tipo de conteúdo textual.
        </Text>
      </Flex>
    )
  }
}

export const WithText: Story = {
  name: "Versão com conteúdo de texto",
  args: {
    children: (
      <Flex direction="flex-col">
        <Title
          variant="h5"
          component="h1"
          color="text-typography-primary"
        >
          Título do Card
        </Title>
        <Text
          variant="body2"
          color="text-typography-secondary"
        >
          subtítulo descritivo
        </Text>

        <Text
          variant="body2"
          marginTop="mt-4"
        >
          Este é um exemplo de conteúdo de texto dentro do card. Ele pode conter informações
          adicionais, descrições ou qualquer outro tipo de conteúdo textual.
        </Text>
      </Flex>
    )
  }
}

export const WithHeading: Story = {
  name: "Versão com cabeçalho",
  args: {
    heading: (
      <Title
        variant="h5"
        component="h1"
      >
        Cabeçalho do Card
      </Title>
    ),
    children: (
      <Flex direction="flex-col">
        <Title
          variant="h5"
          component="h2"
          color="text-typography-primary"
        >
          Título do Card
        </Title>
        <Text
          variant="body2"
          color="text-typography-secondary"
        >
          subtítulo descritivo
        </Text>

        <Text
          variant="body2"
          marginTop="mt-4"
        >
          Este é um exemplo de conteúdo de texto dentro do card. Ele pode conter informações
          adicionais, descrições ou qualquer outro tipo de conteúdo textual.
        </Text>
      </Flex>
    )
  }
}

export const WithFooter: Story = {
  name: "Versão com rodapé",
  args: {
    heading: (
      <Title
        variant="h5"
        component="h1"
      >
        Cabeçalho do Card
      </Title>
    ),
    children: (
      <Flex direction="flex-col">
        <Title
          variant="h5"
          component="h2"
          color="text-typography-primary"
        >
          Título do Card
        </Title>
        <Text
          variant="body2"
          color="text-typography-secondary"
        >
          subtítulo descritivo
        </Text>

        <Text
          variant="body2"
          marginTop="mt-4"
        >
          Este é um exemplo de conteúdo de texto dentro do card. Ele pode conter informações
          adicionais, descrições ou qualquer outro tipo de conteúdo textual.
        </Text>
      </Flex>
    ),
    footer: (
      <Chip
        color="gray"
        variant="outlined"
      >
        Versão 1
      </Chip>
    )
  }
}

export const WithMedia: Story = {
  name: "Versão com imagem",
  args: {
    heading: (
      <img
        src="https://images.unsplash.com/photo-1507568237455-03228e5ddb7e?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Gato laranja deitado olhando para a câmera"
      />
    ),
    headingClassName: "border-0 p-0",
    children: (
      <Flex direction="flex-col">
        <Title
          variant="h5"
          component="h1"
          color="text-typography-primary"
        >
          Título do Card
        </Title>
        <Text
          variant="body2"
          color="text-typography-secondary"
        >
          subtítulo descritivo
        </Text>

        <Text
          variant="body2"
          marginTop="mt-4"
        >
          Este é um exemplo de conteúdo de texto dentro do card. Ele pode conter informações
          adicionais, descrições ou qualquer outro tipo de conteúdo textual.
        </Text>
        <Button
          full
          className="mt-4"
          onClick={() => console.log("Button clicked")}
        >
          Ver mais detalhes
        </Button>
      </Flex>
    )
  }
}

export const Selectable: Story = {
  name: "Versão selecionável",
  args: {
    children: (
      <Flex direction="flex-col">
        <Title
          variant="h5"
          component="h1"
          color="text-typography-primary"
        >
          Título do Card
        </Title>
        <Text
          variant="body2"
          color="text-typography-secondary"
        >
          subtítulo descritivo
        </Text>

        <Text
          variant="body2"
          marginTop="mt-4"
        >
          Este é um exemplo de conteúdo de texto dentro do card. Ele pode conter informações
          adicionais, descrições ou qualquer outro tipo de conteúdo textual.
        </Text>
      </Flex>
    )
  },
  render: (args) => {
    const [active, setActive] = useState(false)
    return (
      <Card
        {...args}
        active={active}
        onClick={() => {
          console.info("Card clicked")
          setActive(!active)
        }}
      >
        {args.children}
      </Card>
    )
  }
}

export const Disabled: Story = {
  name: "Versão selecionável desabilitada",
  args: {
    disabled: true,
    children: (
      <Flex direction="flex-col">
        <Title
          variant="h5"
          component="h1"
          color="text-typography-primary"
        >
          Título do Card
        </Title>
        <Text
          variant="body2"
          color="text-typography-secondary"
        >
          subtítulo descritivo
        </Text>

        <Text
          variant="body2"
          marginTop="mt-4"
        >
          Este é um exemplo de conteúdo de texto dentro do card. Ele pode conter informações
          adicionais, descrições ou qualquer outro tipo de conteúdo textual.
        </Text>
      </Flex>
    )
  },
  render: (args) => {
    const [active, setActive] = useState(false)
    return (
      <Card
        {...args}
        active={active}
        onClick={() => {
          console.info("Card clicked")
          setActive(!active)
        }}
      >
        {args.children}
      </Card>
    )
  }
}
