import React, { useState, useEffect } from "react";
import "../../styles/Emplacement.css";
import { useParams, Navigate } from 'react-router-dom';
import Slider from "../Slider";
import Tag from "../Tag";
import Host from "../Host";
import Accordion from "../Accordion";
import Star from "../../assets/Star.png";
import StarEmpty from "../../assets/Star-Empty.png";
import ListeLogements from "../../database/logement.json";

function Emplacement() {
      const { id } = useParams();
      const logement = ListeLogements.find((item) => item.id == id);

      return (
            <>
                  <div>
                        <Slider pictures={logement?.pictures} />
                  </div>
                  <div>
                        <div>
                              <div>{logement?.title}</div>
                              <div>{logement?.location}</div>
                              {/* <><Tag/> */}
                        </div>
                        <div>
                              {/* <><Host/> */}
                              {/* <><Rating/> */}
                        </div>
                  </div>
                  <div id="grid-accordion-emplacement" dclassName="grid-accordion">
                        <Accordion title="Desciption" description={logement?.description} />
                        <Accordion title="Equipements" description={logement?.equipments} />
                  </div>
            </>
      );
}

export default Emplacement;