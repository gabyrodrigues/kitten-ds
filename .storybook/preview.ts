import type { Preview } from "@storybook/react"
import "../src/styles.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
      sort: "alpha"
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FCFCFC" },
        { name: "dark", value: "#212121" }
      ]
    },
    docs: {
      controls: {
        sort: "alpha"
      }
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Sobre o Kitten DS", ["Guia de Uso", "Propriedades"]],
        includeNames: true
      }
    }
  },
  tags: ["autodocs"]
}

export default preview
