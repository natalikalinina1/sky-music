import SceletonSidebarList from './SidebarListSceleton'
import SidebarItem from './SidebarItem'
import { useEffect } from 'react'
import { useState } from 'react'

function SIdebarList() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
    return (
        <div className="sidebar__block">
            {isLoading ? (
                <div className="sidebar__list">
                    <SceletonSidebarList />
                    <SceletonSidebarList />
                    <SceletonSidebarList />
                </div>
            ) : (
                <div className="sidebar__list">
                    <SidebarItem
                        img={'img/playlist01.png'}
                        alt={"day's playlist"}
                    />
                    <SidebarItem
                        img={'img/playlist02.png'}
                        alt={'100 dance hits'}
                    />
                    <SidebarItem
                        img={'img/playlist03.png'}
                        alt={'indi-dance'}
                    />
                </div>
            )}
        </div>
    )
}

export default SIdebarList