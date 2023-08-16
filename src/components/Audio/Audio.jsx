import React, { useEffect, useRef, useState } from "react";
import Player from "../Player/Player";

function Audio({
  loaded,
  displayed,
  currentTrack,
  setCurrentTrack,
  autoplay,
  setautoplay,
}) {
  const [loopOn, setLoopOn] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0.5);

  const audio = useRef(null);

  useEffect(() => {
    if (autoplay) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [autoplay]);

  useEffect(() => {
    if (loopOn) {
      audio.current.loop = "loop";
    } else {
      audio.current.loop = "";
    }
  }, [loopOn]);

  useEffect(() => {
    audio.current.volume = currentVolume;
  }, [currentVolume]);

  const onPlaying = () => {
    const duration = audio.current.duration;
    const ct = audio.current.currentTime;
    setCurrentTrack({
      ...currentTrack,
      progress: (ct / duration) * 100,
      length: duration,
    });
    console.log(currentTrack);
  };

  return (
    <>
        <audio
        src={currentTrack.url}
        ref={audio}
        onTimeUpdate={onPlaying}
        autoplay="true"
      />
      <Player
        loaded={loaded}
        displayed={displayed}
        currentTrack={currentTrack}
        autoplay={autoplay}
        setautoplay={setautoplay}
        audio={audio}
        loopOn={loopOn}
        setLoopOn={setLoopOn}
        currentVolume={currentVolume}
        setCurrentVolume={setCurrentVolume}
      />
    </>
  );
}

export default Audio;