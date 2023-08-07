import SceletonSidebarList from '../Sceleton/SceletonSidebarList'
import SidebarItem from './SidebarItem'
import { useEffect } from 'react'
import { useState } from 'react'
import * as S from './style.Sidebar'

function SidebarList() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])
    return (
        <S.SidebarBlock>
            <S.SidebarList>
                {isLoading ? (
                    <>
                        {Array.from({ length: 3 }).map((i, index) => (
                            <SceletonSidebarList key={index} />
                        ))}
                    </>
                ) : (
                    <>
                     <SidebarItem
                            img={'/img/playlist01.png'}
                            alt={"day's playlist"}
                            linkTo="/collections/1"
                        />
                        <SidebarItem
                            img={'/img/playlist02.png'}
                            alt={'100 dance hits'}
                            linkTo="/collections/2"
                        />
                        <SidebarItem
                            img={'/img/playlist03.png'}
                            alt={'indi-dance'}
                            linkTo="/collections/3"
                       
                        />
                    </>
                )}
            </S.SidebarList>
        </S.SidebarBlock>
    )
}

export default SidebarList

