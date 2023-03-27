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
      const [ficheLogement, setFicheLogement] = useState([]);
      useEffect(() => {
            const logement = ListeLogements.find((item) => item.id == id);
            console.log(logement)
            setFicheLogement(logement);
      }, []);

      return (
            <>
                  <div>{ficheLogement?.title}</div>
            </>
      );
}

export default Emplacement;