import "./App.css";
import { useState } from "react";
import FactCard from "./components/FactCard";

const App = () => {
  const [factData, setFactData] = useState({
    factText: null,
  });

  const handleClick = () => {
    console.log("handleClick");
    console.log(factData);
    setFactData(getFact());
  };

  const getFact = () => {
    console.log("getFact");
    console.log(factData);
    return { factText: "this is a new fact" };
  };

  // setup template / input data (country codes/names, returned text strings, etc)
  // request data from API using random selection of COUNTRY + DATAPOINT
  // Display country flag and data from API using template text

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
