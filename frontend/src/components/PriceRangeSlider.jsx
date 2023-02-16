import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import React from "react";

const PriceRangeSlider = ({ range }) => {
  return (
    <RangeSlider
      defaultValue={[40, 700]}
      min={0}
      max={1500}
      step={100}
      onChangeEnd={(val) => range(val)}
    >
      <RangeSliderTrack bg="blue.100">
        <RangeSliderFilledTrack bg="orange" />
      </RangeSliderTrack>
      <RangeSliderThumb bg="orange" boxSize={4} index={0} />
      <RangeSliderThumb bg="orange" boxSize={4} index={1} />
    </RangeSlider>
  );
};

export default PriceRangeSlider;
