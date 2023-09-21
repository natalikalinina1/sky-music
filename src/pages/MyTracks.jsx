
import * as S from "../components/style";
import React, { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Nav from "../components/Nav/Nav";
import Centerblock from "../components/CenterBlock/Centerblock";
import { getFavoriteTracks, updateToken } from "../api";
import { setCurrentAlbum, setCurrentAlbumName } from "../functionsReducer/createSlice/currentAlbum";
import { useDispatch, useSelector } from "react-redux";

function MyTracks({ loaded, error, setLoaded, setError, setdisplayed }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isClicked = useSelector((state) => state.actionStatus.value);

  const getFavorits = () => {
    setLoading(true);
    getFavoriteTracks()
      .then((tracks) => {
        dispatch(setCurrentAlbum(tracks));
        dispatch(setCurrentAlbumName("favourites"));
        setLoading(false);
        setLoaded(true);
      })
      .catch((err) => {
        setError(err.message);
        if (err.name === Error) {
          updateToken(
            `${JSON.parse(localStorage.getItem("refreshToken"))}`
          ).then((data) => {
            localStorage.removeItem("token");
            localStorage.setItem("token", JSON.stringify(data));
            getFavoriteTracks().then((tracks) => {
              dispatch(setCurrentAlbum(tracks));
              dispatch(setCurrentAlbumName("favourites"));
              setLoading(false);
              setLoaded(true);
            });
          });
        } else {
          setError(err.message);
        }
      });
  };
  useEffect(() => {
    getFavorits();
  }, []);

  useEffect(() => {
    getFavorits();
  }, [isClicked]);

  return (
    <S.Wrapper>
    <S.Container>
      <S.Main>
        <Nav loaded={loaded} />
        <Centerblock
          loaded={loaded}
          setdisplayed={setdisplayed}
          error={error}
          loading={loading}/>
        <Sidebar loaded={loaded} />
      </S.Main>
    </S.Container>
  </S.Wrapper>
);
}
export default MyTracks


