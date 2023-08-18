
import React from "react";
import * as S from "../components/style";
import AuthPage from "../components/AuthPage/AuthPage";

function Registration() {
  return (
    <S.Wrapper>
      <div>
        <AuthPage isLoginMode={false} />
      </div>
    </S.Wrapper>
  );
}

export default Registration;

