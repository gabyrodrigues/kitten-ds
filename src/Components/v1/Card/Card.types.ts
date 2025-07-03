import type { ReactNode } from "react"
import type { FlexProps } from "../Flex/Flex.types"
import type { BgColor, BorderColor, PaddingX, PaddingY } from "../types"
/**
 * Props for the accessible Card component.
 *
 * Renders a flexible, stylized container designed to group together information and actions related to the same topic.
 *
 * This component is designed to be accessible and customizable,
 * allowing for different background colors, border styles, padding, and more.
 */
export interface CardProps extends Omit<FlexProps, "className" | "title"> {
  /**
   * The content of the Card.
   */
  children?: ReactNode

  /**
   * The background color of the Card.
   * This corresponds to Tailwind's `bg-*` classes.
   * @default "bg-neutral-white"
   */
  bgColor?: BgColor

  /**
   * Controls if Card has bordered styles.
   * @default false
   */
  hasBorder?: boolean

  /**
   * The border color of the Card.
   * This corresponds to Tailwind's `border-*` classes.
   */
  borderColor?: BorderColor

  /**
   * Controls if Card has box-shadow styles.
   * @default false
   */
  hasShadow?: boolean

  /**
   * The horizontal padding of the component.
   * This corresponds to Tailwind's `px-*` classes.
   */
  paddingX?: PaddingX

  /**
   * The vertical padding of the component.
   * This corresponds to Tailwind's `py-*` classes.
   */
  paddingY?: PaddingY

  /**
   * The CSS class name to be applied to the Card component.
   */
  className?: string

  /**
   * The CSS class name to be applied to the Card component content wrapper.
   */
  contentClassName?: string

  /**
   * The CSS class name to be applied to the Card component heading container.
   */
  headingClassName?: string

  /**
   * The CSS class name to be applied to the Card component title.
   */
  titleClassName?: string

  /**
   * The main title of the Card component.
   */
  title?: string | ReactNode

  /**
   * Controls Card loading state animation.
   */
  isLoading?: boolean
}
