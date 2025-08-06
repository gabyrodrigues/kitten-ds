import type { Meta, StoryObj } from "@storybook/react"
import Radio from "./Radio"

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Componentes/Radio",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente Radio padroniza a aparência e os estados dos botões de opção a partir de variantes para oferecer uma seleção única clara e acessível."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Exibe o Radio como selecionado ou não."
    },
    checkedClassName: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS ao indicador de seleção do Radio. Útil para personalizar o estilo do indicador quando o Radio está selecionado."
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "neutral"],
      description:
        "Define a cor do Radio Button. As opções disponíveis são: 'primary', 'secondary' e 'neutral'. Se o componente for usado dentro de um RadioGroup, a cor será herdada do grupo e não poderá ser alterada individualmente."
    },
    contentClassName: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS ao contêiner do conteúdo do Radio. Útil para personalizar o estilo do contêiner que envolve o input do Radio."
    },
    labelClassName: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS ao rótulo do Radio. Útil para personalizar o estilo do texto do rótulo associado ao Radio."
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Desabilita o Radio, tornando-o não interativo. Útil para estados onde a seleção não é permitida. Também pode ser herdado de um RadioGroup se estiver sendo usado dentro de um."
    },
    errorText: {
      control: { type: "text" },
      description:
        "Mensagem de erro para o radio. Esta mensagem é exibida quando o Radio está em um estado de erro, indicando que algo está errado com a seleção."
    },
    helperText: {
      control: { type: "text" },
      description:
        "Mensagem de ajuda para o radio. Esta mensagem é exibida abaixo do Radio para fornecer informações adicionais ou orientações ao usuário."
    },
    id: {
      control: { type: "text" },
      description:
        "Opção para definir um ID exclusivo para o Radio. Útil para acessibilidade e identificação do componente no DOM."
    },
    label: {
      control: { type: "text" },
      description:
        "O texto do rótulo associado ao Radio. Este rótulo é exibido ao lado do botão de opção e é usado para descrever a opção selecionável."
    },
    inputClassName: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS ao input do Radio. Útil para personalizar o estilo do elemento de entrada do Radio."
    },
    className: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS à raíz do Radio. Útil para personalizar o estilo da parte externa do componente."
    },
    readOnly: {
      control: { type: "boolean" },
      description:
        "Define o Radio como somente leitura, tornando-o não interativo, mas ainda focável. Útil para exibir o estado atual sem permitir alterações. Também pode ser herdado de um RadioGroup se estiver sendo usado dentro de um."
    },
    successText: {
      control: { type: "text" },
      description:
        "Mensagem de sucesso para o radio. Esta mensagem é exibida quando o Radio está em um estado de sucesso, indicando que a seleção foi bem-sucedida."
    },
    value: {
      control: { type: "text" },
      description:
        "O valor associado ao Radio. Este valor é usado para identificar a opção selecionada quando o Radio é parte de um grupo de seleção."
    }
  },
  args: {
    disabled: false,
    color: "primary",
    label: "Label Text"
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Versão padrão",
  args: {
    value: "default"
  }
}

export const WithErrorText: Story = {
  name: "Versão com mensagem de erro",
  args: {
    errorText: "Mensagem de erro",
    value: "error"
  }
}

export const WithHelperText: Story = {
  name: "Versão com mensagem de ajuda",
  args: {
    helperText: "Mensagem de ajuda",
    value: "helper"
  }
}

export const WithSuccessText: Story = {
  name: "Versão com mensagem de sucesso",
  args: {
    successText: "Mensagem de sucesso",
    value: "success"
  }
}
