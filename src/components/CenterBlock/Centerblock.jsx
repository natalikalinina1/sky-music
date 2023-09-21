import React,{useState} from "react";
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
  const [findWord, setFindWord] = useState("");
  return (
    
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
          onChange={(event) => setFindWord(event.target.value)}
        />
      </S.CenterblockSearch>
      <S.CenterblockHeading>
      {currentAlbum === "favourites"
          ? "Мои треки"
          : currentAlbum === "main"
          ? "Треки"
          : currentAlbum === "category1"
          ? "Классическая музыка"
          : currentAlbum === "category2"
          ? "Электронная музыка"
          : currentAlbum === "category3"
          ? "Рок музыка"
          : "Мои треки"}
      </S.CenterblockHeading>
      {currentAlbum === "main" ? <Filter /> : ""}
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
          findWord={findWord}
          setFindWord={setFindWord}
        />
      </S.CenterblockContent>
    </S.MainCenterblock>
  

  );
}

export default Centerblock;
