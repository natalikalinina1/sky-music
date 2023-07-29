import CenterBlockContentTitle from "./CenterBlockContentTitle";
import PlayList from "../Play/PlayList";
import * as S from './style.CenterBlock'

function CenterBlockContent({ tracks }) {
    return (
        <S.CenterblockContent>
            <CenterBlockContentTitle />
            <PlayList tracks={tracks} />
        </S.CenterblockContent>
    )
}

export default CenterBlockContent

