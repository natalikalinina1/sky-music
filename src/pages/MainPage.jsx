import React from "react";
import { useState } from "react";
import Audio from "../components/Audio/Audio";
import Sidebar from "../components/Sidebar/Sidebar";
import Nav from "../components/Nav/Nav";
import Centerblock from "../components/CenterBlock/Centerblock";
import Footer from "../components/Footer/Footer";
import * as S from "../components/style";

export const MainPage = ({loaded, error }) => {
  const [displayed, setdisplayed] = useState(false);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav loaded={loaded} />
          <Centerblock
            loaded={loaded}
            setdisplayed={setdisplayed}
            error={error}    
          />
          <Sidebar loaded={loaded} />
        </S.Main>
        <Audio
          loaded={loaded}
          displayed={displayed}
        />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
