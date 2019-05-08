import React, { useState } from 'react';
import Keypad from './components/Keypad';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(true);

  const togglePower = () => setPower(power => !power);
  return (
    <div className="App">
      <Keypad />
    </div>
  );
};

export default App;
