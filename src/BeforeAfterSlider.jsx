import React, { useEffect, useState } from 'react';
import './BeforeAfterSlider.css';
import ReactCompareImage from "react-compare-image"
import { disableTouchScroll } from './TouchScrollDisable';
const ComparisonSlider = ({ before, after }) => {
  const [sliderValue, setSliderValue] = useState(50);
useEffect(()=>{
    disableTouchScroll();
},[])
  const moveDivisor = (event) => {
    setSliderValue(event.target.value);
  };


  return (
    <div className="mainWrapper">
      <div className="contentWrapper">
      <ReactCompareImage
        leftImage={before}
        rightImage={after}
        leftImageCss={{ borderRadius: '50px', border:'2px solid rgb(255, 215, 0)' }} // Apply border radius to left image
        rightImageCss={{ borderRadius: '50px', border:'2px solid rgb(255, 215, 0)' }} // Apply border radius to right image
      />
      </div>
    </div>
  );
}


export default ComparisonSlider;
