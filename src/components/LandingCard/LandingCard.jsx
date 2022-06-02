import "./LandingCard.css";
import CardImg from "../../Assets/img/c1.svg";

const LandingCard = ({ data }) => {
  const { title, sTitle, image, link } = data;
  return (
    <div className="LandingCard">
      <div className="CardContent">
        <h1>{title}</h1>
        <p>{sTitle}</p>
        <a href={link} className="cardlink">
          Read More <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <img src={image} className="LandingCardImg" />
    </div>
  );
};

export default LandingCard;
