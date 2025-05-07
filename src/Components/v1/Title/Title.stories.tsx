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
          "The Title component is used for headings and titles across our design system. It offers multiple variants, each designed to fit different use cases and content types. These variants are predefined, and you can easily select the right one by passing the variant name as a prop to the component."
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
      description: "The variant of the Title component."
    },
    component: {
      control: { type: "text" },
      description: "The component used for the root node."
    },
    color: {
      control: { type: "text" },
      description: "The text color for the Title component."
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
    gutter_bottom: {
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
      description: "The text weight for the Title component."
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
      description: "The letter spacing of the Title component."
    },
    align: {
      control: { type: "select" },
      options: ["text-left", "text-center", "text-right", "text-justify", "text-start", "text-end"],
      description: "Controls the alignment of text."
    },
    wrap: {
      control: { type: "select" },
      options: ["text-wrap", "text-nowrap", "text-balance", "text-pretty"],
      description: "Controls how text wraps within an element."
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
      description: "Controls an element's white-space property."
    },
    word_break: {
      control: { type: "select" },
      options: ["break-normal", "break-words", "break-all", "break-keep"],
      description: "Controls how text wraps within an element."
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "Controls the transformation of text."
    },
    line_clamp: {
      control: { type: "number" },
      description: "Controls the number of lines before clamping."
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
      description: "The line height of the Title component."
    },
    font_style: {
      control: { type: "select" },
      options: ["italic", "not-italic"],
      description: "The font style of the Title component."
    }
  },
  args: {
    children: "Title",
    color: "text-typography-primary",
    font_size: undefined,
    gutter_bottom: undefined,
    variant: "h1",
    weight: "font-bold",
    letter_spacing: "tracking-normal",
    align: "text-left",
    wrap: "text-wrap",
    whitespace: "whitespace-normal",
    word_break: "break-normal",
    transform: undefined,
    line_clamp: undefined,
    line_height: undefined,
    font_style: undefined
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    font_size: undefined,
    gutter_bottom: undefined,
    color: "text-typography-primary",
    align: "text-center",
    wrap: "text-wrap",
    letter_spacing: "tracking-wide"
  }
}

export const WithElements: Story = {
  args: {
    font_size: undefined,
    gutter_bottom: undefined,
    weight: "font-bold",
    color: "text-typography-primary",
    align: "text-center",
    wrap: "text-wrap",
    letter_spacing: "tracking-wide",
    children: <b>This is a plain title</b>
  }
}

export const WithStringInnerContent: Story = {
  args: {
    font_size: undefined,
    gutter_bottom: undefined,
    weight: "font-bold",
    color: "text-typography-primary",
    align: "text-center",
    wrap: "text-wrap",
    letter_spacing: "tracking-wide",
    children: "<b>This is a string title</b> with html"
  }
}

export const WithResponsiveSize: Story = {
  render: (args) => {
    return (
      <Title
        {...args}
        variant="display2"
        color="text-typography-primary"
        weight="font-bold"
        align="text-left"
        class_name="text-4xl md:text-display2 xl:text-display1"
      >
        This is a title
      </Title>
    )
  }
}
