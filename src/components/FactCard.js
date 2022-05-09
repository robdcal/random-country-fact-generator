const FactCard = ({ factData }) => {
  const { factText } = factData;

  return (
    <div>
      <p>{factText}</p>
    </div>
  );
};

export default FactCard;
