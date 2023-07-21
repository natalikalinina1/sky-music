import PrevBtn from "./PlayerBtns/PrevBtn";
import PlayBtn from "./PlayerBtns/PlayBtn";
import NextBtn from "./PlayerBtns/NextBtn";
import RepeatBtn from "./PlayerBtns/RepeatBtn";
import ShuffleBtn from "./PlayerBtns/ShuffleBtn";

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
