
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

const SvgDark = css`
    fill: transparent;
    stroke: #4e4e4e;
`
const SvgLight = css`
    fill: transparent;
    stroke: #696969;
`
const SceletonMixin = css`
    background-color: #313131;
    height: 19px;
`

export const SceletonSidebarItem = styled.div`
    ${SceletonMixin}
    width: 250px;
    height: 150px;
`
export const SceletonTrackTitle = styled.div`
    ${SceletonMixin}
    width: 51px;
    height: 51px;
`

export const SceletonTitleText = styled.div`
    ${SceletonMixin}
    width: 356px;
`

export const SceletonTrackAuthor = styled.div`
    ${SceletonMixin}
    width: 271px;
`

export const SceletonTrackAlbum = styled.div`
    ${SceletonMixin}
    width: 280px;
`
export const PlaylistTitleSvg = styled.svg`
    ${SvgLight}
    width: 12px;
    height: 12px;
`

export const PlaylistItem = styled.div`
    margin-bottom: 12px;
`
export const Track = styled.div`
    display: grid;
    grid-template-columns: 7.5fr 5.4fr 4.08fr 1fr;
    align-items: center;
`
export const TrackTtitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
`

export const TrackTitleSvg = styled.svg`
    ${SvgDark}
    width: 18px;
    height: 17px;
`

export const TrackTitleLink = styled.a`
    ${MainTextMixin}
`

export const TrackAuthorLink = styled.a`
    ${MainTextMixin}
    text-align: left;
`
export const TrackAlbumLink = styled.a`
    ${MainTextMixin}
    color: #696969;
`

export const TrackTimeSvg = styled.svg`
    ${SvgLight}
    width: 14px;
    height: 12px;
    margin-right: 17px;
`
export const TrackTimeText = styled.span`
    ${MainTextMixin}
    text-align: right;
    color: #696969;
`
export const ContentPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`
