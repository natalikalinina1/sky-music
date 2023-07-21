import { useEffect } from 'react'
import { useState } from 'react'
import SceletonPlayList from './PlayListSceleton'
import PlayListItem from './PlayListItem'

function PlayList({ tracks }) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
    return (
        <div className="content__playlist playlist">
            {isLoading ? (
                <section className="sceletons">
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                </section>
            ) : (
                tracks && tracks.map((track) => <PlayListItem key={track.id} {...track} />)
            )}
        </div>
    )
}

export default PlayList