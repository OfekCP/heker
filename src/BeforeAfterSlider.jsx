import React, { useState } from 'react';
import './BeforeAfterSlider.css';
import ReactCompareImage from "react-compare-image"

const ComparisonSlider = ({ before, after }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const moveDivisor = (event) => {
    setSliderValue(event.target.value);
  };


  return (
    <div className="mainWrapper">
      <div className="contentWrapper">
        <ReactCompareImage leftImage={before} rightImage={after} />
      </div>
    </div>
  );
}


export default ComparisonSlider;
