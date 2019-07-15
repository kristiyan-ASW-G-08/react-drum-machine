import React, { useState } from "react";
import Keypad from "./components/Keypad";
import logo from "./logo.svg";
import "./App.scss";

const App = () => {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState("firstBank");

  const togglePower = () => {
    console.log("power", power);
    setPower(power => !power);
  };
  const toggleBank = () => {
    const nextBank = bank === "firstBank" ? "secondBank" : "firstBank";
    setBank(nextBank);
  };
  return (
    <div className="App">
      <div id="drum-machine">
        <button onClick={togglePower}>Power</button>
        <button onClick={toggleBank}>
          Bank {bank === "firstBank" ? "1" : "2"}
        </button>
        <Keypad bank={bank} power={power} />
      </div>
    </div>
  );
};

export default App;
