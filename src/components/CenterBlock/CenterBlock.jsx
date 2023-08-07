import Search from "../Search";
import Filter from "../Filter/Filter";
import CenterBlockContent from "./CenterBlockContent";
import { useState, useEffect } from 'react'
import {getAllTracks} from '../../API/Api'
//import * as S from '../style/style'
import * as S from './style.CenterBlock'




function CenterBlock({ centerBlockTitle = 'Треки', settedTracks }) {
    const [tracks, setTracks] = useState([])
    useEffect(() => {
        getAllTracks().then((data) => setTracks(data))
    })

    return (
        <S.Centerblock>
            <Search/>
            <S.CenterblockTitle>{centerBlockTitle}</S.CenterblockTitle>
            <Filter tracks={settedTracks ? settedTracks : tracks} />
            <CenterBlockContent tracks={settedTracks ? settedTracks : tracks} />
        </S.Centerblock>
    )
}

export default CenterBlock



