import React from 'react'
import * as S from '../style/style'

function SceletonPlayList() {
    return (
        <S.PlaylistItem>
            <S.Track>
                <S.TrackTtitle>
                    <S.TrackTitleImage>
                        <S.SceletonTrackTitle></S.SceletonTrackTitle>
                    </S.TrackTitleImage>
                    <S.SceletonTitleText></S.SceletonTitleText>
                </S.TrackTtitle>
                <S.SceletonTrackAuthor></S.SceletonTrackAuthor>
                <S.SceletonTrackAlbum></S.SceletonTrackAlbum>
            </S.Track>
        </S.PlaylistItem>
    )
}

export default SceletonPlayList