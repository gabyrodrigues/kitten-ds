import { cn } from "@utils"
import type { KeyboardEvent, MouseEvent, RefObject } from "react"
import { Flex } from "../Flex"
import { Icon } from "../Icon"
import { Text } from "../Text"
import type { OptionType, SelectProps } from "./Select.types"
import { getOptionStyles, getOptionsListPositionStyles, getOptionsListStyles } from "./Styles"

interface OptionsListProps
  extends Pick<
    SelectProps,
    | "autoPosition"
    | "disabled"
    | "errorText"
    | "helperText"
    | "label"
    | "multiple"
    | "optionClassName"
    | "optionsListClassName"
    | "successText"
    | "selectedOptionColor"
    | "readOnly"
  > {
  filteredOptionsList: OptionType[]
  optionsListId: string
  isListOpen: boolean
  listboxRef: React.RefObject<HTMLDivElement | null>
  optionsListItemRef: RefObject<(HTMLElement | null)[]>
  shouldOpenAbove: boolean
  isOptionsListItemSelected: (option: OptionType) => boolean
  handleClickOption(event: MouseEvent<HTMLElement>, option: OptionType): void
  handleKeyDownOption(event: KeyboardEvent<HTMLElement>, index: number): void
}

export function OptionsList({
  autoPosition = false,
  disabled,
  errorText,
  filteredOptionsList,
  helperText,
  isListOpen,
  label,
  listboxRef,
  multiple,
  optionClassName,
  optionsListClassName,
  optionsListId,
  optionsListItemRef,
  readOnly,
  selectedOptionColor = "bg-primary-highlight",
  shouldOpenAbove,
  successText,
  handleClickOption,
  handleKeyDownOption,
  isOptionsListItemSelected
}: OptionsListProps) {
  return (
    <Flex
      direction="flex-col"
      radius="rounded-lg"
      width="w-full"
      ref={listboxRef}
      className={cn(
        "none",
        label && "mt-0.5",
        getOptionsListStyles(),
        getOptionsListPositionStyles(
          autoPosition,
          shouldOpenAbove,
          label,
          helperText || errorText || successText
        ),
        isListOpen && !disabled && !readOnly ? "flex" : "hidden",
        optionsListClassName
      )}
      // biome-ignore lint/a11y/useSemanticElements: this is a custom select component list
      role="listbox"
      aria-multiselectable={multiple ? true : undefined}
      component="ul"
      tabIndex={-1}
      id={optionsListId}
    >
      {filteredOptionsList.map((option, index) => (
        <Flex
          key={typeof option === "object" ? option.label : option}
          ref={(element) => {
            optionsListItemRef.current[index] = element
          }}
          tabIndex={-1}
          aria-selected={isOptionsListItemSelected(option)}
          // biome-ignore lint/a11y/useSemanticElements: this is a custom select component list item
          role="option"
          component="li"
          width="w-full"
          paddingX="px-2"
          paddingY="py-2"
          justify="justify-between"
          className={cn(
            getOptionStyles(isOptionsListItemSelected(option), selectedOptionColor, optionClassName)
          )}
          onClick={(event) => handleClickOption(event, option)}
          onKeyDown={(event) => handleKeyDownOption(event, index)}
        >
          <Text
            variant="body3"
            color="text-typography-primary"
          >
            {typeof option === "object" ? option.label : option}
          </Text>

          {isOptionsListItemSelected(option) && (
            <Icon
              color={disabled ? "text-typography-disabled" : "text-primary"}
              type="check"
              aria-hidden="true"
            />
          )}
        </Flex>
      ))}
    </Flex>
  )
}
