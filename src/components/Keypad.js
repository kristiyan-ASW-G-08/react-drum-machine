import React, { useState } from 'react';
import Key from './Key';
import keyList from '../keyList';
const Keypad = ({ bank, power }) => {
  const [keys, setKeys] = useState(keyList);
  const [volume, setVolume] = useState(1);
  return (
    <>
      <input
        onChange={e => setVolume(e.target.value)}
        type="range"
        min="1"
        max="10"
        value={volume}
      />
      {keys.length > 0
        ? keyList.map(keyItem => (
            <Key
              volume={volume}
              key={keyItem.key}
              keyItem={keyItem}
              bank={bank}
              power={power}
            />
          ))
        : ''}
    </>
  );
};
export default Keypad;
