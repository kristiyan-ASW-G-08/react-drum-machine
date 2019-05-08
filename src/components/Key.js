import React from 'react';
import useKeyPress from '../hooks/useKeyPress';
const Key = ({ keyItem }) => {
  return <button>{keyItem.key}</button>;
};

export default Key;
