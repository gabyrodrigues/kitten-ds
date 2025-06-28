import type { Meta, StoryObj } from "@storybook/react"

import { type ChangeEvent, useState } from "react"
import Radio from "./Radio"
import RadioGroup from "./RadioGroup"

const meta = {
  component: RadioGroup,
  title: "Componentes/RadioGroup",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente RadioGroup agrupa e organiza radios, permitindo que o usuário selecione uma única opção de um conjunto. Ele é útil para situações onde apenas uma escolha é permitida entre várias opções, como em formulários de seleção de preferências."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Radios a serem exibidos no grupo. Aceita apenas componentes Radio."
    },
    className: {
      control: { type: "text" },
      description:
        "Opção para adicionar classes CSS à raíz do RadioGroup. Útil para personalizar o estilo da parte externa do componente."
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "gray"],
      description:
        "Define a cor do Radio Button. As opções disponíveis são: 'primary', 'secondary' e 'gray'. Os componentes Radio dentro do RadioGroup herdarão essa cor e não poderão ser alterados individualmente."
    },
    defaultA11yLabel: {
      control: { type: "text" },
      description:
        "Texto de acessibilidade usado como rótulo do grupo quando label não é fornecido."
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilita os radios dentro do RadioGroup, tornando-os não interativos."
    },
    errorText: {
      control: { type: "text" },
      description:
        "Texto de erro geral para o RadioGroup. Esse texto é exibido para indicar que houve um erro ao selecionar uma opção dentro do grupo."
    },
    helperText: {
      control: { type: "text" },
      description:
        "Texto de ajuda geral para o radioGroup. Este texto é exibido abaixo do grupo de radios para fornecer informações adicionais ou orientações ao usuário."
    },
    id: {
      control: { type: "text" },
      description:
        "ID exclusivo para o RadioGroup. Útil para acessibilidade e identificação do componente no DOM."
    },
    label: {
      control: { type: "text" },
      description:
        "O texto do rótulo a ser exibido acima da lista de radios. Se não for fornecido, o rótulo acessível padrão será usado para a acessibilidade do componente."
    },
    labelClassName: {
      control: { type: "text" },
      description: "Opção para adicionar classes CSS ao rótulo do RadioGroup."
    },
    listClassName: {
      control: { type: "text" },
      description: "Classes CSS para o contêiner da lista de radios dentro do RadioGroup."
    },
    successText: {
      control: { type: "text" },
      description:
        "Texto de sucesso para o radio. Este texto é exibido para indicar sucesso ao selecionar alguma opção dentro do grupo, indicando que a seleção foi bem-sucedida."
    },
    value: {
      control: { type: "text" },
      description:
        "O valor do Radio selecionado. Este valor é usado para identificar qual opção foi escolhida pelo usuário."
    }
  },
  args: {
    disabled: false,
    color: "primary",
    label: "Label Text",
    children: ""
  }
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const RADIO_GROUP_WITH_STATE = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    setSelectedValue(newValue)
    args.onChange?.(event)
  }

  return (
    <RadioGroup
      {...args}
      name="food"
      value={selectedValue}
      onChange={handleChange}
      label="Escolha um alimento"
    >
      <Radio
        value="cupcake"
        label="Cupcake"
      />
      <Radio
        value="pizza"
        label="Pizza"
      />
      <Radio
        value="sushi"
        label="Sushi"
      />
    </RadioGroup>
  )
}

export const Default: Story = {
  name: "Versão de lista padrão",
  args: {
    value: "cupcake"
  },
  render: (args) => <RADIO_GROUP_WITH_STATE {...args} />
}

export const WithErrorText: Story = {
  name: "Versão com texto de erro",
  args: {
    errorText: "Texto de erro",
    value: "sushi"
  },
  render: (args) => <RADIO_GROUP_WITH_STATE {...args} />
}

export const WithHelperText: Story = {
  name: "Versão com texto de ajuda",
  args: {
    helperText: "Texto de ajuda",
    value: "pizza"
  },
  render: (args) => <RADIO_GROUP_WITH_STATE {...args} />
}

export const WithSuccessText: Story = {
  name: "Versão com texto de sucesso",
  args: {
    successText: "Texto de sucesso",
    value: "cupcake"
  },
  render: (args) => <RADIO_GROUP_WITH_STATE {...args} />
}
