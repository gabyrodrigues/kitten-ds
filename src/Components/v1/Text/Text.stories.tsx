import type { Meta, StoryObj } from "@storybook/react"

import React from "react"
import { Text } from "."

const meta: Meta<typeof Text> = {
  component: Text,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Text component offers several styling variants (e.g., 'body1', 'body2') that control text size, weight, and line height. Fully responsive and customizable with Tailwind CSS utility classes, the component allows easy adjustments to alignment, color, and other properties."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The content to be displayed inside the Text component."
    },
    color: {
      control: { type: "text" },
      description: "The text color for the Text component."
    },
    variant: {
      control: { type: "select" },
      options: ["body1", "body2", "body3", "body4"],
      description: "The variant of the Text component."
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
      description: "The font-size of the Text component."
    },
    margin_bottom: {
      control: { type: "text" },
      description: "The margin applied at the bottom of the Text component."
    },
    margin_top: {
      control: { type: "text" },
      description: "The margin applied at the top of the Text component."
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
      description: "Tailwind class for controlling the letter text weight for the Text component."
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
      description: "Tailwind class for controlling the letter spacing of the Text component."
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
      description: "Tailwind class for controlling the line height of the Text component."
    },
    font_style: {
      control: { type: "select" },
      options: ["italic", "not-italic"],
      description: "Tailwind class for controlling the font style of the Text component."
    },
    decoration: {
      control: { type: "select" },
      options: ["underline", "overline", "line-through", "no-underline"],
      description: "Tailwind class for controlling decoration of the Text component."
    },
    component: {
      control: { type: "select" },
      options: [
        "p",
        "span",
        "label",
        "strong",
        "em",
        "b",
        "i",
        "small",
        "mark",
        "abbr",
        "cite",
        "time",
        "code",
        "s",
        "sub",
        "sup",
        "kbd",
        "var",
        "q",
        "blockquote",
        "pre",
        "li",
        "dt",
        "dd",
        "legend",
        "summary",
        "figcaption",
        "address",
        "ins",
        "del",
        "dfn",
        "samp"
      ],
      description: "The HTML element used to render the Text component."
    },
    className: {
      control: { type: "text" },
      description: "Controls extra CSS class names in the Text component."
    }
  },
  args: {
    children: "Text",
    color: "text-typography-primary",
    variant: "body1",
    weight: "font-normal",
    align: "text-left",
    component: "p"
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    align: "text-center",
    className: "w-full"
  }
}

export const WithElements: Story = {
  args: {
    children: <b>This is a plain text</b>
  }
}

export const WithHtmlContent: Story = {
  args: {
    align: "text-center",
    children: "<b>This is a string text</b> with html content"
  }
}

export const WithResponsiveSize: Story = {
  render: (args) => {
    return (
      <Text
        {...args}
        variant="body2"
        color="text-typography-primary"
        className="md:text-body3 xl:text-body1"
      >
        This is a text
      </Text>
    )
  }
}
