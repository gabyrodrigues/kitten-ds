import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import type { InputProps } from "./Input.types"

import { Icon } from "../Icon"
import Input from "./Input"

const meta = {
  component: Input,
  title: "Componentes/Input",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "O componente Input é um campo de entrada de dados versátil que pode ser usado para entrada de texto de uma linha ou várias linhas. Ele suporta recursos de acessibilidade e várias funcionalidades, como rótulos, seções, mensagens de validação e opções de estilo."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    autoComplete: {
      control: { type: "text" },
      description:
        "Define o atributo autoComplete do input, sugerindo preenchimento automático pelo navegador."
    },
    autoFocus: {
      control: { type: "boolean" },
      description: "Se verdadeiro, o input recebe foco automaticamente ao ser renderizado."
    },
    bgColor: {
      control: { type: "text" },
      description: "Controla a cor de fundo do Input."
    },
    borderColor: {
      control: { type: "text" },
      description: "Controla a cor da borda do Input."
    },
    className: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS ao input do Input. Útil para personalizar o estilo do elemento que envolve o componente."
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Desabilita o Input, tornando-o não interativo. Útil para estados onde a interação não é permitida."
    },
    errorText: {
      control: { type: "text" },
      description:
        "Mensagem de erro para o input. Este texto é exibido quando o Input está em um estado de erro, indicando que algo está errado com a seleção."
    },
    fontSize: {
      control: { type: "text" },
      description: "Controla o tamanho da fonte do Input."
    },
    full: {
      control: { type: "boolean" },
      description: "Controla se o Input deve ocupar toda a largura disponível."
    },
    helperText: {
      control: { type: "text" },
      description:
        "Mensagem de ajuda para o radio. Este texto é exibido abaixo do Input para fornecer informações adicionais ou orientações ao usuário."
    },
    id: {
      control: { type: "text" },
      description:
        "Opção para definir um ID exclusivo para o Input. Em conjunto com o atributo `htmlFor` aplicado no rótulo a partir do ID definido, melhora a acessibilidade ao associar o rótulo ao campo de entrada."
    },
    label: {
      control: { type: "text" },
      description:
        "Rótulo do input. A partir do ID definido, o rótulo é associado via atributo `htmlFor`."
    },
    leftSection: {
      control: { type: "text" },
      description: "Conteúdo exibido à esquerda do Input."
    },
    multiline: {
      control: { type: "boolean" },
      description:
        "Controla se o Input deve ser renderizado como um campo de várias linhas (textarea)."
    },
    name: {
      control: { type: "text" },
      description: "Define o atributo name do input, útil para integração com formulários."
    },

    onChange: {
      action: "changed",
      description: "Função chamada ao alterar o valor do Input. Recebe o novo valor e o evento."
    },
    paddingL: {
      control: { type: "text" },
      description: "Espaçamento à esquerda do Input."
    },
    paddingR: {
      control: { type: "text" },
      description: "Espaçamento à direita do Input."
    },
    paddingY: {
      control: { type: "text" },
      description: "Espaçamento vertical do Input."
    },
    placeholder: {
      control: { type: "text" },
      description: "Texto exibido quando o Input está vazio e não está focado."
    },
    radius: {
      control: { type: "text" },
      description: "Controla o arredondamento das bordas do Input."
    },
    readOnly: {
      control: { type: "boolean" },
      description:
        "Define o campo como somente leitura (`readOnly`). Diferente de `disabled`, o campo ainda pode ser focado e copiado, mas não pode ser editado."
    },
    required: {
      control: { type: "boolean" },
      description:
        "Define o campo como obrigatório (`required`). Isso indica que o campo deve ser preenchido antes do envio do formulário."
    },
    resize: {
      control: { type: "boolean" },
      description:
        "Se verdadeiro, o Input será redimensionável. Isso é aplicável apenas quando o Input é multilinha."
    },
    rightSection: {
      control: { type: "text" },
      description: "Conteúdo exibido à direita do Input."
    },
    rows: {
      control: { type: "number" },
      description: "Número de linhas exibidas quando multiline é verdadeiro."
    },
    successText: {
      control: { type: "text" },
      description:
        "Mensagem de sucesso para o input. Este texto é exibido quando o Input está em um estado de sucesso, indicando que a informação foi inserida corretamente."
    },
    type: {
      control: { type: "text" },
      description:
        "Tipo do elemento de input. Corresponde ao atributo HTML `type` (ex: 'text', 'email', 'password')."
    },
    value: {
      control: { type: "text" },
      description: "Valor do Input."
    },
    withAsterisk: {
      control: { type: "boolean" },
      description:
        "Determina se o asterisco obrigatório deve ser exibido. Isso é útil para indicar que o Input é obrigatório em um formulário. O asterisco só será exibido se o RadioGroup for marcado como obrigatório."
    }
  },
  args: {
    type: "text",
    label: "Rótulo do Input",
    placeholder: "Placeholder",
    value: ""
  }
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

const INPUT_WITH_STATE = (args: InputProps) => {
  const [value, setValue] = useState(args.value || "")

  const handle_change = (newValue: string | number) => {
    setValue(newValue)
    args.onChange?.(newValue)
  }

  return (
    <Input
      {...args}
      value={value}
      onChange={handle_change}
    />
  )
}

export const Default: Story = {
  name: "Versão padrão",
  args: {
    value: ""
  },
  render: (args) => <INPUT_WITH_STATE {...args} />
}

export const WithLeftSection: Story = {
  name: "Versão com seção à esquerda",
  args: {
    leftSection: <Icon type="person" />,
    value: ""
  },
  render: (args) => <INPUT_WITH_STATE {...args} />
}

export const WithRightSection: Story = {
  name: "Versão com seção à direita",
  args: {
    value: "",
    rightSection: <Icon type="person" />
  },
  render: (args) => <INPUT_WITH_STATE {...args} />
}

export const Disabled: Story = {
  name: "Versão desabilitada",
  args: {
    value: "",
    disabled: true,
    leftSection: (
      <Icon
        type="person"
        color="text-typography-disabled"
      />
    )
  },
  render: (args) => <INPUT_WITH_STATE {...args} />
}

export const WithHelperText: Story = {
  name: "Versão com mensagem de ajuda",
  args: {
    value: "",
    helperText: "Mensagem de ajuda"
  },
  render: (args) => <INPUT_WITH_STATE {...args} />
}

export const WithErrorText: Story = {
  name: "Versão com mensagem de erro",
  args: {
    value: "",
    errorText: "Mensagem de erro"
  },
  render: (args) => <INPUT_WITH_STATE {...args} />
}

export const WithSuccessText: Story = {
  name: "Versão com mensagem de sucesso",
  args: {
    value: "",
    successText: "Mensagem de sucesso"
  },
  render: (args) => <INPUT_WITH_STATE {...args} />
}

export const Multiline: Story = {
  name: "Versão multilinha",
  args: {
    multiline: true,
    rows: 4,
    placeholder: "Input multilinha",
    value: ""
  },
  render: (args) => <INPUT_WITH_STATE {...args} />
}
