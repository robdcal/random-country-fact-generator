import "./App.css";
import { useState, useEffect } from "react";
import FactCard from "./components/FactCard";

const App = () => {
  const [countryData, setCountryData] = useState([]);
  const [factData, setFactData] = useState({
    flags: null,
    factText: null,
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      });
    // generateFact();
  }, []);

  const handleClick = () => {
    generateFact();
  };

  const generateFact = () => {
    const countryNum = Math.floor(Math.random() * countryData.length) + 1;
    // console.log(countryData);
    setFactData({
      flag: countryData[countryNum].flags.png,
      factText: `The capital of ${countryData[countryNum].name.common} is ${countryData[countryNum].capital[0]}.`,
    });
  };

  return (
    <div className="App">
      <header className="hero">
        <h1>Random Country Fact Generator</h1>
        <button onClick={handleClick}>Generate Fact</button>
      </header>
      <FactCard factData={factData} />
    </div>
  );
};

export default App;
