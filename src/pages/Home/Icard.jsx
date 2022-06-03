import "./Icard.css";

const Icard = ({ data }) => {
  const { number, title, pera } = data;
  return (
    <div className="Icard">
      <span>{number}</span>
      <div className="forBorder">
        <h4>{title}</h4>
        <p>{pera}</p>
      </div>
    </div>
  );
};

export default Icard;
