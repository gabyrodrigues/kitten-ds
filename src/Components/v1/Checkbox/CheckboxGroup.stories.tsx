import type { Meta, StoryObj } from "@storybook/react"

import { type ChangeEvent, useState } from "react"
import { Flex } from "../Flex"
import Checkbox from "./Checkbox"
import CheckboxGroup from "./CheckboxGroup"

const meta = {
  component: CheckboxGroup,
  title: "Componentes/CheckboxGroup",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente CheckboxGroup agrupa e organiza múltiplos checkboxes, permitindo seleção múltipla de opções."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description:
        "Checkboxes a serem exibidos no grupo. Aceita componentes Checkbox, Flex ou div para organização, como mostrado no exemplo de lista com estado indeterminado."
    },
    className: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS à raíz do CheckboxGroup. Útil para personalizar o estilo da parte externa do componente."
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "gray"],
      description:
        "Define a cor do Checkbox. As opções disponíveis são: 'primary', 'secondary' e 'gray'. Os componentes Checkbox dentro do CheckboxGroup herdarão essa cor e não poderão ser alterados individualmente."
    },
    defaultA11yLabel: {
      control: { type: "text" },
      description:
        "Mensagem de acessibilidade usado como rótulo do grupo quando label não é fornecido."
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilita os checkboxes dentro do CheckboxGroup, tornando-os não interativos."
    },
    errorText: {
      control: { type: "text" },
      description:
        "Mensagem de erro geral para o CheckboxGroup. Esse texto é exibido para indicar que houve um erro na seleção de uma ou mais opções dentro do grupo."
    },
    helperText: {
      control: { type: "text" },
      description:
        "Mensagem de ajuda geral para o CheckboxGroup. Esta mensagem é exibida abaixo do grupo de checkboxes para fornecer informações adicionais ou orientações ao usuário."
    },
    id: {
      control: { type: "text" },
      description:
        "Opção para definir um ID exclusivo para o CheckboxGroup. Útil para acessibilidade e identificação do componente no DOM."
    },
    label: {
      control: { type: "text" },
      description:
        "O texto de rótulo a ser exibido acima da lista de checkboxes. Se não for fornecido, o rótulo acessível padrão será usado para a acessibilidade do componente."
    },
    labelClassName: {
      control: { type: "text" },
      description: "Opção para adicionar classes CSS ao rótulo do CheckboxGroup."
    },
    listClassName: {
      control: { type: "text" },
      description: "Classes CSS para o contêiner da lista de checkboxes dentro do CheckboxGroup."
    },
    required: {
      control: { type: "boolean" },
      description:
        "Indica se o CheckboxGroup é obrigatório. Isso pode ser usado para validação de formulários, onde o usuário deve selecionar pelo menos uma opção."
    },
    successText: {
      control: { type: "text" },
      description:
        "Mensagem de sucesso para o checkbox. Esta mensagem é exibida para indicar sucesso ao selecionar uma ou mais opções dentro do grupo, indicando que a seleção foi bem-sucedida."
    },
    withAsterisk: {
      control: { type: "boolean" },
      description:
        "Determina se o asterisco obrigatório deve ser exibido. Isso é útil para indicar que o CheckboxGroup é obrigatório em um formulário. O asterisco só será exibido se o CheckboxGroup for marcado como obrigatório."
    }
  },
  args: {
    children: ""
  }
} satisfies Meta<typeof CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

const CHECKBOX_GROUP_WITH_STATE = (args) => {
  const [state, setState] = useState({ cupcake: true, pizza: false, sushi: false })

  function handleChange(checked: boolean, event: ChangeEvent<HTMLInputElement>) {
    if (!event?.target?.name) return
    setState({ ...state, [event.target.name]: checked })
  }

  return (
    <CheckboxGroup
      label="Selecione seus alimentos favoritos"
      {...args}
    >
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

export const Default: Story = {
  name: "Versão de lista padrão",
  render: (args) => <CHECKBOX_GROUP_WITH_STATE {...args} />
}

export const WithErrorText: Story = {
  name: "Versão com mensagem de erro",
  args: {
    errorText: "Mensagem de erro"
  },
  render: (args) => <CHECKBOX_GROUP_WITH_STATE {...args} />
}

export const WithHelperText: Story = {
  name: "Versão com mensagem de ajuda",
  args: {
    helperText: "Mensagem de ajuda"
  },
  render: (args) => <CHECKBOX_GROUP_WITH_STATE {...args} />
}

export const WithSuccessText: Story = {
  name: "Versão com mensagem de sucesso",
  args: {
    successText: "Mensagem de sucesso"
  },
  render: (args) => <CHECKBOX_GROUP_WITH_STATE {...args} />
}

export const WithAsterisk: Story = {
  name: "Versão de lista obrigatória",
  args: {
    errorText: "Campo obrigatório",
    required: true,
    withAsterisk: true
  },
  render: (args) => <CHECKBOX_GROUP_WITH_STATE {...args} />
}

export const IndeterminateGroup: Story = {
  name: "Versão de lista com indeterminado",
  render: (args) => {
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
      <CheckboxGroup
        label="Cardápio"
        {...args}
      >
        <Checkbox
          checked={checked[0] && checked[1]}
          indeterminate={checked[0] !== checked[1]}
          onChange={handleParentChange}
          label="Sobremesa"
          name="parent"
        />

        <Checkbox
          checked={checked[0]}
          onChange={handleChild1Change}
          label="Brigadeiro"
          name="child1"
          className="ml-9"
        />
        <Checkbox
          checked={checked[1]}
          onChange={handleChild2Change}
          label="Mousse"
          name="child2"
          className="ml-9"
        />
      </CheckboxGroup>
    )
  }
}
