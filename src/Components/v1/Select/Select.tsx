import { cn } from "@utils"
import {
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
  useCallback,
  useId,
  useRef,
  useState
} from "react"
import { Flex } from "../Flex"
import { Icon } from "../Icon"
import { IconButton } from "../IconButton"
import { Input } from "../Input"
import { Text } from "../Text"
import type { OptionObject, OptionType, SelectProps } from "./Select.types"
import { getListPositionStyles } from "./Styles"

export default function Select({
  autoComplete = false,
  // autoPosition = false,
  bgColor = "bg-surface",
  borderColor = "border-input-border",
  className,
  clearable = false,
  clearButtonProps,
  contentClassName,
  disabled = false,
  errorText,
  fontSize,
  full = false,
  helperText,
  id,
  inputClassName,
  label,
  labelClassName,
  // leftSection,
  multiple = false,
  // notFoundLabel = "",
  // optionClassName,
  paddingL = "pl-3",
  paddingR = "pr-8",
  paddingY = "py-2",
  placeholder = "Selecione uma opção",
  readOnly = false,
  required = false,
  selectedItemColor = "bg-primary-highlight",
  successText,
  options,
  optionsListClassName,
  onClear,
  onChange,
  onChangeInput,
  value,
  withAsterisk = false,
  ...props
}: SelectProps) {
  const getItemValue = useCallback((option: OptionType): string | number => {
    return typeof option === "object" ? option.value : option
  }, [])

  const selectedItem = filterSelectedItem()
  const selectedLabel = filterSelectedLabel()
  const initialSelectedItems = filterInitialSelectedItems(selectedItem)

  const [, setIsSearching] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string | number>("")
  const [selectedItems, setSelectedItems] = useState<OptionType[]>(initialSelectedItems)

  const selectRef = useRef<HTMLDivElement>(null)
  const rootClasses = cn(full ? "w-full" : "w-fit", className)

  const mergedClasses = cn(
    !readOnly && !disabled ? "cursor-pointer" : "cursor-disabled",
    contentClassName
  )

  const reactId = useId()
  const baseId = id ?? `select-${reactId}`

  function filterSelectedItem(): OptionType | OptionType[] | undefined {
    if (Array.isArray(value)) {
      return options.filter((option) => {
        const optionValue = getItemValue(option)
        return value.some((item) => {
          if (typeof item === "object" && item.value) {
            return item.value === optionValue
          }
          return item === optionValue
        })
      })
    }

    return options.find((option) => getItemValue(option) === value)
  }

  function filterSelectedLabel() {
    if (multiple || Array.isArray(selectedItem)) {
      const selectedMultiple = (selectedItem as OptionType[]) || []
      if (selectedMultiple.length > 1 || Array.isArray(selectedItem)) {
        return ""
      }

      if (selectedMultiple.length === 1 || Array.isArray(selectedItem)) {
        const optionLabel =
          typeof selectedMultiple[0] === "object" ? selectedMultiple[0].label : selectedMultiple

        return String(optionLabel)
      }

      return ""
    }

    return typeof selectedItem === "object" && selectedItem !== null
      ? (selectedItem.label ?? "")
      : selectedItem || ""
  }

  function filterInitialSelectedItems(
    selectedOption: OptionType | OptionType[] | undefined
  ): OptionType[] {
    if (Array.isArray(selectedOption)) {
      return selectedOption.filter((option): option is OptionType => option !== undefined)
    }

    if (selectedOption && multiple) {
      return [selectedOption]
    }

    return []
  }

  function handleInputClick() {
    setIsSearching(false)
    if (!disabled && !readOnly) {
      setIsListOpen(!isListOpen)
    }
  }

  function handleClear() {
    setSearchQuery("")
    setSelectedItems([])
    setIsListOpen(false)
    if (onChange) onChange("")
    if (onClear) onClear()
  }

  function handleInputChange(value: string, event?: ChangeEvent<HTMLInputElement>) {
    if (!disabled && !readOnly) {
      // search_query_ref.current = value
      onChangeInput?.(value, event)
      setSearchQuery(value)
      setIsSearching(true)
      setIsListOpen(true)
    }
  }

  function handleSelectItem(option: OptionType) {
    const newSelectedItem =
      typeof option === "object" && option !== null
        ? (option as OptionObject)
        : ({ value: option, label: String(option) } as OptionObject)

    // if (multiple) {
    //   return handleMultipleSelect(newSelectedItem)
    // }

    setIsSearching(false)
    setSearchQuery(newSelectedItem.label)
    onChange?.(newSelectedItem.value)
    setIsListOpen(false)
  }

  function handleClick(event: MouseEvent<HTMLElement>, item: OptionType) {
    if (disabled || readOnly) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    handleSelectItem(item)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!disabled && (event.key === " " || event.key === "Enter")) {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  return (
    <div
      ref={selectRef}
      className={rootClasses}
    >
      <Flex
        align="items-center"
        width="w-full"
        className="relative"
      >
        <Flex
          onClick={handleInputClick}
          width="w-full"
        >
          <Input
            id={baseId}
            readOnly={!autoComplete || readOnly}
            label={label}
            labelClassName={labelClassName}
            value={autoComplete ? searchQuery : selectedLabel}
            onChange={autoComplete ? handleInputChange : undefined}
            required={required}
            disabled={disabled}
            placeholder={selectedItems.length === 0 ? placeholder : ""}
            withAsterisk={withAsterisk}
            helperText={helperText}
            errorText={errorText}
            successText={successText}
            borderColor={borderColor}
            bgColor={bgColor}
            full
            fontSize={fontSize}
            paddingL={paddingL}
            paddingR={paddingR}
            paddingY={paddingY}
            contentClassName={mergedClasses}
            onClick={handleInputClick}
            autoComplete="off"
            // leftSection={
            //   <SelectedOptions
            //     readOnly={readOnly}
            //     disabled={disabled}
            //     selected_items={selected_items}
            //     selected_style_count_label={selected_style_count_label}
            //     multiple_selected_empty_label={multiple_selected_empty_label}
            //     selected_label={selected_label}
            //     input_class_name={input_class_name}
            //     left_section={left_section}
            //     multiple={multiple}
            //     selected_style={selected_style}
            //     handleClear={handleClear}
            //     handleRemoveTag={handleRemoveTag}
            //   />
            // }
            rightSection={
              <Flex
                align="items-center"
                justify="justify-center"
              >
                {clearable && value && !readOnly && !disabled && (
                  <IconButton
                    icon="close"
                    ariaLabel="Clear selection"
                    iconClassName={cn(
                      "text-base text-typography-primary",
                      clearButtonProps?.iconClassName
                    )}
                    className={cn("hover:bg-highlight", clearButtonProps?.className)}
                    {...clearButtonProps}
                    onClick={(event) => {
                      event.stopPropagation()
                      handleClear()
                    }}
                  />
                )}
                <Icon
                  color={disabled ? "text-typography-disabled" : "text-typography-secondary"}
                  type={isListOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                  className={cn(
                    "w-4",
                    !readOnly && !disabled ? "cursor-pointer" : "cursor-default"
                  )}
                />
              </Flex>
            }
            inputClassName={cn(inputClassName)}
            {...props}
          />
        </Flex>

        {isListOpen && (
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
            {options.map((item) => (
              <Flex
                key={typeof item === "object" ? item.label : item}
                tabIndex={0}
                role="menuitem"
                width="w-full"
                paddingX="px-2"
                paddingY="py-2"
                justify="justify-between"
                className={cn(
                  "cursor-pointer [&+&]:border-t [&+&]:border-t-default-border hover:bg-highlight",
                  "focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring focus-visible:rounded-lg",
                  item === selectedItem && selectedItemColor
                )}
                onClick={(event) => handleClick(event, item)}
                onKeyDown={(event) => handleKeyDown(event)}
              >
                <Text
                  variant="body3"
                  color="text-typography-primary"
                >
                  {typeof item === "object" ? item.label : item}
                </Text>

                {item === selectedItem && (
                  <Icon
                    color={disabled ? "text-typography-disabled" : "text-primary"}
                    type="check"
                    aria-hidden="true"
                  />
                )}
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
    </div>
  )
}
