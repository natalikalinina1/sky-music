import React, { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Nav from "../components/Nav/Nav";
import Centerblock from "../components/CenterBlock/Centerblock";
import * as S from "../components/style";
import { useDispatch } from "react-redux";
import { getTracks } from "../api";
import { setCurrentAlbum, setCurrentAlbumName  } from "../functionsReducer/createSlice/currentAlbum";

export const MainPage = ({ loaded, error, setLoaded, setError, setdisplayed }) => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTracks()
      .then((tracks) => {
        dispatch(setCurrentAlbum(tracks));
        dispatch(setCurrentAlbumName("main"));
        setLoading(false);
        setLoaded(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav loaded={loaded} />
          <Centerblock
            loaded={loaded}
            setdisplayed={setdisplayed}
            error={error}
            loading={loading}
          />
          <Sidebar loaded={loaded} />
        </S.Main>
      </S.Container>
    </S.Wrapper>
  );
};
