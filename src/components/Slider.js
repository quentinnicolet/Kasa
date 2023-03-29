import React, { useState } from 'react';

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
                  <button onClick={goToPreviousSlide}>Previous</button>
                  <div className="slides">
                        {props.pictures.map((pictures, index) => (
                              <div
                                    key={index}
                                    className={index === currentIndex ? "slide active" : "slide"}
                              >
                                    <img src={pictures} alt={`Slide ${index + 1}`} />
                              </div>
                        ))}
                  </div>
                  <button onClick={goToNextSlide}>Next</button>
            </div>
      );
}

export default Slider;