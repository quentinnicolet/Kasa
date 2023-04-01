import React, { useState } from 'react';
import PrevArrow from '../assets/Prev-arrow.png';
import NextArrow from '../assets/Next-arrow.png';
import '../styles/Slider.css';

function Slider(props) {
  // Utilise l'hook useState pour définir la variable currentIndex qui vaut 0 au départ
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction qui permet de passer à l'image suivante
  const goToNextSlide = () => {
    // Récupère l'index de l'image qui se trouve à la fin du tableau
    const lastIndex = props.pictures.length - 1;
    // Condition qui vérifie si l'index est égal à l'index de l'image qui se trouve à la fin du tableau
    const shouldResetIndex = currentIndex === lastIndex;
    // Définition de l'index
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    // On définit la nouvelle valeur de currentIndex
    setCurrentIndex(index);
  };

  // Fonction qui permet de passer à l'image précédente
  const goToPreviousSlide = () => {
    // Récupère l'index de l'image qui se trouve à la fin du tableau
    const lastIndex = props.pictures.length - 1;
    // Condition qui vérifie si l'index est égal à 0
    const shouldResetIndex = currentIndex === 0;
    // Définition de l'index
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    // On définit la nouvelle valeur de currentIndex
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {/* Bouton qui déclenche la fonction goToPreviousSlide lors du clic */}
      <button className="arrow prev-arrow" onClick={goToPreviousSlide}>
        <img src={PrevArrow} alt="Previous" />
      </button>
      <div className="slides">
        {/* Boucle sur le tableau props.pictures pour afficher les images et ajouter la classe active à l'image affichée */}
        {props.pictures.map((picture, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            <img src={picture} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Bouton qui déclenche la fonction goToNextSlide lors du clic */}
      <button className="arrow next-arrow" onClick={goToNextSlide}>
        <img src={NextArrow} alt="Next" />
      </button>
    </div>
  );
}

// Export du composant Slider
export default Slider;