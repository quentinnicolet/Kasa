function Cards({ id, picture, title }) {
      return (
            <div className="card" id={id}>
                  <img className="card-image" src={picture} alt="Card" />
                  <span className="card-title">{title}</span>
            </div>
      );
}

export default Cards;