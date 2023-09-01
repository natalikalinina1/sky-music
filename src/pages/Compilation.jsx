import React from "react";
import * as S from "../components/style";
import { useParams } from "react-router-dom";

function Compilation() {
  const params = useParams();

  return (
    <S.Wrapper>
      
      <div>Compilation {Number(params.id)}</div>
    </S.Wrapper>
  );
}

export default Compilation;