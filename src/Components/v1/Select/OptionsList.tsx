import { cn } from "@utils"
import type { KeyboardEvent, MouseEvent } from "react"
import { Flex } from "../Flex"
import { Icon } from "../Icon"
import { Text } from "../Text"
import type { OptionType, SelectProps } from "./Select.types"
import { getListPositionStyles, getOptionStyles } from "./Styles"

interface OptionsListProps
  extends Pick<
    SelectProps,
    | "disabled"
    | "errorText"
    | "helperText"
    | "options"
    | "optionClassName"
    | "optionsListClassName"
    | "successText"
    | "selectedOptionColor"
  > {
  isOptionsListItemSelected: (option: OptionType) => boolean
  handleClickOption(event: MouseEvent<HTMLElement>, option: OptionType): void
  handleKeyDownOption(event: KeyboardEvent<HTMLElement>): void
}

export function OptionsList({
  disabled,
  errorText,
  handleClickOption,
  handleKeyDownOption,
  helperText,
  isOptionsListItemSelected,
  options,
  optionClassName,
  optionsListClassName,
  selectedOptionColor = "bg-primary-highlight",
  successText
}: OptionsListProps) {
  return (
    <Flex
      direction="flex-col"
      radius="rounded-lg"
      width="w-full"
      className={cn(
        "absolute z-20 shadow-variant3 overflow-hidden",
        getListPositionStyles(helperText || errorText || successText),
        optionsListClassName
      )}
      role="menu"
    >
      {options.map((option) => (
        <Flex
          key={typeof option === "object" ? option.label : option}
          tabIndex={0}
          role="menuitem"
          width="w-full"
          paddingX="px-2"
          paddingY="py-2"
          justify="justify-between"
          className={cn(
            getOptionStyles(isOptionsListItemSelected(option), selectedOptionColor, optionClassName)
          )}
          onClick={(event) => handleClickOption(event, option)}
          onKeyDown={(event) => handleKeyDownOption(event)}
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
