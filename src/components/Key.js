import React, { useEffect, useRef } from 'react';
const Key = ({ keyItem, bank }) => {
  const audioRef = useRef(null);
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (keyItem.key === e.key) {
        playAudio();
      }
    });
  }, [bank, keyItem, keyItem.key]);
  return (
    <>
      <audio src={keyItem[bank]} ref={audioRef} />
      <button onClick={playAudio}>{keyItem.key}</button>
    </>
  );
};

export default Key;
