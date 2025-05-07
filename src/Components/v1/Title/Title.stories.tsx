import type { Meta, StoryObj } from "@storybook/react"

import React from "react"
import { Title } from "."

const meta: Meta<typeof Title> = {
  component: Title,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Title component provides standardized typography styles for headings and page titles. It supports predefined visual variants (e.g., 'h1'-'h6', 'display1'-'display3') to suit different use cases. The rendered HTML element can be customized via the `component` prop."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The content to be displayed inside the Title component."
    },
    variant: {
      control: { type: "select" },
      options: ["display1", "display2", "display3", "h1", "h2", "h3", "h4", "h5", "h6"],
      description:
        "Visual style of the title. 'h1'-'h6' map to heading styles, 'display1'-'display3' are larger variants. The rendered HTML tag can be overridden via the `component` prop."
    },
    component: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "The HTML element used to render the Title component."
    },
    className: {
      control: { type: "text" },
      description: "Controls extra CSS class names in the Title component."
    },
    color: {
      control: { type: "text" },
      description: "Tailwind class controlling the text color."
    },
    font_size: {
      control: { type: "select" },
      options: [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
        "text-6xl",
        "text-7xl",
        "text-8xl",
        "text-9xl"
      ],
      description: "The font-size of the Title component."
    },
    margin_bottom: {
      control: { type: "text" },
      description: "The margin applied in the bottom of the Title component."
    },
    weight: {
      control: { type: "select" },
      options: [
        "font-thin",
        "font-extralight",
        "font-light",
        "font-normal",
        "font-medium",
        "font-semibold",
        "font-bold",
        "font-extrabold",
        "font-black"
      ],
      description: "Tailwind class for controlling the letter text weight for the Title component."
    },
    letter_spacing: {
      control: { type: "select" },
      options: [
        "tracking-tighter",
        "tracking-tight",
        "tracking-normal",
        "tracking-wide",
        "tracking-wider",
        "tracking-widest"
      ],
      description: "Tailwind class for controlling the letter spacing of the Title component."
    },
    align: {
      control: { type: "select" },
      options: ["text-left", "text-center", "text-right", "text-justify", "text-start", "text-end"],
      description: "Tailwind class for controlling the alignment of text."
    },
    wrap: {
      control: { type: "select" },
      options: ["text-wrap", "text-nowrap", "text-balance", "text-pretty"],
      description: "Tailwind class for controlling how text wraps within an element."
    },
    whitespace: {
      control: { type: "select" },
      options: [
        "whitespace-normal",
        "whitespace-nowrap",
        "whitespace-pre",
        "whitespace-pre-line",
        "whitespace-pre-wrap",
        "whitespace-break-spaces"
      ],
      description: "Tailwind class for controlling an element's white-space property."
    },
    word_break: {
      control: { type: "select" },
      options: ["break-normal", "break-all", "break-keep"],
      description: "Tailwind class for controlling how text wraps within an element."
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "Tailwind class for controlling the transformation of text."
    },
    line_clamp: {
      control: { type: "text" },
      description: "Tailwind class for controlling the number of lines before clamping."
    },
    line_height: {
      control: { type: "select" },
      options: [
        "leading-none",
        "leading-tight",
        "leading-snug",
        "leading-normal",
        "leading-relaxed",
        "leading-loose"
      ],
      description: "Tailwind class for controlling the line height of the Title component."
    },
    font_style: {
      control: { type: "select" },
      options: ["italic", "not-italic"],
      description: "Tailwind class for controlling the font style of the Title component."
    },
    decoration: {
      control: { type: "select" },
      options: ["underline", "overline", "line-through", "no-underline"],
      description: "Tailwind class for controlling decoration of the Title component."
    }
  },
  args: {
    children: "Title",
    color: "text-typography-primary",
    variant: "h1",
    align: "text-left"
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: "text-typography-primary",
    align: "text-center"
  }
}

export const WithElements: Story = {
  args: {
    children: (
      <>
        This is a <i>title</i>
      </>
    )
  }
}

export const WithHtmlContent: Story = {
  args: {
    children: "<b>This is a string title</b> with html content"
  }
}

export const WithResponsiveSize: Story = {
  render: (args) => {
    return (
      <Title
        {...args}
        variant="display2"
        color="text-typography-primary"
        className="md:text-display2 xl:text-display1"
      >
        This is a title
      </Title>
    )
  }
}
