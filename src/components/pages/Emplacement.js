import React, { useEffect } from "react";
import "../../styles/Emplacement.css";
import { useNavigate, useParams } from 'react-router-dom';
import Slider from "../Slider";
import Tags from "../Tag.js";
import Host from "../Host.js";
import Accordion from "../Accordion.js";
import Rating from "../Rating.js"
import ListeLogements from "../../database/logement.json";

function Emplacement() {
      const { id } = useParams();
      const logement = ListeLogements.find((item) => item.id === id);
      const navigate = useNavigate();

      useEffect(() => {
            if (!id || logement === undefined) {
                  navigate("/error");
            }
      }, [id, logement, navigate]);

      if (!logement) {
            return null;
      }

      const equipements = logement.equipments.map((item) =>
            <span key={item}>{item}</span>
      );

      return (
            <>
                  <div>
                        <Slider pictures={logement.pictures} />
                  </div>
                  <div id="info-emplacement">
                        <div className="container-emplacement">
                              <h1>{logement.title}</h1>
                              <h2>{logement.location}</h2>
                              <Tags tags={logement.tags} />
                        </div>
                        <div className="container-emplacement">
                              <Host host={logement.host} />
                              <Rating rating={logement.rating} />
                        </div>
                  </div>
                  <div id="grid-accordion-emplacement" className="grid-accordion">
                        <Accordion title="Desciption" description={logement.description} show={true} />
                        <Accordion title="Equipements" description={equipements} show={true} />
                  </div>
            </>
      );
}

export default Emplacement;