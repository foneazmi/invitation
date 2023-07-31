import React, { useRef, useEffect } from "react";

export default () => {
  const audioRef1 = useRef();
  useEffect(() => {
    try {
      audioRef1.current
        .play()
        .then(() => console.log("play perfectly"))
        .catch(() => console.log("play fails"));
    } catch (error) {
      console.log("try-catch fails");
    }
  }, []);

  const handlePlay = () => {
    audioRef1.current.play();
    audioRef1.current.muted = false;
  };

  return (
    <div className="hidden" onTouchStart={handlePlay}>
      <button onClick={handlePlay}>play</button>
      <audio ref={audioRef1} id="1" controls loop src="/invitation/music.mp3" />
    </div>
  );
};
