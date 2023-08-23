import React from "react";
import * as S from "./style.Play";
import { countTrackTime } from "../../helpers/helpers"
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../functionsReducer/createSlice/currentTrack";
import { useSelector } from "react-redux";
import { setPlayingStatus } from "../../functionsReducer/createSlice/playingStatus";


function PlayItem({
  id,
  title,
  author,
  album,
  loaded,
  setdisplayed,
  url,
  duration_in_seconds,
}) {
  const currentTrack = useSelector((state) => state.currentTrack.value);
  const isplaying = useSelector((state) => state.playingStatus.value);
  const dispatch = useDispatch();
  const displayedBar = () => {
    setdisplayed(true);
    const track = {
      title: title,
      author: author,
      album: album,
      id: id,
      url: url,
    
      
    };
    dispatch(setCurrentTrack(track));
    dispatch(setPlayingStatus(true));
  };


  return (
    <>
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              {loaded && (
                <>
                  {id === currentTrack.id ? (
                    <S.TrackTitleSvg alt="music" isplaying={isplaying}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-dot"></use>
                    </S.TrackTitleSvg>
                  ) : (
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSvg>
                  )}
                </>
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
