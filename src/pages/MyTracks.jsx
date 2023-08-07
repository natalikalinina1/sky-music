import { useEffect, useState } from 'react'
import Bar from '../components/Bar/Bar'
import CenterBlock from '../components/CenterBlock/CenterBlock'
import Nav from '../components/Nav/Nav'
import Sidebar from '../components/Sidebar/Sidebar'
import * as S from '../components/style/style'

import { getAllFavourite } from '../API/Api'

function MyTracks() {
    const [favourites, setFavourites] = useState([])
    useEffect(() => {
        getAllFavourite().then((data) => setFavourites(data))
    }, [])
    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Nav />
                    <CenterBlock
                        centerBlockTitle="Мои треки"
                        settedTracks={favourites}
                    />
                    <Sidebar />
                </S.Main>
                <Bar />
            </S.Container>
        </S.Wrapper>
    )
}

export default MyTracks