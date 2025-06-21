import type { Meta, StoryObj } from "@storybook/react"

import { type ChangeEvent, useState } from "react"
import { Flex } from "../Flex"
import Radio from "./Radio"

const meta = {
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
      description: "Specifies whether the Radio component is checked or not."
    },
    checkedClassName: {
      control: { type: "text" },
      description:
        "The CSS class name to be applied to the Radio component checked radio indicator."
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "gray"],
      description: "The color of the Radio component."
    },
    contentClassName: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Radio component content container."
    },
    labelClassName: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Radio component Label."
    },
    disabled: {
      control: { type: "boolean" },
      description: "Specifies whether the Radio Button is disabled or not."
    },
    errorText: {
      control: { type: "text" },
      description: "Error text for the radio"
    },
    helperText: {
      control: { type: "text" },
      description: "Help text for the radio"
    },
    id: {
      control: { type: "text" },
      description: "Id for the radio"
    },
    label: {
      control: { type: "text" },
      description: "The label text for the Radio Button."
    },
    inputClassName: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Radio component Input."
    },
    rootClassName: {
      control: { type: "text" },
      description: "The CSS class name to be applied to the Radio component root."
    },
    successText: {
      control: { type: "text" },
      description: "Success text for the radio"
    },
    value: {
      control: { type: "text" },
      description: "The value associated with the Radio Button."
    }
  },
  args: {
    disabled: false,
    color: "primary",
    label: "Label Text"
  }
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  name: "Versão padrão",
  args: {
    value: "test",
    onChange: () => null
  }
}

export const WithErrorText: Story = {
  name: "Versão com texto de erro",
  args: {
    errorText: "Texto de erro",
    value: "test",
    onChange: () => null
  }
}

export const WithHelpText: Story = {
  name: "Versão com texto de ajuda",
  args: {
    helperText: "Texto de ajuda",
    value: "test",
    onChange: () => null
  }
}

export const WithSuccessText: Story = {
  name: "Versão com texto de sucesso",
  args: {
    successText: "Texto de sucesso",
    value: "test",
    onChange: () => null
  }
}

export const RadioListGroup: Story = {
  name: "Versão de lista de Radios",
  args: {
    value: "test",
    checked: false,
    disabled: false
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState("")

    const options = [
      { value: "cupcake", label: "Cupcake" },
      { value: "pizza", label: "Pizza" },
      { value: "sushi", label: "Sushi" }
    ]

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value)
    }

    return (
      <Flex
        gap="gap-4"
        component="fieldset"
      >
        {options.map((option) => (
          <Radio
            {...args}
            key={option.value}
            value={option.value}
            label={option.label}
            name="food"
            checked={selectedValue === option.value}
            onChange={handleChange}
          />
        ))}
      </Flex>
    )
  }
}
