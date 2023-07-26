import { countTrackTime } from '../../helpers/helpers'

import * as S from '../style/style'
function PlayItem({ name, author, album, duration_in_seconds }) {
    return (
        <S.PlaylistItem>
            <S.Track>
                <S.TrackTtitle>
                    <S.TrackTitleImage>
                        <S.TrackTitleSvg alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitleLink href="http://">
                        {name} <span className="track__title-span"></span>
                    </S.TrackTitleLink>
                </S.TrackTtitle>
                <S.TrackAuthorLink href="http://">{author}</S.TrackAuthorLink>
                <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
                <div>
                    <S.TrackTimeSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>
                        {countTrackTime(duration_in_seconds)}
                    </S.TrackTimeText>
                </div>
            </S.Track>
        </S.PlaylistItem>
    )
}

export default PlayItem