import PrevBtn from "../playerBtns/PrevBtn";
import PlayBtn from "../playerBtns/PlayBtn";
import NextBtn from "../playerBtns/NextBtn";
import RepeatBtn from "../playerBtns/RepeatBtn";
import ShuffleBtn from "../playerBtns/ShuffleBtn";

function PlayerControls() {
  return (
    <div className="player__controls">
      <PrevBtn />
      <PlayBtn />
      <NextBtn />
      <RepeatBtn />
      <ShuffleBtn />
    </div>
  );
}

export default PlayerControls;
