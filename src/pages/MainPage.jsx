import React from "react";
import { useState } from "react";
import Bar from "../components/Bar/Bar";
import Sidebar from "../components/Sidebar/Sidebar";
import Nav from "../components/Nav/Nav";
import Centerblock from "../components/Centerblock/Centerblock";
import Footer from "../components/Footer/Footer";
import * as S from "../components/style";

export const MainPage = ({ tracks, loaded, error }) => {
  const [displayed, setdisplayed] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("");

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav loaded={loaded} />
          <Centerblock
            loaded={loaded}
            tracks={tracks}
            setdisplayed={setdisplayed}
            setCurrentTrack={setCurrentTrack}
            error={error}
          />
          <Sidebar loaded={loaded} />
        </S.Main>
        <Bar loaded={loaded} displayed={displayed} currentTrack={currentTrack} />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
