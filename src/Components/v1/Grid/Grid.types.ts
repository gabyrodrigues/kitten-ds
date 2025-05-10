import type { ElementType, HTMLAttributes, ReactNode } from "react"
import type { GapY } from "tests/build/types"
import type { Gap, GapX } from "../types"

type GridRows = "grid-rows-none" | "grid-rows-subgrid" | `grid-rows-${string}`
type GridCols = "grid-cols-none" | "grid-cols-subgrid" | `grid-cols-${string}`
type GridFlow =
  | "grid-flow-row"
  | "grid-flow-col"
  | "grid-flow-dense"
  | "grid-flow-row-dense"
  | "grid-flow-col-dense"
type GridAutoRows =
  | "auto-rows-auto"
  | "auto-rows-min"
  | "auto-rows-max"
  | "auto-rows-fr"
  | `auto-rows-${string}`
type GridAutoCols =
  | "auto-cols-auto"
  | "auto-cols-min"
  | "auto-cols-max"
  | "auto-cols-fr"
  | `auto-cols-${string}`
type GridJustifyItems =
  | "justify-items-start"
  | "justify-items-end"
  | "justify-items-end-safe"
  | "justify-items-center"
  | "justify-items-center-safe"
  | "justify-items-stretch"
  | "justify-items-normal"
type GridAlign =
  | "items-start"
  | "items-end"
  | "items-end-safe"
  | "items-center"
  | "items-center-safe"
  | "items-baseline"
  | "items-baseline-last"
  | "items-stretch"
type GridOrder = "order-first" | "order-last" | "order-none" | `order-${string}`
type GridColSpan = "col-span-full" | `col-span-${string}`
type GridColStart = "col-start-auto" | `col-start-${string}`
type GridColEnd = "col-end-auto" | `col-end-${string}`
type GridRowSpan = "row-span-full" | `row-span-${string}`
type GridRowStart = "row-start-auto" | `row-start-${string}`
type GridRowEnd = "row-end-auto" | `row-end-${string}`

/**
 * Represents the props for the Grid component.
 */
export interface GridProps extends HTMLAttributes<HTMLElement> {
  /**
   * The children of the Grid component.
   */
  children: ReactNode

  /**
   * Specifies the columns in a grid layout.
   * This corresponds to Tailwind's `grid-cols-*` classes.
   */
  cols?: GridCols

  /**
   * Control of how elements are sized and placed across grid columns.
   * This corresponds to Tailwind's `col-span-*` classes.
   */
  col_span?: GridColSpan

  /**
   * Control of how elements are sized and placed across grid columns.
   * This corresponds to Tailwind's `col-start-*` classes.
   */
  col_start?: GridColStart

  /**
   * Control of how elements are sized and placed across grid columns.
   * This corresponds to Tailwind's `col-end-*` classes.
   */
  col_end?: GridColEnd

  /**
   * Specifies the rows in a grid layout.
   * This corresponds to Tailwind's `grid-rows-*` classes.
   */
  rows?: GridRows

  /**
   * Control of how elements are sized and placed across grid rows.
   * This corresponds to Tailwind's `row-span-*` classes.
   */
  row_span?: GridRowSpan

  /**
   * Control of how elements are sized and placed across grid rows.
   * This corresponds to Tailwind's `row-start-*` classes.
   */
  row_start?: GridRowStart

  /**
   * Control of how elements are sized and placed across grid rows.
   * This corresponds to Tailwind's `row-end-*` classes.
   */
  row_end?: GridRowEnd

  /**
   * The gap between items in the Grid component.
   * This corresponds to Tailwind's `gap-*` classes.
   */
  gap?: Gap

  /**
   * Controls the order in the Grid component.
   * This corresponds to Tailwind's `order-*` classes.
   */
  order?: GridOrder

  /**
   * Sets the column gap between children.
   * This corresponds to Tailwind's `gap-x-*` classes.
   */
  col_gap?: GapX

  /**
   * Sets the row gap between children.
   * This corresponds to Tailwind's `gap-y-*` classes.
   */
  row_gap?: GapY

  /**
   * Controls how the grid auto-places items along rows or columns.
   * Corresponds to Tailwind's `grid-flow-*` utilities.
   */
  flow?: GridFlow

  /**
   * Controls the size of implicitly-created grid columns.
   * This corresponds to Tailwind's `auto-cols-*` classes.
   */
  auto_cols?: GridAutoCols

  /**
   * Controls the size of implicitly-created grid rows.
   * This corresponds to Tailwind's `auto-rows-*` classes.
   */
  auto_rows?: GridAutoRows

  /**
   * Controls how Grid component items are aligned along their inline axis.
   * This corresponds to Tailwind's `justify-items-*` classes.
   */
  justify_items?: GridJustifyItems

  /**
   * Aligns items on the cross axis. Matches Tailwind `items-*` classes.
   */
  align?: GridAlign

  /**
   * Defines the HTML element to render as.
   * @default "div"
   */
  component?: ElementType

  /**
   * Optional additional CSS classes to apply to the Grid.
   */
  // biome-ignore lint/style/useNamingConvention: default className prop
  className?: string

  /**
   * The Grid component optional ref.
   */
  ref?: React.RefObject<HTMLElement>
}
