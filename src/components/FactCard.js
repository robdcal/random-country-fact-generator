const FactCard = ({ factData }) => {
  const { flag, factText } = factData;

  return (
    <div className="fact-card">
      <div className="fact-card__flag">
        <img src={flag} alt="" />
      </div>
      <div className="fact-card__fact">
        <h3>Did you know...</h3>
        <p>{factText}</p>
      </div>
    </div>
  );
};

export default FactCard;
