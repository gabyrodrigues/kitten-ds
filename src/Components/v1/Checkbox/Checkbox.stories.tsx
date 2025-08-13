import type { Meta, StoryObj } from "@storybook/react"

import { type ChangeEvent, useState } from "react"
import { Button } from "../Button"
import { Flex } from "../Flex"
import Checkbox from "./Checkbox"
import type { CheckboxProps } from "./Checkbox.types"

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Componentes/Checkbox",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente Checkbox padroniza a aparência e os estados das caixas de seleção a partir de variantes para oferecer uma seleção clara e acessível."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Exibe o Checkbox como selecionado ou não."
    },
    className: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS à raíz do Checkbox. Útil para personalizar o estilo da parte externa do componente."
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "neutral"],
      description:
        "Define a cor do Checkbox. As opções disponíveis são: 'primary', 'secondary' e 'neutral'. Se o componente for usado dentro de um CheckboxGroup, a cor será herdada do grupo e não poderá ser alterada individualmente."
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Desabilita o Checkbox, tornando-o não interativo. Útil para estados onde a seleção não é permitida. Também pode ser herdado de um CheckboxGroup se estiver sendo usado dentro de um."
    },
    errorText: {
      control: { type: "text" },
      description:
        "Mensagem de erro para o checkbox. Esta mensagem é exibida quando o Checkbox está em um estado de erro, indicando que algo está errado com a seleção."
    },
    helperText: {
      control: { type: "text" },
      description:
        "Mensagem de ajuda para o checkbox. Esta mensagem é exibida abaixo do Checkbox para fornecer informações adicionais ou orientações ao usuário."
    },
    id: {
      control: { type: "text" },
      description:
        "Opção para definir um ID exclusivo para o Checkbox. Útil para acessibilidade e identificação do componente no DOM."
    },
    label: {
      control: { type: "text" },
      description:
        "O texto do rótulo associado ao Checkbox. Este rótulo é exibido ao lado do botão de opção e é usado para descrever a opção selecionável."
    },
    labelClassName: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS ao rótulo do Checkbox. Útil para personalizar o estilo do texto do rótulo associado ao Checkbox."
    },
    inputClassName: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS ao input do Checkbox. Útil para personalizar o estilo do elemento de entrada do Checkbox."
    },
    name: {
      control: { type: "text" },
      description:
        "O nome do Checkbox. Este atributo é usado para identificar o Checkbox em formulários e eventos de mudança."
    },
    readOnly: {
      control: { type: "boolean" },
      description:
        "Especifica se o Checkbox é somente leitura ou não. Isso significa que o usuário não pode alterar seu estado, mas ainda pode ser focado e interagido programaticamente. Útil para exibir o Checkbox em um estado não editável, mas ainda permitindo que ele faça parte do formulário."
    },
    successText: {
      control: { type: "text" },
      description:
        "Mensagem de sucesso para o checkbox. Esta mensagem é exibida quando o Checkbox está em um estado de sucesso, indicando que a seleção foi bem-sucedida."
    }
  },
  args: {
    disabled: false,
    checked: false,
    color: "primary",
    label: "Label Text",
    readOnly: false
  }
}

export default meta
type Story = StoryObj<typeof meta>

const CHECKBOX_WITH_STATE = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked ?? false)

  function handleChange() {
    setChecked(!checked)
    args.onChange?.(!checked)
  }

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={handleChange}
    />
  )
}

const CHECKBOX_WITH_INDETERMINATE_STATE = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked ?? false)
  const [indeterminate, setIndeterminate] = useState<boolean>(args.indeterminate ?? false)

  function handleChange(nextChecked: boolean) {
    if (indeterminate) {
      setIndeterminate(false)
      setChecked(true)
    } else {
      setChecked(nextChecked)
    }
  }

  return (
    <Flex
      direction="flex-col"
      gap="gap-2xl"
    >
      <Checkbox
        {...args}
        checked={checked}
        indeterminate={indeterminate}
        onChange={handleChange}
      />

      <Button
        variant="outlined"
        onClick={() => setIndeterminate(true)}
      >
        Tornar indeterminado
      </Button>
    </Flex>
  )
}

export const Default: Story = {
  name: "Versão padrão",
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}

export const Indeterminate: Story = {
  name: "Versão estado indeterminado",
  args: {
    indeterminate: true
  },
  render: (args) => <CHECKBOX_WITH_INDETERMINATE_STATE {...args} />
}

export const WithErrorText: Story = {
  name: "Versão com mensagem de erro",
  args: {
    errorText: "Mensagem de erro"
  },
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}

export const WithHelperText: Story = {
  name: "Versão com mensagem de ajuda",
  args: {
    helperText: "Mensagem de ajuda"
  },
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}

export const WithSuccessText: Story = {
  name: "Versão com mensagem de sucesso",
  args: {
    successText: "Mensagem de sucesso"
  },
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}
