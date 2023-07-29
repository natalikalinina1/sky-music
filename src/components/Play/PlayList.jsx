import { useEffect } from 'react'
import { useState } from 'react'
import SceletonPlayList from '../Sceleton/SceletonPlayList'
import PlayItem from './PlayItem'
import * as S from './style.Play'

function PlayList({ tracks }) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
    return (
        <S.ContentPlaylist>
            {isLoading ? (
                <>
                    {Array.from({ length: 10 }).map((i, index) => (
                        <SceletonPlayList key={index} />
                    ))}
                </>
            ) : (
                tracks.map((track) => <PlayItem key={track.id} {...track} />)
            )}
        </S.ContentPlaylist>
    )
}

export default PlayList