import React, { useEffect, useRef } from 'react';
const Key = ({ keyItem, bank }) => {
  const audioRef = useRef(null);
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (keyItem.key === e.key) {
        audioRef.current.play();
      }
    });
  }, [bank, keyItem, keyItem.key]);
  return (
    <>
      <audio src={keyItem[bank]} ref={audioRef} />
      <button>{keyItem.key}</button>
    </>
  );
};

export default Key;
