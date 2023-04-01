import React from 'react';
import '../styles/Host.css';

// Fonction prenant en paramètre props et retournant un div contenant un titre et une image
function Host(props) {
      return (
            <div id='container-host'>
                  <h2>{props.host.name}</h2> {/* Titre de l'hôte */}
                  <img src={props.host.picture} alt={props.host.name} /> {/* Image de l'hôte */}
            </div>
      );
}

// Exporter la fonction
export default Host;