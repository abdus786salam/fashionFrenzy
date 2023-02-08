import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import React from 'react'

const PriceRangeSlider = ({range}) => {
  return (
    <RangeSlider
  aria-label={['min', 'max']}
  onChangeEnd={(val)=>range(val)}
  colorScheme='blue'
  defaultValue={[300, 1000]}
  min={300}
  max={1000}
  step={100}

>
  <RangeSliderTrack>
    <RangeSliderFilledTrack />
  </RangeSliderTrack>
  <RangeSliderThumb index={0} />
  <RangeSliderThumb index={1} />
</RangeSlider>
  )
}

export default PriceRangeSlider