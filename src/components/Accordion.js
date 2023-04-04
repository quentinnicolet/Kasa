//Importe les composants React et l'image de flèche ainsi que le fichier css
import React, { useState } from "react";
import arrow from "../assets/Arrow-accordion.png";
import '../styles/Accordion.css'

//Fonction composant accordéon 
function Accordion({ title, description, show = false }) {
      //Utilisation du hook useState, open est un booléen qui détermine si l'accordéon est ouvert ou fermé
      const [open, setOpen] = useState(show);

      //Retourne le composant accordéon 
      return (
            <div className="accordion" id={`accordion-${title}`}>
                  {/* Encapsule le titre et le bouton qui permet l'ouverture et la fermeture de l'accordéon */}
                  <div className={`header-accordion ${open}`} onClick={() => setOpen(!open)}>
                        <div className="accordion-title">{title}</div>
                        {/* Ajout d'une classe open pour modifier l'apparence lorsque l'accordéon est ouvert */}
                        <span className="accordion-arrow">
                              {/* Utilise l'image de flèche et applique une rotation de 180° si l'accordéon est ouvert*/}
                              <img src={arrow} alt="Ouvrir cette liste" style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
                        </span>
                  </div>
                  {/* Si open est vrai, affiche la description */}
                  {
                        open && <div className="accordion-description">{description}</div>
                  }
            </div>
      );
}

//Exporte le composant
export default Accordion;