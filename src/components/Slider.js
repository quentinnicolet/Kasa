import React, { useState } from 'react';
import PrevArrow from '../assets/Prev-arrow.png';
import NextArrow from '../assets/Next-arrow.png';

function Slider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const lastIndex = props.pictures.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const goToPreviousSlide = () => {
    const lastIndex = props.pictures.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <button className="arrow prev-arrow" onClick={goToPreviousSlide}>
        <img src={PrevArrow} alt="Previous" />
      </button>
      <div className="slides">
        {props.pictures.map((picture, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            <img src={picture} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="arrow next-arrow" onClick={goToNextSlide}>
        <img src={NextArrow} alt="Next" />
      </button>
    </div>
  );
}

export default Slider;