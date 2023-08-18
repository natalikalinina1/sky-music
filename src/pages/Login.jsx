import React from "react";
import * as S from "../components/style"
import AuthPage from "../components/AuthPage/AuthPage";

export const Login = () => {
  return (
    <S.Wrapper>
      <AuthPage isLoginMode={true} />
    </S.Wrapper>
  );
};


