
import * as S from './style.Player'
import PlayerBtn from './PlayerBtn'

function PlayerControls() {
    return (
        <S.PlayerControls>
            <PlayerBtn type="prev" />
            <PlayerBtn type="play" />
            <PlayerBtn type="next" />
            <PlayerBtn type="repeat" />
            <PlayerBtn type="shuffle" />
        </S.PlayerControls>
    )
}

export default PlayerControls