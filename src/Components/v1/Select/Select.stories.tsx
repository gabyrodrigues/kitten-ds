import type { Meta, StoryObj } from "@storybook/react"

import { useEffect, useState } from "react"
import Select from "./Select"
import type { OptionType, SelectProps } from "./Select.types"

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Componentes/Select",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "O componente Select é um seletor dropdown acessível e personalizável que permite aos usuários escolher entre uma lista de opções. Ele suporta recursos como seleção múltipla, pesquisa e estilos personalizados."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    autoComplete: {
      description:
        "Esta opção permite que o Select filtre opções com base na entrada do usuário. Quando definido como verdadeiro, o Select permitirá que os usuários digitem e filtrem opções dinamicamente. A propriedade `onChangeInput` pode ser usada para lidar com as alterações de entrada."
    },
    autoPosition: {
      description:
        "Posicionamento dinâmico do dropdown conforme espaço disponível. Isso permite que o dropdown ajuste sua posição com base no espaço disponível na viewport. É útil para garantir que o dropdown esteja sempre visível e não transborde a viewport, especialmente em dispositivos móveis onde o espaço na tela é limitado."
    },
    bgColor: {
      control: { type: "text" },
      description: "Controla a cor de fundo do Select."
    },
    borderColor: {
      control: { type: "text" },
      description: "Controla a cor da borda do Select."
    },
    className: {
      control: { type: "text" },
      description: "Opção para adicionar classes CSS à raiz do componente."
    },
    clearable: {
      description:
        "Quando verdadeiro, exibe um botão de ícone exibido quando o Select tem um valor selecionado, permitindo que o usuário limpe a seleção."
    },
    clearButtonProps: {
      description:
        "Propriedades do botão de limpar. Ele permite que as propriedades do botão de limpar, estendidas de `IconButtonProps`, sejam personalizadas, como ícone, tamanho e cor."
    },
    contentClassName: {
      control: { type: "text" },
      description: "Opção para adicionar classes CSS ao container que envolve o select."
    },
    componentProps: {
      control: { type: "object" },
      description:
        "Propriedades adicionais para o componente Select. Permite passar propriedades extras que serão aplicadas ao elemento HTML do Select, como atributos ARIA, classes CSS adicionais, etc."
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Desabilita o Select, tornando-o não interativo. Útil para estados onde a interação não é permitida."
    },
    errorText: {
      control: { type: "text" },
      description:
        "Mensagem de erro para o select. Este texto é exibido quando o Select está em um estado de erro, indicando que algo está errado com a seleção."
    },
    fontSize: {
      control: { type: "text" },
      description: "Controla o tamanho da fonte do Select."
    },
    full: {
      control: { type: "boolean" },
      description: "Controla se o Select deve ocupar toda a largura disponível."
    },
    helperText: {
      control: { type: "text" },
      description:
        "Mensagem de ajuda para o select. Este texto é exibido abaixo do Select para fornecer informações adicionais ou orientações ao usuário."
    },
    id: {
      control: { type: "text" },
      description:
        "Opção para definir um ID exclusivo para o Select. Em conjunto com o atributo `htmlFor` aplicado no rótulo a partir do ID definido, melhora a acessibilidade ao associar o rótulo ao campo de entrada."
    },
    inputClassName: {
      control: { type: "text" },
      description: "Classe CSS para o input do componente."
    },
    label: {
      control: { type: "text" },
      description:
        "Rótulo do input. A partir do ID definido, o rótulo é associado via atributo `htmlFor`."
    },
    labelClassName: {
      control: { type: "text" },
      description: "Opção para adicionar classes CSS ao rótulo do Input."
    },
    leftSection: {
      control: { type: "text" },
      description: "Conteúdo exibido à esquerda do Input."
    },
    multiple: {
      description:
        "Permite seleção múltipla. Quando definido como verdadeiro, o Select permite que os usuários selecionem várias opções de uma lista. Isso é útil quando há necessidade de selecionar mais de uma opção ao mesmo tempo."
    },
    notFoundLabel: {
      description: "Permite definir o texto exibido quando nenhuma opção é encontrada."
    },
    onBlur: {
      description:
        "Função chamada quando o Select perde o foco. Isso pode ser usado para validar ou processar a seleção atual."
    },
    onChange: {
      description:
        "Função chamada quando o valor selecionado é alterado. Útil para controlar a opção selecionada."
    },
    onChangeInput: {
      description: "Função chamada quando o valor digitado é alterado."
    },
    onClear: {
      description:
        "Função chamada quando o Select é limpo. Isso pode ser usado para redefinir o estado ou realizar outras ações quando o usuário limpa a seleção."
    },
    optionClassName: {
      description: "Classe CSS para cada opção da lista."
    },
    options: {
      description:
        "Opções disponíveis para seleção. Pode ser um array, em caso de múltipla seleção, ou um objeto ou string simples para seleção única."
    },
    optionsListClassName: {
      description:
        "Classe CSS para o container da lista de opções. Isso permite personalizar a aparência da lista de opções exibida no dropdown."
    },
    paddingL: {
      control: { type: "text" },
      description: "Espaçamento à esquerda do Select."
    },
    paddingR: {
      control: { type: "text" },
      description: "Espaçamento à direita do Select."
    },
    paddingY: {
      control: { type: "text" },
      description: "Espaçamento vertical do Select."
    },
    placeholder: {
      control: { type: "text" },
      description: "Texto exibido quando o Select está vazio e não está focado."
    },
    radius: {
      control: { type: "text" },
      description: "Controla o arredondamento das bordas do Select."
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
    selectedOptionColor: {
      description: "Cor de fundo da opção selecionada."
    },
    successText: {
      control: { type: "text" },
      description:
        "Mensagem de sucesso para o select. Este texto é exibido quando o Select está em um estado de sucesso, indicando que a informação foi inserida corretamente."
    },
    value: {
      description: "Valor(es) selecionado(s) no Select."
    },
    withAsterisk: {
      control: { type: "boolean" },
      description:
        "Determina se o asterisco obrigatório deve ser exibido. Isso é útil para indicar que o Select é obrigatório em um formulário. O asterisco só será exibido se o Select for marcado como obrigatório."
    }
  },
  args: {
    type: "text",
    label: "Rótulo do Select",
    placeholder: "Placeholder",
    clearable: false,
    value: "cupcake",
    multiple: false,
    readOnly: false,
    options: [
      { value: "banana", label: "Banana" },
      { value: "cupcake", label: "Cupcake" },
      { value: "mousse", label: "Mousse" },
      { value: "pizza", label: "Pizza" },
      { value: "sushi", label: "Sushi" }
    ] as { value: string | number; label: string }[]
  }
}

