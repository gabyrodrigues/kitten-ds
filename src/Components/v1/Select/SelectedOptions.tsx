import { Chip } from "../Chip"
import type { OptionType, SelectProps } from "./Select.types"

type SharedSelectProps = Pick<
  SelectProps,
  "readOnly" | "disabled" | "inputClassName" | "multiple" | "leftSection" | "selectedOptionColor"
>
export interface SelectedOptionsProps extends SharedSelectProps {
  selectedOptions: OptionType[]
  baseId: string
  getOptionLabel: (option: OptionType) => string | number
  getOptionValue: (option: OptionType) => string | number
  handleRemoveChipOption(option: OptionType, index: number): void
}

export function SelectedOptions({
  baseId,
  disabled,
  leftSection,
  readOnly,
  selectedOptions,
  getOptionLabel,
  getOptionValue,
  handleRemoveChipOption
}: SelectedOptionsProps) {
  return (
    <>
      {leftSection}
      {selectedOptions?.map((option, index) => {
        return (
          <Chip
            id={`chip-${baseId}-${getOptionValue(option)}`}
            key={getOptionValue(option)}
            color="gray"
            variant="outlined"
            disabled={disabled}
            readOnly={readOnly}
            className="cursor-default font-normal shrink-0 py-0.5 pl-2 pr-0.5"
            deleteButtonProps={{
              id: `chip-btn-${baseId}-${getOptionValue(option)}`,
              "aria-label": `Remove ${getOptionLabel(option)}`
            }}
            onDelete={(event) => {
              event.preventDefault()
              event.stopPropagation()
              !readOnly && !disabled && handleRemoveChipOption(option, index)
            }}
          >
            {getOptionLabel(option)}
          </Chip>
        )
      })}
    </>
  )
}
