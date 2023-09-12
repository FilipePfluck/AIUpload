'use client'

import { Flex } from '@/styled-system/jsx'
import {
  Slider as ParkSlider,
  SliderControl,
  SliderRange,
  SliderThumb,
  SliderTrack,
  type SliderProps,
} from './snippet'
import { Label } from '../Label'
import { css } from '@/styled-system/css'

export const Slider = (props: SliderProps) => {
  return (
    <ParkSlider min={0} max={100} defaultValue={33} {...props}>
      <Flex direction="column" gap="4">
        <Flex align="center" justify="space-between">
          <Label>Temperatura</Label>
          <p>0.5</p>
        </Flex>
        <SliderControl>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
        <span
          className={css({ textStyle: 'sm', color: 'fg.muted', maxW: '80' })}
        >
          Valores mais altos tendem a deixar o resultado mais criativo e com
          possíveis erros.
        </span>
      </Flex>
    </ParkSlider>
  )
}
