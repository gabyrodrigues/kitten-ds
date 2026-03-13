import type { Preview } from "@storybook/react-vite"
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
      options: {
        light: { name: "light", value: "#FCFCFC" },
        dark: { name: "dark", value: "#212121" }
      }
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
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },

  tags: ["autodocs"],

  initialGlobals: {
    backgrounds: {
      value: "light"
    }
  }
}

export default preview
