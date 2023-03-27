import React, { useState } from "react";
import "../styles/Carrousel.css";
import PrevArrow from "../assets/Next-arrow.png";
import NextArrow from "../assets/Prev-arrow.png";

function Slider({ slides }) {
      const [current, setCurrent] = useState(0);
      const length = slides.length;

      function nextSlide() {
            setCurrent(current === length - 1 ? 0 : current + 1);
      }

      function prevSlide() {
            setCurrent(current === 0 ? length - 1 : current - 1);
      }

      return (
            <div className="slider">
                  {slides.map((picture, index) => (
                        <div
                              key={index}
                              className={
                                    index === current
                                          ? "slide slider__active-picture"
                                          : "slide slider__inactive-picture"
                              }
                        >
                              {index === current && (
                                    <img src={picture} alt="" className="slider__picture" />
                              )}
                        </div>
                  ))}
                  {length > 1 && (
                        <>
                              <div className="slider__previous" onClick={prevSlide}>
                                    <img
                                          src={PrevArrow}
                                          alt=""
                                          className="slider__previous-icon"
                                    />
                              </div>
                              <div className="slider__next" onClick={nextSlide}>
                                    <img src={NextArrow} alt="" className="slider__next-icon" />
                              </div>
                        </>
                  )}
            </div>
      );
}

export default Slider;