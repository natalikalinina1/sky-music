import React, { useRef, useState } from "react";
import * as S from "./style.Player";
import VolumeProgress from "../VolumeProgress/VolumeProgress";
import countTrackTime from "../../helpers/helpers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  skipNextTrack,
  skipPrevTrack,
  skipRandomTrack,
} from "../../functionsReducer/createSlice/currentTrack";
import { setPlayingStatus } from "../../functionsReducer/createSlice/playingStatus";


function Player({
  loaded,
  displayed,
  audio,
  loopOn,
  setLoopOn,
  currentVolume,
  setCurrentVolume,
}) {
  const currentTrack = useSelector((state) => state.currentTrack.value);
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.currentAlbum.value);
  const progressRef = useRef(null);
  const [mixed, setMixed] = useState(false);
  const isPlaying = useSelector((state) => state.playingStatus.value);

  const PlayPause = () => {
    dispatch(setPlayingStatus(!isPlaying));
  };

  const LoopTrack = () => {
    setLoopOn(!loopOn);
  };

  const checkProgress = (e) => {
    let width = progressRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const progress = (offset / width) * 100;
    audio.current.currentTime = (progress / 100) * currentTrack.length;
  };

  const toggleMute = () => {
    if (currentVolume === 0) {
      setCurrentVolume(0.5);
    } else {
      setCurrentVolume(0);
    }
  };

  function skipToPrev() {
    if (mixed) {
      dispatch(skipRandomTrack(tracks));
    } else {
      dispatch(skipPrevTrack(tracks));
    }
    dispatch(setPlayingStatus(true));
  }

  function skipToNext() {
    if (mixed) {
      dispatch(skipRandomTrack(tracks));
    } else {
      dispatch(skipNextTrack(tracks));
    }
    dispatch(setPlayingStatus(true));
  }

  const mixTracks = () => {
    setMixed(!mixed);
  }

  return (
    <div>
      <S.Bar displayed={displayed}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "8px",
          }}
        >
          {currentTrack.progress ? (
            <div>
              <span>{countTrackTime(currentTrack.progress)}</span>
              <span> / {countTrackTime(currentTrack.length)}</span>
            </div>
          ) : null}
        </div>
        {displayed && (
          <S.BarContent>
            <S.BarPlayerProgress onClick={checkProgress} ref={progressRef}>
              <S.StylePlayerProgress
                style={{ width: `${currentTrack.progress + "%"}` }}
              ></S.StylePlayerProgress>
            </S.BarPlayerProgress>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg alt="prev" onClick={skipToPrev}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay>
                    {isPlaying ? (
                      <S.PlayBtnPlaySvg alt="pause" onClick={PlayPause}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-pause"></use>
                      </S.PlayBtnPlaySvg>
                    ) : (
                      <S.PlayBtnPlaySvg alt="play" onClick={PlayPause}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                      </S.PlayBtnPlaySvg>
                    )}
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next" onClick={skipToNext}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat>
                    <S.PlayerBtnRepeatSvg
                      alt="repeat"
                      loop={loopOn}
                      onClick={LoopTrack}
                    >
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle>
                    <S.PlayerBtnShuffleSvg
                      alt="shuffle"
                      shuffle={mixed}
                      onClick={mixTracks}
                    >
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      {loaded && (
                        <S.TrackPlaySvg alt="music">
                          <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                        </S.TrackPlaySvg>
                      )}
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor loaded={loaded}>
                      {loaded && (
                        <S.TrackPlayAuthorLink href="http://">
                          {currentTrack.title}
                        </S.TrackPlayAuthorLink>
                      )}
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum loaded={loaded}>
                      {loaded && (
                        <S.TrackPlayAlbumLink href="http://">
                          {currentTrack.author}
                        </S.TrackPlayAlbumLink>
                      )}
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>

                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike>
                      <S.TrackPlayLikeSvg alt="like">
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike>
                      <S.TrackPlayDislikeSvg alt="dislike">
                        <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                      </S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <S.BarVolumeBlock>
                <S.VolumeContent>
                  <S.VolumeImage>
                    {currentVolume ? (
                      <S.VolumeSvg alt="volume" onClick={toggleMute}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                      </S.VolumeSvg>
                    ) : (
                      <S.VolumeSvg alt="volume" onClick={toggleMute}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-mute"></use>
                      </S.VolumeSvg>
                    )}
                  </S.VolumeImage>
                  <S.VolumeProgress>
                    <VolumeProgress
                      currentVolume={currentVolume}
                      setCurrentVolume={setCurrentVolume}
                    />
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.BarContent>
        )}
      </S.Bar>
    </div>
  );
}

export default Player;