import type { ReactNode } from "react"
import type { FlexProps } from "../Flex/Flex.types"
import type { PaddingX, PaddingY } from "../types"
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
   * Controls if Card has bordered styles.
   * @default false
   */
  hasBorder?: boolean

  /**
   * Controls if Card has box-shadow styles.
   * @default true
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
   * The heading of the Card component.
   */
  heading?: ReactNode

  /**
   * The CSS class name to be applied to the Card component heading.
   */
  headingClassName?: string

  /**
   * The footer of the Card component.
   */
  footer?: string | ReactNode

  /**
   * The CSS class name to be applied to the Card component footer.
   */
  footerClassName?: string

  /**
   * Controls card active state.
   * If true, the card will have active styles applied.
   * @default false
   */
  active?: boolean

  /**
   * Controls if Card is disabled;
   * If true, the card will not respond to click events and will have a disabled appearance.
   * @default false
   */
  disabled?: boolean

  /**
   * Controls Card loading state animation.
   * If true, shows a loading animation/skeleton instead of content.
   */
  isLoading?: boolean
}
