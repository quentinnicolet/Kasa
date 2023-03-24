import React, { useState, useEffect } from "react";
import "../../styles/Emplacement.css";
import { useParams, Navigate } from 'react-router-dom';
import Carrousel from "../Carrousel";
import Tag from "../Tag";
import Star from "../../assets/Star.png";
import StarEmpty from "../../assets/Star-Empty.png";
import Accordion from "../../components/Accordion";
import ListeLogements from "../../database/logement.json";

function Emplacement() {
      const { id } = useParams();
      const [ficheLogement, setFicheLogement] = useState([]);
      useEffect(() => {
            const logement = ListeLogements.find((item) => item.id == id);
            console.log(logement)
            setFicheLogement(logement);
      }, []);
      // const tagsLogement = ficheLogement.tags.map((tags, index) => {
      //       return <Tag key={index} nom={tags} />
      // });

      // let noteLogement = [];
      // let etoileComplete = true;
      // for (let index = 0; index < 5; index++) {
      //       if (index === parseInt(ficheLogement?.rating)) {
      //             etoileComplete = false;
      //       }
      //       if (etoileComplete === true) {
      //             noteLogement.push(<img key={index} className="Star" src={Star} alt={`${ficheLogement?.rating}/5`} />);
      //       } else {
      //             noteLogement.push(<img key={index} className="Star" src={StarEmpty} alt={`${ficheLogement?.rating}/5`} />);
      //       }
      // }

      // const equipementsLogement = ficheLogement?.equipments.map((equipment, index) => {
      //       return <li key={index}>{equipment}</li>;
      // });

      return (
            <>
{/* 
                  <div>{ficheLogement?.title}</div>
                  {ficheLogement ? (
                        <div className="Emplacement">
                              <Carrousel images={ficheLogement?.pictures} />
                              <div className="logements-propietaire">
                                    <div className="information-logements">
                                          <span className="titre-logement">{ficheLogement?.title}</span>
                                          <span className="endroit-logement">{ficheLogement?.location}</span>
                                          <div className="tags">{tagsLogement}</div>
                                    </div>
                                    <div className="proprietaire-note">
                                          <div className="information-propietaire">
                                                <span className="nom-proprietaire">{ficheLogement?.host.name}</span>
                                                <img className="photo-propietaire" src={ficheLogement?.host.picture} alt="Propriétaire" />
                                          </div>
                                          <div className="note">{noteLogement}</div>
                                    </div>
                              </div>
                              <div className="description-equipements">
                                    <Accordion titre="Description" description={ficheLogement?.description} />
                                    <Accordion titre="Équipements" description={equipementsLogement} />
                              </div>
                        </div>
                  ) : (<></>)
                  } */}
            </>
      );
}

export default Emplacement;