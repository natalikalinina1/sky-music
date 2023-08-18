import React from "react";
import { useState } from "react";
import Audio from "../components/Audio/Audio";
import Sidebar from "../components/Sidebar/Sidebar";
import Nav from "../components/Nav/Nav";
import Centerblock from "../components/CenterBlock/Centerblock";
import Footer from "../components/Footer/Footer";
import * as S from "../components/style";

export const MainPage = ({ tracks, loaded, error }) => {
  const [displayed, setdisplayed] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("");
  const [isPlaying, setPlaying] = useState(false);
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
            setPlaying={setPlaying}
          />
          <Sidebar loaded={loaded} />
        </S.Main>
        <Audio
          loaded={loaded}
          displayed={displayed}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          isPlaying={isPlaying}
          setPlaying={setPlaying}
        />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
