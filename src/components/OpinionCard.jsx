import "../css/Opinions.css";

const OpinionCard = ({ user = "Username", opinion = "Opinion" }) => {
  return (
    <div className="opinion">
      <h3>{user}</h3>
      <p>{opinion}</p>
    </div>
  );
};

export default OpinionCard;