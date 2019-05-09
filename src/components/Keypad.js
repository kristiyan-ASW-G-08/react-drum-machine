import React, { useState } from 'react';
import Key from './Key';
import keyList from '../keyList';
const Keypad = ({ bank, power }) => {
  const [keys, setKeys] = useState(keyList);
  const [volume, setVolume] = useState(1);
  const [display, setDisplay] = useState('');
  return (
    <>
      <div id="display">{power ? display : ''}</div>
      <input
        className="volume-range"
        onChange={e => setVolume(e.target.value)}
        type="range"
        min="1"
        max="10"
        value={volume}
      />
      <div className="keypad">
        {keys.length > 0
          ? keyList.map(keyItem => (
              <Key
                setDisplay={setDisplay}
                volume={volume}
                key={keyItem.key}
                keyItem={keyItem}
                bank={bank}
                power={power}
              />
            ))
          : ''}
      </div>
    </>
  );
};
export default Keypad;
