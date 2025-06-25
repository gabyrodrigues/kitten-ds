import type { Meta, StoryObj } from "@storybook/react"

import { useState } from "react"
import { Button } from "../Button"
import { Flex } from "../Flex"
import Checkbox from "./Checkbox"
import type { CheckboxProps } from "./Checkbox.types"

const meta = {
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
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "gray"],
      description:
        "Define a cor do Checkbox. As opções disponíveis são: 'primary', 'secondary' e 'gray'. Se o componente for usado dentro de um CheckboxGroup, a cor será herdada do grupo e não poderá ser alterada individualmente."
    },
    labelClassName: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS ao rótulo do Checkbox. Útil para personalizar o estilo do texto do rótulo associado ao Checkbox."
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Desabilita o Checkbox, tornando-o não interativo. Útil para estados onde a seleção não é permitida. Também pode ser herdado de um CheckboxGroup se estiver sendo usado dentro de um."
    },
    errorText: {
      control: { type: "text" },
      description:
        "Texto de erro para o checkbox. Este texto é exibido quando o Checkbox está em um estado de erro, indicando que algo está errado com a seleção."
    },
    helperText: {
      control: { type: "text" },
      description:
        "Texto de ajuda para o checkbox. Este texto é exibido abaixo do Checkbox para fornecer informações adicionais ou orientações ao usuário."
    },
    id: {
      control: { type: "text" },
      description:
        "Opção para definir um ID exclusivo para o Checkbox. Útil para acessibilidade e identificação do componente no DOM."
    },
    label: {
      control: { type: "text" },
      description:
        "O texto do rótulo associado ao Checkbox. Este texto é exibido ao lado do botão de opção e é usado para descrever a opção selecionável."
    },
    inputClassName: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS ao input do Checkbox. Útil para personalizar o estilo do elemento de entrada do Checkbox."
    },
    className: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS à raíz do Checkbox. Útil para personalizar o estilo da parte externa do componente."
    },
    successText: {
      control: { type: "text" },
      description:
        "Texto de sucesso para o checkbox. Este texto é exibido quando o Checkbox está em um estado de sucesso, indicando que a seleção foi bem-sucedida."
    },
    value: {
      control: { type: "text" },
      description:
        "O valor associado ao Checkbox. Este valor é usado para identificar a opção selecionada quando o Checkbox é parte de um grupo de seleção."
    }
  },
  args: {
    disabled: false,
    checked: false,
    color: "primary",
    label: "Label Text"
  }
} satisfies Meta<typeof Checkbox>

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
      gap="gap-12"
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
  args: {
    value: "default"
  },
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}

export const Indeterminate: Story = {
  name: "Versão estado indeterminado",
  args: {
    value: "default",
    indeterminate: false
  },
  render: (args) => <CHECKBOX_WITH_INDETERMINATE_STATE {...args} />
}

export const WithErrorText: Story = {
  name: "Versão com texto de erro",
  args: {
    errorText: "Texto de erro",
    value: "error"
  },
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}

export const WithHelpText: Story = {
  name: "Versão com texto de ajuda",
  args: {
    helperText: "Texto de ajuda",
    value: "helper"
  },
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}

export const WithSuccessText: Story = {
  name: "Versão com texto de sucesso",
  args: {
    successText: "Texto de sucesso",
    value: "success"
  },
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}
