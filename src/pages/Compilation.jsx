import React from "react";
import * as S from "../components/style";
import { useParams } from "react-router-dom";

function Compilation() {
  const params = useParams();

  return (
    <S.PageWrapper>
      
      <div>Compilation {Number(params.id)}</div>
    </S.PageWrapper>
  );
}

export default Compilation;