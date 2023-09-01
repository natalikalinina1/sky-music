import React, { useEffect, useRef, useState } from "react";
import Player from "../Player/Player";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../functionsReducer/createSlice/currentTrack";
import { skipNextTrack } from "../../functionsReducer/createSlice/currentTrack";

function Audio({
  loaded,
  displayed,
}) {
  const [loopOn, setLoopOn] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0.5);
  const currentTrack = useSelector((state) => state.currentTrack.value);
  const tracks = useSelector((state) => state.currentAlbum.value.playerTracks);
  const isPlaying = useSelector((state) => state.playingStatus.value);
  const dispatch = useDispatch();
  const audio = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [isPlaying]);

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
    dispatch(
      setCurrentTrack({
        ...currentTrack,
        progress: (ct / duration) * 100,
        length: duration,
      })
    );
    if (ct === duration) {
      dispatch(skipNextTrack(tracks));
    }
  };

  return (
    <>
        <audio
        src={currentTrack.url}
        ref={audio}
        onTimeUpdate={onPlaying}
        autoPlay={true}
      />
      <Player
        loaded={loaded}
        displayed={displayed}
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