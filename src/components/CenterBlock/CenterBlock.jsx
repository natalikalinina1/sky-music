import Search from "../Search";
import Filter from "../Filter/Filter";
import CenterBlockContent from "./CenterBlockContent";
import { useState, useEffect } from 'react'
import {getAllTracks} from '../../API/Api'
//import * as S from '../style/style'
import * as S from './style.CenterBlock'

function CenterBlock() {
    const [tracks, setTracks] = useState([])
    useEffect(() => {
        getAllTracks().then((data) => setTracks(data))
    }, [])
    return (
        <S.Centerblock>
            <Search />
            <S.CenterblockTitle>Треки</S.CenterblockTitle>
            <Filter tracks={tracks} />
            <CenterBlockContent tracks={tracks} />
        </S.Centerblock>
    )
}
export default CenterBlock

/*function CenterBlock() {
  const [ tracks, setTracks ] = useState([]);
  useEffect(() => {
    getAllTracks().then((data) => setTracks(data));
   },[]);
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <Track />
      <Filter tracks={tracks}/>
     <CenterBlockContent tracks={tracks}/>
    </div>
  );
}
export default CenterBlock;*/
