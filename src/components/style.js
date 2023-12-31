import styled, { css, createGlobalStyle }from "styled-components";
import font1 from "../assets/fonts/StratosSkyeng.woff";
import font2 from "../assets/fonts/StratosSkyeng.woff2";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url(${font2}) format("woff2"),
      url(${font1}) format("woff");
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    width: 100%;
    min-height: 200vh;
    background-color: #181818;;
    // height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: center center;
              transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    30% {
      -webkit-transform: scale(0.80);
              transform: scale(0.80);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    60% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    90% {
      -webkit-transform: scale(1.2);
              transform: scale(1.2);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
  
  ul li {
    list-style: none;
  } 
  
  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }

`
const MainTextMixin = css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`
const HoverMixin = css`
    :hover,
    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }

    
`

export const Login = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LoginModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 44px;
    background: #ffffff;
    border-radius: 12px;
`

export const LoginInput = styled.input`
    ${MainTextMixin}
    color: #000000;
    width: 278.5px;
    height: 35px;
    border: none;
    border-bottom: 1px solid #d0cece;
    ::placeholder {
        ${MainTextMixin}
        color: #D0CECE;
        font-size: 18px;
    }
    :focus {
        ${MainTextMixin}
        font-size: 18px;
        color: #000000;
        outline: none;
        border-bottom: 1px solid #000000;
    }
`
export const LoginButton = styled.button`
    ${MainTextMixin}
    font-size: 18px;
    background-color: ${(props) => (props.$purple ? '#580EA2' : '#FFFFFF')};
    color: ${(props) => (props.$purple ? '#FFFFFF' : '#000000')};
    margin-top: ${(props) => (props.$purple ? '40px' : '0')};
    width: 278.5px;
    height: 52px;
    border: 1px solid #d0cece;
    border-radius: 6px;
    :hover {
        ${HoverMixin}
        background-color: ${(props) => (props.$purple ? '#3F007D' : '#F4F5F6')};
    }
    :active {
        background-color: ${(props) => (props.$purple ? '#271A58' : '#D0CECE')};
    }
    :disabled {
        background-color: #d0cece;
    }
`
export const InputError = styled.p`
    ${MainTextMixin}
    color: #000000;
`
export const NavLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`
export const LogoImg = styled.img`
    height: 17px;
    color: #181818;
`
export const Wrapper = styled.div`
  width: 100%;
  background-color: #383838;
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  background-color: #181818;
`;

export const Main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;


export const PageWrapper = styled.div`
  color: white;
  text-align: center;
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;



