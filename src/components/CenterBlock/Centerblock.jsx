import React from "react";
import Playlist from "../Play/Playlist";
import Filter from "../Filter/Filter";
import * as S from "./style.CenterBlock";
import { useSelector } from "react-redux";


function Centerblock({
  loaded,
  setdisplayed,
  error,
  loading,
}) {
  const currentAlbum = useSelector((state) => state.currentAlbum.value.name);
  return (
    
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockHeading>
        {currentAlbum === "favourites" ? "Мои треки" : "Треки"}
      </S.CenterblockHeading>
      {currentAlbum === "favourites" ? "" : <Filter />}
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitle>Трек</S.PlaylistTitle>
          <S.PlaylistTitle>ИСПОЛНИТЕЛЬ</S.PlaylistTitle>
          <S.PlaylistTitle>АЛЬБОМ</S.PlaylistTitle>
          <S.PlaylistTitle>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.PlaylistTitle>
        </S.ContentTitle>
        <Playlist
          loaded={loaded}
          setdisplayed={setdisplayed}
          error={error}
          loading={loading}
        />
      </S.CenterblockContent>
    </S.MainCenterblock>
  

  );
}

export default Centerblock;
