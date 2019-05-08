import React, { useState } from 'react';
import Key from './Key';
import keyList from '../keyList';
const Keypad = ({ bank }) => {
  const [keys, setKeys] = useState(keyList);
  return (
    <>
      {keys.length > 0
        ? keyList.map(keyItem => (
            <Key key={keyItem.key} keyItem={keyItem} bank={bank} />
          ))
        : ''}
    </>
  );
};
export default Keypad;
