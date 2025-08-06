import type { Meta, StoryObj } from "@storybook/react"

import { type ChangeEvent, useState } from "react"
import Radio from "./Radio"
import RadioGroup from "./RadioGroup"

const meta: Meta<typeof RadioGroup> = {
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
      options: ["primary", "secondary", "neutral"],
      description:
        "Define a cor do Radio Button. As opções disponíveis são: 'primary', 'secondary' e 'neutral'. Os componentes Radio dentro do RadioGroup herdarão essa cor e não poderão ser alterados individualmente."
    },
    defaultA11yLabel: {
      control: { type: "text" },
      description:
        "Mensagem de acessibilidade usado como rótulo do grupo quando label não é fornecido."
    },
    direction: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description:
        "Define a direção dos botões de rádio dentro do RadioGroup. As opções disponíveis são: 'horizontal' e 'vertical'. Isso controla o layout dos botões de rádio."
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilita os radios dentro do RadioGroup, tornando-os não interativos."
    },
    errorText: {
      control: { type: "text" },
      description:
        "Mensagem de erro geral para o RadioGroup. Esse texto é exibido para indicar que houve um erro ao selecionar uma opção dentro do grupo."
    },
    helperText: {
      control: { type: "text" },
      description:
        "Mensagem de ajuda geral para o radioGroup. Esta mensagem é exibida abaixo do grupo de radios para fornecer informações adicionais ou orientações ao usuário."
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
    required: {
      control: { type: "boolean" },
      description:
        "Indica se o RadioGroup é obrigatório. Isso pode ser usado para validação de formulários, onde o usuário deve selecionar pelo menos uma opção."
    },
    successText: {
      control: { type: "text" },
      description:
        "Mensagem de sucesso para o radio. Esta mensagem é exibida para indicar sucesso ao selecionar alguma opção dentro do grupo, indicando que a seleção foi bem-sucedida."
    },
    value: {
      control: { type: "text" },
      description:
        "O valor do Radio selecionado. Este valor é usado para identificar qual opção foi escolhida pelo usuário."
    },
    withAsterisk: {
      control: { type: "boolean" },
      description:
        "Determina se o asterisco obrigatório deve ser exibido. Isso é útil para indicar que o RadioGroup é obrigatório em um formulário. O asterisco só será exibido se o RadioGroup for marcado como obrigatório."
    }
  },
  args: {
    disabled: false,
    color: "primary",
    direction: "vertical",
    label: "Label Text",
    children: ""
  }
}

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
  name: "Versão com mensagem de erro",
  args: {
    errorText: "Mensagem de erro",
    value: "sushi"
  },
  render: (args) => <RADIO_GROUP_WITH_STATE {...args} />
}

export const WithHelperText: Story = {
  name: "Versão com mensagem de ajuda",
  args: {
    helperText: "Mensagem de ajuda",
    value: "pizza"
  },
  render: (args) => <RADIO_GROUP_WITH_STATE {...args} />
}

export const WithSuccessText: Story = {
  name: "Versão com mensagem de sucesso",
  args: {
    successText: "Mensagem de sucesso",
    value: "cupcake"
  },
  render: (args) => <RADIO_GROUP_WITH_STATE {...args} />
}

export const WithAsterisk: Story = {
  name: "Versão de lista obrigatória",
  args: {
    errorText: "Campo obrigatório",
    required: true,
    value: "sushi",
    withAsterisk: true
  },
  render: (args) => <RADIO_GROUP_WITH_STATE {...args} />
}
