import styled, { css,createGlobalStyle } from 'styled-components'

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

const SvgLight = css`
    fill: transparent;
    stroke: #696969;
`
export const Centerblock = styled.div`
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`

export const CenterblockTitle = styled.h2`
    ${MainTextMixin}
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`


export const CenterblockContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const CenterBlockContentTitle = styled.div`
    display: grid;
    grid-template-columns: 7.5fr 5.4fr 4.08fr 1fr;
    margin-bottom: 24px;
`
export const PlaylistTitle = styled.div`
    ${MainTextMixin}
    font-size: 14px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`


export const PlaylistTitleSvg = styled.svg`
    ${SvgLight}
    width: 12px;
    height: 12px;
`