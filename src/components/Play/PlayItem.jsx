import React from "react";
import * as S from "./style.Play";
import { countTrackTime } from "../../helpers/helpers"

function PlayItem({
  id,
  title,
  author,
  album,
  loaded,
  setdisplayed,
  setCurrentTrack,
  url,
  setautoplay,
  duration_in_seconds,
}) {
  const displayedBar = () => {
    setdisplayed(true);
    const track = {
      title: title,
      author: author,
      album: album,
      id: id,
      url: url,
    
      
    };
    setCurrentTrack(track);
    setautoplay(true);
  };

  /*
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time) - minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    const formated = `${minutes} : ${seconds}`;
    return formated;
  };

  */

  return (
    <>
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              {loaded && (
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              )}
            </S.TrackTitleImg>
            <S.TrackTitleText loaded={loaded}>
              {loaded && (
                <S.TrackTitleLink onClick={displayedBar}>
                  {title} <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              )}
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor loaded={loaded}>
            {loaded && (
              <S.TrackAuthorLink onClick={displayedBar}>{author}</S.TrackAuthorLink>
            )}
          </S.TrackAuthor>
          <S.TrackAlbum loaded={loaded}>
            {loaded && (
              <S.TrackAlbumLink onClick={displayedBar}>{album}</S.TrackAlbumLink>
            )}
          </S.TrackAlbum>
          <div>
            {loaded && (
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
            )}
            {loaded && (
              <S.TrackTimeText className="track__time-text">
                {countTrackTime(duration_in_seconds)}
              </S.TrackTimeText>
            )}
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    </>
  );
}

export default PlayItem;