export default meta

type Story = StoryObj<typeof meta>

const SELECT_WITH_STATE = (args: SelectProps) => {
  const [value, setValue] = useState<OptionType | Array<OptionType> | undefined>(args.value)

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  )
}

const ASYNC_UPDATE_STATE_SELECT = (args: SelectProps) => {
  const [value, setValue] = useState<OptionType | Array<OptionType> | undefined>("")

  useEffect(() => {
    // Simulate an async update
    setTimeout(() => {
      setValue("banana")
    }, 2000)
  }, [])

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  )
}

const ASYNC_UPDATE_STATE_SELECT_EMPTY = (args: SelectProps) => {
  const [value, setValue] = useState<OptionType | Array<OptionType> | undefined>("banana")

  useEffect(() => {
    // Simulate an async update
    setTimeout(() => {
      setValue("")
    }, 2000)
  }, [])

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  )
}

const ASYNC_UPDATE_STATE_MULTIPLE_SELECT = (args: SelectProps) => {
  const [value, setValue] = useState<OptionType | Array<OptionType> | undefined>([])

  useEffect(() => {
    // Simulate an async update
    setTimeout(() => {
      setValue(["banana"])
    }, 2000)
  }, [])

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  )
}

const ASYNC_UPDATE_STATE_MULTIPLE_SELECT_EMPTY = (args: SelectProps) => {
  const [value, setValue] = useState<OptionType | Array<OptionType> | undefined>(["banana"])

  useEffect(() => {
    // Simulate an async update
    setTimeout(() => {
      setValue([])
    }, 2000)
  }, [])

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  )
}

export const Default: Story = {
  name: "Versão padrão",
  args: {
    label: "Selecione um alimento"
  },
  render: (args) => <SELECT_WITH_STATE {...(args as SelectProps)} />
}

export const Multiple: Story = {
  name: "Versão de seleção múltipla",
  args: {
    label: "Selecione seus alimentos favoritos",
    value: "",
    autoComplete: true,
    multiple: true,
    contentClassName: "w-full max-w-80"
  },
  render: (args) => <SELECT_WITH_STATE {...(args as SelectProps)} />
}

export const AsyncMultipleObject: Story = {
  name: "Versão de seleção múltipla com atualização assíncrona",
  args: {
    autoComplete: true,
    multiple: true,
    label: "Selecione seus alimentos favoritos",
    contentClassName: "w-full max-w-80"
  },
  render: (args) => <ASYNC_UPDATE_STATE_MULTIPLE_SELECT {...(args as SelectProps)} />
}

export const AsyncSimpleObject: Story = {
  name: "Versão de seleção simples com atualização assíncrona",
  args: {
    autoComplete: true,
    label: "Selecione um alimento",
    contentClassName: "w-full max-w-80"
  },
  render: (args) => <ASYNC_UPDATE_STATE_SELECT {...(args as SelectProps)} />
}

export const AsyncMultipleObjectEmpty: Story = {
  name: "Versão de seleção múltipla com limpeza assíncrona",
  args: {
    label: "Selecione seus alimentos favoritos",
    autoComplete: true,
    multiple: true,
    contentClassName: "w-full max-w-80"
  },
  render: (args) => <ASYNC_UPDATE_STATE_MULTIPLE_SELECT_EMPTY {...(args as SelectProps)} />
}

export const AsyncSimpleObjectEmpty: Story = {
  name: "Versão de seleção simples com limpeza assíncrona",
  args: {
    label: "Selecione um alimento",
    autoComplete: true,
    contentClassName: "w-full max-w-80"
  },
  render: (args) => <ASYNC_UPDATE_STATE_SELECT_EMPTY {...(args as SelectProps)} />
}
