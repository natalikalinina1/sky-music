import React, { useEffect, useState } from "react";
import * as S from "../components/style";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSelectedTracks } from "../api";
import { setCurrentAlbum, setCurrentAlbumName } from "../functionsReducer/createSlice/currentAlbum";
import Nav from "../components/Nav/Nav"
import Centerblock from "../components/CenterBlock/Centerblock";
import Sidebar from "../components/Sidebar/Sidebar";

function Compilation({ loaded, error, setLoaded, setError,setdisplayed}) {
  const params = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(setCurrentAlbumName(`category${params.id}`));
    getSelectedTracks(params.id)
      .then((tracks) => {
        dispatch(setCurrentAlbum(tracks.items));
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
}

export default Compilation;