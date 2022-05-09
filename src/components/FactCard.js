const FactCard = ({ factData }) => {
  const { factText } = factData;

  return (
    <div>
      {factText ? (
        <>
          <h3>Did you know...</h3>
          <p>{factText}</p>
        </>
      ) : null}
    </div>
  );
};

export default FactCard;
