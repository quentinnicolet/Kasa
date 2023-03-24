// import React, { useState } from "react";
// import "../styles/Carrousel.css";
// import NextArrow from "../../assets/Next-arrow.png";
// import PrevArrow from "../assets/Prev-arrow.png";



// function Carrousel({ images }) {
//       let [imgAfficher, changerImg] = useState(0);
//       let nombreImg = images.length;

//       const imgPrecedente = () => {
//             if (imgAfficher === 0) {
//                   changerImg(nombreImg - 1);
//             } else {
//                   changerImg(imgAfficher - 1);
//             }
//             return (changerImg);
//       };

//       const imgSuivante = () => {
//             if (imgAfficher === nombreImg - 1) {
//                   changerImg(nombreImg = 0);
//             } else {
//                   changerImg(imgAfficher + 1);
//             }
//             return (changerImg);
//       };

//       return (
//             <div className="carrousel">
//                   {
//                         nombreImg > 1 && <img className="arrow" src={fleche} alt="Contenu précedént" onClick={imgPrecedente} />
//                   }
//                   {
//                         images.map((image, index) => {
//                               return (
//                                     <img key={index} className={index === imgAfficher ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement" />
//                               )
//                         })
//                   }
//                   {
//                         nombreImg > 1 && <img className="arrow" src={fleche} alt="Contenu suivant" onClick={imgSuivante} />
//                   }
//             </div>
//       );
// }

// export default Carrousel;