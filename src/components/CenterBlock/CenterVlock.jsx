import React from "react";
import Playlist from "../Play/Playist";
import Filter from "../Filter/Filter";
import * as S from "./style.CenterBlock";

function Centerblock({ loaded, tracks, setdisplayed, setCurrentTrack, error }) {
  
  return (
    
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockHeading>Треки</S.CenterblockHeading>
      <Filter />
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
          tracks={tracks}
          setdisplayed={setdisplayed}
          setCurrentTrack={setCurrentTrack}
          error={error}
        />
      </S.CenterblockContent>
    </S.MainCenterblock>
  

  );
}

export default Centerblock;
