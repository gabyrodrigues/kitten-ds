import { Chip } from "../Chip"
import type { OptionType, SelectProps } from "./Select.types"

type SharedSelectProps = Pick<
  SelectProps,
  "readOnly" | "disabled" | "inputClassName" | "multiple" | "leftSection" | "selectedOptionColor"
>
export interface SelectedOptionsProps extends SharedSelectProps {
  selectedOptions: OptionType[]
  baseId: string
  getOptionValue: (option: OptionType) => string | number
  handleRemoveChipOption(option: OptionType, index: number): void
}

export function SelectedOptions({
  baseId,
  disabled,
  leftSection,
  multiple,
  readOnly,
  selectedOptions,
  getOptionValue,
  handleRemoveChipOption
}: SelectedOptionsProps) {
  return (
    (selectedOptions?.length || leftSection || multiple) && (
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
                id: `chip-btn-${baseId}-${getOptionValue(option)}`
              }}
              onDelete={(event) => {
                event.preventDefault()
                event.stopPropagation()
                !readOnly && !disabled && handleRemoveChipOption(option, index)
              }}
            >
              {typeof option === "object" ? option.label : String(option)}
            </Chip>
          )
        })}
      </>
    )
  )
}
