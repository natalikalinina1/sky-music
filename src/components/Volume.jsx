
import * as S from './style/style'
import { useState } from 'react'

function Volume() {
    const [value, setValue] = useState(70)
    function handleInputChange(e) {
        setValue(e.target.value)
        console.log(value)
    }

    return (
        <S.BarVolumeBlock>
            <S.VolumeContent>
                <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                        <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                    </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                    <S.VolumeProgressLine
                        type="range"
                        name="range"
                        value={value}
                        $range={value}
                        min="0"
                        onInput={(e) => handleInputChange(e)}
                    />
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.BarVolumeBlock>
    )
}

export default Volume