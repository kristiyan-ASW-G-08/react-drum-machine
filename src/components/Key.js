import React, { useEffect, useRef, useCallback } from 'react';
const Key = ({ keyItem, bank, power }) => {
  const audioRef = useRef(null);
  const playAudio = useCallback(() => {
    if (power) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  });
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (keyItem.key === e.key) {
        playAudio();
      }
    });
  }, [bank, keyItem, keyItem.key, playAudio]);
  return (
    <>
      <audio src={keyItem[bank]} ref={audioRef} />
      <button onClick={playAudio}>{keyItem.key}</button>
    </>
  );
};

export default Key;
