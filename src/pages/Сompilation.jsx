import React from 'react'
import Bar from '../components/Bar/Bar'
import CenterBlock from '../components/CenterBlock/CenterBlock'
import Nav from '../components/Nav/Nav'
import Sidebar from '../components/Sidebar/Sidebar'
import * as S from '../components/style/style'
import { useParams } from 'react-router-dom'
import { getCompilation } from '../API/Api'
import { useEffect, useState } from 'react'

const compilationTitles = [
    { id: 1, title: 'Плейлист дня ' },
    { id: 2, title: '100 танцевальных хитов' },
    { id: 3, title: 'Инди заряд' },
]

function Compilation() {
    const params = useParams()
    const [compilations, setCompilations] = useState([])
    useEffect(() => {
        getCompilation(params.id).then((data) => setCompilations(data.items))
        return function cleanup() {
            setCompilations([])
        }
    }, [params.id])

    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Nav />
                    <CenterBlock
                        centerBlockTitle={
                            compilationTitles.find(
                                (title) => title.id === Number(params.id)
                            ).title
                        }
                        settedTracks={compilations}
                    />
                    <Sidebar />
                </S.Main>
                <Bar />
            </S.Container>
        </S.Wrapper>
    )
}

export default Compilation