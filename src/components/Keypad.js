import React, { useState } from 'react';
import Key from './Key';
import keyList from '../keyList';
const Keypad = () => {
  const [keys, setKeys] = useState(keyList);
  console.log(keys);
  return (
    <>
      {keys.length > 0
        ? keyList.map(keyItem => <Key key={keyItem.key} keyItem={keyItem} />)
        : ''}
    </>
  );
};
export default Keypad;
