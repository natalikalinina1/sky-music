
import * as S from './style/style'

function Volume() {
    return (
        <S.BarVolumeBlock>
            <S.VolumeContent>
                <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                        <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                    <S.VolumeProgressLine type="range" name="range" />
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.BarVolumeBlock>
    )
}

export default Volume