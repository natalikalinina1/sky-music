import * as S from './style.CenterBlock'
function CenterBlockContentTitle() {
    return (
        <S.CenterBlockContentTitle>
            <S.PlaylistTitle>Трек</S.PlaylistTitle>
            <S.PlaylistTitle>ИСПОЛНИТЕЛЬ</S.PlaylistTitle>
            <S.PlaylistTitle>АЛЬБОМ</S.PlaylistTitle>
            <S.PlaylistTitle>
                <S.PlaylistTitleSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </S.PlaylistTitleSvg>
            </S.PlaylistTitle>
        </S.CenterBlockContentTitle>
    )
}

export default CenterBlockContentTitle