import React, { useState } from 'react';
import Keypad from './components/Keypad';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState('firstBank');

  const togglePower = () => {
    console.log('power', power);
    setPower(power => !power);
  };
  const toggleBank = () => {
    const nextBank = bank === 'firstBank' ? 'secondBank' : 'firstBank';
    setBank(nextBank);
  };
  return (
    <div className="App">
      <button onClick={togglePower}>Power</button>
      <button onClick={toggleBank}>Bank</button>
      <Keypad bank={bank} power={power} />
    </div>
  );
};

export default App;
