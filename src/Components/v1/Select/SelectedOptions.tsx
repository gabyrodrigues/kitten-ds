import { Chip } from "../Chip"
import type { OptionType, SelectProps } from "./Select.types"

type SharedSelectProps = Pick<
  SelectProps,
  "readOnly" | "disabled" | "inputClassName" | "multiple" | "leftSection" | "selectedOptionColor"
>
export interface SelectedOptionsProps extends SharedSelectProps {
  selectedOptions: OptionType[]
  handleRemoveChipOption(option: OptionType): void
}

export function SelectedOptions({
  readOnly,
  disabled,
  selectedOptions,
  leftSection,
  multiple,
  handleRemoveChipOption
}: SelectedOptionsProps) {
  return (
    (selectedOptions?.length || leftSection || multiple) && (
      <>
        {leftSection}
        {selectedOptions?.map((option) => {
          const optionValue = typeof option === "object" ? option.value : option
          const optionLabel = typeof option === "object" ? option.label : String(option)
          return (
            <Chip
              key={optionValue}
              color="gray"
              variant="outlined"
              disabled={disabled}
              className="cursor-default font-normal shrink-0 py-0.5 pl-2 pr-0.5"
              onDelete={(event) => {
                event.stopPropagation()
                !readOnly && !disabled && handleRemoveChipOption(option)
              }}
            >
              {optionLabel}
            </Chip>
          )
        })}
      </>
    )
  )
}
