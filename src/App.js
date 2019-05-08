import React, { useState } from 'react';
import Keypad from './components/Keypad';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState('firstBank');

  const togglePower = () => setPower(power => !power);
  const toggleBank = () => {
    const nextBank = bank === 'firstBank' ? 'secondBank' : 'firstBank';
  };
  return (
    <div className="App">
      <Keypad bank={bank} />
    </div>
  );
};

export default App;
