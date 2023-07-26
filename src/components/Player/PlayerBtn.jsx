import React from 'react'
import * as S from '../style/style'
function PlayerBtn({ type }) {
    return (
        <S.PlayerBtnSvg alt={type}>
            <use xlinkHref={`img/icon/sprite.svg#icon-${type}`}></use>
        </S.PlayerBtnSvg>
    )
}

export default PlayerBtn