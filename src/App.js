import "./App.css";
import { useState, useEffect } from "react";
import FactCard from "./components/FactCard";

const App = () => {
  const [countryData, setCountryData] = useState([]);
  const [factData, setFactData] = useState({
    factText: null,
  });

  const handleClick = () => {
    // console.log("handleClick");
    setFactData(getFact());
    // console.log(factData);
  };

  const getFact = () => {
    // console.log("getFact");
    const countryNum = Math.floor(Math.random() * countryData.length) + 1;
    // console.log(factData);
    return {
      factText: `The capital of ${countryData[countryNum].name.common} is ${countryData[countryNum].capital[0]}.`,
    };
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
        // setFactData(getFact());
        // console.log(factData);
      });
  }, []);

  return (
    <div className="App">
      <header className="hero">
        <h1>Random Country Fact Generator</h1>
        <button onClick={handleClick}>Generate Fact</button>
        <FactCard factData={factData} />
      </header>
    </div>
  );
};

export default App;
