import React, { useEffect } from "react";
import "../../styles/Emplacement.css";
import { useNavigate, useParams } from 'react-router-dom';
import Slider from "../Slider";
import Tags from "../Tag.js";
import Host from "../Host.js";
import Accordion from "../Accordion.js";
import Rating from "../Rating.js"
import ListeLogements from "../../database/logement.json";

// Fonction qui affiche une page de détail d'un logement
function Emplacement() {
      // Récupération de l'id du logement
      const { id } = useParams();
      // Recherche du logement dans la liste des logements
      const logement = ListeLogements.find((item) => item.id === id);
      // Récupération de la fonction navigate
      const navigate = useNavigate();

      // utilisation de l'effet de montée
      useEffect(() => {
            // si l'id n'existe pas ou le logement est undefined
            if (!id || logement === undefined) {
                  // redirection vers la page d'erreur
                  navigate("/error");
            }
      }, [id, logement, navigate]);

      // si logement est vide
      if (!logement) {
            // retourner rien
            return null;
      }

      // on crée un tableau d'éléments avec les equipements
      const equipements = logement.equipments.map((item) =>
            <span key={item}>{item}</span>
      );

      return (
            <>
                  <div>
                        {/* Slider permettant de voir les photos du logement */}
                        <Slider pictures={logement.pictures} />
                  </div>
                  {/* Div contenant les informations du logement */}
                  <div id="info-emplacement">
                        {/* Div pour afficher le titre, la location et les tags */}
                        <div className="container-emplacement">
                              <h1>{logement.title}</h1>
                              <h2>{logement.location}</h2>
                              {/* Affichage des tags */}
                              <Tags tags={logement.tags} />
                        </div>
                        {/* Div pour afficher le propriétaire et la note */}
                        <div className="container-emplacement">
                              {/* Affichage du propriétaire */}
                              <Host host={logement.host} />
                              {/* Affichage de la note */}
                              <Rating rating={logement.rating} />
                        </div>
                  </div>
                  {/* Div pour afficher la description et les equipements */}
                  <div id="grid-accordion-emplacement" className="grid-accordion">
                        {/* Affichage de la description */}
                        <Accordion title="Description" description={logement.description} show={true} />
                        {/* Affichage des equipements */}
                        <Accordion title="Équipements" description={equipements} show={true} />
                  </div>
            </>
      );
}

export default Emplacement;