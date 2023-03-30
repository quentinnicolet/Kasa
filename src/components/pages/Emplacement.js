import React, { useState, useEffect } from "react";
import "../../styles/Emplacement.css";
import { useParams, Navigate } from 'react-router-dom';
import Slider from "../Slider";
import Tags from "../Tag.js";
import Host from "../Host.js";
import Accordion from "../Accordion.js";
import Rating from "../Rating.js"
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
                              <Tags tags={logement?.tags} />
                        </div>
                        <div>
                              <Host host={logement?.host} />
                              <Rating rating={logement?.rating} />
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