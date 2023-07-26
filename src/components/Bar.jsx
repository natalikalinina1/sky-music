import Player from "./Player/Player";
import Volume from "./Volume";
import * as S from './style/style'

function Bar() {
    return (
        <S.Bar>
            <S.BarContent>
                <S.BarPlayerProgress></S.BarPlayerProgress>
                <S.BarPlayerBlock>
                    <Player />
                    <Volume />
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    )
}

export default Bar