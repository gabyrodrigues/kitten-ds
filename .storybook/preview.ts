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
    }
  },
  tags: ["autodocs"]
}

export default preview
