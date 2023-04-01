// Fonction Cards qui prend en paramètre trois props : id, picture et title
function Cards({ id, picture, title }) {
      // On retourne un élément div avec la classe card et l'id passé en paramètre
      return (
            <div className="card" id={id}>
                  <img className="card-image" src={picture} alt="Card" />
                  <span className="card-title">{title}</span>
            </div>
      );
}

export default Cards;