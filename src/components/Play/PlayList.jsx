
import SceletonPlayList from '../Sceleton/SceletonPlayList'
import PlayItem from './PlayItem'
import * as S from './style.Play'


function PlayList({ tracks }) {
    return (
        <S.ContentPlaylist>
            {tracks && tracks.length === 0 ? (
                <S.CenterblockText>Здесь пока ничего нет</S.CenterblockText>
            ) : null}
            {tracks.length ? (
                tracks.map((track) => <PlayItem key={track.id} {...track} />)
            ) : (
                <>
                    {Array.from({ length: 10 }).map((index) => (
                        <SceletonPlayList key={index} />
                    ))}
                </>
            )}
        </S.ContentPlaylist>
    )
}

export default PlayList