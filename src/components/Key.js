import React, { useEffect, useRef, useCallback } from 'react';
const Key = ({ keyItem, bank, power, volume }) => {
  const audioRef = useRef(null);
  const playAudio = useCallback(() => {
    if (power) {
      if (audioRef.current) {
        console.log(audioRef.current.volume);
        audioRef.current.play();
      }
    }
  });
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 10;
    }
    window.addEventListener('keydown', e => {
      if (keyItem.key === e.key) {
        playAudio();
      }
    });
  }, [bank, keyItem, keyItem.key, playAudio, volume]);
  return (
    <>
      <audio src={keyItem[bank]} ref={audioRef} />
      <button onClick={playAudio}>{keyItem.key}</button>
    </>
  );
};

export default Key;
