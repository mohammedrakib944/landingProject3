import "./Card.css";

const Card = ({ data }) => {
  const { image, buttonText, title, text } = data;
  return (
    <div className="card csCard">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <span className="cardTag">{buttonText}</span>
        <h5 className="card-title2">{title}</h5>
        <p className="card-text2">{text}</p>
      </div>
    </div>
  );
};

export default Card;
