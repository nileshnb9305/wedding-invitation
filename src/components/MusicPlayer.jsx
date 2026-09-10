import React, { useEffect, useRef } from 'react';

export default function MusicPlayer({ shouldPlay }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.play().catch((e) => {
        console.log("Auto-play prevented by browser policy:", e);
      });
    }
  }, [shouldPlay]);

  return (
    <audio 
      ref={audioRef} 
      loop 
      src="/akhil-song.mp3" 
      preload="auto" 
    />
  );
}