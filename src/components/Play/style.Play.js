import styled from 'styled-components'

export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`;

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

export const PlaylistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
  @media (max-width: 1430px) {
    width: 160px;
  }
`;

export const TrackTitleImg = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`;

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const TrackTitleText = styled.div`
  background-color: ${(props) => (!props.loaded ? "#313131" : "transparent")};
  width: ${(props) => (!props.loaded ? "170px" : "none")};
  height: ${(props) => (!props.loaded ? "14px" : "none")};
`;

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  @media (max-width: 1430px) {
    font-size: 11px;
  }
`;

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
  @media (max-width: 1430px) {
    font-size: 11px;
  }
`;

export const TrackAuthor = styled.div`
  width: ${(props) => (!props.loaded ? "321px" : "none")};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  background-color: ${(props) => (!props.loaded ? "#313131" : "transparent")};
  height: ${(props) => (!props.loaded ? "14px" : "none")};
  @media (max-width: 1430px) {
    width: 160px;
  }
`;

export const TrackAuthorLink = styled.a`
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
  @media (max-width: 1430px) {
    font-size: 11px;
  }
`;

export const TrackAlbum = styled.div`
  width: 368px;
  width: ${(props) => (!props.loaded ? "245px" : "none")};
  background-color: ${(props) => (!props.loaded ? "#313131" : "transparent")};
  height: ${(props) => (!props.loaded ? "14px" : "none")};
  @media (max-width: 1430px) {
    width: 140px;
  }

width: none;
background-color: transparent;
height: none;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  @media (max-width: 1430px) {
    font-size: 11px;
  }
`;

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;
