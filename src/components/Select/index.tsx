'use client'

import { Portal } from '@ark-ui/react'
import { BiExpandVertical } from 'react-icons/bi'
import { Stack } from '@/styled-system/jsx'
import {
  Select as ParkSelect,
  SelectContent,
  SelectLabel,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
  type SelectProps as ParkSelectProps,
} from './snippet'

type SelectProps = ParkSelectProps & {
  label?: string
  placeholder?: string
  options: {
    label: string
    value: string
  }[]
}

export const Select = ({
  options,
  label,
  placeholder,
  ...props
}: SelectProps) => {
  return (
    <ParkSelect positioning={{ sameWidth: true }} {...props}>
      {({ selectedOption }) => (
        <Stack gap="1.5" width="2xs">
          <SelectLabel>{label}</SelectLabel>
          <SelectTrigger>
            {selectedOption?.label ?? placeholder}
            <BiExpandVertical />
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent>
                {options.map((option) => (
                  <SelectOption
                    key={option.value}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </Stack>
      )}
    </ParkSelect>
  )
}
