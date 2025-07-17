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
import { OptionsList } from "./OptionsList"
import type { OptionObject, OptionType, SelectProps } from "./Select.types"
import { SelectedOptions } from "./SelectedOptions"

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
  leftSection,
  multiple = false,
  // notFoundLabel = "",
  optionClassName,
  paddingL = "pl-3",
  paddingR = "pr-8",
  paddingY = "py-1",
  placeholder = "Selecione uma opção",
  readOnly = false,
  required = false,
  selectedOptionColor = "bg-primary-highlight",
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
  const getOptionValue = useCallback((option: OptionType): string | number => {
    return typeof option === "object" ? option.value : option
  }, [])

  const selectedOption = filterSelectedOption()
  const selectedLabel = filterSelectedLabel()
  const initialSelectedOptions = filterInitialSelectedOptions(selectedOption)

  const [, setIsSearching] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string | number>("")
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>(initialSelectedOptions)

  const selectRef = useRef<HTMLDivElement>(null)
  const rootClasses = cn(full ? "w-full" : "w-fit", className)

  const mergedClasses = cn(
    !readOnly && !disabled ? "cursor-pointer" : "cursor-disabled",
    contentClassName
  )

  const reactId = useId()
  const baseId = id ?? `select-${reactId}`

  function filterSelectedOption(): OptionType | OptionType[] | undefined {
    if (Array.isArray(value)) {
      return options.filter((option) => {
        const optionValue = getOptionValue(option)
        return value.some((option) => {
          if (typeof option === "object" && option.value) {
            return option.value === optionValue
          }
          return option === optionValue
        })
      })
    }

    return options.find((option) => getOptionValue(option) === value)
  }

  function filterSelectedLabel() {
    if (multiple || Array.isArray(selectedOption)) {
      const selectedMultiple = (selectedOption as OptionType[]) || []
      if (selectedMultiple.length > 1 || Array.isArray(selectedOption)) {
        return ""
      }

      if (selectedMultiple.length === 1 || Array.isArray(selectedOption)) {
        const optionLabel =
          typeof selectedMultiple[0] === "object" ? selectedMultiple[0].label : selectedMultiple

        return String(optionLabel)
      }

      return ""
    }

    return typeof selectedOption === "object" && selectedOption !== null
      ? (selectedOption.label ?? "")
      : selectedOption || ""
  }

  function filterInitialSelectedOptions(
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

  function isOptionsListItemSelected(option: OptionType) {
    const currentValue = getOptionValue(option)
    const selectedValue = Array.isArray(selectedOption)
      ? selectedOption.map(getOptionValue)
      : getOptionValue(selectedOption as OptionType)
    const isSelected = multiple
      ? selectedOptions.some((selectedItem) => getOptionValue(selectedItem) === currentValue)
      : selectedValue === currentValue

    return isSelected
  }

  function handleInputClick() {
    setIsSearching(false)
    if (!disabled && !readOnly) {
      setIsListOpen(!isListOpen)
    }
  }

  function handleClear() {
    setSearchQuery("")
    setSelectedOptions([])
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

  function handleSelectOption(option: OptionType) {
    const newSelectedOption =
      typeof option === "object" && option !== null
        ? (option as OptionObject)
        : ({ value: option, label: String(option) } as OptionObject)

    if (multiple) {
      return handleMultipleSelect(newSelectedOption)
    }

    setIsSearching(false)
    setSearchQuery(newSelectedOption.label)
    onChange?.(newSelectedOption.value)
    setIsListOpen(false)
  }

  function handleMultipleSelect(newOption: OptionObject) {
    const isSelected = isOptionSelected(newOption)
    const updatedOptions = isSelected ? handleRemoveOption(newOption) : handleAddOption(newOption)

    onChange?.(updatedOptions)
    setSelectedOptions(updatedOptions)
  }

  function isOptionSelected(option: OptionType): boolean {
    const optionValue = typeof option === "object" ? option.value : option
    return selectedOptions.some((selectedOption) =>
      typeof selectedOption === "object"
        ? selectedOption.value === optionValue
        : selectedOption === optionValue
    )
  }

  function handleAddOption(option: OptionType): OptionType[] {
    return [...selectedOptions, option]
  }

  function handleRemoveOption(option: OptionType): OptionType[] {
    const optionValue = typeof option === "object" ? option.value : option
    const updatedSelectedOptions = selectedOptions.filter((selectedOption) =>
      typeof selectedOption === "object"
        ? selectedOption.value !== optionValue
        : selectedOption !== optionValue
    )

    return updatedSelectedOptions
  }

  function handleRemoveChipOption(option: OptionType) {
    const updatedSelectedOptions = handleRemoveOption(option)

    setSelectedOptions(updatedSelectedOptions)
    onChange?.(
      updatedSelectedOptions.map((selected) =>
        typeof selected === "object" ? selected.value : selected
      )
    )
  }

  function handleClickOption(event: MouseEvent<HTMLElement>, option: OptionType) {
    if (disabled || readOnly) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    handleSelectOption(option)
  }

  function handleKeyDownOption(event: KeyboardEvent<HTMLElement>) {
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
            placeholder={selectedOptions.length === 0 ? placeholder : ""}
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
            leftSection={
              ((multiple && selectedOptions.length) || leftSection) && (
                <SelectedOptions
                  readOnly={readOnly}
                  disabled={disabled}
                  selectedOptions={selectedOptions}
                  leftSection={leftSection}
                  multiple={multiple}
                  handleRemoveChipOption={handleRemoveChipOption}
                />
              )
            }
            rightSection={
              <Flex
                align="items-center"
                justify="justify-center"
              >
                {clearable && value && !readOnly && !disabled && (
                  <IconButton
                    icon="close"
                    size="medium"
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
          <OptionsList
            disabled={disabled}
            errorText={errorText}
            helperText={helperText}
            options={options}
            optionClassName={optionClassName}
            optionsListClassName={optionsListClassName}
            selectedOptionColor={selectedOptionColor}
            successText={successText}
            isOptionsListItemSelected={isOptionsListItemSelected}
            handleClickOption={handleClickOption}
            handleKeyDownOption={handleKeyDownOption}
          />
        )}
      </Flex>
    </div>
  )
}
