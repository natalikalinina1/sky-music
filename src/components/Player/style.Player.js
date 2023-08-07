
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
const SvgDark = css`
    fill: transparent;
    stroke: #4e4e4e;
`
const SvgLight = css`
    fill: transparent;
    stroke: #696969;
`

export const PlayerBtnSvg = styled.svg`
    ${HoverMixin}
    width: 15px;
    height: 14px;
    stroke: #d9d9d9;
`


export const BarPlayer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const PlayerControls = styled.div`
    width: 250px;
    display: flex;
    padding: 0px 27px 0px 31px;
    justify-content: space-between;
    align-content: center;
    align-items: center;
`
export const TrackPlay = styled.div`
    display: flex;
    flex-direction: row;
`

export const TrackPlayContain = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image author' 'image album';
    align-items: center;
`
export const TrackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    grid-area: image;
`
export const TrackPlaySvg = styled.svg`
    ${SvgDark}
    width: 18px;
    height: 17px;
`

export const TrackPlayAuthor = styled.div`
    grid-area: author;
    min-width: 49px;
`

export const TrackPlayAuthorLink = styled.a`
    ${MainTextMixin}
    white-space: nowrap;
`

export const TrackPlayAlbum = styled.div`
    grid-area: album;
    min-width: 49px;
`
export const TrackPlayAlbumLink = styled.a`
    ${MainTextMixin}
    font-size: 13px;
`
export const TrackPlayLikeDis = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`
export const TrackPlayLikeDisIcon = styled.div`
    ${HoverMixin}
    padding: 5px;
`
export const TrackPlayLikeDisSvg = styled.svg`
    ${SvgLight}
    width: 14px;
    height: 12px;
`