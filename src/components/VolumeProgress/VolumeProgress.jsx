import * as S from "./style.VolumeProgress.js";

export default function BarProgress({ currentVolume, setCurrentVolume }) {
  const duration = 1;

  return (
    <S.VolumeProgress
      type="range"
      min={0}
      max={duration}
      value={currentVolume}
      step={0.01}
      onChange={(event) => setCurrentVolume(event.target.value)}
      $color="#ff0000"
    />
  );
}