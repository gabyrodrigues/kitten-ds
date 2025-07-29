import { cn } from "@utils"
import { type ChangeEvent, useCallback, useEffect, useId, useRef, useState } from "react"
import { Flex } from "../Flex"
import { Icon } from "../Icon"
import { IconButton } from "../IconButton"
import { Input } from "../Input"
import { OptionsList } from "./OptionsList"
import type { OptionObject, OptionType, SelectProps } from "./Select.types"
import { SelectedOptions } from "./SelectedOptions"

export default function Select({
  autoComplete = false,
  autoPosition = false,
  bgColor = "bg-surface",
  borderColor = "border-input-border",
  className,
  clearable = false,
  clearButtonProps,
  contentClassName,
  componentProps,
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
  notFoundLabel,
  optionClassName,
  paddingL = "pl-3",
  paddingR = clearable ? "pr-16" : "pr-8",
  paddingY = "py-1",
  placeholder = "Selecione uma opção",
  readOnly = false,
  required = false,
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
  const getOptionValue = useCallback((option: OptionType): string => {
    return typeof option === "object" ? option.value : option
  }, [])
  const getOptionLabel = useCallback((option: OptionType): string => {
    return typeof option === "object" ? option.label : String(option)
  }, [])

  const selectedOption = getSelectedOption()
  const selectedLabel = getSelectedLabel(selectedOption)
  const initialSelectedOptions = filterInitialSelectedOptions(selectedOption)

  const [isSearching, setIsSearching] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string>(selectedLabel)
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>(initialSelectedOptions)
  const [shouldOpenAbove, setShouldOpenAbove] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const selectRef = useRef<HTMLDivElement>(null)
  const comboboxRef = useRef<HTMLInputElement>(null)
  const listboxRef = useRef<HTMLDivElement>(null)
  const mergedRootClasses = cn(full ? "w-full" : "w-fit", className)
  const mergedInputClasses = cn(!autoComplete && multiple && "w-0 h-0 hidden", inputClassName)
  const optionsListItemRef = useRef<(HTMLDivElement | null)[]>([])

  const mergedClasses = cn(
    !readOnly && !disabled ? "cursor-pointer" : "cursor-disabled",
    !disabled &&
      "focus-within:outline-0 focus-within:ring-2 focus-within:ring-focus-ring focus-within:border-transparent",
    contentClassName
  )

  const reactId = useId()
  const reactListId = useId()
  const baseId = id ?? `select-${reactId}`
  const optionsListId = `select-list-${reactListId}`

  const filteredOptionsList = filterOptionsList(options, searchQuery, autoComplete, isSearching)

  function getSelectedOption(): OptionType | OptionType[] | undefined {
    if (multiple && Array.isArray(value)) {
      return options.filter((option) => value.includes(getOptionValue(option)))
    }
    return options.find((option) => getOptionValue(option) === value)
  }

  function getSelectedLabel(selectedOption: OptionType | OptionType[] | undefined): string {
    if (multiple) return ""
    if (!selectedOption) return ""
    if (typeof selectedOption === "object" && "label" in selectedOption) {
      return selectedOption.label
    }
    return String(selectedOption)
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

  function filterOptionsList(
    options: OptionType[],
    searchQuery: string,
    autoComplete: boolean,
    isSearching: boolean
  ): OptionType[] {
    if (!autoComplete || !isSearching) {
      return options
    }

    return options.filter((option) => {
      const label = getOptionLabel(option)

      if (typeof label === "string" && typeof searchQuery === "string") {
        return label.toLowerCase().includes(searchQuery.toLowerCase())
      }
    })
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

  function handleKeyDownClear(event: React.KeyboardEvent<HTMLElement>) {
    if (
      !disabled &&
      !readOnly &&
      (event.key === " " || event.key === "Enter" || event.key === "Delete")
    ) {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  function handleInputChange(value: string, event?: ChangeEvent<HTMLInputElement>) {
    if (!disabled && !readOnly) {
      onChangeInput?.(value, event)
      setSearchQuery(value)
      setIsSearching(true)
      setIsListOpen(true)
    }
  }

  function handleSelectOption(option: OptionType) {
    const newSelectedOption = typeof option === "object" ? (option as OptionObject) : option

    if (multiple) {
      return handleMultipleSelect(newSelectedOption)
    }

    setIsSearching(false)
    setSearchQuery(getOptionLabel(newSelectedOption))
    onChange?.(getOptionValue(newSelectedOption))
    setIsListOpen(false)
  }

  function handleMultipleSelect(newOption: OptionType) {
    const isSelected = isOptionSelected(newOption)
    const updatedOptions = isSelected ? handleRemoveOption(newOption) : handleAddOption(newOption)

    onChange?.(updatedOptions)
    setSelectedOptions(updatedOptions)
  }

  function isOptionSelected(option: OptionType): boolean {
    const optionValue = getOptionValue(option)
    return selectedOptions.some((selectedOption) => {
      switch (typeof selectedOption) {
        case "object":
          return selectedOption?.value === optionValue
        default:
          return selectedOption === optionValue
      }
    })
  }

  function handleAddOption(option: OptionType): OptionType[] {
    return [...selectedOptions, option]
  }

  function handleRemoveOption(option: OptionType): OptionType[] {
    const optionValue = getOptionValue(option)
    const updatedSelectedOptions = selectedOptions.filter((selectedOption) => {
      switch (typeof selectedOption) {
        case "object":
          return selectedOption.value !== optionValue
        default:
          return selectedOption !== optionValue
      }
    })

    return updatedSelectedOptions
  }

  function handleRemoveChipOption(option: OptionType, index: number) {
    const updatedSelectedOptions = handleRemoveOption(option)

    setSelectedOptions(updatedSelectedOptions)
    onChange?.(
      updatedSelectedOptions.map((option) => {
        return getOptionValue(option)
      })
    )

    // Focus management: focus next chip (by value), or previous if last, or input if none
    setTimeout(() => focusChipOrInput(updatedSelectedOptions, index), 0)
  }

  function focusChipOrInput(options: OptionType[], index: number) {
    if (options.length === 0) {
      // No chips left, focus input
      comboboxRef.current?.focus()
      return
    }

    // Focus the button inside the chip at the same index, or previous if last was removed
    const clampedIndex = Math.min(index, options.length - 1)
    const focusOption = options[clampedIndex]
    const buttonId = `chip-btn-${baseId}-${getOptionValue(focusOption)}`
    document.getElementById(buttonId)?.focus()
  }

  // biome-ignore lint/style/useNamingConvention: param not used in this function
  function handleClickOption(_event: React.MouseEvent<HTMLElement>, option: OptionType) {
    if (!disabled && !readOnly) {
      handleSelectOption(option)
    }
  }

  function handleKeyDownOption(event: React.KeyboardEvent<HTMLElement>) {
    if (!disabled) {
      event.stopPropagation()
      switch (event.key) {
        case "Escape":
          setIsListOpen(false)
          comboboxRef.current?.parentElement?.focus()
          break
        case " ":
        case "Enter":
          event.preventDefault()
          event.currentTarget.click()
          break
        case "ArrowDown": {
          event.preventDefault()
          setActiveIndex((prev) => {
            const nextIndex = prev + 1
            if (nextIndex >= filteredOptionsList.length) {
              // Wrap to first
              setTimeout(() => {
                optionsListItemRef.current[0]?.focus()
              }, 0)
              return 0
            }
            setTimeout(() => {
              optionsListItemRef.current[nextIndex]?.focus()
            }, 0)
            return nextIndex
          })
          break
        }
        case "ArrowUp": {
          event.preventDefault()
          setActiveIndex((prev) => {
            const prevIndex = prev - 1
            if (prevIndex < 0) {
              // Wrap to last
              setTimeout(() => {
                optionsListItemRef.current[filteredOptionsList.length - 1]?.focus()
              }, 0)
              return filteredOptionsList.length - 1
            }
            setTimeout(() => {
              optionsListItemRef.current[prevIndex]?.focus()
            }, 0)
            return prevIndex
          })
          break
        }
        case "Home":
          event.preventDefault()
          setActiveIndex(0)
          {
            const first = optionsListItemRef.current[0]
            if (first) first.focus()
          }
          break
        case "End":
          event.preventDefault()
          setActiveIndex(filteredOptionsList.length - 1)
          {
            const last = optionsListItemRef.current[filteredOptionsList.length - 1]
            if (last) last.focus()
          }
          break
      }
    }
  }

  function handleKeyDownSelectContainer(event: React.KeyboardEvent) {
    if (!disabled && (event.key === " " || event.key === "Enter" || event.key === "ArrowDown")) {
      setIsListOpen(true)
      setActiveIndex(0)
      setTimeout(() => {
        optionsListItemRef.current[0]?.focus()
      }, 0)
    }
  }

  useEffect(() => {
    if (!isListOpen) return

    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsListOpen(false)
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsListOpen(false)
        comboboxRef.current?.parentElement?.focus()
      }
    }

    function handleFocusOut(event: FocusEvent) {
      const nextFocused = event.relatedTarget as Node | null
      if (selectRef.current && !selectRef.current.contains(nextFocused)) {
        setIsListOpen(false)
      }
    }

    const node = selectRef.current
    if (node) node.addEventListener("focusout", handleFocusOut)
    document.addEventListener("pointerdown", handleClickOutside)
    document.addEventListener("keydown", handleEscapeKey)

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
      if (node) node.removeEventListener("focusout", handleFocusOut)
    }
  }, [isListOpen])

  useEffect(() => {
    if (multiple && Array.isArray(value)) {
      const selectedValues = value.map(getOptionValue)

      const updatedOptions = options.filter((option) =>
        selectedValues.includes(getOptionValue(option))
      )

      setSelectedOptions(updatedOptions)
      return
    }
  }, [value, options, multiple, getOptionValue])

  useEffect(() => {
    if (!multiple && autoComplete) {
      setSearchQuery(selectedLabel)
    }
  }, [selectedLabel, multiple, autoComplete])

  useEffect(() => {
    if (isListOpen && autoPosition) {
      const select = selectRef.current
      const list = listboxRef.current
      if (select && list) {
        const selectRect = select.getBoundingClientRect()
        const listSize = list.getBoundingClientRect().height
        const spaceBelow = window.innerHeight - selectRect.bottom
        const spaceAbove = selectRect.top
        const shouldOpenAbove = spaceBelow < listSize && spaceAbove > spaceBelow
        // Toggle styles based on available space
        setShouldOpenAbove(shouldOpenAbove)
      }
    }
  }, [isListOpen, autoPosition])

  return (
    <div
      ref={selectRef}
      className={mergedRootClasses}
    >
      <Flex
        align="items-center"
        width="w-full"
        className="relative"
      >
        <Input
          id={baseId}
          readOnly={!autoComplete || readOnly}
          label={label}
          ref={comboboxRef}
          aria-autocomplete={autoComplete ? "list" : undefined}
          aria-hidden={!autoComplete && multiple}
          inputContentProps={{
            onKeyDown: handleKeyDownSelectContainer,
            onClick: handleInputClick,
            width: "w-full",
            role: "combobox",
            "aria-controls": optionsListId,
            "aria-labelledby": props["aria-labelledby"],
            "aria-expanded": isListOpen,
            ...componentProps
          }}
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
                baseId={baseId}
                disabled={disabled}
                leftSection={leftSection}
                multiple={multiple}
                readOnly={readOnly}
                selectedOptions={selectedOptions}
                getOptionValue={getOptionValue}
                getOptionLabel={getOptionLabel}
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
                  ariaLabel="Clear"
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
                  onKeyDown={handleKeyDownClear}
                />
              )}
              <Icon
                color={disabled ? "text-typography-disabled" : "text-typography-secondary"}
                type={isListOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                className={cn("w-4", !readOnly && !disabled ? "cursor-pointer" : "cursor-default")}
              />
            </Flex>
          }
          inputClassName={mergedInputClasses}
          {...props}
        />

        {isListOpen && !disabled && !readOnly && (
          <OptionsList
            activeIndex={activeIndex}
            autoPosition={autoPosition}
            errorText={errorText}
            filteredOptionsList={filteredOptionsList}
            helperText={helperText}
            optionsListId={optionsListId}
            label={label}
            listboxRef={listboxRef}
            multiple={multiple}
            notFoundLabel={notFoundLabel}
            optionClassName={optionClassName}
            optionsListClassName={optionsListClassName}
            optionsListItemRef={optionsListItemRef}
            shouldOpenAbove={shouldOpenAbove}
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
