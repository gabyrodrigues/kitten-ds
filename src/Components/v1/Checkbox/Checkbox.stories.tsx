import type { Meta, StoryObj } from "@storybook/react"

import { type ChangeEvent, useState } from "react"
import { Button } from "../Button"
import { Flex } from "../Flex"
import Checkbox from "./Checkbox"
import type { CheckboxProps } from "./Checkbox.types"
import CheckboxGroup from "./CheckboxGroup"

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
    className: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS à raíz do Checkbox. Útil para personalizar o estilo da parte externa do componente."
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "gray"],
      description:
        "Define a cor do Checkbox. As opções disponíveis são: 'primary', 'secondary' e 'gray'. Se o componente for usado dentro de um CheckboxGroup, a cor será herdada do grupo e não poderá ser alterada individualmente."
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
    successText: {
      control: { type: "text" },
      description:
        "Texto de sucesso para o checkbox. Este texto é exibido quando o Checkbox está em um estado de sucesso, indicando que a seleção foi bem-sucedida."
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
  name: "Versão com texto de erro",
  args: {
    errorText: "Texto de erro"
  },
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}

export const WithHelperText: Story = {
  name: "Versão com texto de ajuda",
  args: {
    helperText: "Texto de ajuda"
  },
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}

export const WithSuccessText: Story = {
  name: "Versão com texto de sucesso",
  args: {
    successText: "Texto de sucesso"
  },
  render: (args) => <CHECKBOX_WITH_STATE {...args} />
}

export const CheckboxGroupItems: Story = {
  name: "Versão de lista com CheckboxGroup",
  render: () => {
    const [state, setState] = useState({ cupcake: true, pizza: false, sushi: false })

    function handleChange(checked: boolean, event: ChangeEvent<HTMLInputElement>) {
      if (!event?.target?.name) return
      setState({ ...state, [event.target.name]: checked })
    }

    return (
      <CheckboxGroup label="Selecione seus alimentos favoritos">
        <Checkbox
          checked={state.cupcake}
          onChange={handleChange}
          name="cupcake"
          label="Cupcake"
        />
        <Checkbox
          name="pizza"
          label="Pizza"
          checked={state.pizza}
          onChange={handleChange}
        />
        <Checkbox
          name="sushi"
          label="Sushi"
          checked={state.sushi}
          onChange={handleChange}
        />
      </CheckboxGroup>
    )
  }
}

export const IndeterminateGroup: Story = {
  name: "Versão de lista com indeterminado",
  render: () => {
    const [checked, setChecked] = useState([true, false])

    const handleParentChange = (checked: boolean) => {
      setChecked([checked, checked])
    }

    const handleChild1Change = (checked1: boolean) => {
      setChecked([checked1, checked[1]])
    }

    const handleChild2Change = (checked2: boolean) => {
      setChecked([checked[0], checked2])
    }

    return (
      <CheckboxGroup label="Cardápio">
        <Checkbox
          checked={checked[0] && checked[1]}
          indeterminate={checked[0] !== checked[1]}
          onChange={handleParentChange}
          label="Sobremesa"
          name="parent"
        />
        <Flex
          direction="flex-col"
          rowGap="gap-y-3"
          className="ml-8"
        >
          <Checkbox
            checked={checked[0]}
            onChange={handleChild1Change}
            label="Brigadeiro"
            name="child1"
          />
          <Checkbox
            checked={checked[1]}
            onChange={handleChild2Change}
            label="Mousse"
            name="child2"
          />
        </Flex>
      </CheckboxGroup>
    )
  }
}
