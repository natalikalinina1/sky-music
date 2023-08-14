import React, { useEffect, useState } from 'react'
import * as S from '../components/style'
import { Link, useNavigate } from 'react-router-dom'
import { login, getToken } from '../API/api'
import { getCookie } from '../helpers/helpers'

export function Login() {
  const [loginUser, setLoginUser] = useState({ email: '', password: '' })
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const loginFunction = async () => {
      if (getCookie('token')) {
          document.cookie = "token=''=;max-age=-1"
      }
      await login(loginUser)
      getToken(loginUser)
          .then((response) => {
              if (response.ok) {
                  document.cookie = `token = ${response.json().access}`
                  navigate('/')
              } else {
                  throw Error('Неверный логин или пароль')
              }
          })
          .catch(() => setError(true))
  }
  useEffect(() => {
      if (getCookie('token')) {
          navigate('/')
      }
  }, [navigate])
  return (
      <S.PageWrapper>
          <S.Container>
              <S.Login>
                  <S.LoginModal>
                      <S.NavLogo>
                      <S.LogoImg src="/img/login-reg.png" alt="logo" />
                      </S.NavLogo>
                      {error ? (
                          <S.InputError>
                              Неверный логин или пароль
                          </S.InputError>
                      ) : null}
                      <S.LoginInput
                          placeholder="Логин"
                          value={loginUser.email}
                          onChange={(e) =>
                              setLoginUser({
                                  ...loginUser,
                                  email: e.target.value,
                              })
                          }
                      />
                      <S.LoginInput
                          placeholder="Пароль"
                          type="password"
                          value={loginUser.password}
                          onChange={(e) =>
                              setLoginUser({
                                  ...loginUser,
                                  password: e.target.value,
                              })
                          }
                      />
                      <S.LoginButton onClick={loginFunction} $purple>
                          Войти
                      </S.LoginButton>
                      <Link to="/registration">
                          <S.LoginButton $purple={false}>
                              Зарегистрироваться
                          </S.LoginButton>
                      </Link>
                  </S.LoginModal>
              </S.Login>
          </S.Container>
      </S.PageWrapper>
  )
}

export default Login










/*
const toggleUser = () => {
  let userCurrent = localStorage.getItem("user");
  if (userCurrent === "true") {
    localStorage.setItem("user", false);
  } else {
    localStorage.setItem("user", true);
  }
};

export const Login = () => {
  const initialValue = localStorage.getItem("user");
  const [loggedIn, setLoggedIn] = useState(initialValue);
  const changeLoggedStatus = () => {
    if (localStorage.getItem("user") === "true") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  const setUserStatus = () => {
    toggleUser();
    changeLoggedStatus();
  };

  useEffect(() => {
    setUserStatus();
  }, []);

  return (
    <S.PageWrapper>
      <div>Login Page</div>
      <button onClick={setUserStatus}>{loggedIn ? "Выйти" : "Войти"}</button>
      <Link style={{ color: "gray" }} to="/register">
        Перейти к регистрации
      </Link>
    </S.PageWrapper>
  );
};*/