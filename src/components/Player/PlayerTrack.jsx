import * as S from '../style/style'

function PlayerTrack() {
    return (
        <S.TrackPlay>
            <S.TrackPlayContain>
                <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink href="http://">
                        Ты та...
                    </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                        Баста
                    </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
            </S.TrackPlayContain>

            <S.TrackPlayLikeDis>
                <S.TrackPlayLikeDisIcon>
                    <S.TrackPlayLikeDisSvg alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeDisSvg>
                </S.TrackPlayLikeDisIcon>
                <S.TrackPlayLikeDisIcon>
                    <S.TrackPlayLikeDisSvg
                        className="track-play__dislike-svg"
                        alt="dislike"
                    >
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayLikeDisSvg>
                </S.TrackPlayLikeDisIcon>
            </S.TrackPlayLikeDis>
        </S.TrackPlay>
    )
}

export default PlayerTrack
