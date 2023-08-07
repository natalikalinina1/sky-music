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
export const FilterCounter = styled.div`
    ${MainTextMixin}
    
    position: absolute;
    bottom: 22px;
    right: -12px;
    font-size: 13px;
    line-height: 25px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #ad61ff;
    text-align: center;
    vertical-align: center;


`
export const FilterDropList = styled.div`
    position: absolute;
    top: 49px;
    left: 0;
    background-color: #313131;
    border-radius: 12px;
    padding-right: 34px;
  

`
export const FilterDropListWrapper = styled.div`
    max-height: 305px;
    overflow-y: auto;
    margin: 36.5px 0px 36.5px 34px;
    ::-webkit-scrollbar {
        width: 4px;
        background: #4b4949;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #ffffff;
    }
`
export const FilterDropListContent = styled.div`
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 28px;
`
export const FilterDropItem = styled.p`
    ${MainTextMixin}
    font-size: 20px;
    color: ${(props) => (props.$selected ? '#b672ff' : '#ffffff')};
    text-decoration: ${(props) => (props.$selected ? 'underline' : 'none')};
    white-space: nowrap;
    :hover {
        ${HoverMixin}
        text-decoration: underline;
        color: #b672ff;
    }
`
export const FilterRadio = styled.div`
    display: flex;
    column-gap: 28px;
`
export const FilterRadioLabel = styled.label`
    ${MainTextMixin}
    font-size: 20px;
    white-space: nowrap;
    display: flex;
    column-gap: 10px;
    :hover {
        ${HoverMixin}
        text-decoration: underline;
        color: #b672ff;
    }
    ::before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: #fff;
    }
`

export const FilterRadioBox = styled.div`
    height: 1.125rem;
    width: 1.125rem;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 0.4rem;
    transition: background 0.15s, border-color 0.15s;
    padding: 3px;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
        transform: scale(0);
    }
`
export const FilterRadioInput = styled.input`
    display: none;
    &:checked + ${FilterRadioBox} {
        &::after {
            transform: scale(1);
        }
    }
`

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
`
export const FilterTitle = styled.div`
    ${MainTextMixin}
    margin-right: 15px;
`
export const FilterItem = styled.div`
    position: relative;
    :not(:last-child) {
        margin-right: 10px;
    }
    :hover {
        ${HoverMixin}
        color: #b672ff;
    }
`
export const FilterButton = styled.div`
    ${MainTextMixin}
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    :hover {
        ${HoverMixin}
        border: 1px solid #b672ff;;
    }
`