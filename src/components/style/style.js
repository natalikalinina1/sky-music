import styled, { css, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
    box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}


ul li {
    list-style: none;
}

@font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
        url('../fonts/Stratos-Regular.woff2') format('woff2'),
        url('../fonts/Stratos-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

html,
body {
    font-family: 'StratosSkyeng', sans-serif;
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
/*const SvgDark = css`
    fill: transparent;
    stroke: #4e4e4e;

const SvgLight = css`
    fill: transparent;
    stroke: #696969;
`
*/
export const Wrapper = styled.div`
    overflow: hidden;
    background-color: #383838;
`
export const Container = styled.div`
    min-height: 100vh;
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
`

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
`

export const VolumeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`
export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`
export const VolumeSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`
export const VolumeProgress = styled.div`
    width: 109px;
`
export const VolumeProgressLine = styled.input`
    ${HoverMixin}
    width: 109px;
    height: 2px;
    margin-bottom: 12px;
    -webkit-appearance: none;
    background: #797979;
    background-image: linear-gradient(#ffffff, #ffffff);
    background-size: ${(props) => props.$range}% 100%;
    background-repeat: no-repeat;
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: #ffffff;
        transition: background 0.3s ease-in-out;
    }
    ::-moz-range-thumb {
        -webkit-appearance: none;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: #ffffff;
        transition: background 0.3s ease-in-out;
    }
    ::-ms-thumb {
        -webkit-appearance: none;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: #ffffff;
        transition: background 0.3s ease-in-out;
    }
    ::-webkit-slider-thumb:hover {
        background: #ffffff;
    }
    ::-moz-range-thumb:hover {
        background: #ffffff;
    }
    ::-ms-thumb:hover {
        background: #ffffff;
    }
    ::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }
    ::-moz-range-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }
    ::-ms-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }
`

export const CenterblockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid #4e4e4e;
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SearchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #ffffff;
    fill: transparent;
`

export const SearchText = styled.input`
    ${MainTextMixin}
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    ::placeholder {
        ${MainTextMixin}
        background-color: transparent;
    }
`
export const BarVolumeBlock = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 92px 0 0;
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