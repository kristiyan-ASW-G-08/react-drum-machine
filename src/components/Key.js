import React, { useEffect, useRef, useCallback, useState } from 'react';
const Key = ({ keyItem, bank, power, volume, setDisplay }) => {
  const audioRef = useRef(null);
  const playAudio = useCallback(() => {
    if (power) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  });
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 10;
    }
    window.addEventListener('keydown', e => {
      if (keyItem.key === e.key || keyItem.key === e.key.toLowerCase()) {
        playAudio();
      }
    });
  }, [bank, keyItem, keyItem.key, playAudio, volume]);
  const audioSrcArray = keyItem[bank].split('/');
  const audioName = audioSrcArray[audioSrcArray.length - 1];
  const clickHandler = () => {
    playAudio();
    setDisplay(audioName.split('.')[0]);
  };
  return (
    <>
      <button
        id={audioName.split('.')[0]}
        className="drum-pad"
        onClick={clickHandler}
      >
        {keyItem.key}
        <audio
          id={keyItem.key}
          className="clip"
          src={keyItem[bank]}
          ref={audioRef}
        />
      </button>
    </>
  );
};

export default Key;
