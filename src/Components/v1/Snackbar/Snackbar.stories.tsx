import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Snackbar } from "."
import { Button } from "../Button"
import { Flex } from "../Flex"

const meta = {
  component: Snackbar,
  title: "Componentes/Snackbar",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente usado para exibir uma informação contextual, de forma breve e temporária, representando um retorno do sistema ou mensagem que não interrompe ou interfere no fluxo principal. Ele pode ser personalizado com diferentes cores, variantes e posições."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["error", "info", "neutral", "success", "warning"],
      description: "Controla a cor do Snackbar para indicar o tipo de mensagem ou alerta."
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais para estilização do Snackbar."
    },
    description: {
      control: { type: "text" },
      description: "Texto descritivo do Snackbar, fornecendo mais contexto sobre a mensagem."
    },
    position: {
      control: { type: "select" },
      options: ["bottom-left", "bottom-right", "top-left", "top-right"],
      description: "Controla a posição que o Snackbar será exibido na tela."
    },
    timeToClose: {
      control: { type: "number" },
      description: "Tempo em milissegundos para fechar automaticamente o Snackbar."
    },
    title: {
      control: { type: "text" },
      description: "O título principal do Snackbar."
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined"],
      description:
        "As opções de variante de estilo do Snackbar. Ele pode ser preenchido ou contornado."
    }
  },
  args: {
    title: "Título",
    description:
      "A descrição do alerta explica o contexto da ação e orienta sobre o que pode acontecer.",
    color: "success",
    variant: "outlined",
    position: "top-right",
    className: "",
    isOpen: false,
    timeToClose: 60000
  }
} satisfies Meta<typeof Snackbar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Versão padrão",
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen)

    function handleOpenSnackbar() {
      setIsOpen(true)
    }

    return (
      <Flex
        align="items-center"
        justify="justify-center"
        width="w-screen"
        className="relative h-screen"
      >
        <Button onClick={handleOpenSnackbar}>Abrir Snackbar</Button>
        <Snackbar
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Flex>
    )
  }
}
