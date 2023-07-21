import Search from "../Search";
import Track from "./CenterBlockTrack";
import Filter from "../Filter";
import CenterBlockContent from "./CenterBlockContent";
import { useState, useEffect } from 'react'
import {getAllTracks} from '../../API/Api'

function CenterBlock() {
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
export default CenterBlock;
