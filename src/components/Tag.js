import React from 'react';
import '../styles/Tag.css';

//Création de la fonction Tags qui prend en paramètre un tableau de Tags
function Tags({ tags }) {
      //Retourne un div contenant les Tags qui sont passés en paramètre
      return (
            <div id='container-tag'>
                  {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                  ))}
            </div>
      );
}

//Exporte le composant Tags
export default Tags;