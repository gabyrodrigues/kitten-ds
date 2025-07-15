import { cn } from "@utils"
import { useRef } from "react"
import { Flex } from "../Flex"
import type { SelectProps } from "./Select.types"

export default function Select({
  // autoComplete = false,
  // autoPosition = false,
  // bgColor = "bg-surface",
  // borderColor = "border-input-border",
  className,
  // clearable = false,
  // contentClassName,
  // disabled = false,
  // errorText,
  // fontSize,
  full = false
  // helperText,
  // id,
  // inputClassName,
  // label,
  // labelClassName,
  // leftSection,
  // multiple = false,
  // notFoundLabel = "",
  // optionClassName,
  // paddingL = "pl-3",
  // paddingR = "pr-8",
  // paddingY = "py-2",
  // placeholder = "Selecione uma opção",
  // readOnly = false,
  // required = false,
  // selectedColor = "bg-primary-highlight",
  // successText,
  // options,
  // optionsListClassName,
  // onClear,
  // onChange,
  // onChangeInput,
  // searchable = false,
  // value,
  // withAsterisk = false
}: SelectProps) {
  const selectRef = useRef<HTMLDivElement>(null)
  const rootClasses = cn(full ? "w-full" : "w-fit", className)

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
        <p>select input </p>

        {/* {isOpen && ( */}
        <p>list</p>
        {/* )} */}
      </Flex>
    </div>
  )
}
