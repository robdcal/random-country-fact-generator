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
  }, []);

  useEffect(() => {
    if (countryData.length > 0) {
      generateFact();
    }
  }, [countryData]);

  const handleClick = () => {
    generateFact();
  };

  const generateFact = () => {
    try {
      const countryNum = Math.floor(Math.random() * countryData.length);
      const countryName = countryData[countryNum].name.common;
      const factArray = [
        `The capital of ${countryName} is ${countryData[countryNum].capital[0]}.`,
        `The territory of ${countryName} covers ${countryData[
          countryNum
        ].area.toLocaleString()} km².`,
        `People drive on the ${countryData[countryNum].car.side}-hand side in ${countryName}.`,
        `The currency in ${countryName} is the ${
          countryData[countryNum].currencies[
            Object.keys(countryData[countryNum].currencies)[0]
          ].name
        }.`,
        `People mostly speak ${
          countryData[countryNum].languages[
            Object.keys(countryData[countryNum].languages)[0]
          ]
        }
      in ${countryName}.`,
        `There are ${countryData[
          countryNum
        ].population.toLocaleString()} people living in ${countryName}.`,
        `${countryName} ${
          countryData[countryNum].unMember ? "is" : "is not"
        } a member of the United Nations.`,
      ];
      const factNum = Math.floor(Math.random() * factArray.length);
      setFactData({
        flag: countryData[countryNum].flags.png,
        factText: factArray[factNum],
      });
    } catch {
      generateFact();
    }
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
