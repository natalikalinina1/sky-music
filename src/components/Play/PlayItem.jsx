import React from "react";
import * as S from "./style.Play";
import { countTrackTime } from "../../helpers/helpers"
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../functionsReducer/createSlice/currentTrack";
import { useSelector } from "react-redux";
import { setPlayingStatus } from "../../functionsReducer/createSlice/playingStatus";
import { setActionStatus } from "../../functionsReducer/createSlice/actionStatus";
import { addTrackToFavorite, deleteFromFav, getFavoriteTracks, updateToken } from "../../api";
import { setCurrentAlbumPlayer } from "../../functionsReducer/createSlice/currentAlbum";
import { useEffect } from "react";
import { useState } from "react";
function PlayItem({
  id,
  title,
  author,
  album,
  loaded,
  setdisplayed,
  url,
  duration_in_seconds,
  likes,
  
}) {
  const currentTrack = useSelector((state) => state.currentTrack.value);
  const currentAlbumName = useSelector((state) => state.currentAlbum.value.name);
  const isplaying = useSelector((state) => state.playingStatus.value);
  const isClicked = useSelector((state) => state.actionStatus.value);
  const tracks = useSelector((state) => state.currentAlbum.value.tracks);
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
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
    dispatch(setCurrentAlbumPlayer(tracks));
  };

  useEffect(() => {
    if (currentAlbumName === "favourites") {
      setLiked(true);
    } else {
      const found = Boolean(
        likes?.find(
          (x) =>
            x.username === JSON.parse(localStorage.getItem("user")).username
        )
      );
      console.log(found);
      setLiked(found);
    }
  }, []);

  useEffect(() => {}, [liked]);

  const manageLikedTrack = (presentId) => {
    if (presentId) {
      setLiked(false);
      deleteFromFav(id)
        .then(() => {
          dispatch(setActionStatus(!isClicked));
        })
        .catch((err) => {
          updateToken(
            `${JSON.parse(localStorage.getItem("refreshToken"))}`
          ).then((data) => {
            localStorage.removeItem("token");
            localStorage.setItem("token", JSON.stringify(data));
            deleteFromFav(id).then(() => {
              dispatch(setActionStatus(!isClicked));
            });
          });
        });
    } else {
      setLiked(true);
      addTrackToFavorite(id)
        .then(() => {
          dispatch(setActionStatus(!isClicked));
        })
        .catch((err) => {
          updateToken(
            `${JSON.parse(localStorage.getItem("refreshToken"))}`
          ).then((data) => {
            localStorage.removeItem("token");
            localStorage.setItem("token", JSON.stringify(data));
            addTrackToFavorite(id).then(() => {
              dispatch(setActionStatus(!isClicked));
            });
          });
        });
    }
  };

  const toggleLike = () => {
    let presentObj;
    let presentId;
    getFavoriteTracks()
      .then((tracks) => {
        presentObj = tracks.find((x) => x.id === id);
        presentId = presentObj?.id;
        manageLikedTrack(presentId);
      })
      .catch((err) => {
        if (err) {
          updateToken(
            `${JSON.parse(localStorage.getItem("refreshToken"))}`
          ).then((data) => {
            localStorage.removeItem("token");
            localStorage.setItem("token", JSON.stringify(data));
            getFavoriteTracks().then((tracks) => {
              presentObj = tracks.find((x) => x.id === id);
              presentId = presentObj?.id;
              manageLikedTrack(presentId);
            });
          });
        }
      });
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
              <S.TrackTimeSvg onClick={toggleLike} liked={liked} alt="time">
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
            )}
            {loaded && (
              <S.TrackTimeText className="track__time-text">
                {  countTrackTime(duration_in_seconds)}
              </S.TrackTimeText>
            )}
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    </>
  );
}

export default PlayItem;
