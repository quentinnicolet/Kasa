import React from 'react';
import StarEmpty from '../assets/Star-Empty.png';
import Star from '../assets/Star.png';
import '../styles/Rating.css';

const Rating = ({ rating }) => {
      const starArray = [];

      for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                  starArray.push(<img src={Star} alt="star" />);
            } else {
                  starArray.push(<img src={StarEmpty} alt="empty star" />);
            }
      }

      return <div id="rating">{starArray}</div>;
};

export default Rating;