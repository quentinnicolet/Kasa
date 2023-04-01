import React from 'react';
import StarEmpty from '../assets/Star-Empty.png';
import Star from '../assets/Star.png';
import '../styles/Rating.css';

//fonction qui renvoie un tableau avec des images Star ou StarEmpty en fonction de la note
const Rating = ({ rating }) => {
      //Création d'un tableau vide
      const starArray = [];

      //Boucle qui ajoute des images Star ou StarEmpty à chaque itération
      for (let i = 1; i <= 5; i++) {
            //Si la note est supérieure ou égale à l'itération actuelle, on ajoute une étoile remplie
            if (i <= rating) {
                  starArray.push(<img src={Star} alt="star" key={i}/>);
            } 
            //Sinon, on ajoute une étoile vide
            else {
                  starArray.push(<img src={StarEmpty} alt="empty star" />);
            }
      }

      //Renvoi du tableau d'images dans un div
      return <div id="rating">{starArray}</div>;
};

//Export de la fonction
export default Rating;